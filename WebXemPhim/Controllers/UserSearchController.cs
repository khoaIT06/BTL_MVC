using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class UserSearchController : Controller
    {
        // GET: UserSrearch
        public ActionResult Index()
        {
            PhimDBEntities db = new PhimDBEntities();
            var listTheLoai = db.TheLoais.ToList();
            var listBoPhim = TempData["ListBoPhim"] as List<Phim>;
            var textSearch = TempData["TextSearch"];

            ViewBag.ListBoPhim = listBoPhim ?? db.Phims.ToList();
            ViewBag.TextSearch = textSearch ?? "";
            return View(listTheLoai);
        }

        [HttpGet]
        public JsonResult SearchInput(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var listPhim = db.Phims
                .Where(x => x.TenPhim.Contains(searchTerm) || x.TheLoai.Contains(searchTerm) || x.QuocGia.TenQG.Contains(searchTerm))
                .OrderBy(x  => x.Tap)
                .Select(x => new {
                    x.IDPhim,
                    x.TenPhim,
                    x.LinkAnh,
                    x.Bo.TenBo,
                    x.Bo.IDBo,
                })
                .ToList();

            return Json(listPhim, JsonRequestBehavior.AllowGet);
        }

        public ActionResult SearchTheLoai(int id)
        {
            PhimDBEntities db = new PhimDBEntities();
            var theLoai = db.TheLoais.Where(x => x.IDTheLoai == id).FirstOrDefault();
            TempData["TextSearch"] = theLoai.TenTheLoai;
            TempData["ListBoPhim"] = db.Phims.Where(x => x.TheLoai.Contains(theLoai.TenTheLoai)).ToList();
            return RedirectToAction("Index");
        }

        public ActionResult SearchQuocGia(int id)
        {
            PhimDBEntities db = new PhimDBEntities();
            var quocGia = db.QuocGias.Where(x => x.IDQG == id).FirstOrDefault();
            TempData["TextSearch"] = quocGia.TenQG;
            TempData["ListBoPhim"] = db.Phims.Where(x => x.QuocGia.TenQG.Contains(quocGia.TenQG)).ToList();
            return RedirectToAction("Index");
        }
    }
}