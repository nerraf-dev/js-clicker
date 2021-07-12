//Get button from  ID
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');

//Add eventListener to wait for btn click

btnOne.addEventListener('click', function(event){
    //Prevent page from reloading on submit
    event.preventDefault();
    console.log("clicked!")
});

btnTwo.addEventListener('click',changeBackground);

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
 
