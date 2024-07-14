let transfer = document.querySelector("#dropBtn");
let dropcontent = document.querySelector(".dropdown-content");

transfer.addEventListener("click", function () {
    dropcontent.classList.toggle("active");
});

window.onscroll = () => {
    dropcontent.classList.remove("active");
};

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlinks");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};