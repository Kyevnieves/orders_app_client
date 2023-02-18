const btnAumnt = document.querySelectorAll(".btn-mas");
const btnDecre = document.querySelectorAll(".btn-min");
const btnPedido = document.querySelector(".btn-realizar-pedido");
btnAumnt.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const product = e.target.parentElement;
    const input = product.querySelector(".cantidad");
    input.value++;
    // CONVERSION Y AUMENTO
  });
});

btnDecre.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const product = e.target.parentElement;
    const input = product.querySelector(".cantidad");
    if (input.value == 0) {
      console.log("No se puede disminuir");
    } else {
      input.value--;
    }
    // CONVERSION Y AUMENTO
  });
});

btnPedido.addEventListener("click", () => {
  let alert = document.querySelector(".alert-pedido");
  alert.classList.toggle("show");
  btnPedido.classList.add("display-none");
  listarProductos();
});

const obj = [];
const cardsProduct = document.querySelectorAll(".card-product");
const listarProductos = () => {
  cardsProduct.forEach((card) => {
    let producto = card.querySelector(".producto").textContent;
    let precio = card.querySelector(".precio").textContent;
    let codigo = card.querySelector(".codigo").textContent;
    let cantidad = card.querySelector(".cantidad").value;
    if (cantidad == 0) {
      return;
    }
    let json = {
      producto,
      codigo,
      precio,
      cantidad,
    };
    obj.push(json);
  });
  console.log(obj);
};
