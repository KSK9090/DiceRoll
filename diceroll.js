let gewählterWürfel;
document.getElementById("würfel4").onclick = function(){
    gewählterWürfel = 4;
}

document.getElementById("würfel6").onclick = function(){
    gewählterWürfel = 6;
}

document.getElementById("würfel8").onclick = function(){
    gewählterWürfel = 8;
}

document.getElementById("würfel10").onclick = function(){
    gewählterWürfel = 10;
}

document.getElementById("würfel12").onclick = function(){
    gewählterWürfel = 12;
}

document.getElementById("würfel20").onclick = function(){
    gewählterWürfel = 20;
}
document.getElementById("würfelButton").onclick = function(){

let würfelgeräusch = new Audio("würfel.mp3");

    würfelgeräusch.currentTime = 0;
    würfelgeräusch.play();

    let inputAnzahl = Number(document.getElementById("inputAnzahl").value);
    let start = 0;
    label1.textContent = "";

    let gesamt = 0;

    while(start < inputAnzahl){

        let wurf = Math.floor(Math.random() * gewählterWürfel) + 1;
        label1.textContent += wurf + " ";
        gesamt += wurf;
        start++;
    }

    if(inputAnzahl == 1){
        label1.innerHTML += "\n--------\n" + gesamt;
    }
/*
    if(inputAnzahl >= 10) {
        label1.innerHTML.u +=
    }
*/
} 



