const url = '/api/v1/products'
const container = document.querySelector('#container');
const cartButton = document.querySelector('#cart');


async function fetchProducts() {
  console.log('testing1');
  try {
    const {
      data: { products },
    } = await axios.get(url);

    console.log(products + "testing");
    const tempContainerHTML = products
      .map((product) => {
        return `<article class="product">
      <img src="${product.image}" alt="${product.name}" class="img" />
      <footer>
      <h3><p><strong> ${product.name} </strong></p></h3>
      <span> ${product.price} </span>
      <span><button id="cart" productId="${product._id}"> add to cart!</button></span>
      </footer>
      </article>`;
      })
      .join("");
    container.innerHTML = tempContainerHTML;
  } catch (err) {
    console.log(err);
  }
}
cartButton.addEventListener("click", async (e) => {
  e.preventDefault();

  await axios.post(`${url}/addToCart`, {
    id_: id_input.value,
    name: nameInput.value,
    price: priceInput.value,
    image: imageValue
  });

});
fetchProducts()