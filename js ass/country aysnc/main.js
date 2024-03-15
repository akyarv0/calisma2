import "./style.css";
import { countryName } from "./src/getCountry";


const app = document.querySelector("#app");

const form = document.querySelector("form");

const input = document.querySelector("form input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //! form eventinin tüm dogal davranilari disable eder.
  getCountryData(input.value);
  e.target.reset();
});



const getCountryData = () => {

    const input = document.querySelector("form input").value
    
    if (!input.trim()) {
      alert("Input must be entered")
    } else {
     
      countryName(input)
    }
  }
  
