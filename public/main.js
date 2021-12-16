
const fileform = document.querySelector('.file-form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');
const container = document.querySelector('.container');
const sendButton = document.querySelector('#send')
let imageValue //save url/path to img

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const info = await axios.post("/send", {
   name : nameInput.value,
   price : priceInput.value,
   image : imageInput.value
  });
});




