const loader = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => showProduct(data));
};

const showProduct = (products) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `<div
          class="card bg-base-100 shadow-sm transition duration-300 hover:shadow-xl"
        >
          <figure class="bg-[#f1f2f6] ">
            <img
              class="p-4 hover:scale-110 transition-transform  duration-300 h-60 max-w-full object-contain"
              src="${product.image}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body p-4 gap-4">
            <div class="card-title flex justify-between">
              <div
                class="text-xs border-1 px-2 border-[#dae6f8] bg-[#dae6f8] text-[#2B7FFF] rounded-full"
              >
                ${product.category}
              </div>
              <div class="text-xs text-gray-400">⭐<span>${product.rating.rate}</span>(${product.rating.count})</div>
            </div>
            <div class="cardBody">
              <div class="w-100% truncate text-gray-600">
                ${product.description}
              </div>
              <div class="font-bold mt-1">$${product.price}</div>
            </div>
            <div class="flex justify-between gap-5">
              <button
                class="btn h-7 bg-transparent text-[#2B7FFF] border-[#2B7FFF] hover:bg-[#2B7FFF] hover:text-white transition-all duration-300 text-xs flex gap-1 flex-1"
              >
                <i class="fa-regular fa-eye"></i>Details
              </button>
              <button
                class="btn h-7 bg-[#2B7FFF] border-[#2B7FFF] text-white hover:bg-transparent hover:text-[#2B7FFF] hover:border-[#2B7FFF] transition-all duration-300 text-xs flex gap-1 flex-1"
              >
                <i class="fa-solid fa-cart-shopping"></i>
                Add
              </button>
            </div>
          </div>
        </div>`;

    cardContainer.append(productCard);
  });
};

const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data));
};
const showCategories = (categories) => {
  const navContainer = document.getElementById("navContainer");
  navContainer.innerHTML = "";
  const allBtn = document.createElement("li");
  allBtn.innerText = "All";
  allBtn.className =
    "border-1 px-4 py-1 rounded-full bg-transparent text-gray-500 border-gray-600 hover:bg-[#2B7FFF] hover:text-white transition-all duration-300 text-sm  active:-translate-y-1";
  allBtn.onclick = loader;
  navContainer.append(allBtn);
  categories.forEach((category) => {
    const categoryBtn = document.createElement("li");
    categoryBtn.innerText = category;
    categoryBtn.className =
      "border-1 px-4 py-1 rounded-full bg-transparent text-gray-500 border-gray-600 hover:bg-[#2B7FFF] hover:text-white transition-all duration-300 text-sm  active:-translate-y-1";

    navContainer.append(categoryBtn);
  });
};


loader();
loadCategories();

//  <li
//             class="border-1 px-4 py-1 rounded-full bg-transparent text-gray-500 border-gray-600 hover:bg-[#2B7FFF] hover:text-white transition-all duration-300 text-sm"
//           >
//             <a>Item 1</a>
//           </li>
