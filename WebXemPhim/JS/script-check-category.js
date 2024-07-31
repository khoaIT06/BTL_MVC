function checkAddCategory() {
    let name = document.querySelector(".js-category-name");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-addCategory-error").innerHTML = "Tên thể loại không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-addCategory-error").innerHTML = "Tên thể loại không được chứa ký tự đặc biệt!";
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

function checkUpdateCategory() {
    let name = document.querySelector(".js-category-name-change");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-changeCategory-error").innerHTML = "Tên thể loại không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-changeCategory-error").innerHTML = "Tên thể loại không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    return checkValid;
}