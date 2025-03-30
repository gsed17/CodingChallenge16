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
  