const options = { method: 'GET', url: 'https://neighbodfood.azurewebsites.net/api/categorias' };

axios.request(options).then(function (response) {
    const datos = response.data;

    let categorias = '';

    datos.forEach(categoria => {
        categorias += `
        <li class="slider__element">
            <a href="#">
                <img src="${categoria.categoriaImagen}" />
                <h3 class="slider__subtitle">${categoria.categoriaNombre}</h3>
            </a>
        </li>
        `;
        document.getElementById('slider').innerHTML = categorias;
    });



}).catch(function (error) {
    console.error(error);
});