$(document).ready(function () {
    var btnsSideBar = document.querySelectorAll('.info-sidebar p');
    var infoSteep = document.querySelectorAll('.info-steep');
    btnsSideBar.forEach((e, index) => {

        e.addEventListener('click', e => {
            btnsSideBar.forEach(e => {
                e.classList.remove('active');
            })
            btnsSideBar[index].classList.add('active');

            infoSteep.forEach(e => {
                e.classList.remove('show');
            })

            infoSteep[index].classList.add('show');
            if (index == 2) {
                $('.info-changepass input').val("");
                $('.input-group input + span').removeClass("show");
            }
        })
    });

    $('.input-group input').on('input', function (e) {
        let parentElement = e.target.closest(".input-group");
        parentElement.querySelector("span").classList.remove("show");
    });

    $('.info-change button').on('click', function () {
        let nameUser = $('.info-change input[name="nameuser"]').val().trim();
        let email = $('.info-change input[name="email"]').val().trim();
        let birthDay = new Date($('.info-change input[name="birthday"]').val());
        let currentPass = $('.info-change input[name="currentpass"]').val().trim();
        let error = false;

        let dateNow = new Date();
        let reSpecial = /[`~!@#$%^&*()_+=?'":{}|<>\-;,./\\[\]]/g;
        if (nameUser == "") {
            $('.info-change input[name="nameuser"] + span').html("Tên người dùng không được để trống").addClass("show");
            error = true;
        } else if (reSpecial.test(nameUser)) {
            $('.info-change input[name="nameuser"] + span').html("Tên người dùng chứa kí tự đặc biệt").addClass("show");
            error = true;
        }

        if (email == "") {
            $('.info-change input[name="email"] + span').html("Email không được để trống").addClass("show");
            error = true;
        }

        if (isNaN(birthDay)) {
            $('.info-change input[name="birthday"] + span').html("Ngày sinh không được để trống").addClass("show");
            error = true;
        } else if (birthDay.getFullYear() === dateNow.getFullYear()) {
            $('.info-change input[name="birthday"] + span').html("Năm sinh không được trùng với năm hiện tại").addClass("show");
            error = true;
        }

        if (currentPass == "") {
            $('.info-change input[name="currentpass"] + span').html("Mật khẩu hiện tại không được để trống").addClass("show");
            error = true;
        }

        if (error)
            return;

        $.ajax({
            url: '/UserInfo/ChangeInfo',
            type: 'POST',
            data: {
                nameUser,
                email,
                birthDay: birthDay.toISOString().split('T')[0],
                currentPass
            },
            success: function (data) {
                var x = document.querySelector("#toast");
                if (data.success) {
                    x.className = "show success";
                    x.querySelector("#img").innerHTML = '<i class="ri-checkbox-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = "Thay đổi thông tin thành công!";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                    $('.info-change input[name="currentpass"]').val("");
                    var elementInfo = `
                                <li>Họ và tên: ${nameUser}</li>
                                <li>Ngày sinh: ${birthDay.getDate()}/${birthDay.getMonth() + 1}/${birthDay.getFullYear()} </li>
                                <li>Email: ${email}</li>
                                `
                    console.log(elementInfo)
                    $('.info-main ul').html(elementInfo);
                } else {
                    x.className = "show error";
                    x.querySelector("#img").innerHTML = '<i class="ri-close-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = "Thay đổi thông tin không thành công!";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                }

            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });

    });

    $('.info-changepass button').on('click', function () {
        let currentPass = $('.info-changepass input[name="currentpass"]').val().trim();
        let newPass = $('.info-changepass input[name="newpass"]').val().trim();
        let confirmPass = $('.info-changepass input[name="confirmpass"]').val().trim();
        let error = false;
        let rePass = /^[0-9a-zA-Z]+$/;

        if (currentPass == "") {
            $('.info-changepass input[name="currentpass"] + span').html("Mật khẩu hiện tại không được để trống").addClass("show");
            error = true;
        }

        if (newPass == "") {
            $('.info-changepass input[name="newpass"] + span').html("Mật khẩu mới không được để trống").addClass("show");
            error = true;
        } else if (newPass.length < 8 || newPass.length > 32) {
            $('.info-changepass input[name="newpass"] + span').html("Mật khẩu mới phải dài hơn 8 - 32 kí tự").addClass("show");
            error = true;
        } else if (!rePass.test(newPass)) {
            $('.info-changepass input[name="newpass"] + span').html("Mật khẩu mới chỉ chứa số và chữ").addClass("show");
            error = true;
        }

        if (confirmPass == "") {
            $('.info-changepass input[name="confirmpass"] + span').html("Mật khẩu xác nhận không được để trống").addClass("show");
            error = true;
        } else if (confirmPass !== newPass) {
            $('.info-changepass input[name="confirmpass"] + span').html("Mật khẩu xác nhận không chính xác").addClass("show");
            error = true;
        }

        if (error)
            return;

        $.ajax({
            url: '/UserInfo/ChangePass',
            type: 'POST',
            data: {
                currentPass,
                newPass
            },
            success: function (data) {
                var x = document.querySelector("#toast");
                if (data.success) {
                    x.className = "show success";
                    x.querySelector("#img").innerHTML = '<i class="ri-checkbox-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = "Thay đổi mật khẩu thành công!";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    $('.info-changepass input').val("");
                } else {
                    x.className = "show error";
                    x.querySelector("#img").innerHTML = '<i class="ri-close-circle-line"></i>';
                    x.querySelector("#desc").innerHTML = "Thay đổi mật khẩu không thành công!";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                }

            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });

    });
});

