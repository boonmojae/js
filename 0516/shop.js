const cart = {
  product1: { name: "상품1", price: 1000 },
  product2: { name: "상품2", price: 2000 },
  product3: { name: "상품3", price: 3000 },
  product4: { name: "상품4", price: 4000 },
  product5: { name: "상품5", price: 5000 },
  product6: { name: "상품6", price: 6000 }
};

let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn.btn-primary").forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute("data-product-id");
      const product = cart[productId];
      
      cartItems.push(product);

      let totalAmount = 0;
      cartItems.forEach(item => {
        totalAmount += item.price;
      });

      const cartList = document.querySelector(".cartList");
      const item = document.createElement("div");
      item.textContent= `${cart[productId].name} ${cart[productId].price}`;
      cartList.appendChild(item);

      const total = document.querySelector(".total");
      total.textContent = `${totalAmount.toLocaleString()} 원`;
    });
  });
});
