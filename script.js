let tex = document.getElementById('numBinario');
let bot = document.getElementById("continuar");
bot.addEventListener("click", binarioADecimal);

let texd = document.getElementById("numDecimal");
let b = document.getElementById("bot2");
b.addEventListener("click", decABin);

let clear = document.getElementById('Limpiar');
clear.addEventListener('click', function() {
    tex.value = "";
    texd.value = "";
    resultado.innerHTML = "";
    dec.innerHTML = "";
});

// Función de binario a decimal
function binarioADecimal() {
    let binario = tex.value.trim();
    let decimal = 0;

    // Validar si el número es binario
    if (/^[01]+$/.test(binario)) {
        // Convertir binario a decimal
        for (let i = 0; i < binario.length; i++) {
            decimal += Number(binario[i]) * Math.pow(2, binario.length - 1 - i);
        }
        resultado.innerHTML = `El número decimal de ${binario} es: ${decimal}<br />`;
    } else {
        resultado.innerHTML = "No es un número binario válido";
    }
}

// Función para convertir un número decimal a binario
function decABin() {
    let decimal = parseInt(texd.value);
    let binario = "";

    // Proceso para la conversión decimal a binario
    if (decimal >= 0) {
        if (decimal === 0) {
            binario = "0";
        } else {
            while (decimal > 0) {
                binario = (decimal % 2) + binario;
                decimal = Math.floor(decimal / 2);
            }
        }
        dec.innerHTML = `El número binario de este número es: ${binario}`;
    } else {
        dec.innerHTML = "Número no válido";
    }
}
