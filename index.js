const API_url = 'https://fakestoreapi.com';
const xhr = new XMLHttpRequest();

function manejadorRequest() {
    if (this.status === 200 && this.readyState === 4) {
        const data = JSON.parse(this.responseText); // Cambiado 'this.response' a 'this.responseText'
        const HTMLresponse = document.querySelector('#app');
        const tpl = data.map(product => `<li>${product.id} -- ${product.title} -- ${product.description} -- ${product.category} -- ${product.image} -- ${product.rating}</li>`); // Cambiado las comillas simples a comillas inversas para la interpolación de cadenas
        HTMLresponse.innerHTML = `<ul>${tpl.join('')}</ul>`; // Agregado '.join('')' para convertir el array en una cadena
        console.log(data);
    }
}

xhr.addEventListener("load", manejadorRequest);
xhr.open('GET', `${API_url}/products`);
xhr.send();
