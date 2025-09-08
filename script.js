let totalPrice = 0;
let totalCart = false;
const totalPriceEl = document.getElementById("total-price");
const horiLine = document.getElementById("hori-line");
const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("product-entries").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("product-entries").classList.remove("hidden");
  }
};

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};
const loadAllProducts = () => {
  manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllProducts(json.plants));
};

const loadTreeDetails = (treeid) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${treeid}`)
    .then((res) => res.json())
    .then((json) => treeModalView(json.plants));
};

const treeModalView = (plant) => {
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
  <h3 class="text-xl font-bold mb-4 inter">${plant.name}</h3>
  <img src="${plant.image}" alt="${plant.name}" class="max-w-full max-h-80 object-cover rounded-lg mb-4" />
  <p class="mb-2 mont"><strong>Category:</strong> ${plant.category}</p>
  <p class="mb-2 mont"><strong>Price:</strong> ৳${plant.price}</p>
  <p class="text-sm text-gray-600 mont">
    ${plant.description}
  </p>
  `;
  document.getElementById("tree_modal").showModal();
};
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("cat-entries");
  for (let category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button
      id = "category-${category["id"]}"
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
  productContainer.innerHTML = "";
  for (let product of products) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
    <div class="inter w-full flex flex-col bg-green-50 rounded-xl p-4 shadow-md h-full">
  <div class="h-48 rounded-lg mb-4">
    <img
      class="w-full h-full object-cover rounded-lg"
      src="${product["image"]}"
    />
  </div>
  <div class="mb-2 flex-1 min-h-[100px]">
    <h2 onclick = "loadTreeDetails(${product.id})" class="text-lg font-bold text-gray-900">${product["name"]}</h2>
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
    id = "add-to-cart-${product["id"]}"
    class="w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors cursor-pointer"
  >
    Add to Cart
  </button>
</div>
    `;
    productContainer.append(productDiv);
  }
  manageSpinner(false);
};

document.getElementById("cat-entries").addEventListener("click", (e) => {
  if (e.target.id.startsWith("category-")) {
    const categoryId = e.target.id.replace("category-", "");
    if (categoryId == 0) {
      document
        .querySelectorAll(".active")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      return loadAllProducts();
    }
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
      .then((res) => res.json())
      .then((json) => {
        document
          .querySelectorAll(".active")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        displayAllProducts(json.plants);
      });
  }
});

document.getElementById("product-entries").addEventListener("click", (e) => {
  if (e.target.id.startsWith("add-to-cart-")) {
    const plantId = e.target.id.replace("add-to-cart-", "");
    fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`)
      .then((res) => res.json())
      .then((json) => addToCart(json.plants));
  }
});
const addToCart = (product) => {
  const cartSection = document.getElementById("cart-section");
  const cartEntry = document.createElement("div");
  totalPrice += parseInt(product.price);
  totalPriceEl.textContent = `৳${totalPrice}`;
  alert(`${product.name} added to the cart!`);
  cartEntry.innerHTML = `
  <div
    class="flex justify-between items-center py-2 bg-[#F0FDF4] mx-2 rounded-lg px-2"
  >
  <div class="">
    <p class="mont">${product.name}</p>
    <p class="price mont">৳${product.price}</p>
  </div>
   <button id="" class="cross-button cursor-pointer px-2 py-1 rounded-full bg-white text-red-700 hover:bg-red-700 hover:text-white transition-colors">
     <i class="fa-solid fa-xmark"></i>
   </button>
  </div>
  `;
  if (totalCart === false) {
    document.getElementById("total-price-container").classList.remove("hidden");
    horiLine.classList.remove("hidden");
  }
  totalCart = true;
  cartSection.prepend(cartEntry);
};

document.getElementById("cart-section").addEventListener("click", (e) => {
  const button = e.target.closest(".cross-button");
  const cartItem = button.parentElement;
  const priceEl = cartItem.querySelector(".price");
  const price = parseInt(priceEl.textContent.replace("৳", ""));
  totalPrice -= price;
  totalPriceEl.textContent = `৳${totalPrice}`;
  if (totalPrice === 0) {
    document.getElementById("total-price-container").classList.add("hidden");
    horiLine.classList.add("hidden");
    totalCart = false;
  }

  cartItem.remove();
});

loadCategories();
loadAllProducts();
