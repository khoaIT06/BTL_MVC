using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class UserWatchController : Controller
    {
        // GET: UserWatch
        public ActionResult Index(int id)
        {
            PhimDBEntities db = new PhimDBEntities();
            var listTheLoai = db.TheLoais.ToList();
            var Phim = db.Phims.Where(x => x.IDPhim == id).FirstOrDefault();
            ViewBag.Phim = Phim;
            Phim.LuotXem++;
            db.SaveChanges();
            var theLoai = Phim.TheLoai.Split(',').ToList();
            ViewBag.ListPhimTT = db.Phims.Where(x => theLoai.Any(y => x.TheLoai.Contains(y))).ToList(); 
            ViewBag.ListPhim = db.Phims.Where(x => x.IDBo == Phim.IDBo).OrderBy(x => x.Tap).ToList();
            var listBinhLuan = db.BinhLuans.Where(x => x.IDPhim == Phim.IDPhim).ToList();
            ViewBag.BinhLuan = listBinhLuan ?? new List<BinhLuan>();
            return View(listTheLoai);
        }

        [HttpPost]
        public JsonResult AddComment(int idPhim,string comment)
        {
            PhimDBEntities db = new PhimDBEntities();
            var idNguoiDung = int.Parse(Session["UserID"].ToString());
            var NguoiDung = db.NguoiDungs.FirstOrDefault(x => x.IDND == idNguoiDung);
            var newComment = new BinhLuan
            {
                IDPhim = idPhim,
                IDND = idNguoiDung,
                NDBL = comment
            };
            db.BinhLuans.Add(newComment);
            db.SaveChanges();
            return Json(new { success = true, idComment = newComment.IDBL, Name = NguoiDung.TenND}, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateComment(int idBL, string comment)
        {
            PhimDBEntities db = new PhimDBEntities();
            var idNguoiDung = int.Parse(Session["UserID"].ToString());
            var cmt = db.BinhLuans.Where(x => x.IDBL == idBL).FirstOrDefault();
            cmt.NDBL = comment;
            db.SaveChanges();
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult DeleteComment(int id)
        {
            try
            {
                PhimDBEntities db = new PhimDBEntities();
                var idNguoiDung = int.Parse(Session["UserID"].ToString());
                var vaiTro = Session["VaiTro"].ToString();
                var cmt = db.BinhLuans.Where(x => x.IDBL == id).FirstOrDefault();

                if (cmt == null)
                {
                    return Json(new { success = false, message = "Comment not found" });
                }

                if (vaiTro.Equals("Admin"))
                {
                    cmt.NDBL = "Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng";
                    cmt.IDND = idNguoiDung;
                    db.SaveChanges();
                    return Json(new { success = true, vaitro = "Admin" }, JsonRequestBehavior.AllowGet);
                }

                db.BinhLuans.Remove(cmt);
                db.SaveChanges();
                return Json(new { success = true, vaitro = "User" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                // Ghi lại lỗi để xem trong nhật ký server
                System.Diagnostics.Debug.WriteLine("Error in DeleteComment: " + ex.Message);
                return Json(new { success = false, message = "Internal Server Error" });
            }
        }

    }
}