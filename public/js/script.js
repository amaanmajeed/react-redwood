// // Mobile-Menu Toggle
$(function () {
    let isOpen = false;
    
    let barBtn = document.getElementById("barbtn");
    
    barBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const mobileMenu = document.querySelector(".mobile-menu");
        if (!isOpen) {
            mobileMenu.style.height = `${mobileMenu.scrollHeight}px`;
            isOpen = true;
        } else {
            mobileMenu.style.height = 0;
            isOpen = false;
        }
    });
})