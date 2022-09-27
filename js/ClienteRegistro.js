var inicio = document.getElementById('register');
console.log("nuevo cliente");

function redireccionar(time) {
    setTimeout(function () {
        window.location.href = '/../profile.html';
    }, time);
}



inicio.addEventListener('submit', function (e) {

    e.preventDefault();
    console.log('Me diste un click');
    var datos = new FormData(inicio);

    const options = {
        method: 'POST',
        url: 'https://neighbodfood.azurewebsites.net/api/cliente',
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

    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirm-password').value;
    const check = document.getElementById('terms-yes').checked;


    if (pass1 == "" || pass2 == "") {
        Swal.fire({
            icon: 'error',
            title: "Campo contraseña no puede ir vacio",
        })
    } else if (pass1 != pass2) {
        Swal.fire({
            icon: 'error',
            title: "La contraseñas no coinciden",
        })

    } else {

        if (check == false) {
            Swal.fire({
                icon: 'error',
                title: "Acepte los termino y condiciones",
            })
        } else {
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
                    if (mensaje = "The JSON value could not be converted to System.Int64. Path: $.pK_Cedula | LineNumber: 0 | BytePositionInLine: 25.") {
                        mensaje = "Ingrese un documento con un formato correcto ejemplo: 101915487";
                    }
                    Swal.fire({
                        icon: 'error',
                        title: mensaje,
                    })
                });

            });
        }
    }



});

