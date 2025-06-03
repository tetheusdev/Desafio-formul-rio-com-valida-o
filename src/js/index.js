const campos = document.querySelectorAll('.campo');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let algumVazio = false;

    campos.forEach(function (campo) {
        if (campo.value.trim() === '') {
            algumVazio = true;
        }
    });

    if (algumVazio) {
        campos.forEach(function (campo) {
            campo.classList.add('negado');
        });

        document.querySelectorAll('.hidden').forEach(texto => {
            texto.classList.add('negadoS');
        });

        campos.forEach(campo => {
            if (!campo.classList.contains('nao-mudar')) {
                campo.classList.add('adaptadcao')
            }
        })
    } else {
        campos.forEach(function (campo) {
            campo.classList.add('correto');
        });
    }
});
