
let btnSend = document.querySelector("#btn-send");
let control = true
btnSend.addEventListener('click', function () {
    let name = document.querySelector("#nombreapellido");
    let email = document.querySelector("#correoelectronico");
    let telefono = document.querySelector("#telefono");
    let textarea = document.querySelector("#mensaje");
    let remail = document.getElementById("radioemail");
    let rtel = document.getElementById("radiotelefono");
    let rwhats = document.getElementById("radiowhatsapp");
    let horario = document.getElementById('hora');

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() == '' || name.value.trim().length < 3) {
        document.querySelector("#error-name").innerHTML = "Debes completar el campo Nombre y Apellido";
        control = false;
    }

    if (!emailRegex.test(email.value)) {
        document.querySelector("#error-email").innerHTML = "El email no tiene un formato valido.";
        control = false;
    }


    if (horario.value == "") {
        document.querySelector("#error-hora").innerHTML = `Selecciona un horario de contacto.`;
        control = false;
    }


    if (textarea.value.trim() == '') {
        document.querySelector("#error-message").innerHTML = "Debes completar el campo de texto";
        control = false;
    }


    if (remail.checked == false & rtel.checked == false & rwhats.checked == false ) {
        document.querySelector("#error-contacto").innerHTML = "selecciona una opcion de contacto";
        control = false;
    }
    
    let numer = parseInt(telefono)
    if (!(Number.isInteger(numer))) {
        document.querySelector("#error-telefono").innerHTML = "Debes ingresar un numero valido";
        control = false;
    }


    if (control) { window.open('../index.html', '_self'); }
    control = true;
});