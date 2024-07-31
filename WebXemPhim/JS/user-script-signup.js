$(document).ready(function () {
    $('.input-group input').on('input', function (e) {
        let parentElement = e.target.closest(".input-group");
        parentElement.querySelector("span").classList.remove("show");
    });

    $('.signup-container button').on('click', function () {
        let nameUser = $('.signup-container input[name="nameuser"]').val().trim();
        let birthDay = new Date($('.signup-container input[name="birthday"]').val());
        let userName = $('.signup-container input[name="username"]').val().trim();
        let passWord = $('.signup-container input[name="password"]').val().trim();
        let confirmPass = $('.signup-container input[name="confirmpass"]').val().trim();
        let email = $('.signup-container input[name="email"]').val().trim();
        let error = false;

        let dateNow = new Date();
        let reSpecial = /[`~!@#$%^&*()_+=?'":{}|<>\-;,./\\[\]]/g;
        let rePass= /^[0-9a-zA-Z]+$/;
        if (nameUser == "") {
            $('.signup-container input[name="nameuser"] + span').html("Tên người dùng không được để trống").addClass("show");
            error = true;
        } else if (reSpecial.test(nameUser)) {
            $('.signup-container input[name="nameuser"] + span').html("Tên người dùng chứa kí tự đặc biệt").addClass("show");
            error = true;
        }

        if (isNaN(birthDay)) {
            $('.signup-container input[name="birthday"] + span').html("Ngày sinh không được để trống").addClass("show");
            error = true;
        } else if (birthDay.getFullYear() === dateNow.getFullYear()) {
            $('.signup-container input[name="birthday"] + span').html("Năm sinh không được trùng với năm hiện tại").addClass("show");
            error = true;
        }

        if (userName == "") {
            $('.signup-container input[name="username"] + span').html("Tài khoản không được để trống").addClass("show");
            error = true;
        } else if (!rePass.test(userName)) {
            $('.signup-container input[name="username"] + span').html("Tài khoản chỉ chứa số và chữ").addClass("show");
            error = true;
        }

        if (passWord == "") {
            $('.signup-container input[name="password"] + span').html("Mật khẩu không được để trống").addClass("show");
            error = true;
        } else if (passWord.length < 8 || passWord.length > 32) {
            $('.signup-container input[name="password"] + span').html("Mật khẩu phải từ 8 - 32 kí tự").addClass("show");
            error = true;
        } else if (!rePass.test(passWord)) {
            $('.signup-container input[name="password"] + span').html("Mật khẩu chỉ chứa số và chữ").addClass("show");
            error = true;
        }

        if (confirmPass == "") {
            $('.signup-container input[name="confirmpass"] + span').html("Mật khẩu xác nhận không được để trống").addClass("show");
            error = true;
        } else if (confirmPass != passWord) {
            $('.signup-container input[name="confirmpass"] + span').html("Mật khẩu xác nhận không được chính xác").addClass("show");
            error = true;
        }

        if (email == "") {
            $('.signup-container input[name="email"] + span').html("Email không được để trống").addClass("show");
            error = true;
        }
        if (error)
            return;

        $.ajax({
            url: '/UserSignup/SignupAccount',
            type: 'POST',
            data: {
                nameUser,
                birthDay: birthDay.toISOString().split("T")[0],
                userName,
                passWord,
                email
            },
            success: function (data) {
                var x = document.querySelector("#toast");
                if (data.success) {
                    x.className = "show success";
                    x.querySelector("#img").innerHTML = '<i class="ri-checkbox-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = "Đăng ký tài khoản thành công!";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                        location.href = "/UserSignin/Index";
                    }, 5000);

                } else {
                    x.className = "show error";
                    x.querySelector("#img").innerHTML = '<i class="ri-close-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = data.message;
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });

    });
});