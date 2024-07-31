$(document).ready(function () {
    $('.signin-container button').on('click', function () {
        var username = $('.signin-container input[name="user"]').val();
        var password = $('.signin-container input[name="pass"]').val();
        if (username !== "" && password !== "") {
            $.ajax({
                url: '/UserSignin/SigninAccount',
                type: 'POST',
                data: {
                    userName: username,
                    passWord: password
                },
                success: function (data) {
                    if (data.success) {
                        document.location = data.location;
                        return;
                    }
                    $('.signin-container .error').html(data.message).addClass("show");
                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        } else {
            $('.signin-container .error').html("Tên đăng nhập hoặc mật khẩu không được để trống.").addClass("show");
        }
    });
    $('.signin-container input').on('input', function () {
        $('.signin-container .error').removeClass("show");
    });
});