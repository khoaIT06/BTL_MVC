function checkAddUser() {
    let name = document.querySelector(".js-user-fullname");
    let birthday = document.querySelector(".js-user-birthday");
    let email = document.querySelector(".js-user-email");
    let username = document.querySelector(".js-user-name");
    let password = document.querySelector(".js-user-password");
    let confirmPassword = document.querySelector(".js-user-confirmPassword");

    let existingEmails = [];
    let existingUsernames = [];
    document.querySelectorAll("tbody tr").forEach(row => {
        let email = row.querySelector(".user-email").textContent.trim();
        let username = row.querySelector(".user-name").textContent.trim();
        existingEmails.push(email);
        existingUsernames.push(username);
    });

    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-addUser-error").innerHTML = "Tên người dùng không được bỏ trống!";
        checkValid = false
    }
    if (/\d/.test(name.value.trim())) {
        document.querySelector(".name-addUser-error").innerHTML = "Tên người dùng không được chứa số!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ\s]/.test(name.value.trim())) {
        document.querySelector(".name-addUser-error").innerHTML = "Tên người dùng không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (email.value.trim() === "") {
        document.querySelector(".email-addUser-error").innerHTML = "Email không được bỏ trống!";
        checkValid = false
    }
    if (existingEmails.includes(email.value.trim())) {
        document.querySelector(".email-addUser-error").innerHTML = "Email đã tồn tại!";
        checkValid = false;
    }
    if (username.value.trim() === "") {
        document.querySelector(".username-addUser-error").innerHTML = "Tên tài khoản không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-Z0-9]/.test(username.value.trim())) {
        document.querySelector(".username-addUser-error").innerHTML = "Tên tài khoản không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (existingUsernames.includes(username.value.trim())) {
        document.querySelector(".username-addUser-error").innerHTML = "Tên tài khoản đã tồn tại!";
        checkValid = false;
    }
    if (password.value.trim() === "") {
        document.querySelector(".password-addUser-error").innerHTML = "Mật khẩu không được bỏ trống!";
        checkValid = false;
    }
    if (password.value.length < 8 || password.value.length > 32) {
        document.querySelector(".password-addUser-error").innerHTML = "Mật khẩu phải có độ dài từ 8 đến 32 ký tự!";
        checkValid = false;
    }
    if (confirmPassword.value.trim() === "") {
        document.querySelector(".confirmPassword-addUser-error").innerHTML = "Xác nhận mật khẩu không được bỏ trống!";
        checkValid = false;
    }
    if (password.value !== confirmPassword.value) {
        document.querySelector(".confirmPassword-addUser-error").innerHTML = "Mật khẩu không khớp!";
        checkValid = false;
    }
    return checkValid;
}

document.querySelectorAll('.modal-input').forEach(input => {
    input.addEventListener('input', function () {
        let errorElement = this.parentElement.querySelector('.check-error');
        if (this.value.trim() !== "") {
            errorElement.innerHTML = "";
        }
    });
});

document.querySelector(".js-user-confirmPassword").addEventListener('input', function () {
    let confirmPasswordErrorElement = document.querySelector(".confirmPassword-addUser-error");
    if (this.value.trim() !== "") {
        confirmPasswordErrorElement.innerHTML = "";
    }
});

function checkUpdateUser() {
    let userId = document.querySelector(".js-user-id-change").value;
    let name = document.querySelector(".js-user-fullname-change");
    let birthday = document.querySelector(".js-user-birthday-change");
    let email = document.querySelector(".js-user-email-change");
    let role = document.querySelector(".js-user-role-change");

    let existingEmails = [];
    let existingUsernames = [];
    document.querySelectorAll("tbody tr").forEach(row => {
        let currentUserId = row.querySelector(".user-id").textContent.trim();
        if (currentUserId !== userId) {
            let email = row.querySelector(".user-email").textContent.trim();
            let username = row.querySelector(".user-name").textContent.trim();
            existingEmails.push(email);
            existingUsernames.push(username);
        }
    });

    let checkValid = true;

    if (name.value.trim() === "") {
        document.querySelector(".fullname-updateUser-error").innerHTML = "Tên người dùng không được bỏ trống!";
        checkValid = false;
    }
    if (/\d/.test(name.value.trim())) {
        document.querySelector(".fullname-updateUser-error").innerHTML = "Tên người dùng không được chứa số!";
        checkValid = false;
    }
    if (/[^a-zA-ZÀ-ỹ\s]/.test(name.value.trim())) {
        document.querySelector(".fullname-updateUser-error").innerHTML = "Tên người dùng không được chứa ký tự đặc biệt!";
        checkValid = false;
    }

    if (email.value.trim() === "") {
        document.querySelector(".email-updateUser-error").innerHTML = "Email không được bỏ trống!";
        checkValid = false;
    }
    if (existingEmails.includes(email.value.trim())) {
        document.querySelector(".email-updateUser-error").innerHTML = "Email đã tồn tại!";
        checkValid = false;
    }
    return checkValid;
}

document.querySelectorAll('.modal-input').forEach(input => {
    input.addEventListener('input', function () {
        let errorElement = this.parentElement.querySelector('.check-error');
        if (this.value.trim() !== "") {
            errorElement.innerHTML = "";
        }
    });
});

function checkUpdatePasswordAdmin() {
    let newPassword = document.getElementById('pass-update-password-admin').value.trim();
    let confirmPassword = document.getElementById('cfpass-update-password-admin').value.trim();
    let passwordError = document.querySelector('.password-admin-error');
    let cfpasswordError = document.querySelector('.cfpassword-admin-error');
    let isValid = true;

    if (newPassword === '') {
        passwordError.innerHTML = 'Mật khẩu mới không được bỏ trống';
        isValid = false;
    }

    if (confirmPassword === '') {
        cfpasswordError.innerHTML = 'Xác nhận mật khẩu không được bỏ trống';
        isValid = false;
    }
    if (newPassword !== confirmPassword) {
        cfpasswordError.innerHTML = 'Xác nhận mật khẩu không khớp với mật khẩu mới';
        isValid = false;
    }
    if (newPassword.length < 8 || newPassword.length > 32) {
        passwordError.innerHTML = 'Mật khẩu mới phải có độ dài từ 8 đến 32 ký tự';
        isValid = false;
    }
    return isValid;
}