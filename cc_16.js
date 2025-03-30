// Task 2: Fetch Products with .then()
const BASE_URL = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
  fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error("Fetch failed:", error.message);
    });
}
// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  // Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById("product-container");
    products.slice(0, 5).forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.innerHTML = `
        <h2>${product.fields.name}</h2>
        <p>$${(product.fields.price / 100).toFixed(2)}</p>
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}" />
      `;
      container.appendChild(div);
    });
  }
  // Task 5: Reusable Error Handler
function handleError(error) {
    console.error("An error occurred:", error.message);
  }
  // Task 6: Call your fetch functions
fetchProductsThen();
fetchProductsAsync();
