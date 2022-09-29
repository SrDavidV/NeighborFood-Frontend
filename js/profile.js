let id = localStorage.getItem('id');

const nombre = document.getElementById('name');
const profile_name = document.getElementById('profile-name');
const last_name = document.getElementById('profile-surname');
const email = document.getElementById('profile-email');
const phone = document.getElementById('profile-phone');
const id_profile = document.getElementById('profile-id');
const male = document.getElementById('male');
const female = document.getElementById('female');


const peticion = () => {

  const options = {
    method: 'GET',
    url: `https://neighbodfood.azurewebsites.net/api/cliente/getclienteid/${id}`
  };

  axios.request(options).then(function (response) {
    let datos = response.data;
    nombre.textContent = datos.clI_Nombre;
    profile_name.setAttribute('value', datos.clI_Nombre);
    last_name.setAttribute('value', datos.clI_Apellido);
    email.setAttribute('value', datos.clI_Correo);
    phone.setAttribute('value', datos.clI_Telefono);
    id_profile.setAttribute('value', datos.pK_Cedula);

    if (datos.clI_Genero == 'Masculino') {
      male.checked = true;
    } else if (datos.clI_Genero == 'Femenino') {
      female.checked = true;
    }

  }).catch(function (error) {
    console.error(error);
  });
}




window.addEventListener('load', peticion, false);