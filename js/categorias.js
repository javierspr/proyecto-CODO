const API_url = 'https://fakestoreapi.com/products';
const indumContainer = document.getElementById('indum-container');
const indufContainer = document.getElementById('induf-container');
const electroContainer = document.getElementById('electro-container');
const joyeriaContainer = document.getElementById('joyeria-container');
const asideContainer = document.querySelector('.aside');
const totalContainer = document.querySelector('.total');
const carritoContainer=document.querySelector('.carritoContainer');
const carritoTotal = document.querySelector('.carritoTotal');
let totalPrecio = 0;

//const para el dropdown
const toggleMenuButton = document.querySelector('.menu-hamburguesa');
const navBar = document.querySelector('.nav_bar');

//menu desplegable
toggleMenuButton.addEventListener('click',() => {navBar.classList.toggle('active')});

function actualizarAside(title, price) {
  const asideItem = document.createElement('div');
  asideItem.classList.add('item');

  const carritoItem = document.createElement('div');
  carritoItem.classList.add('item');

  const itemName = document.createElement('span');
  itemName.textContent = title;

  const itemPrice = document.createElement('span');
  itemPrice.textContent = `....$${price}`;

  asideItem.appendChild(itemName.cloneNode(true));  // Clona los nodos para aside y carrito
  asideItem.appendChild(itemPrice.cloneNode(true));

  carritoItem.appendChild(itemName);
  carritoItem.appendChild(itemPrice);

  asideContainer.appendChild(asideItem);
  carritoContainer.appendChild(carritoItem);

  // Actualiza el total
  totalPrecio += price;
  totalContainer.textContent = `Total: $${totalPrecio.toFixed(2)}`;
  carritoTotal.textContent = `Total: $${totalPrecio.toFixed(2)}`;
}

// Realiza la solicitud a la API
fetch(API_url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Itera sobre los productos y crea tarjetas para cada uno
    data.forEach(product => {
        // Itera sobre los productos y crea tarjetas para indumentaria masculina
    if (product.category === "men's clothing") { 
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

      indumContainer.appendChild(card);
    }
    // Itera sobre los productos y crea tarjetas para indumentaria femenina
    if (product.category === "women's clothing") { 
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
  
        indufContainer.appendChild(card);
      }
     // Itera sobre los productos y crea tarjetas para indumentaria electronica
     if (product.category === "electronics") { 
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
  
        electroContainer.appendChild(card);
      }
       // Itera sobre los productos y crea tarjetas para joyas
     if (product.category === "jewelery") { 
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
  
        joyeriaContainer.appendChild(card);
      }
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });

 // Funcionalidad del carrito flotante
 const toggleCartButton = document.getElementById('toggleCartButton');
 const carritoDropdown = document.querySelector('.carrito-dropdown');
 
 let carritoAbierto = false;
 
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