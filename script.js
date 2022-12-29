function openMenu() {
    document.getElementById("menu-mobile-active").style.display = "block";
    document.getElementById("body").style.overflow = "hidden"
}

function closeMenu() {
    document.getElementById("menu-mobile-active").style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
}