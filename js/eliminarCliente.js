let boton = document.getElementById('primero');
let pass = localStorage.getItem('pass');
let identificador = localStorage.getItem('id');

function redireccionar() {
  $('body').waitMe({
    effect: 'rotation',
    text: 'Espere por favor',
    color: '#283618'
  }
  );
  setTimeout(function () {
    window.location.href = '/../index.html';
  }, 3000);
}


boton.addEventListener('click', async () => {

  const { value: password } = await Swal.fire({
    title: 'Ingrese su contraseña',
    input: 'password',
    inputLabel: 'Contraseña',
    inputPlaceholder: 'Ingrese su contraseña',
    inputAttributes: {
      maxlength: 40,
      autocapitalize: 'off',
      autocorrect: 'off'
    },
    confirmButtonColor: 'red',
    confirmButtonText: 'Eliminar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  })

  if (password == pass) {

    const options = {
      method: 'PATCH',
      url: `https://neighbodfood.azurewebsites.net/api/cliente/estado/${identificador}`,
      data: [{ path: '/CLI_Estado', op: 'replace', value: 'false' }]
    };

    axios.request(options).then(function (response) {
      if (response.status == 204) {

        localStorage.clear();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se elimino la cuenta',
          showConfirmButton: false,
          timer: 1700
        });

        setTimeout(function () {
          redireccionar();
        }, 2000);

      }
    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: "Algo ha salido mal, intentelo nuevamente",
      })
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: "Contraseña Incorrecta",
      confirmButtonColor: '#283618'
    })
  }

});