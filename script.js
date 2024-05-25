document.addEventListener('DOMContentLoaded', function() {
    // Función para calcular el IMC
    function calcularIMC() {
        // Obtener los valores ingresados en los campos de peso y altura
        var peso = parseFloat(document.getElementById('peso').value);
        var altura = parseFloat(document.getElementById('altura').value);

        // Verificar que se ingresaron valores válidos
        if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
            // Calcular el IMC
            var imc = peso / Math.pow(altura, 2);

            // Mostrar el resultado del IMC debajo del botón Calcular
            var resultadoIMC = document.getElementById('resultado-imc');
            resultadoIMC.textContent = "Tu índice de masa corporal es: " + imc.toFixed(2);
        } else {
            // Mostrar un mensaje de error si los valores ingresados no son válidos
            var resultadoIMC = document.getElementById('resultado-imc');
            resultadoIMC.textContent = "Por favor, ingresa valores válidos para peso y altura.";
        }
    }

    // Obtener el botón de calcular y agregar un event listener para llamar a la función calcularIMC cuando se haga clic en él
    var btnCalcularIMC = document.getElementById('btn-calcular-imc');
    btnCalcularIMC.addEventListener('click', calcularIMC);
});
