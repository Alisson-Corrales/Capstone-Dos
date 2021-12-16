const url = '/api/v1/products'
const container = document.querySelector('#container');


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
      <p><strong> ${product.name} </strong></p>
      <span> ${product.price} </span>
      </footer>
      </article>`;
      })
      .join("");
    container.innerHTML = tempContainerHTML;
  } catch (err) {
    console.log(err);
  }
}
fetchProducts()