
function mapDisplay() {
    document.querySelector('.maps-holder').style.display = 'block';
};
function exitDispaly(){
    document.querySelector('.maps-holder').style.display = 'none';
};

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.toDateString().substring(0,3);
let year = dateObj.getUTCFullYear();
newdate = day + "/" + year;

let elDay = document.getElementById('day');
elDay.innerHTML = 'Today is: ' + newdate;
function openOrClose() {
    if (day === 'Sunday'){
    let close = document.getElementById('open').innerHTML = "sorry we are closed :C, come back tommow!"
    return 'close'
    } else if (day === 'Tue'){
    return newdate += 'sday';
    }else{
    let close = document.getElementById('open').innerHTML = "we're open Today! please check hours for more information" 
    return 'open'
    }
}
function finishDay(){
    if(day === 'Mon' || day === 'Sun'){
    return day += 'day';
    }else {
    return   day += 'sday'
    }
}
finishDay();
console.log(finishDay());
console.log(openOrClose());


let boldFirst = document.getElementById('first');
let boldSecond = document.getElementById('second');
let boldThird = document.getElementById('third');
let boldFourth = document.getElementById('fourth');
let boldFifth = document.getElementById('fifth');
let boldSixth = document.getElementById('sixth');
let boldSeven = document.getElementById('sunday');


const m = new Date();
let dayCheck = m.toDateString().substring(0,3);
console.log(dayCheck);
function ifDayTurnBolded(){
    if (dayCheck === 'Mon'){
        boldFirst.style.fontWeight = 'bold';
    } else if (dayCheck === 'Tue'){
        boldSecond.style.fontWeight = 'bold';
    } else if (dayCheck === 'Wed') {
        boldThird.style.fontWeight = 'bold';
    } else if (dayCheck === 'Thu'){
        boldFourth.style.fontWeight = 'bold';
    } else if (dayCheck === 'Fri'){
        boldFifth.style.fontWeight = 'bold';
    } else if (dayCheck === 'Sat') {
        boldSixth.style.fontWeight = 'bold';
    } else {
        boldSeven.style.fontWeight = 'bold';
    }
}
ifDayTurnBolded();

function goToMenuHtml(){
    if(confirm("Leaving page to view menu")) document.location = 'menu.html';
}
