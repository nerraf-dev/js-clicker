//BG Colour
const btnBG = document.getElementById('btn-bg');
btnBG.addEventListener('click',changeBackground);
function changeBackground() {
    // Generate a random hex colour
    // pick random nunmber from 0 to 255 and convert to hex. Get a value for R, G, B and concatenate as single string.
    // Return hex code (inc #) 
    let min = 0;
    let max = 256;
    let colour = '#';
    for (let i = 0; i < 3; i++){
        randHex = Math.floor(Math.random() * (max - min) + min).toString(16);
        colour = colour + randHex
    }
    document.body.style.background = colour;
 }


 // Counter button
const btn = document.getElementById('btn');
let count = 0;
document.getElementById('counter').innerHTML = count;

btn.addEventListener('click',clickCount);
function clickCount(){
    count += 1;
    console.log(count)
    document.getElementById('counter').innerHTML = count;
    // btn.disabled = true;
    console.log(btn.disabled)
   
}

//Disable counter button
const btnDisable = document.getElementById('btn-disable');
btnDisable.addEventListener('click',btnToggle);

function btnToggle(){
    if (!btn.disabled){
        btn.disabled = true;
        console.log("Disabled");
        btnDisable.innerHTML = "Enable";
    } else {
        btn.disabled = false;
        console.log("Enabled");
        btnDisable.innerHTML = "Disable";
    }
}

const btnDT = document.getElementById('btn-dt');
btnDT.addEventListener('click',disTime);

function disTime(){
    btn.disabled = true;
    console.log("Disabled");
    setTimeout(btnToggle, 3000);
}