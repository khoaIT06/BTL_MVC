using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminNationController : Controller
    {
        // GET: AdminNation
        public ActionResult Index(int page = 1)
        {
            PhimDBEntities db = new PhimDBEntities();
            List<QuocGia> nation = db.QuocGias.ToList();
            int NoOfRecordPerPage = 5;
            int NoOfPages = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(nation.Count) / Convert.ToDouble(NoOfRecordPerPage)));
            int NoOfRecordToSkip = (page - 1) * NoOfRecordPerPage;
            ViewBag.Page = page;
            ViewBag.NoOfPages = NoOfPages;
            nation = nation.Skip(NoOfRecordToSkip).Take(NoOfRecordPerPage).ToList();
            return View(nation);
        }

        [HttpGet]
        public JsonResult SearchNations(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var nations = db.QuocGias
                .Where(m => m.IDQG.ToString().Contains(searchTerm) ||
                            m.TenQG.Contains(searchTerm))
                .Select(m => new {
                    m.IDQG,
                    m.TenQG,
                })
                .ToList();

            return Json(nations, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddNation(QuocGia nation)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    db.QuocGias.Add(nation);
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
        public ActionResult UpdateNation(QuocGia updatedNation)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    QuocGia nation = db.QuocGias.Where(row => row.IDQG == updatedNation.IDQG).FirstOrDefault();
                    if (nation != null)
                    {
                        nation.TenQG = updatedNation.TenQG;
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
        public ActionResult DeleteNation(QuocGia nation)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    QuocGia n = db.QuocGias.Where(row => row.IDQG.ToString() == nation.IDQG.ToString()).FirstOrDefault();
                    if (n != null)
                    {
                        db.QuocGias.Remove(n);
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