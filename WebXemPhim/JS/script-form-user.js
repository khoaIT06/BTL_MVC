const addUsers = document.querySelectorAll('.js-add-user')
const modal = document.querySelector('.js-modal-addUser')   
const modalAddClose = document.querySelector('.js-modal-addUser-close')
const modalContainer = document.querySelector('.js-modal-addUser-container')
const cancelUsers = document.querySelectorAll('.js-cancel-user')
const btnAddUser = document.querySelector('.js-addUser')

function showFormAddUser(){
    modal.classList.add('open')
}

function hideFormAddUser(){
    modal.classList.remove('open')
}

for(const addUser of addUsers){
    addUser.addEventListener('click', showFormAddUser)
}

for(const cancelUser of cancelUsers){
    cancelUser.addEventListener('click', hideFormAddUser)
}

btnAddUser.addEventListener('click', () => {
    checkAddUser() && hideFormAddUser()
})

modalAddClose.addEventListener('click', hideFormAddUser)
modal.addEventListener('click', hideFormAddUser)
modalContainer.addEventListener('click', function(){
    event.stopPropagation()
})

const changeUsers = document.querySelectorAll('.js-changeUser')
const modalChange = document.querySelector('.js-modal-changeUser')   
const modalChangeClose = document.querySelector('.js-modal-changeUser-close')
const modalChangeContainer = document.querySelector('.js-modal-changeUser-container')
const saveChange = document.querySelector('.js-save-changedUser')
const userName = document.querySelector('.js-user-fullname-change')
const userBirthday = document.querySelector('.js-user-birthday-change')
const userEmail = document.querySelector('.js-user-email-change')
const userRole = document.querySelector('.js-user-role-change')
const cancelChangeUsers = document.querySelectorAll('.js-cancel-user-change')
const userID = document.querySelector('.js-user-id-change')
const btnUpdateUser = document.querySelector('.js-btnChangeUser')

function showFormChangeUser(){
    modalChange.classList.add('open')
}

for(const changeUser of changeUsers){
    changeUser.addEventListener('click', showFormChangeUser)
}

function formatDate(dateString) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const dd = parts[0].padStart(2, '0');
        const mm = parts[1].padStart(2, '0');
        const yyyy = parts[2];
        return `${yyyy}-${mm}-${dd}`;
    }
    return dateString;
}


changeUsers.forEach(function(changeUser){
    changeUser.addEventListener('click', function(){
        const row = this.parentElement.parentElement.parentElement
        modalChange.classList.add('open')
        userID.value = row.querySelector('.user-id').textContent
        userName.value = row.querySelector('.user-fullname').textContent
        const originalDateValue = row.querySelector('.user-birthday').textContent;
        const formattedDate = formatDate(originalDateValue);
        userBirthday.value = formattedDate;
        userEmail.value = row.querySelector('.user-email').textContent
        userRole.value = row.querySelector('.user-role').textContent
    })
})


if(modalChange){
    function hideFormChangeUser(){
        modalChange.classList.remove('open') 
    }
    
    for(const cancelChangeUser of cancelChangeUsers){
        cancelChangeUser.addEventListener('click', hideFormChangeUser)
    }

    btnUpdateUser.addEventListener('click', () => {
        checkUpdateUser() && hideFormChangeUser()
    })
    
    modalChangeClose.addEventListener('click', hideFormChangeUser)
    modalChange.addEventListener('click', hideFormChangeUser)
    modalChangeContainer.addEventListener('click', function(){
        event.stopPropagation()
    })
}

/*Bật tắt form xác nhận xóa*/
const deleteUsers = document.querySelectorAll('.js-deleteUser')
const modalDelete = document.querySelector('.js-modal-deleteUser')   
const modalDeleteClose = document.querySelector('.js-modal-deleteUser-close')
const modalDeleteContainer = document.querySelector('.js-modal-deleteUser-container')
const modalDeleteChooseYes = document.querySelector('.js-user-btn-yes')
const modalDeleteChooseNo = document.querySelector('.js-user-btn-no')
const deleteIdUser = document.querySelector('.js-user-id-delete')

function showFormDeleteUser(){
    modalDelete.classList.add('open')
}

function hideFormDeleteUser(){
    modalDelete.classList.remove('open')
}

deleteUsers.forEach(deleteUser =>{
    deleteUser.addEventListener('click', function(){
        modalDelete.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        deleteIdUser.value = row.querySelector('.user-id').textContent
    })
})

if(modalDelete){
    modalDeleteClose.addEventListener('click', hideFormDeleteUser)
    modalDelete.addEventListener('click', hideFormDeleteUser)
    modalDeleteChooseYes.addEventListener('click', hideFormDeleteUser)
    modalDeleteContainer.addEventListener('click', function(){
    event.stopPropagation()
    })
    modalDeleteChooseNo.addEventListener('click', hideFormDeleteUser)
}

const updateAdmin = document.querySelector('.js-updatePassword-admin')
const modalUpdateAdmin = document.querySelector('.js-modal-updatePasswordAdmin')
const modalUpdateAdminClose = document.querySelector('.js-modal-updatePasswordAdmin-close')
const modalUpdateAdminContainer = document.querySelector('.js-modal-updatePasswordAdmin-container')
const modalUpdateChooseYes = document.querySelector('.js-btnUpdatePasswordAdmin')
const modalUpdateChooseNo = document.querySelector('.js-cancel-password-admin')

function showFormUpdateAdmin() {
    modalUpdateAdmin.classList.add('open')
}

function hideFormUpdateAdmin() {
    modalUpdateAdmin.classList.remove('open')
}

updateAdmin.addEventListener('click', showFormUpdateAdmin)

if (modalUpdateAdmin) {
    modalUpdateAdminClose.addEventListener('click', hideFormUpdateAdmin)
    modalUpdateAdmin.addEventListener('click', hideFormUpdateAdmin)
    modalUpdateChooseYes.addEventListener('click', () => {
        checkUpdatePasswordAdmin() && hideFormUpdateAdmin()
    })
    modalUpdateAdminContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
    modalUpdateChooseNo.addEventListener('click', hideFormUpdateAdmin)
}

const recoverUsers = document.querySelectorAll('.js-recoverUser')
const modalRecover = document.querySelector('.js-modal-recoverUser')
const modalRecoverClose = document.querySelector('.js-modal-recoverUser-close')
const modalRecoverContainer = document.querySelector('.js-modal-recoverUser-container')
const modalRecoverChooseYes = document.querySelector('.js-user-recover-btn-yes')
const modalRecoverChooseNo = document.querySelector('.js-user-recover-btn-no')
const recoverIdUser = document.querySelector('.js-user-id-recover')

function showFormRecoverUser() {
    modalRecover.classList.add('open')
}

function hideFormRecoverUser() {
    modalRecover.classList.remove('open')
}

recoverUsers.forEach(recoverUser => {
    recoverUser.addEventListener('click', function () {
        modalRecover.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        recoverIdUser.value = row.querySelector('.user-id').textContent
    })
})

if (modalRecover) {
    modalRecoverClose.addEventListener('click', hideFormRecoverUser)
    modalRecover.addEventListener('click', hideFormRecoverUser)
    modalRecoverChooseYes.addEventListener('click', hideFormRecoverUser)
    modalRecoverContainer.addEventListener('click', function () {
        event.stopPropagation()
    })
    modalRecoverChooseNo.addEventListener('click', hideFormRecoverUser)
}