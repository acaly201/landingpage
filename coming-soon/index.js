
var arrivalTime = new Date(2021, 11, 12, 0, 0, 0).getTime();
 
function time() {
    var thePresentTime = new Date().getTime();
    timeRemaining = arrivalTime - thePresentTime;
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var day = Math.floor(timeRemaining / (d));
    var hour = Math.floor((timeRemaining % (d)) / (h));
    var minute = Math.floor((timeRemaining % (h)) / (m));
    var second = Math.floor((timeRemaining % (m)) / (s));
   document.getElementById("days").innerText = day;
     document.getElementById("hour").innerText = hour;
     document.getElementById("minutes").innerText = minute;
     document.getElementById("seconds").innerText = second;
}

setInterval(function () {
    time()
}, 1000)