

function wynik(){
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById('sixth');
let seventh = document.getElementById('seventh');
let eighth = document.getElementById('eighth');
let nineth = document.getElementById('nineth');
let tenth = document.getElementById('tenth');

let koniec = 0;
if(first.checked == true){
   koniec = koniec + 1;
}

if(second.checked == true){
   koniec = koniec + 1;
}

if(third.checked == true){
   koniec = koniec + 1;
}

if(fourth.checked == true){
   koniec = koniec + 1;
}

if(fifth.checked == true){
   koniec = koniec + 1;
}

if(sixth.checked == true){
   koniec = koniec + 1;
}

if(seventh.checked == true){
   koniec = koniec + 1;
}

if(eighth.checked == true){
   koniec = koniec + 1;
}

if(nineth.checked == true){
   koniec = koniec + 1;
}

if(tenth.checked == true){
   koniec = koniec + 1;
}
document.getElementById('check').innerHTML = "twój wynik to " + koniec * 10 + "%";
}



    function button(){
       /*  let name = document.getElementById('name').value;
         console.log(name);
         if(name == ''){
            document.querySelector("h2").innerHTML = "Musisz wpisać imię, aby zacząć";
         }else{
            document.querySelector("h2").innerHTML = "Miło Cię widzieć " + name;
         }
         */
      }
