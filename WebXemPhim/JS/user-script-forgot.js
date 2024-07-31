

$(document).ready(function () {
    var btnForgot = document.querySelector('button')
    var code = "";
    let idUser = "";
    (function () {
        emailjs.init("YoUUu9vP52eIGDPXx");
    })();

    $("button").on("click", function (e) {
        let elementBtn = e.target;
        let step = Number(elementBtn.dataset.step);
        $(".form-group").removeClass("show");
        let rePass = /^[0-9a-zA-Z]+$/;
        switch (step) {
            case 1:
                let email = $(".step-1 input").val().trim();
                if (email == "") {
                    $(".step-1 span").html("Email không được để trống").addClass("show");
                    $(`.step-1`).addClass("show");
                    return
                }
                $.ajax({
                    url: '/UserForgotPass/CheckEmail',
                    type: 'POST',
                    data: {
                        email
                    },
                    success: function (data) {
                        if (data.success) {
                            for (let i = 0; i < 4; i++) {
                                code += `${Math.floor(Math.random() * 10)}`
                            }
                            console.log(code)
                            idUser = data.id;
                            let serviceID = "service_zi1zbvg";
                            let templateID = "template_1widoy7"
                            let param = {
                                to_email: email,
                                message: code,
                                reply_to: 'baitaplon2023@gmail.com',
                            }

                            emailjs.send(serviceID, templateID, param)
                                .then(function () {
                                    $(`.step-2`).addClass("show");
                                    elementBtn.dataset.step = 2;
                                    btnForgot.innerHTML = "Xác nhận"
                                })
                                .catch(function (error) {
                                    console.log('FAILED...', error);
                                });                            
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
                break;
            case 2:
                let cofirmCode = $(".step-2 input").val().trim();
                if (cofirmCode == "") {
                    $(".step-2 span").html("Mã xác nhận không được để trống").addClass("show");
                    $(`.step-2`).addClass("show");
                    return
                }
                if (cofirmCode != code) {
                    $(".step-2 span").html("Mã xác nhận không được chính xác").addClass("show");
                    $(`.step-2`).addClass("show");
                    return
                }
                $(`.step-3`).addClass("show");
                elementBtn.dataset.step = 3;
                btnForgot.innerHTML = "Cập nhật"
                break;
            case 3:
                let newPass = $('.step-3 input[name="newpass"]').val().trim();
                let cofirmPass = $('.step-3 input[name="cofirmpass"]').val().trim();
                let error = false;
                if (newPass == "") {
                    $('.step-3 input[name="newpass"] + span').html("Mật khẩu mới không được để trống").addClass("show");
                    $(`.step-3`).addClass("show");
                    error = true;
                } else if (newPass.length > 32 || newPass.length < 8) {
                    $('.step-3 input[name="newpass"] + span').html("Mật khẩu mới phải từ 8 - 32 kí tự").addClass("show");
                    $(`.step-3`).addClass("show");
                    error = true;
                } else if (!rePass.test(newPass)) {
                    $('.step-3 input[name="newpass"] + span').html("Mật khẩu chỉ chứa số và chữ").addClass("show");
                    $(`.step-3`).addClass("show");
                    error = true;
                }

                if (cofirmPass == "") {
                    $('.step-3 input[name="cofirmpass"]  + span').html("Mật khẩu xác nhận không được để trống").addClass("show");
                    $(`.step-3`).addClass("show");
                    error = true;
                } else if (cofirmPass != newPass) {
                    $('.step-3 input[name="cofirmpass"]  + span').html("Mật khẩu xác nhận không chính xác").addClass("show");
                    $(`.step-3`).addClass("show");
                    error = true;
                }
                if (error) {
                    return
                }

                $.ajax({
                    url: '/UserForgotPass/UpdatePass',
                    type: 'POST',
                    data: {
                        idUser: Number.parseInt(idUser),
                        newPass
                    },
                    success: function (data) {
                        var x = document.querySelector("#toast");
                        if (data.success) {
                            x.className = "show success";
                            x.querySelector("#img").innerHTML = '<i class="ri-checkbox-circle-line"></i>';
                            x.querySelector("#desc").innerHTML = "Khôi phục mật khẩu thành công!";
                            setTimeout(function () {
                                x.className = x.className.replace("show", "");
                                location.href = "/UserSignin/Index";
                            }, 5000);

                        } else {
                            x.className = "show error";
                            x.querySelector("#img").innerHTML = '<i class="ri-close-circle-line"></i>';
                            x.querySelector("#desc").innerHTML = "Khôi phục mật khẩu không thành công!";;
                            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
                break;
        }
    })
    $('.input-group input').on('input', function (e) {
        let parentElement = e.target.closest(".input-group");
        parentElement.querySelector("span").classList.remove("show");
    });    
});