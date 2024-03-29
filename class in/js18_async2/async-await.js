//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

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

