$(document).ready(function () {

    var commentStr = "";
    var isEdit = false;

    $(".comment-input button").on("click", function (e) {
        let inputElemnt = document.querySelector(".comment-input input");
        let commentstr = inputElemnt.value.trim();
        let idPhim = Number.parseInt(inputElemnt.dataset.phim);
        if (commentstr != "") {
            $.ajax({
                url: '/UserWatch/AddComment',
                type: 'POST',
                data: {
                    idPhim: idPhim,
                    comment: commentstr
                },
                success: function (data) {
                    console.log(data);
                    if (data.success) {
                        let htmlComment = `
                        <div class="comment-item">
                            <div class="main">
                                <div class="avatar">
                                    <img src="/Image_User/avatar.png" alt="">
                                </div>
                                <div>
                                    <p>${data.Name}</p>
                                    <input type="text" value="${commentstr}" readonly>
                                </div>                                
                            </div>
                            <div class="actions show">
                                <button class="comment-edit show">Chỉnh sửa</button>
                                <button class="comment-delete show" data-cmt="${data.idComment}">Xóa</button>
                                <button class="comment-save" data-phim="${idPhim}" data-cmt="${data.idComment}">Lưu</button>
                                <button class="comment-noaction">Thoát</button>
                            </div>
                        </div>
                        `
                        inputElemnt.value = "";
                        $(".comment-list").append(htmlComment);
                    }
                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    });
    $(".comment-list").on("click", ".comment-edit", function (e) {
        if (!isEdit) {
            let parentElement = e.target.closest(".comment-item");
            let input = parentElement.querySelector("input");
            input.removeAttribute('readonly');
            commentStr = input.value;
            $(e.target).nextAll("button").addClass("show");
        }
        isEdit = true;
    });

    $(".comment-list").on("click", ".comment-noaction", function (e) {
        isEdit = false;
        let parentElement = e.target.closest(".comment-item");
        let input = parentElement.querySelector("input");
        input.setAttribute('readonly', true);
        input.value = commentStr;
        parentElement.querySelector(".comment-save").classList.remove("show");
        parentElement.querySelector(".comment-noaction").classList.remove("show");
    });

    $(".comment-list").on("click", ".comment-save", function (e) {
        let parentElement = e.target.closest(".comment-item");
        let input = parentElement.querySelector("input");
        let comment = input.value.trim();
        let idcmt = Number.parseInt(e.target.dataset.cmt);
        $.ajax({
            url: '/UserWatch/UpdateComment',
            type: 'POST',
            data: {
                idBL: idcmt,
                comment
            },
            success: function (data) {
                if (data.success) {
                    isEdit = false;
                    parentElement.querySelector(".comment-save").classList.remove("show");
                    parentElement.querySelector(".comment-noaction").classList.remove("show");
                    input.setAttribute('readonly', true);

                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    $(".comment-list").on("click", ".comment-delete", function (e) {
        let parentElement = e.target.closest(".comment-item");
        let input = parentElement.querySelector("input");
        let idcmt = Number.parseInt(e.target.dataset.cmt);
        $.ajax({
            url: '/UserWatch/DeleteComment',
            type: 'POST',
            data: {
                id: idcmt
            },
            success: function (data) {
                if (data.success) {
                    if (data.vaitro == "Admin") {
                        input.value = "Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng";
                        return;
                    }
                    parentElement.remove();
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});