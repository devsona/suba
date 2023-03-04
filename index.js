
function mapDisplay() {
    document.querySelector('.maps-holder').style.display = 'block';
};
function exitDispaly(){
    document.querySelector('.maps-holder').style.display = 'none';
};

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getDay() - 2;
let year = dateObj.getUTCFullYear();
newdate = month + "/" + day + "/" + year;

let elDay = document.getElementById('day');
elDay.innerHTML = 'Today is: ' + newdate;
function openOrClose() {
    if (day == 7){
    let close = document.getElementById('open').innerHTML = "sorry we are closed :C, come back tommow!"
    return 'close'
    } else{
    let close = document.getElementById('open').innerHTML = "we're open Today! please check hours for more information" 
    return 'open'
    }
}
console.log(openOrClose());
let boldFirst = document.getElementById('first');
let boldSecond = document.getElementById('second');
let boldThird = document.getElementById('third');
let boldFourth = document.getElementById('fourth');
let boldFifth = document.getElementById('fifth');

function ifDayTurnBolded(){
    if (day === 1){
        boldFirst.style.fontWeight = 'bold';
    } else if (day === 2){
        boldSecond.style.fontWeight = 'bold'
    } else if (day === 3) {
        boldThird.style.fontWeight = 'bold'
    } else if (day === 4){
        boldFourth.style.fontWeight = 'bold'
    } else if (day === 5){
        boldFifth.style.fontWeight = 'bold'
    } else {
        return 'please wait til function is done'
    }
}
ifDayTurnBolded();