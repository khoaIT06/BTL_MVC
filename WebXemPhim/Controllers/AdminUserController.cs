using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WebXemPhim.Models;

namespace WebXemPhim.Controllers
{
    public class AdminUserController : Controller
    {
        public ActionResult Index(int page = 1)
        {
            PhimDBEntities db = new PhimDBEntities();
            List<NguoiDung> user = db.NguoiDungs.ToList();
            int NoOfRecordPerPage = 5;
            int NoOfPages = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(user.Count) / Convert.ToDouble(NoOfRecordPerPage)));
            int NoOfRecordToSkip = (page - 1) * NoOfRecordPerPage;
            ViewBag.Page = page;
            ViewBag.NoOfPages = NoOfPages;
            user = user.Skip(NoOfRecordToSkip).Take(NoOfRecordPerPage).ToList();
            return View(user);
        }

        [HttpGet]
        public JsonResult SearchUsers(string searchTerm)
        {
            PhimDBEntities db = new PhimDBEntities();
            var users = db.NguoiDungs
                .Where(m => m.TenND.Contains(searchTerm) ||
                            m.NgaySinh.ToString().Contains(searchTerm) ||
                            m.TaiKhoan.Contains(searchTerm) ||
                            m.VaiTro.Contains(searchTerm) ||
                            m.Email.Contains(searchTerm))
                .Select(m => new {
                    m.IDND,
                    m.TenND,
                    m.NgaySinh,
                    m.Email,
                    m.TaiKhoan,
                    m.VaiTro,
                })
                .ToList();

            return Json(users, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult AddUser(NguoiDung user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    user.MatKhau = ComputeSha256Hash(user.MatKhau);
                    using (PhimDBEntities db = new PhimDBEntities())
                    {
                        db.NguoiDungs.Add(user);
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
        public ActionResult UpdateUser(NguoiDung updatedUser)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    NguoiDung user = db.NguoiDungs.Where(row => row.IDND == updatedUser.IDND).FirstOrDefault();
                    if (user != null)
                    {
                        user.TenND = updatedUser.TenND;
                        user.NgaySinh = updatedUser.NgaySinh;
                        user.Email = updatedUser.Email;
                        user.VaiTro = updatedUser.VaiTro;
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
        public ActionResult DeleteUser(NguoiDung user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PhimDBEntities db = new PhimDBEntities();
                    NguoiDung u = db.NguoiDungs.Where(row => row.IDND.ToString() == user.IDND.ToString()).FirstOrDefault();
                    if (u != null)
                    {
                        db.NguoiDungs.Remove(u);
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

        [HttpPost]
        public ActionResult RecoverPassword(NguoiDung user)
        {
            try
            {
                PhimDBEntities db = new PhimDBEntities();
                NguoiDung u = db.NguoiDungs.Where(row => row.IDND.ToString() == user.IDND.ToString()).FirstOrDefault();
                if (u != null)
                {
                    u.MatKhau = ComputeSha256Hash(u.TaiKhoan.ToString());
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
        public ActionResult UpdatePasswordAdmin(NguoiDung user)
        {
            try
            {
                PhimDBEntities db = new PhimDBEntities();

                int userID = int.Parse(Session["UserID"].ToString());
                NguoiDung u = db.NguoiDungs.Where(row => row.IDND == userID).FirstOrDefault();
                if (u != null)
                {
                    u.MatKhau = ComputeSha256Hash(user.MatKhau);
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
    }
}