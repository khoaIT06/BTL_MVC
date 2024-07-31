function checkAddMovie() {
    let name = document.querySelector(".js-movie-name");
    let director = document.querySelector(".js-movie-director");
    let category = document.querySelector(".js-movie-category");
    let year = document.querySelector(".js-movie-year");
    let time = document.querySelector(".js-movie-time");
    let quality = document.querySelector(".js-movie-quality");
    let language = document.querySelector(".js-movie-language");
    let episode = document.querySelector(".js-movie-episode");
    let img = document.querySelector(".js-movie-img");
    let description = document.querySelector(".js-movie-description");
    let video = document.querySelector(".js-movie-video");
    let videoLink = document.querySelector(".js-movie-link");
    
    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-addMovie-error").innerHTML = "Tên phim không được bỏ trống!";
        checkValid = false
    }
    if(director.value.trim() === "") {
        document.querySelector(".director-addMovie-error").innerHTML = "Tên tác giả không được bỏ trống!";
        checkValid = false
    }
    if (/\d/.test(director.value.trim())){
        document.querySelector(".director-addMovie-error").innerHTML = "Tên đạo diễn không được chứa số!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ\s]/.test(director.value.trim())){
        document.querySelector(".director-addMovie-error").innerHTML = "Tên đạo diễn không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (category.value.trim() === "") {
        document.querySelector(".category-addMovie-error").innerHTML = "Thể loại không được bỏ trống!";
        checkValid = false
    }
    if (year.value.trim() === "") {
        document.querySelector(".year-addMovie-error").innerHTML = "Năm sản xuất không được bỏ trống!";
        checkValid = false
    }
    let currentYear = new Date().getFullYear();
    if (year.value.trim() > currentYear) {
        document.querySelector(".year-addMovie-error").innerHTML = "Năm sản xuất không được lớn hơn năm hiện tại!";
        checkValid = false
    }
    if (time.value.trim() === "") {
        document.querySelector(".time-addMovie-error").innerHTML = "Thời lượng không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(time.value.trim())) {
        document.querySelector(".time-addMovie-error").innerHTML = "Thời lượng không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (quality.value.trim() === "") {
        document.querySelector(".quality-addMovie-error").innerHTML = "Chất lượng không được bỏ trống!";
        checkValid = false
    }
    if (language.value.trim() === "") {
        document.querySelector(".language-addMovie-error").innerHTML = "Ngôn ngữ không được bỏ trống!";
        checkValid = false
    }
    if (episode.value.trim() === "") {
        document.querySelector(".episode-addMovie-error").innerHTML = "Tập phim không được bỏ trống!";
        checkValid = false
    }
    if (img.files[0] === undefined) {
        document.querySelector(".img-addMovie-error").innerHTML = "Ảnh phim không được bỏ trống!";
        checkValid = false
    }
    if (description.value.trim() === "") {
        document.querySelector(".description-addMovie-error").innerHTML = "Mô tả phim không được bỏ trống!";
        checkValid = false
    }
    if (video.files[0] === undefined && videoLink.value.trim() === "") {
        document.querySelector(".video-addMovie-error").innerHTML = "Vui lòng nhập link hoặc chọn video!";
        document.querySelector(".link-addMovie-error").innerHTML = "Vui lòng nhập link hoặc chọn video!";
        checkValid = false
    }
    return checkValid;
}

document.querySelector(".js-movie-name").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".name-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-director").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".director-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-category").addEventListener("click", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".category-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-year").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".year-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-time").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".time-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-quality").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".quality-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-language").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".language-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-episode").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".episode-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-img").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".img-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-description").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".description-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-link").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".link-addMovie-error");
    let errorElement2 = document.querySelector(".video-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
        errorElement2.innerHTML = "";
    }
});

document.querySelector(".js-movie-video").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".link-addMovie-error");
    let errorElement2 = document.querySelector(".video-addMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
        errorElement2.innerHTML = "";
    }
});

function checkUpdateMovie() {
    let name = document.querySelector(".js-movie-name-change");
    let director = document.querySelector(".js-movie-director-change");
    let category = document.querySelector(".js-movie-category-change");
    let year = document.querySelector(".js-movie-year-change");
    let time = document.querySelector(".js-movie-time-change");
    let quality = document.querySelector(".js-movie-quality-change");
    let language = document.querySelector(".js-movie-language-change");
    let episode = document.querySelector(".js-movie-episode-change");
    let img = document.querySelector(".js-movie-img-change");
    let description = document.querySelector(".js-movie-description-change");
    let video = document.querySelector(".js-movie-video-change");
    let videoLink = document.querySelector(".js-movie-link-change");

    let checkValid = true;
    if (name.value.trim() === "") {
        document.querySelector(".name-updateMovie-error").innerHTML = "Tên phim không được bỏ trống!";
        checkValid = false
    }
    if (director.value.trim() === "") {
        document.querySelector(".director-updateMovie-error").innerHTML = "Tên tác giả không được bỏ trống!";
        checkValid = false
    }
    if (/\d/.test(director.value.trim())) {
        document.querySelector(".director-updateMovie-error").innerHTML = "Tên đạo diễn không được chứa số!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ\s]/.test(director.value.trim())) {
        document.querySelector(".director-updateMovie-error").innerHTML = "Tên đạo diễn không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (category.value.trim() === "") {
        document.querySelector(".category-updateMovie-error").innerHTML = "Thể loại không được bỏ trống!";
        checkValid = false
    }
    if (year.value.trim() === "") {
        document.querySelector(".year-updateMovie-error").innerHTML = "Năm sản xuất không được bỏ trống!";
        checkValid = false
    }
    let currentYear = new Date().getFullYear();
    if (year.value.trim() > currentYear) {
        document.querySelector(".year-updateMovie-error").innerHTML = "Năm sản xuất không được lớn hơn năm hiện tại!";
        checkValid = false
    }
    if (time.value.trim() === "") {
        document.querySelector(".time-updateMovie-error").innerHTML = "Thời lượng không được bỏ trống!";
        checkValid = false
    }
    if (/[^a-zA-ZÀ-ỹ0-9\s]/.test(time.value.trim())) {
        document.querySelector(".time-updateMovie-error").innerHTML = "Thời lượng không được chứa ký tự đặc biệt!";
        checkValid = false
    }
    if (quality.value.trim() === "") {
        document.querySelector(".quality-updateMovie-error").innerHTML = "Chất lượng không được bỏ trống!";
        checkValid = false
    }
    if (language.value.trim() === "") {
        document.querySelector(".language-updateMovie-error").innerHTML = "Ngôn ngữ không được bỏ trống!";
        checkValid = false
    }
    if (episode.value.trim() === "") {
        document.querySelector(".episode-updateMovie-error").innerHTML = "Tập phim không được bỏ trống!";
        checkValid = false
    }
    if (description.value.trim() === "") {
        document.querySelector(".description-updateMovie-error").innerHTML = "Mô tả phim không được bỏ trống!";
        checkValid = false
    }
    if (video.files[0] === undefined && videoLink.value.trim() === "") {
        document.querySelector(".video-updateMovie-error").innerHTML = "Vui lòng nhập link hoặc chọn video!";
        document.querySelector(".link-updateMovie-error").innerHTML = "Vui lòng nhập link hoặc chọn video!";
        checkValid = false
    }
    return checkValid;
}

document.querySelector(".js-movie-name-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".name-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-director-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".director-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-category-change").addEventListener("click", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".category-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-year-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".year-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-time-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".time-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-quality-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".quality-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-language-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".language-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-episode-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".episode-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-description-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".description-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
    }
});

document.querySelector(".js-movie-link-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".link-updateMovie-error");
    let errorElement2 = document.querySelector(".video-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
        errorElement2.innerHTML = "";
    }
});

document.querySelector(".js-movie-video-change").addEventListener("input", function () {
    let name = this.value.trim();
    let errorElement = document.querySelector(".link-updateMovie-error");
    let errorElement2 = document.querySelector(".video-updateMovie-error");
    if (name !== "") {
        errorElement.innerHTML = "";
        errorElement2.innerHTML = "";
    }
});