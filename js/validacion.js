const registro = document.getElementById('registro');

function validar() {


  let email = document.getElementById('email').value;
  expresion = /\w+@\w+\.+[a-z]/;

  if (!expresion.test(email)) {
    Swal.fire({
      icon: 'error',
      title: "Ingrese un correo valido",
    })
    return false;
  } else {

  }
}

registro.addEventListener('click', validar);