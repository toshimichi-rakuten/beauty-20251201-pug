var today = new Date();
var m = today.getMonth() + 1;
var d = today.getDate();

var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
var m2 = tomorrow.getMonth() + 1;
var d2 = tomorrow.getDate();

document.getElementById("date_m1").innerHTML = m;
document.getElementById("date_d1").innerHTML = d;
document.getElementById("date_m2").innerHTML = m2;
document.getElementById("date_d2").innerHTML = d2;
