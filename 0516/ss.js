 const cartList = document.getElementById("cart-list");
 const totalPrice = document.getElementById("total-price");
    let total = 0;

    function addToCart(productName, price) {
      const li = document.createElement("li");
      li.textContent = `${productName} - ₩${price}`;
      li.classList.add("list-group-item");
      cartList.appendChild(li);
      total += price;
      totalPrice.textContent =`총 금액: ₩ ${total} 원 `;
    }
