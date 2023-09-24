const API_url = 'https://fakestoreapi.com/products'; // Cambia la URL de la API según sea necesario
const productContainer = document.getElementById('product-container');

// Realiza la solicitud a la API
fetch(API_url)
  .then(response => response.json())
  .then(data => {
    // Itera sobre los productos y crea tarjetas para cada uno
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.classList.add('img__producto');
      img.src = product.image;
      img.alt = product.title;

      const title = document.createElement('span');
      title.classList.add('descripcion__producto');
      title.textContent = product.title;

      const price = document.createElement('span');
      price.classList.add('descripcion__producto');
      price.textContent = `$${product.price}`;

      const buttons = document.createElement('div');
      buttons.classList.add('botones');

      // Puedes agregar botones y acciones aquí, si es necesario

      // Agrega los elementos al contenedor de productos
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(buttons);

      productContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });