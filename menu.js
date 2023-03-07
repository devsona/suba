let subCloser = document.getElementById('sub-section')
function closeMenu(){
   subCloser.style.display = 'none'
}
function openMenu(){
    subCloser.style.display = 'block'
}
// prosub ingredients
function openProSubIngredients(){
    let proSubAdd = document.getElementById('prosub-ingredients')
    let prosubAddContainer = document.getElementById('prosub-add-container')
    let proSubSubtractContainer = document.getElementById('prosub-subtract-container')

    proSubAdd.style.display = 'block'
    prosubAddContainer.style.display = 'none'
    proSubSubtractContainer.style.display = 'flex'
}
function closeProSubIngredients(){
    let proSubAdd = document.getElementById('prosub-ingredients')
    let prosubAddContainer = document.getElementById('prosub-add-container')
    let proSubSubtractContainer = document.getElementById('prosub-subtract-container')

    proSubAdd.style.display = 'none'
    prosubAddContainer.style.display = 'flex'
    proSubSubtractContainer.style.display = 'none'
}
// master sub ingredients
function openMasterSubIngredients(){
    let masterSubAddContainer = document.getElementById('master-sub-container-add')
    let masterSubSubtractContainer = document.getElementById('mastersub-subtract')
    let masterSubIngredients = document.getElementById('master-sub-ingredients')

    masterSubAddContainer.style.display = 'none'
    masterSubSubtractContainer.style.display = 'flex'
    masterSubIngredients.style.display = 'block'
}
function closeMasterSubIngreedients(){  
    const masterSubAddContainer = document.getElementById('master-sub-container-add')
    let masterSubSubtractContainer = document.getElementById('mastersub-subtract')
    let masterSubIngredients = document.getElementById('master-sub-ingredients')

    masterSubAddContainer.style.display = 'flex'
    masterSubSubtractContainer.style.display = 'none'
    masterSubIngredients.style.display = 'none'

}
// grinder ingreadints
function openGrinderIngredients(){
    let grinderAdd = document.getElementById('grinder-add-container');
    let grinderSubtract = document.getElementById('grinder-subtract-container')
    let grinderIngredients = document.getElementById('grinder-ingredients')

    grinderAdd.style.display = 'none'
    grinderSubtract.style.display = 'flex'
    grinderIngredients.style.display = 'block'
}
function closeGrinderIngredients(){
    let grinderAdd = document.getElementById('grinder-add-container');
    let grinderSubtract = document.getElementById('grinder-subtract-container')
    let grinderIngredients = document.getElementById('grinder-ingredients')

    grinderAdd.style.display = 'flex'
    grinderSubtract.style.display = 'none'
    grinderIngredients.style.display = 'none'
}
// Super sub ingredients
function openSuperSubIngredients(){
    let superSubAdd = document.getElementById('suppersub-add-container');
    let superSubSubtract = document.getElementById('supersub-subtract-container');
    let superSubIngredients = document.getElementById('supersub-ingredients');

    superSubAdd.style.display = 'none';
    superSubSubtract.style.display = 'flex';
    superSubIngredients.style.display = 'block';
}
function closeSuperSubIngredients(){
    let superSubAdd = document.getElementById('suppersub-add-container');
    let superSubSubtract = document.getElementById('supersub-subtract-container');
    let superSubIngredients = document.getElementById('supersub-ingredients');

    superSubAdd.style.display = 'flex';
    superSubSubtract.style.display = 'none';
    superSubIngredients.style.display = 'none';

}
// star sub ingredients
function openStarSubIngredients() {
    const addContainer = document.getElementById('starsub-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('starsub-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('starsub-subtract-container').style.display = 'flex'
}
function closeStarSubIngredients() {
    const addContainer = document.getElementById('starsub-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('starsub-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('starsub-subtract-container').style.display = 'none'
}