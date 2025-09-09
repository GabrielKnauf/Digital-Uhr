let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

function liveUhr(){
const date = new Date();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");

hoursElement.textContent = hours
minutesElement.textContent = minutes
secondsElement.textContent = seconds
}
liveUhr()
setInterval( liveUhr, 1000);