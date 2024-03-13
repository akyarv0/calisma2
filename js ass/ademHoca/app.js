// console.log("merhaba")
const getBtn = document.getElementById("button");
// const value = document.querySelector("#searchText").value;//*inputun o anki değerini yakaladığı için sağlıklı çalışmaz.
// console.log(":rocket: ~ getBtn:", getBtn)
const cardsDiv = document.getElementById("cards");
const searchInput = document.getElementById("searchFollowers");
const searchText = document.querySelector("#searchText")   
// console.log(":rocket: ~ cardsDiv:", cardsDiv)
const listGroup = document.querySelectorAll(".list-group");
const listItems = document.querySelectorAll(".list-group-item");
// console.log(listItems,listGroup);
let followers = [];
// https://api.github.com/users/anthonyharold67/followers?per_page=100
const getFollowers = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/followers?per_page=100`
    );
    console.log(":rocket: ~ getFollowers ~ response:", response);
    if (response.ok) {
      const data = await response.json();
      console.log(":rocket: ~ getFollowers ~ data:", data);
      followers = data;
      if (data.length > 0) {
        searchInput.style = "display:flex;";
      }
      //   console.log(followers);
      // forEach & map farkı sorulur
      //* forEach => no return
      //? map => array return
      data.forEach((item) => createElem(item));
    } else {
      throw new Error("Kullanıcı bulunamadı");
    }
  } catch (error) {
    console.log(error);
    searchInput.style = "display:none;";
    cardsDiv.innerHTML = `<h1 class="text-center my-5 text-danger">${error}</h1>`;
  }
};
// console.log(followers)
// console.log(data) //*data değişkeni local scope ta tanımlı globalden erişim sağlayamayız
const createElem = (user) => {
  //   console.log(user);
  //   console.log(user.login);
  const { login, html_url, avatar_url } = user;
  //   console.log(avatar_url);
  const newElem = `
  <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;
  cardsDiv.innerHTML += newElem;
  // let cardCol = document.createElement("div");
  // cardCol.className = "col";
  // let cardDiv = document.createElement("div");
  // cardDiv.className = "card";
  // let cardImg = document.createElement("img");
  // cardImg.src = avatar_url;
  // cardImg.className = "card-img-top";
  // cardImg.alt = login;
  // let cardBody = document.createElement("div");
  // cardBody.className = "card-body";
  // let cardTitle = document.createElement("h5");
  // cardTitle.className = "card-title";
  // cardTitle.innerText = login;
  // let cardBtn = document.createElement("a");
  // cardBtn.className = "btn btn-dark";
  // cardBtn.innerText = "View Profile";
  // cardBtn.target = "_blank";
  // cardBtn.setAttribute("href", html_url);
  // cardCol.appendChild(cardDiv);
  // cardDiv.appendChild(cardImg);
  // cardDiv.appendChild(cardBody);
  // cardBody.appendChild(cardTitle);
  // cardBody.appendChild(cardBtn);
  // cardsDiv.appendChild(cardCol);
};
getBtn.addEventListener("click", () => {
  // console.log("butona tıklandı")
  cardsDiv.innerHTML = "";
  const value = document.querySelector("#searchText").value.trim();
  console.log(":rocket: ~ getBtn.addEventListener ~ value:", value);
  if (value) {
    getFollowers(value);
  } else {
    alert("Lütfen bir kullanıcı adı giriniz!");
  }
});
searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  //   console.log(followers);
  cardsDiv.innerHTML = "";
  //   followers.filter(item=> item.login == e.target.value) //!birebir eşitlik ister
  // followers.filter(item=> item.login.toLowerCase() == e.target.value.toLowerCase())
  //   e.target.value her zaman "" e eşittir. Boş string de her zman tüm string ifadeler içerisinde yer alır.
  //! boolean("") her zaman false
  e.target.value
    ? followers
        .filter((item) =>
          item.login.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .forEach((item) => createElem(item))
    : followers.forEach((item) => createElem(item));
});
window.addEventListener("load", () => {
  searchInput.style = "display:none;";
});
document.addEventListener("DOMContentLoaded", () => {
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let username = e.target.textContent.trim();
      searchText.value = username;
     
      item.parentNode.removeChild(item);
    });
  });
//   console.log(listItems);
});
// document.querySelector("#searchText").value = listItems.textContent

searchText.addEventListener("input",(e)=> {
e.target.value = searchText.value
getFollowers(searchText.value);
console.log(e.target.value, searchText.value);
})