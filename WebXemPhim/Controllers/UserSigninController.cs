using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class UserSigninController : Controller
    {
        // GET: UserSignin
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult SigninAccount(string userName, string passWord)
        {
            PhimDBEntities db = new PhimDBEntities();
            var passHash = ComputeSha256Hash(passWord);
            var account = db.NguoiDungs.Where(x => x.TaiKhoan == userName && x.MatKhau == passHash).FirstOrDefault();
            if (account == null)
            {
                return Json(new { success = false, message = "Tên đăng nhập hoặc mật khẩu không đúng." }, JsonRequestBehavior.AllowGet);
            }
            Session["UserID"] = account.IDND;
            Session["VaiTro"] = account.VaiTro;
            var locationStr = account.VaiTro == "User" ? "/UserHome/Index" : "/AdminDashboard/Index";
            return Json(new { success = true, location = locationStr }, JsonRequestBehavior.AllowGet);
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

        public ActionResult LogoutAccount()
        {
            Session.Remove("UserID");
            Session.Remove("VaiTro");
            return RedirectToAction("Index","UserHome");
        }
    }
}