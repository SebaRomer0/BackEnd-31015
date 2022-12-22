let carrito = [];
let total = 0;

function add(productID, price) {
  console.log(productID, price);
  carrito.push(productID);
  total = total + price;
  document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}

async function pay() {
  const productList = await (
    await fetch("/api/pay", {
      method: "post",
      body: JSON.stringify(carrito),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
}

//-----
function displayProducts(productList) {
  let productsHTML = "";
  productList.forEach((element) => {
    productsHTML += `<div class="product-container text-center">
            <h1>${element.nombre}</h1>
            <h3>${element.descripcion}</h3>
            <h3> Codigo ${element.codigo}</h3>
            <img src="${element.foto}" />
            <h1>$${element.precio}</h1>
            <h3>Stock ${element.stock}</h3>
            <button class="button-add" onclick="add(${element.id}, ${element.precio})">Agregar</button>
        </div>`;
  });
  document.getElementById("page-content").innerHTML = productsHTML;
}

window.onload = async () => {
  const productList = await (await fetch("/api/carrito")).json();
  console.log(productList);
  displayProducts(productList);
};
