const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};
const loadAllProducts = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllProducts(json.plants));
};
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("cat-entries");
  for (let category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button
      class="hover:bg-[#15803D] hover:text-white cursor-pointer w-[100%] text-left px-4 py-2 rounded-lg inter"
      >
        ${category["category_name"]}
    </button>
    `;
    categoryContainer.append(btnDiv);
  }
};
const displayAllProducts = (products) => {
  const productContainer = document.getElementById("product-entries");
  for (let product of products) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
    <div class="w-full flex flex-col bg-green-50 rounded-xl p-4 shadow-md h-full">
  <div class="h-48 rounded-lg mb-4">
    <img
      class="w-full h-full object-cover rounded-lg"
      src="${product["image"]}"
    />
  </div>
  <div class="mb-2 flex-1 min-h-[100px]">
    <h2 class="text-lg font-bold text-gray-900">${product["name"]}</h2>
    <p class="text-gray-600 text-sm mt-1">
      ${product["description"]}
    </p>
  </div>
  <div class="flex justify-between items-center my-4">
    <span
      class="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
      >${product["category"]}</span
    >
    <span class="text-gray-900 font-semibold text-sm">৳${product["price"]}</span>
  </div>
  <button
    class="w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors cursor-pointer"
  >
    Add to Cart
  </button>
</div>
    `;
    productContainer.append(productDiv);
  }
};
loadAllProducts();
loadCategories();
