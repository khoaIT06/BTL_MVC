using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminCategoryController : Controller
    {
        // GET: AdminCategory
        public ActionResult Index(int page=1)
        {
            PhimDBEntities db = new PhimDBEntities();
            List<TheLoai> cate = db.TheLoais.ToList();
            int NoOfRecordPerPage = 5;
            int NoOfPages = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(cate.Count) / Convert.ToDouble(NoOfRecordPerPage)));
            int NoOfRecordToSkip = (page - 1) * NoOfRecordPerPage;
            ViewBag.Page = page;
            ViewBag.NoOfPages = NoOfPages;
            cate = cate.Skip(NoOfRecordToSkip).Take(NoOfRecordPerPage).ToList();
            return View(cate);
        }

        [HttpGet]
        public JsonResult SearchCategorys(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var cates = db.TheLoais
                .Where(m => m.IDTheLoai.ToString().Contains(searchTerm) ||
                            m.TenTheLoai.Contains(searchTerm))
                .Select(m => new {
                    m.IDTheLoai,
                    m.TenTheLoai,
                })
                .ToList();

            return Json(cates, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddCategory(TheLoai cate)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    db.TheLoais.Add(cate);
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
        public ActionResult UpdateCategory(TheLoai updatedCategory)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    TheLoai cate = db.TheLoais.Where(row => row.IDTheLoai == updatedCategory.IDTheLoai).FirstOrDefault();
                    if (cate != null)
                    {
                        cate.TenTheLoai = updatedCategory.TenTheLoai;
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
        public ActionResult DeleteCategory(TheLoai category)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    TheLoai cate = db.TheLoais.Where(row => row.IDTheLoai.ToString() == category.IDTheLoai.ToString()).FirstOrDefault();
                    if (cate != null)
                    {
                        db.TheLoais.Remove(cate);
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