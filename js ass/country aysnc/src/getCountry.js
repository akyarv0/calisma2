const countryName = async () => {
  const URL = "https://restcountries.com/v3/all";
  try {
    const res = await fetch(URL);
    const data = res.json();
    if (!res.ok) {
      throw new Error("Hata aldınız...");
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

