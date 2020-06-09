'use strict';
document.write("Llevate tu wbda");
//<!-- k xuxa pasa acá -->
console.log("Toma tu mensaje basura");

let today = new Date();
let formatDate = today.toDateString();
let selectElement= document.getElementById("date");
selectElement.innerHTML = formatDate;