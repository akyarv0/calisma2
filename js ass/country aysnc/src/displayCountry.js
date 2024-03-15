export const displayCountry = (data) => {
  const { official, capital, currencies, region, flags, maps } = data;

  document.querySelector(
    ".info"
  ).innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${flags}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${official}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${capital}</li>
    <li class="list-group-item">${currencies}</li>
    <li class="list-group-item">${region}</li>
  
  </ul>
    <a href="${maps}" class="btn btn-primary">Go Map</a>
  </div>
</div>`;
};
