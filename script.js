const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("cat-entries");
  categoryContainer.innerHTML = "";
  for (let category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button
      class="hover:bg-[#15803D] hover:text-white cursor-pointer w-[100%] text-left px-4 py-2 rounded-lg inter"
      >
        ${category.category_name}
    </button>
    `;
    categoryContainer.append(btnDiv);
  }
};

loadCategories();
