import "./style.css";

const app = document.querySelector("#app");

const form = document.querySelector("form");

const input = document.querySelector("form input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //! form eventinin tüm dogal davranilari disable eder.
  countryName(input.value);
});

console.log(input);
