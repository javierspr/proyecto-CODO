const API_url = 'https://fakestoreapi.com/products';
const productContainer = document.getElementById('product-container');
const asideContainer = document.querySelector('.aside');
const totalContainer = document.querySelector('.total');
const carritoContainer=document.querySelector('.carritoContainer');
const carritoTotal = document.querySelector('.carritoTotal');
let totalPrecio = 0;


//const para el dropdown del menu
const toggleMenuButton = document.querySelector('.menu-hamburguesa');
const navBar = document.querySelector('.nav_bar');


//menu desplegable
toggleMenuButton.addEventListener('click',() => {navBar.classList.toggle('active')});

//Funcion para actualizar aside y carrito flotante
function actualizarAside(title, price) {
  const asideItem = document.createElement('div');
  asideItem.classList.add('item');

  const carritoItem = document.createElement('div');
  carritoItem.classList.add('item');

  const itemName = document.createElement('span');
  itemName.textContent = title;

  const itemPrice = document.createElement('span');
  itemPrice.textContent = `$${price}`;

  asideItem.appendChild(itemName.cloneNode(true));
  asideItem.appendChild(itemPrice.cloneNode(true));

  carritoItem.appendChild(itemName);
  carritoItem.appendChild(itemPrice);

  asideContainer.appendChild(asideItem);
  carritoContainer.appendChild(carritoItem);

  // Agregar botón para restar
  const removeButtonAside = document.createElement('button');
  removeButtonAside.textContent = '-';
  removeButtonAside.addEventListener('click', () => {
    restarAside(asideItem, carritoItem, price);
  });
  asideItem.appendChild(removeButtonAside);

  const removeButtonCarrito = document.createElement('button');
  removeButtonCarrito.textContent = '-';
  removeButtonCarrito.addEventListener('click', () => {
    restarAside(asideItem, carritoItem, price);
  });
  carritoItem.appendChild(removeButtonCarrito);

  // Actualiza el total
  totalPrecio += price;
  totalContainer.textContent = `Total: $${totalPrecio.toFixed(2)}`;
  carritoTotal.textContent = `Total: $${totalPrecio.toFixed(2)}`;
}

function restarAside(asideItem, carritoItem, price) {
  // Elimina el elemento del aside
  asideContainer.removeChild(asideItem);

  // Elimina el elemento del carrito
  carritoContainer.removeChild(carritoItem);

  // Actualiza el total restando el precio
  totalPrecio -= price;
  totalContainer.textContent = `Total: $${totalPrecio.toFixed(2)}`;
  carritoTotal.textContent = `Total: $${totalPrecio.toFixed(2)}`;
}


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
      price.textContent = `$${product.price.toFixed(2)}`;

      const addButton = document.createElement('button');
      addButton.textContent = '+';

      addButton.addEventListener('click', () => {
        actualizarAside(product.title, product.price);
      });

      const buttons = document.createElement('div');
      buttons.classList.add('botones');
      buttons.appendChild(addButton);

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

  // Seleccionar elementos necesarios
const toggleCartButton = document.getElementById('toggleCartButton');
const carritoDropdown = document.querySelector('.carrito-dropdown');

// Variable para controlar el estado del carrito
let carritoAbierto = false;

// Agregar un evento de clic al botón del carrito
toggleCartButton.addEventListener('click', () => {
  // Cambiar el estado del carrito
  carritoAbierto = !carritoAbierto;

  // Mostrar u ocultar el carrito
  if (carritoAbierto) {
    carritoDropdown.style.display = 'block';
  } else {
    carritoDropdown.style.display = 'none';
  }
});