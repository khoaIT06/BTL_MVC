function checkAddNation() {
    let name = document.querySelector(".js-nation-name");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-addNation-error").innerHTML = "Tên quốc gia không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-addNation-error").innerHTML = "Tên quốc gia không được chứa ký tự đặc biệt!";
        checkValid = false
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

function checkUpdateNation() {
    let name = document.querySelector(".js-nation-name-change");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-changeNation-error").innerHTML = "Tên quốc gia không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-changeNation-error").innerHTML = "Tên quốc gia không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    return checkValid;
}