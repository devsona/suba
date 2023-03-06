let subCloser = document.getElementById('sub-section')
function closeMenu(){
   subCloser.style.display = 'none'
}
function openMenu(){
    subCloser.style.display = 'block'
}
let proSubAdd = document.getElementById('prosub-ingredients')
let proSubIcon = document.getElementById('prosub-add-icon')
let prosubAddContainer = document.getElementById('prosub-add-container')
let proSubSubtractContainer = document.getElementById('prosub-subtract-container')
function openProSubIngredients(){
    proSubAdd.style.display = 'block'
    proSubIcon.style.display = 'none'
    prosubAddContainer.style.display = 'none'
    proSubSubtractContainer.style.display = 'flex'
}
