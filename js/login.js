formulario = document.getElementById('login__form');
boton = document.querySelector('.iniciar');


function redireccionar() {
  $('body').waitMe({
    effect: 'rotation',
    text: 'Espere por favor',
    color: '#283618'
  }
  );
  setTimeout(function () {
    window.location.href = '/../html/profile.html';
  }, 3000);
}


boton.addEventListener('click', (e) => {

  e.preventDefault();
  var datos = new FormData(formulario);

  if (datos.get('email') == "") {
    Swal.fire({
      icon: 'error',
      title: 'Se requiere el correo electronico',
      confirmButtonColor: '#283618',
    })
    return false;
  }

  if (datos.get('password') == "") {
    Swal.fire({
      icon: 'error',
      title: 'Se requiere la contraseña',
      confirmButtonColor: '#283618',
    })
    return false;
  }


  const options = {
    method: 'POST',
    url: 'https://neighbodfood.azurewebsites.net/api/cliente/login',
    data: { clI_Correo: datos.get('email'), clI_Password: datos.get('password') }
  };

  axios.request(options).then(function (response) {


    if (response.status == 200) {
      redireccionar();
      let data = response.data;
      let cedula = data.pK_Cedula;

      localStorage.setItem("id", cedula);
    }


  }).catch(function (error) {

    if (error.response.status == 404) {
      Swal.fire({
        icon: 'error',
        title: 'El usuario no se encontro',
        confirmButtonColor: '#283618',
      })


    } else if (error.response.status == 400) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario y/o contraseña incorrectos',
        confirmButtonColor: '#283618',
      })
    }

  });



});