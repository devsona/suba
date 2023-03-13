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
// HOAGIE
function openHoagieSubIngredients() {
    const addContainer = document.getElementById('hoagie-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('hoagie-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('hoagie-subtract-container').style.display = 'flex'
}
function closeHoagieSubIngredients() {
    const addContainer = document.getElementById('hoagie-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('hoagie-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('hoagie-subtract-container').style.display = 'none'
}
// combination
function openCombinationSubIngredients() {
    const addContainer = document.getElementById('combination-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('combination-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('combination-subtract-container').style.display = 'flex'
}
function closeCombinationSubIngredients() {
    const addContainer = document.getElementById('combination-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('combination-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('combination-subtract-container').style.display = 'none'
}
// Tuna & Cheese
function openTunaSubIngredients() {
    const addContainer = document.getElementById('tuna-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('tuna-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('tuna-subtract-container').style.display = 'flex'
}
function closeTunaSubIngredients() {
    const addContainer = document.getElementById('tuna-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('tuna-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('tuna-subtract-container').style.display = 'none'
}
// Veggie
function openVeggieSubIngredients() {
    const addContainer = document.getElementById('veggie-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('veggie-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('veggie-subtract-container').style.display = 'flex'
}
function closeVeggieSubIngredients() {
    const addContainer = document.getElementById('veggie-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('veggie-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('veggie-subtract-container').style.display = 'none'
}
// subburder 
function openSubBurgerIngredients() {
    const addContainer = document.getElementById('subburger-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('subburger-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('subburger-subtract-container').style.display = 'flex'
}
function closeSubBurgerIngredients() {
    const addContainer = document.getElementById('subburger-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('subburger-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('subburger-subtract-container').style.display = 'none'
}
// cheese steak 
function openCheeseSteakIngredients() {
    const addContainer = document.getElementById('cheeseSteak-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('cheeseSteak-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('cheeseSteak-subtract-container').style.display = 'flex'
}
function closeCheeseSteakIngredients() {
    const addContainer = document.getElementById('cheeseSteak-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('cheeseSteak-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('cheeseSteak-subtract-container').style.display = 'none'
}
// fajita sub
function openFajitaIngredients() {
    const addContainer = document.getElementById('fajita-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('fajita-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('fajita-subtract-container').style.display = 'flex'
}
function closeFajitaIngredients() {
    const addContainer = document.getElementById('fajita-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('fajita-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('fajita-subtract-container').style.display = 'none'
}
// Turkey & Bacon
function openTurkeyIngredients() {
    const addContainer = document.getElementById('turkey-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('turkey-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('turkey-subtract-container').style.display = 'flex'
}
function closeTurkeyIngredients() {
    const addContainer = document.getElementById('turkey-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('turkey-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('turkey-subtract-container').style.display = 'none'
}
// GRILLED CHIKEN
function openGrilledIngredients() {
    const addContainer = document.getElementById('grilled-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('grilled-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('grilled-subtract-container').style.display = 'flex'
}
function closeGrilledIngredients() {
    const addContainer = document.getElementById('grilled-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('grilled-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('grilled-subtract-container').style.display = 'none'
}
// Hot links
function openHotIngredients() {
    const addContainer = document.getElementById('hot-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('hot-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('hot-subtract-container').style.display = 'flex'
}
function closeHotIngredients() {
    const addContainer = document.getElementById('hot-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('hot-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('hot-subtract-container').style.display = 'none'
}
// meat ball
function openMeatIngredients() {
    const addContainer = document.getElementById('meat-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('meat-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('meat-subtract-container').style.display = 'flex'
}
function closeMeatIngredients() {
    const addContainer = document.getElementById('meat-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('meat-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('meat-subtract-container').style.display = 'none'
}
// pizza sub
function openPizzaIngredients() {
    const addContainer = document.getElementById('pizza-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('pizza-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('pizza-subtract-container').style.display = 'flex'
}
function closePizzaIngredients() {
    const addContainer = document.getElementById('pizza-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('pizza-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('pizza-subtract-container').style.display = 'none'
}
// gyro or sub 
function openGyroIngredients() {
    const addContainer = document.getElementById('gyro-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('gyro-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('gyro-subtract-container').style.display = 'flex'
}
function closeGyroIngredients() {
    const addContainer = document.getElementById('gyro-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('gyro-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('gyro-subtract-container').style.display = 'none'
}
// side 
function openExtraDetails(){
    const details = document.getElementById('menu-list-subs')
    details.style.display = 'flex'
}
// wings opener
let wingsCloser = document.getElementById('wings-section')
function closeWingsMenu(){
   wingsCloser.style.display = 'none'
}
function openWingsMenu(){
    wingsCloser.style.display = 'block'
}
// wings flavor 
function openWingsIngredients() {
    const addContainer = document.getElementById('wings-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('wings-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('wings-subtract-container').style.display = 'flex'
}
function closeWingsIngredients() {
    const addContainer = document.getElementById('wings-add-container').style.display = 'flex';
    const ingredientsContainer = document.getElementById('wings-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('wings-subtract-container').style.display = 'none';
}
// rice opener
let riceCloser = document.getElementById('rice-section')
function openRiceMenu(){
    riceCloser.style.display = 'block'
}
function closeRiceMenu(){
    riceCloser.style.display = 'none'
}

// fried rice
function openFriedIngredients() {
    const addContainer = document.getElementById('fried-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('fried-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('fried-subtract-container').style.display = 'flex'
}
function closeFriedIngredients() {
    const addContainer = document.getElementById('fried-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('fried-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('fried-subtract-container').style.display = 'none'
}
// fried rice cbs
function openFriedCBSIngredients() {
    const addContainer = document.getElementById('friedCBS-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('friedCBS-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('friedCBS-subtract-container').style.display = 'flex'
}
function closeFriedCBSIngredients() {
    const addContainer = document.getElementById('friedCBS-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('friedCBS-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('friedCBS-subtract-container').style.display = 'none'
}
// steam rice
function openSteamIngredients() {
    const addContainer = document.getElementById('steam-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('steam-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('steam-subtract-container').style.display = 'flex'
}
function closeSteamIngredients() {
    const addContainer = document.getElementById('steam-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('steam-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('steam-subtract-container').style.display = 'none'
}
// stean rice cbs
function openSteamCBSIngredients() {
    const addContainer = document.getElementById('steamCBS-add-container').style.display = 'none'
    const ingredientsContainer = document.getElementById('steamCBS-ingredients').style.display = 'block';
    const subtractContainer = document.getElementById('steamCBS-subtract-container').style.display = 'flex'
}
function closeSteamCBSIngredients() {
    const addContainer = document.getElementById('steamCBS-add-container').style.display = 'flex'
    const ingredientsContainer = document.getElementById('steamCBS-ingredients').style.display = 'none';
    const subtractContainer = document.getElementById('steamCBS-subtract-container').style.display = 'none'
}