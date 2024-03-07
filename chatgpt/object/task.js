// let rastgeleSayilar = Math.floor(Math.random() * 10);
// console.log(rastgeleSayilar);

// //? 1.Aşama
// let sayilar = [];
// for (let i = 1; sayilar.length <= 5; i++) {
//   let rastgeleSayi = Math.floor(Math.random() * 10) + 1;
//   if (!sayilar.includes(rastgeleSayi)) {
//     sayilar.push(rastgeleSayi);
//   }
// }
// console.log(sayilar);

// ? 2.Aşama
// let sayilarKaresi = sayilar.map((m) => (m = m ** 2));

// console.log(sayilarKaresi);
// //? 3.Aşama

// let sayilarKucuk50 = sayilarKaresi.filter((m) => m <= 50);

// console.log(sayilarKucuk50);

// Tek satırda yazım gpt'den
// let sayilarKucuk50 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
//                           .map(m => m ** 2)
//                           .filter(m => m <= 50);

// console.log(sayilarKucuk50);

//?Selectorler

// const randomSayi = document.querySelector("#btn1");
// const karesi = document.querySelector("#btn2");
// const kucuk50 = document.querySelector("#btn3");






let sayilar = [];

//! ekrana yazdırma random //? 1.Aşama
const randomSayi = document.querySelector("#btn1");

randomSayi.addEventListener("click", () => {
  sayilar = []; 
  while (sayilar.length < 5) {
    let rastgeleSayi = Math.floor(Math.random() * 10) + 1;
    if (!sayilar.includes(rastgeleSayi)) {
      sayilar.push(rastgeleSayi);
    }
  }
  console.log(sayilar);
  document.querySelector(".atananSayilar").textContent = sayilar.join(", ");
});

//! ekrana yazdırma karesi //? 2.Aşama
const karesi = document.querySelector("#btn2");

karesi.addEventListener("click", () => {
  if (sayilar.length === 0) {
    console.log("Lütfen önce random sayıları oluşturun.");
    return;
  }

  let sayilarKaresi = sayilar.map((m) => m ** 2);
  console.log(sayilarKaresi);

  document.querySelector(".karesiAlinanSayilar").textContent = sayilarKaresi.join(", ");
});

//! ekrana yazdırma //? 3. Aşama


const kucuk50 = document.querySelector("#btn3");
const ellidenKucuk = document.getElementById("50denKucuk")

kucuk50.addEventListener("click", () => {
  if (sayilar.length === 0) {
    console.log("Lütfen önce random sayıları oluşturun.");
    return;
  }

  let sayilarKucuk50 = sayilar.filter((m) => m**2 <= 50);
  console.log(sayilarKucuk50);

  ellidenKucuk.textContent = sayilarKucuk50.join(", ");
});







