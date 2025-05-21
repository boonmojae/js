window.onload = () => {
    const path = window.location.pathname;
    if (path.includes("about.html")) {
        const aboutNavItem = document.querySelector(".custom-headerItem3");
        if (aboutNavItem) {
            aboutNavItem.classList.add("custom-headerItem3-a");
        }
    }

    const main = document.querySelector("main");
    let lastSpawnTime = 0;

    main.addEventListener("mousemove", (e) => {
        const now = Date.now();

        if (now - lastSpawnTime < 30) return;
        lastSpawnTime = now;

        const star = document.createElement("div");
        star.className = "star";

        const rect = main.getBoundingClientRect();
        star.style.left = `${e.clientX - rect.left}px`;
        star.style.top = `${e.clientY - rect.top}px`;

        main.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);
    });
};
