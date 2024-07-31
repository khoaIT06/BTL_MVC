const addNations = document.querySelectorAll('.js-add-nation')
const modal = document.querySelector('.js-modal-addNation')
const modalAddClose = document.querySelector('.js-modal-addNation-close')
const modalContainer = document.querySelector('.js-modal-addNation-container')
const cancelNations = document.querySelectorAll('.js-cancel-nation')
const btnAddNation = document.querySelector('.js-addNation')

function showFormAddNation() {
    modal.classList.add('open')
}

function hideFormAddNation() {
    modal.classList.remove('open')
}

for (const addNation of addNations) {
    addNation.addEventListener('click', showFormAddNation)
}

for (const cancelNation of cancelNations) {
    cancelNation.addEventListener('click', hideFormAddNation)
}

modalAddClose.addEventListener('click', hideFormAddNation)
modal.addEventListener('click', hideFormAddNation)
btnAddNation.addEventListener('click', () => {
    checkAddNation() && hideFormAddNation()
})
modalContainer.addEventListener('click', function () {
    event.stopPropagation()
})

const changeNations = document.querySelectorAll('.js-changeNation')
const modalChange = document.querySelector('.js-modal-changeNation')
const modalChangeClose = document.querySelector('.js-modal-changeNation-close')
const modalChangeContainer = document.querySelector('.js-modal-changeNation-container')
const saveChange = document.querySelector('.js-save-changedNation')
const nationName = document.querySelector('.js-nation-name-change')
const cancelChangeNations = document.querySelectorAll('.js-cancel-nation-change')
const btnUpdateNation = document.querySelector('.js-btnChangeNation')
const idNationUpdate = document.querySelector('.js-nation-id-change')

function showFormChangeNation() {
    modalChange.classList.add('open')
}

for (const changeNation of changeNations) {
    changeNation.addEventListener('click', showFormChangeNation)
}

changeNations.forEach(function (changeNation) {
    changeNation.addEventListener('click', function () {
        const row = this.parentElement.parentElement.parentElement
        modalChange.classList.add('open')
        nationName.value = row.querySelector('.nation-name').textContent
        idNationUpdate.value = row.querySelector('.nation-id').textContent
    })
})


if (modalChange) {
    function hideFormChangeNation() {
        modalChange.classList.remove('open')
    }

    for (const cancelChangeNation of cancelChangeNations) {
        cancelChangeNation.addEventListener('click', hideFormChangeNation)
    }
    btnUpdateNation.addEventListener('click', () => {
        checkUpdateNation() && hideFormChangeNation()
    })
    modalChangeClose.addEventListener('click', hideFormChangeNation)
    modalChange.addEventListener('click', hideFormChangeNation)
    modalChangeContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
}

/*Bật tắt form xác nhận xóa*/
const deleteNations = document.querySelectorAll('.js-deleteNation')
const modalDelete = document.querySelector('.js-modal-deleteNation')
const modalDeleteClose = document.querySelector('.js-modal-deleteNation-close')
const modalDeleteContainer = document.querySelector('.js-modal-deleteNation-container')
const modalDeleteChooseYes = document.querySelector('.js-nation-btn-yes')
const modalDeleteChooseNo = document.querySelector('.js-nation-btn-no')
const idNationDelete = document.querySelector('.js-nation-id-delete')

function showFormDeleteNation() {
    modalDelete.classList.add('open')
}

function hideFormDeleteNation() {
    modalDelete.classList.remove('open')
}

deleteNations.forEach(deleteNation => {
    deleteNation.addEventListener('click', function () {
        modalDelete.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        idNationDelete.value = row.querySelector('.nation-id').textContent
    })
})

if (modalDelete) {
    modalDeleteClose.addEventListener('click', hideFormDeleteNation)
    modalDelete.addEventListener('click', hideFormDeleteNation)
    modalDeleteChooseYes.addEventListener('click', hideFormDeleteNation)
    modalDeleteContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
    modalDeleteChooseNo.addEventListener('click', hideFormDeleteNation)
}