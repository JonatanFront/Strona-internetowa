let name = prompt("Podaj swoje imię");
let head = document.getElementById("headerr");
let name2 = name.charAt(0).toUpperCase() + name.slice(1);
if(name.length > 0){
   head.innerHTML = "Cześć " + name2;
}else {
   head.innerHTML = "Witaj Anonimie";
}
console.log(name);


function startTime() {
   var today = new Date();
   var hr = today.getHours();
   var min = today.getMinutes();
   var sec = today.getSeconds();
   min = checkTime(min);
   sec = checkTime(sec);
   document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;

   
   var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
   if (i < 10) {
       i = "0" + i;
   }
   return i;
}

function send() {
   alert("Wysłano, dziękujemy");
}
