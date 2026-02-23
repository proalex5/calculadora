const display = document.getElementById("display"); 
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const textoVisible = boton.innerText;
        const valorParaCalculo = boton.dataset.valor || textoVisible; 

        // 1. Lógica para BORRAR
        if (textoVisible === "C" || textoVisible === "AC") {
            display.value = "";
            return; // Detenemos aquí para que no escriba "C" en la pantalla
        }

        // 2. Lógica para la RAÍZ
        if (textoVisible === "√") {
            if (display.value !== "") {
                display.value = Math.sqrt(eval(display.value));
            }
            return;
        }

        // 3. Lógica para el IGUAL
        if (textoVisible === "=") {
            try {
                // Reemplazamos la coma por punto por si el usuario la usó
                let expresion = display.value.replace(/,/g, ".");
                display.value = eval(expresion);
            } catch (error) {
                display.value = "Error";
            }
            return;
        }

        // 4. Lógica para escribir en pantalla (Números y operadores como ** o *)
        // Solo añadimos si no es uno de los botones de control anteriores
        display.value += valorParaCalculo;
    });
});