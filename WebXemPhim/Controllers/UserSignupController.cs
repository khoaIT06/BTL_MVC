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
    public class UserSignupController : Controller
    {
        // GET: UserSignup
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult SignupAccount(string nameUser, DateTime? birthDay, string userName, string passWord, string email)
        {
            PhimDBEntities db = new PhimDBEntities();
            var passHash = ComputeSha256Hash(passWord);
            var user = db.NguoiDungs.FirstOrDefault(x => x.TaiKhoan == userName || x.Email == email);
            if (user != null)
            {
                return Json(new { success = false, message = "Tài khoản hoặc email đã được sử dụng." }, JsonRequestBehavior.AllowGet);
            }
            var newUser = new NguoiDung
            {
                TenND = nameUser,
                NgaySinh = birthDay.Value,
                TaiKhoan = userName,
                MatKhau = passHash,
                Email = email,
                VaiTro = "User"
            };

            db.NguoiDungs.Add(newUser);
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