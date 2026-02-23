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

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const textoVisible = boton.innerText;
        // Si el botón tiene data-valor (como el de potencia), usamos ese. 
        // Si no, usamos el texto normal.
        const valorParaCalculo = boton.dataset.valor || textoVisible; 

        if (textoVisible !== "=" && textoVisible !== "C") {
            // Aquí añadimos el valor "oculto" (**) al display
            display.value += valorParaCalculo;
        }

        if (textoVisible === "C" || textoVisible === "AC") {
            display.value = "";
        }

        if (textoVisible === "=") {
            try {
                // eval() reconocerá el "**" que se insertó
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }

        if (textoVisible === "√") {
            // Nota: Para la raíz, es mejor calcularlo sobre el valor actual antes de añadir el símbolo
            display.value = Math.sqrt(parseFloat(display.value));
        }
    });
});