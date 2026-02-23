const display = document.getElementById("display"); 
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const textoVisible = boton.innerText;
        const valorParaCalculo = boton.dataset.valor || textoVisible; 

        if (textoVisible === "C" || textoVisible === "AC") {
            display.value = "";
            return;
        }

        if (textoVisible === "Del") {
            display.value = display.value.slice(0, -1);
            return;
        }

        if (textoVisible === "√") {
            if (display.value !== "") {
                try {
                    display.value = Math.sqrt(eval(display.value));
                } catch {
                    display.value = "Error";
                }
            }
            return;
        }


        if (textoVisible === "=") {
            try {

                let expresion = display.value.replace(/,/g, ".");
                display.value = eval(expresion);
            } catch (error) {
                display.value = "Error";
            }
            return;
        }

        display.value += valorParaCalculo;
    });
});