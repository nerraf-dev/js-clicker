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


const btnDisable = document.getElementById('btn-disable');
btnDisable.addEventListener('click',btnToggle);
function disable(){
    btn.disabled = true;
}

function btnToggle(){
    if (!btn.disabled){
        btn.disabled = true;
        console.log("Enabled");
    } else {
        btn.disabled = false;
        console.log("disabled");
    }
}