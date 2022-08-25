var inicio = document.getElementById('register');
console.log("nuevo cliente");

function redireccionar(time) {
    setTimeout(function () {
        window.location.href = '/../index.html';
    }, time);
}

inicio.addEventListener('submit', function (e) {

    e.preventDefault();
    console.log('Me diste un click');
    var datos = new FormData(inicio);

    const options = {
        method: 'POST',
        url: 'https://localhost:44324/api/cliente',
        data: {
            pK_Cedula: datos.get('num_document'),
            clI_Nombre: datos.get('nombre'),
            clI_Apellido: datos.get('apellido'),
            clI_Password: datos.get('password'),
            clI_Telefono: datos.get('telefono'),
            clI_Ciudad: datos.get('localidad'),
            clI_Correo: datos.get('email'),
            clI_Genero: datos.get('gender')
        }
    };

    axios.request(options).then(function (response) {
        if (response.status == 200) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registrado Correctamente',
                showConfirmButton: false,
                timer: 1700
            });

            redireccionar(2000);

        } else if (response.status == 400) {
            console.log('usuario no nuevo')
        }

    }).catch(function (error) {
        var errores = error.response.data;
        console.log(errores)
        errores.forEach(item => {
            var mensaje = item;
            Swal.fire({
                icon: 'error',
                title: mensaje,
            })
        });

    });

});

