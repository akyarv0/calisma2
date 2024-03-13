import './style.css'



document.querySelector('#app').innerHTML = `
 
`

const getNews = async () => {
  const BASE_URL = `https://newsapi.org/v2/`;
  const API_KEY = `4c67680b10274ae19c24786f8d9fb7e6`;
  const queryString = `top-headlines?country=gb&category=technology`;
  const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`;
  console.log(URL);

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.json();
    displayNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};
const displayNews = (news) => {
  const newsArticle = document.getElementById("news");
  news.forEach(({ url, urlToImage, title, content }) => {
  
    // const{ url,urlToImage, title, content}=item

    newsArticle.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
    <img src="${urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
      <a href="${url}" target ="_blank" class="btn btn-primary" >Detail</a>
    </div>
  </div>`;
  });
};
getNews();
