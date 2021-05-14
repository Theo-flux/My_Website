const hamburger_selector = document.querySelector("#nav-bar .nav-bar .nav-list .hamburger")
const navList_selector = document.querySelector("#nav-bar .nav-bar .nav-list")

hamburger_selector.addEventListener('click', ()=> {
    navList_selector.classList.toggle('open');
    hamburger_selector.classList.toggle('active');
});