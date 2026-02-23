


let n1=document.getElementById("n1");
let n2=document.getElementById("n2");
let n3=document.getElementById("n3");
let n4=document.getElementById("n4");
let n5=document.getElementById("n5");
let n6=document.getElementById("n6");
let n7=document.getElementById("n7");
let n8=document.getElementById("n8");
let n9=document.getElementById("n9");
let n0=document.getElementById("n0");


const display = document.getElementById("display"); 

const botones = document.querySelectorAll(".button");

document.addEventListener('click', () => {
    const audio = document.getElementById("musicaFondo");
    audio.volume = 0.1;
    audio.play();
}, { once: true });

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valorBoton = boton.innerText; 

        if (valorBoton !== "=" && valorBoton !== "C") {
            display.value += valorBoton;
        }

        if (valorBoton === "C" || valorBoton === "AC") {
            display.value = "";
        }
        if (valorBoton === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }}

            if (valorBoton === "√") {
    display.value = Math.sqrt(parseFloat(display.value));
}
    });
});

