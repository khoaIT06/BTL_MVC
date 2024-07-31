const addSets = document.querySelectorAll('.js-add-set')
const modal = document.querySelector('.js-modal-addSet')
const modalAddClose = document.querySelector('.js-modal-addSet-close')
const modalContainer = document.querySelector('.js-modal-addSet-container')
const cancelSets = document.querySelectorAll('.js-cancel-set')
const btnAddSet = document.querySelector('.js-addSet')

function showFormAddSet() {
    modal.classList.add('open')
}

function hideFormAddSet() {
    modal.classList.remove('open')
}

for (const addSet of addSets) {
    addSet.addEventListener('click', showFormAddSet)
}

for (const cancelSet of cancelSets) {
    cancelSet.addEventListener('click', hideFormAddSet)
}

modalAddClose.addEventListener('click', hideFormAddSet)
modal.addEventListener('click', hideFormAddSet)
btnAddSet.addEventListener('click', () => {
    checkAddSet() && hideFormAddSet()
})
modalContainer.addEventListener('click', function () {
    event.stopPropagation()
})

const changeSets = document.querySelectorAll('.js-changeSet')
const modalChange = document.querySelector('.js-modal-changeSet')
const modalChangeClose = document.querySelector('.js-modal-changeSet-close')
const modalChangeContainer = document.querySelector('.js-modal-changeSet-container')
const saveChange = document.querySelector('.js-save-changedSet')
const setName = document.querySelector('.js-set-name-change')
const setEpisode = document.querySelector('.js-set-episode-change')
const cancelChangeSets = document.querySelectorAll('.js-cancel-set-change')
const btnUpdateSet = document.querySelector('.js-btnChangeSet')
const idSetUpdate = document.querySelector('.js-set-id-change')

function showFormChangeSet() {
    modalChange.classList.add('open')
}

for (const changeSet of changeSets) {
    changeSet.addEventListener('click', showFormChangeSet)
}

changeSets.forEach(function (changeSet) {
    changeSet.addEventListener('click', function () {
        const row = this.parentElement.parentElement.parentElement
        modalChange.classList.add('open')
        setName.value = row.querySelector('.set-name').textContent
        setEpisode.value = row.querySelector('.set-episode').textContent
        idSetUpdate.value = row.querySelector('.set-id').textContent
    })
})


if (modalChange) {
    function hideFormChangeSet() {
        modalChange.classList.remove('open')
    }

    for (const cancelChangeSet of cancelChangeSets) {
        cancelChangeSet.addEventListener('click', hideFormChangeSet)
    }
    btnUpdateSet.addEventListener('click', () => {
        checkUpdateSet() && hideFormChangeSet()
    })
    modalChangeClose.addEventListener('click', hideFormChangeSet)
    modalChange.addEventListener('click', hideFormChangeSet)
    modalChangeContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
}

/*Bật tắt form xác nhận xóa*/
const deleteSets = document.querySelectorAll('.js-deleteSet')
const modalDelete = document.querySelector('.js-modal-deleteSet')
const modalDeleteClose = document.querySelector('.js-modal-deleteSet-close')
const modalDeleteContainer = document.querySelector('.js-modal-deleteSet-container')
const modalDeleteChooseYes = document.querySelector('.js-set-btn-yes')
const modalDeleteChooseNo = document.querySelector('.js-set-btn-no')
const idSetDelete = document.querySelector('.js-set-id-delete')

function showFormDeleteSet() {
    modalDelete.classList.add('open')
}

function hideFormDeleteSet() {
    modalDelete.classList.remove('open')
}

deleteSets.forEach(deleteSet => {
    deleteSet.addEventListener('click', function () {
        modalDelete.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        idSetDelete.value = row.querySelector('.set-id').textContent
    })
})

if (modalDelete) {
    modalDeleteClose.addEventListener('click', hideFormDeleteSet)
    modalDelete.addEventListener('click', hideFormDeleteSet)
    modalDeleteChooseYes.addEventListener('click', hideFormDeleteSet)
    modalDeleteContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
    modalDeleteChooseNo.addEventListener('click', hideFormDeleteSet)
}