const url = "/api/v1/products";
const container = document.querySelector(".form");

async function fetchCart() {
    try{
        const {
            data: {cart}
        } = await axios.get(url)

    const containHTML = products
        .map((product) => {

        })

    }catch(err){
        console.log(err);
    }
}

fetchCart()