document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector(".searchBtn");
    searchBtn.addEventListener('click', () => {
        const searchInput = document.querySelector(".searchInput");
        const search = searchInput.value;
        console.log(search);
        searchInput.value = "";
    });


    const lpMenu = document.querySelector(".lp");
    const genreBox = document.querySelector(".genreBox");

   const genre = ["OST", "POP", "J-POP", "ROCK", "JAZZ"];

    lpMenu.addEventListener('mouseenter', () => {
        genreBox.innerHTML = "";

        genre.forEach(item => {
            const list = document.createElement("div");
            list.textContent = item;
            list.classList.add("genreBox");
            genreBox.appendChild(list);
        });

        genreBox.style.display = "block";
    });

    genreBox.addEventListener('mouseleave', () => {
        genreBox.style.display = "none";
    });
    
});




