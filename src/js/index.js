const campos = document.querySelectorAll('.campo');
const textos = document.getElementsByClassName('span');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let algumVazio = false;

    campos.forEach(function(campo) {
        if (campo.value.trim() === '') {
            algumVazio = true;
        }
    });

    if (algumVazio) {
        campos.forEach(function(campo) {
            campo.classList.add('negado');
        });

        Array.from(textos).forEach(function(texto) {
            texto.classList.add('negadoS');
        });
    } else {
        campos.forEach(function(campo) {
            campo.classList.add('correto');
        });
    }
});
