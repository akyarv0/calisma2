//* ======================================================
//*           EVENT BUBBLING (EVENT PROPAGATION)
//* ======================================================

//! Bir element üzerinde olay (event) meydana geldiğinde ilk olarak O elementin event handler fonksiyonu calisir. Sonrasında ise bir ustteki parent ve bu sekilde diger ust parent'lara kadar gider.

//! Bu prosese “bubbling”, denilir çünkü event, en içteki elementten en dıştaki elemente kadar bir baloncuk gibi yayılır.

// document.querySelector("form").addEventListener("click", () => alert("form"))

// document.querySelector("div").addEventListener("click", () => alert("div"))

// document.querySelector("p").addEventListener("click", () => alert("p"))

// document.querySelector("html").addEventListener("click", () => alert("html"))

//!  <p> elementinin tiklanmasi ile aşağıdaki sırada olaylar tetiklenir.:
//* 1-  <p> elementinin kendi event'ı
//* 2- Dıstaki <div> in event'ı
//* 3- En dıştaki <form> elementinin event'ı.
//* 4- Bu sekilde document objesine kadar gider (Eger event tanimlanmasi ise)

//* event.target
//*-------------------------------------------------------------------
//! Event 'ın olmasını sağlayan en içteki element "target element" olarak adlandirilir ve event.target ile erisilebilir.

// document.querySelector("form").onclick = function (event) {
//   console.log(event.target) //? event kaynagi

//   //! Tiklanilan elemanın arkaplan rengini sari yap.
//   event.target.style.backgroundColor = "yellow"

//   //*! 500ms atanmis rengi kaldir
//   setTimeout(() => {
//     event.target.style.backgroundColor = ""
//   }, 500)
// }

//* STOP BUBBLING
//*-------------------------------------------------------------------

//! Normalde bubbling olayi <html>'e ve hatta bazı durumlarda window'a , kadar ulaşır.

//! Ancak gerekli oldugunda bir element üzerinde event bubbling durdurulabilir.

//! event.stopPropagation().

// document.querySelector("div").onclick = function (event) {
//   event.stopPropagation()
// }

const request = new Promise((res, rej) => {
  const data = { Name: "can", surname: "cansn" }; // mock data

  const success = Math.floor(Math.random() * 5);
  if (success) {
    res("network başarılı");
  } else {
    rej("bir hata oluştu");
  }
});

request
  .then((res) => console.log(res))
  .catch((err) => document.write(err))
  .finally(() => console.log("finally her zaman çalışır"));




let userData = "";
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error("something wrong");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    userData = data;
    console.log(userData);
    showUser(data)
  
    
  })
  .catch((err) => document.write(err));

  const showUser = (data) => {
      
 
const usersData = document.getElementById("users")

data.forEach((user) => {
  usersData.innerHTML += `<li>${user.login}</li>
  <img src="${user.avatar_url}" width="100px">
  `
})
}



