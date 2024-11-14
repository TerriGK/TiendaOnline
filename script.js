document.addEventListener('DOMContentLoaded', function () {
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');

  const productosGrids = document.querySelectorAll('.productos-grid');

  productosGrids.forEach((productosGrid, index) => {
    const productos = productosGrid.querySelectorAll('.producto');
    const productosPorFila = 4;
    let posicionActual = 0;

    prevBtns[index].addEventListener('click', function () {
      if (posicionActual > 0) {
        posicionActual--;
        actualizarCarrusel(productosGrid, productos, posicionActual, productosPorFila);
      }
    });

    nextBtns[index].addEventListener('click', function () {
      if (posicionActual < productos.length - productosPorFila) {
        posicionActual++;
        actualizarCarrusel(productosGrid, productos, posicionActual, productosPorFila);
      }
    });

    // Variable para almacenar los productos en el carrito
    let cart = [];

    // Función para actualizar el contador de productos en el carrito
    function updateCartCount() {
      const cartCount = document.getElementById('cart-count');
      cartCount.textContent = cart.length;
    }

    // Función para agregar un producto al carrito
    function addToCart(productName, productPrice) {
      // Creamos un objeto de producto
      const product = {
        name: productName,
        price: parseFloat(productPrice)
      };

      // Añadimos el producto al carrito
      cart.push(product);

      // Actualizamos el contador en el navbar
      updateCartCount();
    }

    // Evento para los botones de "Agregar al carrito"
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-name');
        const productPrice = event.target.getAttribute('data-price');

        addToCart(productName, productPrice);
      });
    });


    function actualizarCarrusel(grid, items, posicion, itemsPorFila) {
      const anchoProducto = items[0].offsetWidth + 20;
      grid.style.transform = `translateX(-${posicion * anchoProducto * itemsPorFila}px)`;
    }
  });
});
