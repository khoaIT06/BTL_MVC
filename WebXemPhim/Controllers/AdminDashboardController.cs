using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminDashboardController : Controller
    {
        // GET: AdminDashboard
        public ActionResult Index()
        {
            PhimDBEntities db = new PhimDBEntities(); 
            ViewBag.TotalViews = db.Phims.Sum(phim => phim.LuotXem ?? 0);
            ViewBag.TotalMovie = db.Phims.Count();
            ViewBag.TotalUser = db.NguoiDungs.Count();
            ViewBag.TotalCategory = db.TheLoais.Count();

            var categories = db.TheLoais.ToList();

            var categoryNames = new List<string>();
            var totalMoviesByCategory = new List<int>();
            var totalViewsByCategory = new List<int>();

            foreach (var category in categories)
            {
                var categoryName = category.TenTheLoai;

                var totalMovies = db.Phims.Count(p => p.TheLoai.Contains(categoryName));

                var totalViews = db.Phims.Where(p => p.TheLoai.Contains(categoryName)).Sum(p => p.LuotXem) ?? 0;
                categoryNames.Add(categoryName);
                totalMoviesByCategory.Add(totalMovies);
                totalViewsByCategory.Add(totalViews);
            }
            ViewBag.CategoryNames = JsonConvert.SerializeObject(categoryNames);
            ViewBag.TotalMoviesByCategory = JsonConvert.SerializeObject(totalMoviesByCategory);
            ViewBag.TotalViewsByCategory = JsonConvert.SerializeObject(totalViewsByCategory);
            return View();
        }
    }
}