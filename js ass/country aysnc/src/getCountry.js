// import { app } from "../main";

import { displayCountry } from "./displayCountry";



export const countryName = async (keyword) => {
    try {
      const response = await fetch("https://restcountries.com/v3/all");
  
      if (!response.ok) {
        throw new Error("Failed to fetch country data.");
      }
  
      const data = await response.json();

      displayCountry(data);




    } catch (error) {
      console.error("Error fetching country data:", error.message);

    }
  };
  
  
  


