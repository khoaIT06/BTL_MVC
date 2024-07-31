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
    public class UserForgotPassController : Controller
    {
        // GET: UserForgotPass
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult CheckEmail(string email)
        {
            PhimDBEntities db = new PhimDBEntities();
            var user = db.NguoiDungs.FirstOrDefault(x => x.Email == email);
            if (user == null)
            {
                return Json(new {success = false}, JsonRequestBehavior.AllowGet);
            }
            return Json(new { success = true, id = user.IDND }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdatePass(int idUser, string newPass)
        {
            PhimDBEntities db = new PhimDBEntities();
            var user = db.NguoiDungs.FirstOrDefault(x => x.IDND == idUser);
            if (user == null)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }
            user.MatKhau = ComputeSha256Hash(newPass);
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