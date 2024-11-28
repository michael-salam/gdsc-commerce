const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) =>
  button.addEventListener("click", (e) => handleAddToCart(e))
);

function handleAddToCart(e) {
  const cartItemsContainer = document.querySelector(".cart-items");

  const newDiv = document.createElement("div");
  newDiv.id = e.target.parentNode.id;

  const name = document.createElement("p");
  const price = document.createElement("p");
  const removeBtn = document.createElement("button");

  name.textContent = e.target.parentNode.dataset.name;
  price.innerHTML = `&#x020a6;${e.target.parentNode.dataset.price}`;
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-from-cart-btn");

  newDiv.appendChild(name);
  newDiv.appendChild(price);
  newDiv.appendChild(removeBtn);

  newDiv.classList.add("cart-item");

  cartItemsContainer.appendChild(newDiv);
}
