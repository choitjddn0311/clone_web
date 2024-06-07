let menu = document.getElementById("menu");
let subMenu = document.getElementById("subMenu");

menu.addEventListener("mouseover" , () => {
    subMenu.style.display = "block";
});
menu.addEventListener("mouseout" , () => {
    subMenu.style.display = "none";
});