const PRODUCT_URL = "https://fakestoreapi.com/products";
const imagesContainer = document.querySelector(".imagesContainer")
//const fetchProducts = (url)=>{
//    fetch(url)
//    .then((Response)=>(Response.json()))
//    .then((data)=>{console.log(data)})
//    .catch((error)=> console.log(error))
//}

//const fetchProducts = async(url)=>{
    //try{
        //const response = await fetch(url);
        //const data = await response.json();
        //console.log(data)

    //}catch (error) {
        //console.log(error)
   // }
//}
//fetchProducts(PRODUCT_URL)

const fetchProducts = async(url)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        allProducts = (data);
        displayProducts(data);
    }catch (error) {
        console.log(error)
    }
};
fetchProducts(PRODUCT_URL);

const displayProducts = (products)=>{
    imagesContainer.innerHTML="";
    products.forEach((product)=>{
        const {image,category,price}= product;
        const productCard = document.createElement("div");
        productCard.innerHTML= `
            <div>
                <img src = "${image}" alt="">
                <div class = categoryAndPrice>
                    <h4>${title}</h4>
                    <p>${category}</p>
                    <span>${price}</span>
                </div>
            </div>

        `;
        productCard.classList.add("categoryAndPrice")
        productCard.style.backgroundColor = "green"
        imagesContainer.appendChild(productCard);
    });
};

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    displayProducts(filtered);
});

fetchProducts(PRODUCT_URL);
