function enviarDatos(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del formulario

  const idProduct = document.getElementById("codigoBarras").value;
  const name = document.getElementById("nombreProducto").value;
  const quantityAvalaible = document.getElementById("cantidadDisponible").value;
  const category = document.getElementById("categoria").value;
  const state = document.getElementById("estado").value;
  const price = document.getElementById("precio").value;
  const packaging = document.getElementById("presentacion").value;
  const brand = document.getElementById("marca").value;

  // Crear objeto JSON con los datos del formulario
  const data = {
    idProduct: idProduct,
    name: name,
    quantityAvalaible: quantityAvalaible,
    category: category,
    state: state,
    price: price,
    describe: "Sin descripcion",
    packaging: packaging,
    brand: brand,
    discount: 0,
    img_src: "Sin imagen",
  };

  // Enviar los datos a la API usando fetch
  fetch("http://localhost:8080/Product/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
      return response.text();
    })
    .then((text) => {
      alert(text); // Muestra el cuerpo de la respuesta como texto
    })
    .catch((error) => {
      alert("Error: " + error);
    });
}
