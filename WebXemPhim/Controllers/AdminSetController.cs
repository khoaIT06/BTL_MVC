using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminSetController : Controller
    {
        // GET: AdminSet
        public ActionResult Index(int page = 1)
        {
            PhimDBEntities db = new PhimDBEntities();
            List<Bo> set = db.Boes.ToList();
            int NoOfRecordPerPage = 5;
            int NoOfPages = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(set.Count) / Convert.ToDouble(NoOfRecordPerPage)));
            int NoOfRecordToSkip = (page - 1) * NoOfRecordPerPage;
            ViewBag.Page = page;
            ViewBag.NoOfPages = NoOfPages;
            set = set.Skip(NoOfRecordToSkip).Take(NoOfRecordPerPage).ToList();
            return View(set);
        }
        [HttpGet]
        public JsonResult SearchSets(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var sets = db.Boes
                .Where(m => m.IDBo.ToString().Contains(searchTerm) ||
                            m.TenBo.Contains(searchTerm)||
                            m.SoTap.ToString().Contains(searchTerm))
                .Select(m => new {
                    m.IDBo,
                    m.TenBo,
                    m.SoTap,
                })
                .ToList();

            return Json(sets, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddSet(Bo set)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    db.Boes.Add(set);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                else
                {
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public ActionResult UpdateSet(Bo updatedSet)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    Bo set = db.Boes.Where(row => row.IDBo == updatedSet.IDBo).FirstOrDefault();
                    if (set != null)
                    {
                        set.TenBo = updatedSet.TenBo;
                        set.SoTap = updatedSet.SoTap;
                        db.SaveChanges();
                    }
                    return RedirectToAction("Index");
                }
                else
                {
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public ActionResult DeleteSet(Bo set)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    Bo n = db.Boes.Where(row => row.IDBo.ToString() == set.IDBo.ToString()).FirstOrDefault();
                    if (n != null)
                    {
                        db.Boes.Remove(n);
                        db.SaveChanges();
                        return RedirectToAction("Index");
                    }
                    return RedirectToAction("Index");
                }
                else
                {
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index");
            }
        }
    }
}