document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.querySelector(".newBkSlider");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    let currentIndex = 0;
    const itemWidth = 280;
    const maxIndex = slider.children.length - 4;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slider.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    });
})