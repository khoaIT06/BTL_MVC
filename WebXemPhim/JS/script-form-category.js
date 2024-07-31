const addCategorys = document.querySelectorAll('.js-add-category')
const modal = document.querySelector('.js-modal-addCategory')   
const modalAddClose = document.querySelector('.js-modal-addCategory-close')
const modalContainer = document.querySelector('.js-modal-addCategory-container')
const cancelCategorys = document.querySelectorAll('.js-cancel-category')
const btnAddCategory = document.querySelector('.js-addCategory')

function showFormAddCategory(){
    modal.classList.add('open')
}

function hideFormAddCategory(){
    modal.classList.remove('open')
}

for(const addCategory of addCategorys){
    addCategory.addEventListener('click', showFormAddCategory)
}

for(const cancelCategory of cancelCategorys){
    cancelCategory.addEventListener('click', hideFormAddCategory)
}

modalAddClose.addEventListener('click', hideFormAddCategory)
modal.addEventListener('click', hideFormAddCategory)
btnAddCategory.addEventListener('click', () => {
    checkAddCategory() && hideFormAddCategory()
})
modalContainer.addEventListener('click', function(){
    event.stopPropagation()
})

const changeCategorys = document.querySelectorAll('.js-changeCategory')
const modalChange = document.querySelector('.js-modal-changeCategory')   
const modalChangeClose = document.querySelector('.js-modal-changeCategory-close')
const modalChangeContainer = document.querySelector('.js-modal-changeCategory-container')
const saveChange = document.querySelector('.js-save-changedCategory')
const categoryName = document.querySelector('.js-category-name-change')
const cancelChangeCategorys = document.querySelectorAll('.js-cancel-category-change')
const btnUpdateCategory = document.querySelector('.js-btnChangeCategory')
const idCategoryUpdate = document.querySelector('.js-category-id-change')

function showFormChangeCategory(){
    modalChange.classList.add('open')
}

for(const changeCategory of changeCategorys){
    changeCategory.addEventListener('click', showFormChangeCategory)
}

changeCategorys.forEach(function(changeCategory){
    changeCategory.addEventListener('click', function(){
        const row = this.parentElement.parentElement.parentElement
        modalChange.classList.add('open')
        categoryName.value = row.querySelector('.category-name').textContent
        idCategoryUpdate.value = row.querySelector('.category-id').textContent
    })
})


if(modalChange){
    function hideFormChangeCategory(){
        modalChange.classList.remove('open') 
    }
    
    for(const cancelChangeCategory of cancelChangeCategorys){
        cancelChangeCategory.addEventListener('click', hideFormChangeCategory)
    }
    btnUpdateCategory.addEventListener('click', () => {
        checkUpdateCategory() && hideFormChangeCategory()
    })
    modalChangeClose.addEventListener('click', hideFormChangeCategory)
    modalChange.addEventListener('click', hideFormChangeCategory)
    modalChangeContainer.addEventListener('click', function(){
        event.stopPropagation()
    })
}

/*Bật tắt form xác nhận xóa*/
const deleteCategorys = document.querySelectorAll('.js-deleteCategory')
const modalDelete = document.querySelector('.js-modal-deleteCategory')   
const modalDeleteClose = document.querySelector('.js-modal-deleteCategory-close')
const modalDeleteContainer = document.querySelector('.js-modal-deleteCategory-container')
const modalDeleteChooseYes = document.querySelector('.js-category-btn-yes')
const modalDeleteChooseNo = document.querySelector('.js-category-btn-no')
const idCategoryDelete = document.querySelector('.js-category-id-delete')

function showFormDeleteCategory(){
    modalDelete.classList.add('open')
}

function hideFormDeleteCategory(){
    modalDelete.classList.remove('open')
}

deleteCategorys.forEach(deleteCategory =>{
    deleteCategory.addEventListener('click', function(){
        modalDelete.classList.add('open')
        const row = this.parentElement.parentElement.parentElement
        idCategoryDelete.value = row.querySelector('.category-id').textContent
    })
})

if(modalDelete){
    modalDeleteClose.addEventListener('click', hideFormDeleteCategory)
    modalDelete.addEventListener('click', hideFormDeleteCategory)
    modalDeleteChooseYes.addEventListener('click', hideFormDeleteCategory)
    modalDeleteContainer.addEventListener('click', function(){
    event.stopPropagation()
    })
    modalDeleteChooseNo.addEventListener('click', hideFormDeleteCategory)
}