window.onload = () => {
    const path = window.location.pathname;
    if (path.includes("about.html")) {
        const aboutNavItem = document.querySelector(".custom-headerItem3");
        if (aboutNavItem) {
            aboutNavItem.classList.add("custom-headerItem3-a")
        }
    }
}