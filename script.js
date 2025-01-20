// Función para agregar un producto
function addProduct(event) {
    event.preventDefault();
  
    // Obtiene los valores del formulario
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;
  
    if (productName && productPrice && productImage) {
      // Crea el nuevo producto
      const productCard = document.createElement('div');
      productCard.classList.add('card');
      
      const productImageElement = document.createElement('img');
      productImageElement.classList.add('card__image');
      productImageElement.src = productImage;
      productImageElement.alt = productName;
      
      const productTitle = document.createElement('h2');
      productTitle.classList.add('card__title');
      productTitle.textContent = productName;
      
      const productFooter = document.createElement('div');
      productFooter.classList.add('card__footer');
      
      const productPriceElement = document.createElement('span');
      productPriceElement.classList.add('card__price');
      productPriceElement.textContent = `$${productPrice}`;
      
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('card__delete-button');
      deleteButton.setAttribute('aria-label', 'Eliminar');
      deleteButton.innerHTML = '<img src="assets/img/deleteIco.png" alt="Icono Eliminar" class="card__delete-button-ico">';
      
      // Elimina el producto
      deleteButton.addEventListener('click', () => {
        productCard.remove();
      });
      
      // Agrega los elementos al card
      productFooter.appendChild(productPriceElement);
      productFooter.appendChild(deleteButton);
      productCard.appendChild(productImageElement);
      productCard.appendChild(productTitle);
      productCard.appendChild(productFooter);
  
      // Agrega la tarjeta al contenedor
      document.querySelector('.products-section__cards').appendChild(productCard);
  
      // Limpia el formulario
      document.querySelector('.form-section__form').reset();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }
  
// Función para eliminar productos existentes (al cargar la página)
function addDeleteListeners() {
    const deleteButtons = document.querySelectorAll('.card__delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.card');
            productCard.remove();
        });
    });
}

// Asocia la función addProduct al submit del formulario
document.querySelector('.form-section__form').addEventListener('submit', addProduct);

// Llama a la función para agregar los listeners de eliminación cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    addDeleteListeners();  
});
