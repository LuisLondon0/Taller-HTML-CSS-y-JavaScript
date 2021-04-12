function validar() {
    var x = 0;
    var input = document.getElementById('nombre');
    if (input.value == '') {
        alert('Por favor agregue un nombre')
        x += 1;
    }
    var input = document.getElementById('apellido');
    if (input.value == '') {
        alert('Por favor agregue un apellido')
        x += 1;
    }
    var input = document.getElementById('correo');
    if (input.value == '') {
        alert('Por favor agregue un correo')
        x += 1;
    }
    var input = document.getElementById('fechaNacimiento');
    if (input.value == '') {
        alert('Por favor agregue una fecha de nacimiento')
        x += 1;
    }
    var input = document.getElementById('genero');
    if (input.value == 'seleccione') {
        alert('Por favor seleccione un genero')
        x += 1;
    }
    var input = document.getElementById('pais');
    if (input.value == '') {
        alert('Por favor agregue un pais')
        x += 1;
    }
    var input = document.getElementById('ciudad');
    if (input.value == '') {
        alert('Por favor agregue una ciudad')
        x += 1;
    }
    var input = document.getElementById('direccion');
    if (input.value == '') {
        alert('Por favor agregue una direccion')
        x += 1;
    }
    var input = document.getElementById('asunto');
    if (input.value == '') {
        alert('Por favor agregue un asunto')
        x += 1;
    }
    var input = document.getElementById('mensaje');
    if (input.value == '') {
        alert('Por favor agregue un mensaje')
        x += 1;
    }

    if (x == 0) {
        alert('Formulario enviado correctamente')
    }
};