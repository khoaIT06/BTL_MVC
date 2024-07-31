using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminMovieController : Controller
    {
        // GET: AdminMovie
        public ActionResult Index(int page = 1)
        {
            PhimDBEntities db = new PhimDBEntities();
            List<Phim> movie = db.Phims.ToList();
            List<QuocGia> nation = db.QuocGias.ToList();
            List<TheLoai> category = db.TheLoais.ToList();
            List<Bo> set = db.Boes.ToList();
            ViewBag.Movie = movie;
            ViewBag.Nation = nation;
            ViewBag.Category = category;
            ViewBag.Set = set;

            int NoOfRecordPerPage = 5;
            int NoOfPages = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(movie.Count) / Convert.ToDouble(NoOfRecordPerPage)));
            int NoOfRecordToSkip = (page - 1) * NoOfRecordPerPage;
            ViewBag.Page = page;
            ViewBag.NoOfPages = NoOfPages;
            movie = movie.Skip(NoOfRecordToSkip).Take(NoOfRecordPerPage).ToList();
            return View(movie);
        }

        [HttpGet]
        public JsonResult SearchMovies(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var movies = db.Phims
                .Where(m => m.TenPhim.Contains(searchTerm) ||
                            m.DaoDien.Contains(searchTerm) ||
                            m.QuocGia.TenQG.Contains(searchTerm) ||
                            m.ThoiLuong.Contains(searchTerm) ||
                            m.TheLoai.Contains(searchTerm) ||
                            m.Bo.TenBo.Contains(searchTerm) ||
                            m.ChatLuong.Contains(searchTerm) ||
                            m.NamSX.ToString().Contains(searchTerm) ||
                            m.LuotXem.ToString().Contains(searchTerm) ||
                            m.NgonNgu.Contains(searchTerm))
                .Select(m => new {
                    m.IDPhim,
                    m.LinkAnh,
                    m.TenPhim,
                    m.DaoDien,
                    m.QuocGia.TenQG,
                    m.NamSX,
                    m.ThoiLuong,
                    m.ChatLuong,
                    m.NgonNgu,
                    m.TheLoai,
                    m.LuotXem,
                    m.MoTa,
                    m.LinkPhim,
                    m.Tap,
                    m.Bo.TenBo
                })
                .ToList();

            return Json(movies, JsonRequestBehavior.AllowGet);
        }


        public ActionResult AddMovie()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddMovie(Phim p, string[] TheLoai, string MovieVideoLink, HttpPostedFileBase MovieVideoFile, HttpPostedFileBase MovieImg)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    string strTheLoai = string.Join(", ", TheLoai);
                    p.TheLoai = strTheLoai;
                    if (!string.IsNullOrEmpty(MovieVideoLink))
                    {
                        p.LinkPhim = MovieVideoLink;
                    }
                    else if (MovieVideoFile != null && MovieVideoFile.ContentLength > 0)
                    {
                        string fileName = Path.GetFileNameWithoutExtension(MovieVideoFile.FileName);
                        string extension = Path.GetExtension(MovieVideoFile.FileName);
                        string uniqueFileName = GetUniqueFileName(fileName, extension);
                        string path = Path.Combine(Server.MapPath("~/MovieVideo"), uniqueFileName);
                        MovieVideoFile.SaveAs(path);
                        p.LinkPhim = "/MovieVideo/" + uniqueFileName;
                    }
                    if (MovieImg != null)
                    {
                        string fileName = Path.GetFileNameWithoutExtension(MovieImg.FileName);
                        string extension = Path.GetExtension(MovieImg.FileName);
                        string uniqueFileName = GetUniqueFileName(fileName, extension);
                        string path = Path.Combine(Server.MapPath("~/MovieImg"), uniqueFileName);
                        MovieImg.SaveAs(path);
                        p.LinkAnh = "/MovieImg/" + uniqueFileName;
                    }
                    p.LuotXem = 0;

                    PhimDBEntities db = new PhimDBEntities();
                    db.Phims.Add(p);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                else
                {
                    return View(p);
                }
            }
            catch (Exception ex)
            {
                return View(p);
            }
        }

        public string GetUniqueFileName(string fileName, string extension)
        {
            string guid = Guid.NewGuid().ToString().Substring(0, 8);
            string uniqueFileName = $"file{guid}{extension}";
            return uniqueFileName;
        }

        [HttpPost]
        public ActionResult UpdateMovie(Phim p, string[] TheLoaiUpdate, string MovieVideoLinkUpdate, HttpPostedFileBase MovieVideoFileUpdate, HttpPostedFileBase MovieImgUpdate)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    string strTheLoai = string.Join(", ", TheLoaiUpdate);
                    p.TheLoai = strTheLoai;
                    if (!string.IsNullOrEmpty(MovieVideoLinkUpdate))
                    {
                        p.LinkPhim = MovieVideoLinkUpdate;
                    }
                    else if (MovieVideoFileUpdate != null && MovieVideoFileUpdate.ContentLength > 0)
                    {
                        string fileName = Path.GetFileNameWithoutExtension(MovieVideoFileUpdate.FileName);
                        string extension = Path.GetExtension(MovieVideoFileUpdate.FileName);
                        string uniqueFileName = GetUniqueFileName(fileName, extension);
                        string path = Path.Combine(Server.MapPath("~/MovieVideo"), uniqueFileName);
                        MovieVideoFileUpdate.SaveAs(path);
                        p.LinkPhim = "/MovieVideo/" + uniqueFileName;
                    }
                    if (MovieImgUpdate != null)
                    {
                        string fileName = Path.GetFileNameWithoutExtension(MovieImgUpdate.FileName);
                        string extension = Path.GetExtension(MovieImgUpdate.FileName);
                        string uniqueFileName = GetUniqueFileName(fileName, extension);
                        string path = Path.Combine(Server.MapPath("~/MovieImg"), uniqueFileName);
                        MovieImgUpdate.SaveAs(path);
                        p.LinkAnh = "/MovieImg/" + uniqueFileName;
                    }

                    PhimDBEntities db = new PhimDBEntities();
                    Phim phim = db.Phims.Where(row => row.IDPhim == p.IDPhim).FirstOrDefault();

                    phim.TenPhim = p.TenPhim;
                    phim.DaoDien = p.DaoDien;
                    phim.QuocGia = p.QuocGia;
                    phim.TheLoai = p.TheLoai;
                    phim.NamSX = p.NamSX;
                    phim.ThoiLuong = p.ThoiLuong;
                    phim.ChatLuong = p.ChatLuong;
                    phim.NgonNgu = p.NgonNgu;
                    phim.LinkPhim = p.LinkPhim;
                    phim.Tap = p.Tap;
                    phim.IDBo = p.IDBo;
                    if (MovieImgUpdate != null)
                    {
                        phim.LinkAnh = p.LinkAnh;
                    }
                    phim.LinkPhim = p.LinkPhim;
                    phim.MoTa = p.MoTa;
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                else
                {
                    return View(p);
                }
            }
            catch (Exception ex)
            {
                return View(p);
            }
        }

        [HttpPost]
        public ActionResult DeleteMovie(Phim p)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    Phim phim = db.Phims.Where(row => row.IDPhim.ToString() == p.IDPhim.ToString()).FirstOrDefault();
                    if (phim != null)
                    {
                        db.Phims.Remove(phim);
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