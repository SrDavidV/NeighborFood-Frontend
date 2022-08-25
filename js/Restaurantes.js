const options1 = { method: 'GET', url: 'https://localhost:44324/api/restaurantes' };

axios.request(options1).then(function (response) {
    let restaurantes = response.data;

    let res = '';

    restaurantes.forEach(resta => {
        res += `
        <li class="slider-two__element">
            <a href="#">
                <img src="${resta.restA_Imagen}" />
                <div class="slider-two__info">
                    <h3 class="slider-two__subtitle">${resta.restA_Nombre}</h3>
                    <span class="slider-two__address">${resta.sedes[0].seD_Direccion}</span>
                </div>
            </a>
        </li>
        `

        document.getElementById('highlights-slider').innerHTML = res;
    });



}).catch(function (error) {
    console.error(error);
});