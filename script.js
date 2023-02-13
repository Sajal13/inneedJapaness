// const navItems = document.getElementById("navItems");

// function handleMobileIconClick(){
//     navItems.classList.toggle('hidden');
//     navItems.classList.toggle('w-full');
//     navItems.classList.toggle('h-screen')
// }

const hamburger = document.getElementById("hamBurger");
const navbar = document.getElementById("navItems");
const icons = document.getElementById("icons");
const hamburgerBtnClose = document.getElementById("hamBurgerBtnClose");
const hamburgerBtn = document.getElementById('hamBurgerBtn');
let hamburgerOpen = false;



hamburger.addEventListener("click", ()=> {
    navbar.classList.add("open");
});

hamburgerBtnClose.addEventListener("click", ()=>{
    navbar.classList.remove("open");
});

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerOpen) {
        hamburgerOpen = true;
    } else {
        hamburgerOpen =false;
        navbar.classList.add('hidden');
    }
});