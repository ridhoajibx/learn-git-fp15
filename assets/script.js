let btnToggle = document.querySelector("#btnDarkmode");
let headerWrap = document.querySelector("#header");
let off = document.querySelector(".fa-toggle-off");
let on = document.querySelector(".fa-toggle-on");
let title = document.querySelector(".heading");
let body = document.querySelector("body");

const handleLightMode = () => {
    if( off.style.display === "none" && on.style.display === "inline-block" ) {
        off.style.display = "inline-block";
        on.style.display = "none";
    } else {
        off.style.display = "none";
        on.style.display = "inline-block";
    }
    headerWrap.classList.toggle("dark");
    body.classList.toggle("dark");
    title.classList.toggle("dark");
}

btnToggle.addEventListener("click", handleLightMode);
