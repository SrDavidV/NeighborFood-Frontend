const id = localStorage.getItem('id');
const boton = document.getElementById('inicio-sesion');
const header = document.querySelector('.header');
const hamburguer_menu = document.querySelector('.button-container');
const menu_button1 = document.getElementById('boton1');
const menu_button2 = document.getElementById('boton2');

if (id != null) {
  const peticion = {
    method: 'GET',
    url: `https://neighbodfood.azurewebsites.net/api/cliente/getclienteid/${id}`
  };

  axios.request(peticion).then(function (response) {
    let datos = response.data;
    var botonEnd = document.createElement("a");
    botonEnd.classList.add("button");
    botonEnd.textContent = "Cerrar Sesión";
    header.removeChild(boton);
    hamburguer_menu.removeChild(menu_button1);
    hamburguer_menu.removeChild(menu_button2);
    hamburguer_menu.appendChild(botonEnd);
    var name = document.createElement("h1");
    name.classList.add('usuario-nombre');
    name.textContent = `Hola! ${datos.clI_Nombre}`;
    header.appendChild(name);


    botonEnd.addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });

  }).catch(function (error) {
    console.error(error);
  });




} else {

}

