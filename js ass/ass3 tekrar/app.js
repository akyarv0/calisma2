let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;
let enYuksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  console.log(tahmin);
  document.querySelector(".guess").value = "";

  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayı giriniz";
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tahmininiz doğru.Tebrikler";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    if(skor> enYuksekSkor){
      enYuksekSkor=skor
      document.querySelector(".top-score").textContent=skor
    }
  

  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin > rastgeleSayi
        ? (mesaj.textContent = "Aşağı")
        : (mesaj.textContent = "Yukarı");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "black";
  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log("yeni rastgele sayi", rastgeleSayi);
  skor = 10;
  document.querySelector(".score").textContent = skor;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  mesaj.textContent = "Oyun yeniden başlıyor...";
};
//!enter tuşu çalışsın

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Enter") {
    document.querySelector(".check").click();
    document.querySelector(".guess").value = "";
  } else {
  }
});



document.addEventListener("keydown", (e)=> {
  if (e.key==="Enter"){
    document.querySelector(".check").click()
  }
  
})


document.querySelector(".top-score-label")