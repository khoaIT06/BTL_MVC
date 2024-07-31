using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class UserHomeController : Controller
    {
        // GET: UserHome
        public ActionResult Index()
        {
            PhimDBEntities db = new PhimDBEntities();
            var listTheLoai = db.TheLoais.ToList();
            ViewBag.Phim = db.Phims.ToList();
            ViewBag.QuocGia = db.QuocGias.ToList();
            return View(listTheLoai);
        }
    }
}