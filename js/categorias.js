const API_url = 'https://fakestoreapi.com/products';
const indumContainer = document.getElementById('indum-container');
const indufContainer = document.getElementById('induf-container');
const electroContainer = document.getElementById('electro-container');
const joyeriaContainer = document.getElementById('joyeria-container');
const asideContainer = document.querySelector('.aside');
const totalContainer = document.querySelector('.total');
//const para el dropdown
const toggleMenuButton = document.querySelector('.menu-hamburguesa');
const navBar = document.querySelector('.nav_bar');
let totalPrecio = 0;
//menu desplegable
toggleMenuButton.addEventListener('click',() => {navBar.classList.toggle('active')});

// Función para actualizar el aside con el título y precio seleccionados
function actualizarAside(title, price) {
  const item = document.createElement('div');
  item.classList.add('item');

  const itemName = document.createElement('span');
  itemName.textContent = title;

  const itemPrice = document.createElement('span');
  itemPrice.textContent = `$${price}`;

  item.appendChild(itemName);
  item.appendChild(itemPrice);

  asideContainer.appendChild(item);

  // Actualiza el total
  totalPrecio += price;
  totalContainer.textContent = `Total: $${totalPrecio.toFixed(2)}`;
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
