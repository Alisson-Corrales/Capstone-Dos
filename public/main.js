
const fileform = document.querySelector('.file-form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');
const container = document.querySelector('.container');
const sendButton = document.querySelector('#send')
let imageValue //save url/path to img

const url = '/api/v1/products'
sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  await axios.post(`${url}/addProduct`, {
    name: nameInput.value,
    price: priceInput.value,
    image: imageValue
  });

});

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0]
  const formData = new FormData();

  formData.append('image', imageFile);

  try {
    const { data: { image: { src } } } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    console.log(src);
    imageValue = src
  } catch (err) {

    console.log(err);
  }
});




