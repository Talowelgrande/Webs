document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-container");

  fetch("./datos/imagenes.json")
    .then(response => response.json())
    .then(pizzas => {
      pizzas.forEach(pizza => {
        // Crear columna para 2x2
        const col = document.createElement("div");
        col.classList.add("col-md-6");

        // Tarjeta horizontal
        col.innerHTML = `
          <div class="card h-100 shadow-sm flex-row">
            <img src="${pizza.imagen}" 
                 class="img-fluid" 
                 style="width: 200px; object-fit: cover;" 
                 alt="${pizza.nombre}">
            <div class="card-body">
              <!-- Título más grande -->
              <h5 class="card-title fw-bold fs-2">${pizza.nombre}</h5>
              
              <!-- Descripción -->
              <p class="card-text">${pizza.descripcion}</p>
              
              <!-- Precio resaltado -->
              <span class="fw-bold text-danger fs-4">${pizza.precio}</span>
            </div>
          </div>
        `;

        contenedor.appendChild(col);
      });
    })
    .catch(error => console.error("Error al cargar las pizzas:", error));
});
