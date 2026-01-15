let allProducts = []; // Store data globally to filter without re-fetching

// 1. Fetch data and store it
fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((response) => response.json())
  .then((json) => {
    allProducts = json;
    renderCards(allProducts.toReversed()); // Initial render
  });

// 2. Add event listener to the dropdown
document.getElementById("brands").addEventListener("change", (e) => {
  const selectedBrand = e.target.value.toLowerCase();

  // Filter logic
  const filteredProducts =
    selectedBrand === "show all brands"
      ? allProducts
      : allProducts.filter((product) => product.brand === selectedBrand);

  renderCards(filteredProducts);
});

// 3. Function to clear and rebuild the list
function renderCards(products) {
  const list = document.getElementById("card-list");
  list.innerHTML = ""; // Clear existing cards

  products.forEach((item) => {
    addCard(
      item.brand,
      item.name,
      item.price,
      item.currency,
      item.product_type,
      item.image_link,
      item.product_link,
      item.website_link
    );
  });
}

function addCard(
  cardBrand,
  cardName,
  cardPrice,
  cardCurrency,
  cardProduct,
  cardImage,
  cardProductLink,
  cardWebsiteLink
) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-brand").innerText = " Brand: " + cardBrand;
  template.querySelector(".card-name").innerText = cardName;
  template.querySelector(".card-price").innerText = "Price: $" + cardPrice;
  template.querySelector(".card-product").innerText =
    "Category: " + cardProduct;
  template.querySelector(
    ".card-image"
  ).innerHTML = `<img src=${cardImage} class="px-2" alt="product" width="200" height="200" />`;
  template.querySelector(".card-product-link").href = cardProductLink;
  template.querySelector(".card-website-link").href = cardWebsiteLink;
  document.querySelector("#card-list").appendChild(template);
}
