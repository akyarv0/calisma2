//Selectors

const text = document.querySelector("#text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

//Event Listeners
btn.addEventListener("click", () => {
    if (text.value === "") {
        error.style.display = "block";
    }
});