async function getCountryInfo() {
  const countryInput = document.getElementById('countryInput');
  const countryName = countryInput.value.trim();

  if (countryName === '') {
      alert('Lütfen bir ülke ismi girin.');
      return;
  }

  try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data.status === 404) {
          alert('Ülke bulunamadı.');
          return;
      }

      const country = data[0];
      const countryInfoContainer = document.getElementById('countryInfo');
      countryInfoContainer.innerHTML = `
          <div class="countryDetail">
              <label>Bayrak:</label>
              <img src="${country.flags.png}" alt="Flag" width="100">
          </div>
          <div class="countryDetail">
              <label>İsim:</label>
              <span>${country.name.common}</span>
          </div>
          <div class="countryDetail">
              <label>Başkent:</label>
              <span>${country.capital[0]}</span>
          </div>
          <div class="countryDetail">
              <label>Para Birimi:</label>
              <span>${country.currencies[Object.keys(country.currencies)[0]].name}</span>
          </div>
          <div class="countryDetail">
              <label>Kıta:</label>
              <span>${country.region}</span>
          </div>
      `;
  } catch (error) {
      console.error('Error fetching country info:', error);
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
  }
}
