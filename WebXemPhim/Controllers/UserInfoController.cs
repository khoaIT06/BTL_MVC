using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class UserInfoController : Controller
    {
        // GET: UserInfo
        public ActionResult Index()
        {
            PhimDBEntities db = new PhimDBEntities();
            var listTheLoai = db.TheLoais.ToList();
            var idND = int.Parse(Session["UserID"].ToString());
            ViewBag.NguoiDung = db.NguoiDungs.Where(x => x.IDND == idND).FirstOrDefault();
            return View(listTheLoai);
        }

        [HttpPost]
        public JsonResult ChangePass(string currentPass, string newPass)
        {
            PhimDBEntities db = new PhimDBEntities();
            var passHash = ComputeSha256Hash(currentPass);
            var newpassHash = ComputeSha256Hash(newPass);
            var idND = int.Parse(Session["UserID"].ToString());
            var user = db.NguoiDungs.Where(x => x.IDND == idND && x.MatKhau == passHash).FirstOrDefault();
            if (user == null)
            {
                return Json(new { success = false, message = "Mật khẩu hiện tại không chính xác." }, JsonRequestBehavior.AllowGet);
            }
            user.MatKhau = newpassHash;
            db.SaveChanges();
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ChangeInfo(string nameUser, string email, DateTime? birthDay, string currentPass)
        {
            PhimDBEntities db = new PhimDBEntities();
            var passHash = ComputeSha256Hash(currentPass);
            var idND = int.Parse(Session["UserID"].ToString());
            var user = db.NguoiDungs.Where(x => x.IDND == idND && x.MatKhau == passHash).FirstOrDefault();
            if (user == null)
            {
                return Json(new { success = false, message = "Mật khẩu hiện tại không chính xác." }, JsonRequestBehavior.AllowGet);
            }
            user.TenND = nameUser;
            user.Email = email;
            user.NgaySinh = birthDay.Value;
            db.SaveChanges();
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }


        private string ComputeSha256Hash(string rawData)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}