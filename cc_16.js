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
