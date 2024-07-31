document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.getElementById('movie-video');
    const linkInput = document.getElementById('movie-link');

    const toggleInputs = () => {
        if (linkInput.value.trim() !== '') {
            videoInput.disabled = true;
        } else {
            videoInput.disabled = false;
        }

        if (videoInput.files.length > 0) {
            linkInput.disabled = true;
        } else {
            linkInput.disabled = false;
        }
    };

    linkInput.addEventListener('input', toggleInputs);
    videoInput.addEventListener('change', toggleInputs);
});

const addMovies = document.querySelectorAll('.js-add-movie')
const modal = document.querySelector('.js-modal-addMovie')   
const modalAddClose = document.querySelector('.js-modal-addMovie-close')
const modalContainer = document.querySelector('.js-modal-addMovie-container')
const cancelMovies = document.querySelectorAll('.js-cancel-movie')
const btnAddMovie = document.querySelector('.js-addMovie')

function showFormAddMovie(){
    modal.classList.add('open')
}

function hideFormAddMovie(){
    modal.classList.remove('open')
}

for(const addMovie of addMovies){
    addMovie.addEventListener('click', showFormAddMovie)
}

for(const cancelMovie of cancelMovies){
    cancelMovie.addEventListener('click', hideFormAddMovie)
}


btnAddMovie.addEventListener('click', () => {
    checkAddMovie() && hideFormAddMovie()
})
modalAddClose.addEventListener('click', hideFormAddMovie)
modal.addEventListener('click', hideFormAddMovie)
modalContainer.addEventListener('click', function(){
    event.stopPropagation()
})

document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.querySelector('.js-movie-video-change');
    const linkInput = document.querySelector('.js-movie-link-change');

    const toggleInputs = () => {
        if (linkInput.value.trim() !== '') {
            videoInput.disabled = true;
            videoInput.value = '';
        } else {
            videoInput.disabled = false;
        }

        if (videoInput.files.length > 0) {
            linkInput.disabled = true;
            linkInput.value = '';
        } else {
            linkInput.disabled = false;
        }
    };

    linkInput.addEventListener('input', toggleInputs);
    videoInput.addEventListener('change', toggleInputs);
});

const changeMovies = document.querySelectorAll('.js-changeMovie')
const modalChange = document.querySelector('.js-modal-changeMovie')   
const modalChangeClose = document.querySelector('.js-modal-changeMovie-close')
const modalChangeContainer = document.querySelector('.js-modal-changeMovie-container')
const saveChange = document.querySelector('.js-save-changedMovie')
const btnUpdateMovie = document.querySelector('.js-btnChangeMovie')
const movieId = document.querySelector('.js-movie-id-change')
const movieName = document.querySelector('.js-movie-name-change')
const movieCategory = document.querySelector('.js-movie-category-change')
const movieDirector = document.querySelector('.js-movie-director-change')
const movieNation = document.querySelector('.js-movie-nation-change')
const movieYear = document.querySelector('.js-movie-year-change')
const movieTime = document.querySelector('.js-movie-time-change')
const movieDescription = document.querySelector('.js-movie-description-change')
const movieQuality = document.querySelector('.js-movie-quality-change')
const movieLanguage = document.querySelector('.js-movie-language-change')
const movieLink = document.querySelector('.js-movie-link-change')
const movieEpisode = document.querySelector('.js-movie-episode-change')
const movieSet = document.querySelector('.js-movie-set-change')
const cancelChangeMovies = document.querySelectorAll('.js-cancel-movie-change')
console.log(btnUpdateMovie)

function showFormChangeMovie(){
    modalChange.classList.add('open')
}

for(const changeMovie of changeMovies){
    changeMovie.addEventListener('click', showFormChangeMovie)
}


changeMovies.forEach(function(changeMovie){
    changeMovie.addEventListener('click', function(){
        const row = this.parentElement.parentElement.parentElement
        modalChange.classList.add('open')
        movieId.value = row.querySelector('.movie-id').textContent
        movieName.value = row.querySelector('.movie-name').textContent
        movieDirector.value = row.querySelector('.movie-director').textContent
        movieNation.value = row.querySelector('.movie-nation').getAttribute('data-nation-value')
        movieYear.value = row.querySelector('.movie-year').textContent
        movieTime.value = row.querySelector('.movie-time').textContent
        movieDescription.value = row.querySelector('.movie-description').textContent
        movieQuality.value = row.querySelector('.movie-quality').textContent 
        movieLanguage.value = row.querySelector('.movie-language').textContent
        movieLink.value = row.querySelector('.movie-link').textContent
        movieEpisode.value = row.querySelector('.movie-episode').textContent 
        movieSet.value = row.querySelector('.movie-set').getAttribute('data-set-value')

        const strCategory = row.querySelector('.movie-category').textContent;
        const arrCategory = strCategory.split(', ').map(item => item.trim());
        multiSelectCategory.setSelectedOptions([]);
        multiSelectCategory.setSelectedOptions(arrCategory);
        

    })
})


if(modalChange){
    function hideFormChangeMovie(){
        modalChange.classList.remove('open') 
    }
    
    for(const cancelChangeMovie of cancelChangeMovies){
        cancelChangeMovie.addEventListener('click', hideFormChangeMovie)
    }

    btnUpdateMovie.addEventListener('click', () => {
        checkUpdateMovie() && hideFormChangeMovie()
    })
    
    modalChangeClose.addEventListener('click', hideFormChangeMovie)
    modalChange.addEventListener('click', hideFormChangeMovie)
    modalChangeContainer.addEventListener('click', function(){
        event.stopPropagation()
    })
}

/*Bật tắt form xác nhận xóa*/
const deleteMovies = document.querySelectorAll('.js-deleteMovie')
const modalDelete = document.querySelector('.js-modal-deleteMovie')   
const modalDeleteClose = document.querySelector('.js-modal-deleteMovie-close')
const modalDeleteContainer = document.querySelector('.js-modal-deleteMovie-container')
const modalDeleteChooseYes = document.querySelector('.js-movie-btn-yes')
const modalDeleteChooseNo = document.querySelector('.js-movie-btn-no')
const deleteMovieId = document.querySelector('.js-movie-id-delete')

function showFormDeleteMovie(){
    modalDelete.classList.add('open')
}

function hideFormDeleteMovie(){
    modalDelete.classList.remove('open')
}

deleteMovies.forEach(deleteMovie =>{
    deleteMovie.addEventListener('click', function(){
        modalDelete.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        deleteMovieId.value = row.querySelector('.movie-id').textContent
    })
})

if(modalDelete){
    modalDeleteClose.addEventListener('click', hideFormDeleteMovie)
    modalDelete.addEventListener('click', hideFormDeleteMovie)
    modalDeleteChooseYes.addEventListener('click', hideFormDeleteMovie)
    modalDeleteContainer.addEventListener('click', function(){
    event.stopPropagation()
    })
    modalDeleteChooseNo.addEventListener('click', hideFormDeleteMovie)
}