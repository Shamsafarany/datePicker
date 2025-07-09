const icon = document.querySelector("#icon");
const container = document.querySelector(".cont2");
const dateCont = document.querySelector(".numbers-cont");
icon.addEventListener("click", (e) => {
    e.preventDefault();
    if (container.classList.contains("show")) {
        container.classList.remove("show");
    } else {
        container.classList.add("show");
    }
})