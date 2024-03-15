




export const displayCountry = (country) => {
  const { official, capital, currencies, region, flags, maps } = country;

  document.querySelector(
    ".info"
  ).innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${flags[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${official}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${capital || "-"}</li>
    <li class="list-group-item">${Object.keys(currencies)[0] || "-"}</li>
    <li class="list-group-item">${region}</li>
  
  </ul>
    <a href="${maps}" class="btn btn-primary">Go Map</a>
  </div>
</div>`;
};
