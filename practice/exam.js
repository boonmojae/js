const categories = ["음식", "만화", "유아", "소설"];
  const bookList = document.querySelector(".bookList");

  let categoryBox = null;

  bookList.addEventListener('click', () => {
    // 처음 클릭하면 만들어서 붙이고
    if (!categoryBox) {
      categoryBox = document.createElement("div");
      categoryBox.classList.add("categories");

      categories.forEach(cate => {
        const item = document.createElement("div");
        item.textContent = cate;
        categoryBox.appendChild(item);
      });

      bookList.appendChild(categoryBox);
    } else {
      // 그다음부터는 보여주거나 숨기기만 함
      categoryBox.style.display =
        categoryBox.style.display === "none" ? "block" : "none";
    }
  });