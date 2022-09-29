const modificar = document.getElementById('save');
const id2 = localStorage.getItem('id');
const formulario = document.getElementById('form');

var patch = new FormData(formulario);

modificar.addEventListener('click', (e) => {

  e.preventDefault();

  Swal.fire({
    title: 'Esta Segur@??',
    text: "No podrá revertir este proceso",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, modificar'
  }).then((result) => {
    if (result.isConfirmed) {
      const options = {
        method: 'PATCH',
        url: `https://neighbodfood.azurewebsites.net/api/cliente/${id2}`,
        data: [
          { path: '/clI_Nombre', op: 'replace', value: patch.get('name') },
          { path: '/clI_Apellido', op: 'replace', value: patch.get('lastname') },
          { path: '/clI_Correo', op: 'replace', value: patch.get('email') },
          { path: '/clI_Telefono', op: 'replace', value: patch.get('phone') },
          { path: '/clI_Genero', op: 'replace', value: patch.get('gender') }
        ]
      };

      axios.request(options).then(function (response) {
        if (response.status == 204) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Perfil modificado correctamente',
            showConfirmButton: false,
            timer: 1700
          });

        }
      }).catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Algo ha Salido mal, intente nuevamente',
          confirmButtonColor: '#283618',
        })
      });
    } else {

    }
  })



});