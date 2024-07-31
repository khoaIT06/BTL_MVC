document.addEventListener("DOMContentLoaded", function () {
    const barChartCategoryMovie = document.getElementById("barChart-CategoryMovie");
    const lineChartView = document.getElementById("lineChart-view");

    if (barChartCategoryMovie) {
        const categoryNames = JSON.parse(barChartCategoryMovie.getAttribute('data-category-names'));
        const totalMoviesByCategory = JSON.parse(barChartCategoryMovie.getAttribute('data-total-movies'));

        const dataCategoryMovie = {
            labels: categoryNames,
            datasets: [{
                label: "Số lượng phim theo loại",
                backgroundColor: '#0046ff',
                data: totalMoviesByCategory,
            }],
        };

        new Chart(barChartCategoryMovie.getContext("2d"), {
            type: "bar",
            data: dataCategoryMovie,
        });
    }

    if (lineChartView) {
        const categoryNames = JSON.parse(lineChartView.getAttribute('data-category-names'));
        const totalViewsByCategory = JSON.parse(lineChartView.getAttribute('data-total-views'));

        const dataView = {
            labels: categoryNames,
            datasets: [{
                label: "Lượt xem phim theo loại",
                backgroundColor: '#0046ff',
                data: totalViewsByCategory,
            }],
        };

        new Chart(lineChartView.getContext("2d"), {
            type: "line",
            data: dataView,
        });
    }
});
