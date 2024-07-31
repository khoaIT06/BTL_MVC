$(document).ready(function () {
    $('.search-input button').on('click', function () {
        var searchTerm = $('.search-input input').val();
        if (searchTerm !== "") {
            $.ajax({
                url: '/UserSearch/SearchInput',
                type: 'GET',
                data: { searchTerm: searchTerm },
                success: function (data) {
                    var distinctBo = data.reduce((acc, current) => {
                        if (!acc.find(item => item.IDBo === current.IDBo)) {
                            acc.push(current);
                        }
                        return acc;
                    }, []);
                    var htmlListFilm = distinctBo.map((e) => {
                        return `
                                <div class="film-item swiper-slide">
                                    <a href="~/UserWatch/Index/${e.IDPhim}" class="film-post">
                                        <div class="film-image">
                                            <img src="${e.LinkAnh}" alt="">
                                        </div>
                                        <div class="film-watch">
                                            <i class="ri-play-fill"></i>
                                        </div>
                                    </a>
                                    <h2 class="film-name">${e.TenBo}</h2>
                                </div>`;
                    }).join("");
                    $('.film-list').html(htmlListFilm);

                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    });

});