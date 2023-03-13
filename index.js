function mapDisplay() {
    document.querySelector('.maps-holder').style.display = 'block';
};
function exitDispaly(){
    document.querySelector('.maps-holder').style.display = 'none';
};



let dateObj = new Date();
let day = dateObj.toDateString().substring(0,3);

let elDay = document.getElementById('day');
elDay.innerHTML = 'Today is: ' + day;
function addDay(){
    if (day === 'Sun' || day === 'Mon' || day === 'Fri'){
        day += 'day'
        return elDay.innerHTML = 'Today is: ' + day;
    } else if (day === 'Thu') {
        day = 'Thursday'
        return elDay.innerHTML = 'Today is: ' + day;
    } else if (day === 'Sat'){
        day += 'urday'
        return elDay.innerHTML = 'Today is: ' + day;
    }else {
        day += 'sday'
        return elDay.innerHTML = 'Today is: ' + day;
    }
}
function openOrClose() {
    if (day === 'Sunday'){
    let close = document.getElementById('open').innerHTML = "sorry we are closed :C, come back tommow!"
    return 'close'
    } else{
    let close = document.getElementById('open').innerHTML = "we're open Today! please check hours for more information" 
    return 'open'
    }
}
addDay()
openOrClose()
console.log(day)


let boldFirst = document.getElementById('first');
let boldSecond = document.getElementById('second');
let boldThird = document.getElementById('third');
let boldFourth = document.getElementById('fourth');
let boldFifth = document.getElementById('fifth');
let boldSixth = document.getElementById('sixth');
let boldSeven = document.getElementById('sunday');


const m = new Date();
let dayCheck = m.toDateString().substring(0,3);
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



function googleMaps(){
    window.open('https://www.google.com/maps/place/Sub+A/@32.8090742,-96.9265156,17z/data=!3m1!4b1!4m5!3m4!1s0x864e834d8f41afc7:0x7517c1a5c2e9f94d!8m2!3d32.8090697!4d-96.9243269')
}
function appleMap(){
    window.open('http://maps.apple.com/?q=Sub+A')
}
function goToMenuHtml(){
    if(confirm("Leaving page to view menu")) document.location = 'menu.html';
}