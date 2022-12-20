import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

let main = document.querySelector("body > div")
let div = document.createElement("div");
div.classList.add("name");

let img = document.createElement("img");
img.setAttribute("src", "./images/favicon.ico");
img.classList.add("image");
div.appendChild(img);
main.appendChild(div);

let image = document.querySelector(".image");

image.addEventListener("click", () => {
    image.style.transform = "scale(2)";
})