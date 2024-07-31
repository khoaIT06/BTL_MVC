function checkAddSet() {
    let name = document.querySelector(".js-set-name");
    let episode = document.querySelector(".js-set-episode");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-addSet-error").innerHTML = "Tên bộ không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-addSet-error").innerHTML = "Tên bộ không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (episode.value.trim() === "") {
        document.querySelector(".episode-addSet-error").innerHTML = "Số tập không được bỏ trống!";
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

function checkUpdateSet() {
    let name = document.querySelector(".js-set-name-change");
    let episode = document.querySelector(".js-set-episode-change");
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-changeSet-error").innerHTML = "Tên bộ không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(name.value.trim())) {
        document.querySelector(".name-changeSet-error").innerHTML = "Tên bộ không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (episode.value.trim() === "") {
        document.querySelector(".episode-changeSet-error").innerHTML = "Số tập không được bỏ trống!";
        checkValid = false
    }
    return checkValid;
}