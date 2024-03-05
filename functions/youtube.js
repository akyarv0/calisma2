///!------------PARAMETRESİZ FUNCTİON--------//
// //?1.örnek
// yazdir()
// yazdir()
// function yazdir() {
//   console.log("ERSİN");
// }

// function topla(sayi1,sayi2) {    //parametreli hali versiyonu
//   // let sayi1= +prompt("birinci sayıyı giriniz")
//   // let sayi2 = +prompt("ikinci sayıyı giriniz")
//   let sonuc= sayi1+sayi2
//   console.log(`${sayi1}+${sayi2}=${sonuc}`);
// }

//!---------PARAMETRELİ FUNCTİON--------//
//fonksiyon isminden sonra gelen parantez içine parametreler yazılır.
//?2.Örnek
// yazdir2("Ersin","Ünal")
// function yazdir2(isim, soyisim) {
//   console.log(isim + " " + soyisim);
// }
// yazdir2("veysel", "akyar"); // burda parantez içine yazdığımmız her şeyi console yazdırır.
// yazdir2("hasan", "ali");

//?3.Örnek

// cube(2); //function tanımlandıktan sonra yukarda da çağırsak aşağıda çağırsak aynı şekilde çalışır. çünkü hoisted olayı bu!!!!

// function cube(sayi) {
//   console.log(sayi * sayi * sayi);
// }
// cube(8);

//?4.Örnek

// let yas = Number(prompt("Yaşınızı giriniz: "));
// kontrolEt(yas);
// function kontrolEt(yas) {
//   if (yas >= 18) {
//     console.log("ehliyet alabilirsiniz");
//   }
//   else{
//     console.log("ehliyet alamazsınız");
//   }
// }

//!---------CALL BACK FUNTİON-------//

// function kareAl(sayi) {
//   let sonuc = sayi * sayi;
//   return sonuc;
// }

// function kup(sayi) {
//   let sonuc = sayi * sayi * sayi;
//   let kareSonuc = kareAl(sonuc);
//   console.log(kareSonuc); //return yazdığımızda buraya kup() = sonuc gibi oluyor. kup fonksiyonunu nerede tanımlarsak tanımlayalım artık sonuc değerini çağıracak. sonuc parentez içi yazıldığından local scope oluyor. fonksiyon içinde console yazdırabilirdik ama her zaman çalışmasını istemeyebiliriz sadece istediğimiz zaman çalışması için console.log(deger) diyerek çağırırız. !!! returnden sonra yazolan kodlar çalışmaz.
//  }

// console.log(kareAl(2));
//  kup(2)

// //?özet:return ---> 1) Bir değeri metodun dışına çıkarmak taşımak için kullanılır.
// //?                 2) Bir metodu bitiren anahtar kelimedir.
// kup(9)

//?5.Örnek

// let metin = "Kup fonksiyonunu nerede tanımlarsak tanımlayalım artık sonuc değerini çağıracak.";
// let harf = prompt("Bulmak istediğiniz harfi giriniz");

// function bul(harf) {
//   let toplam = 0;
//   for (let i = 0; i < metin.length; i++) {
//     if (metin.charAt(i) === harf) {
//       toplam += 1;
//     }
//     return toplam;
//   }

// }

//!___________________________________________//

//_______________________________//
// let hak = 1;
// do {
//   let sayi = Math.round(Math.random() * 100);
//   console.log(sayi);

//   let tahmin = +prompt("Bir sayi tahmini yapınız");
//   if (tahmin === sayi) {
//     alert("Tahmininiz doğru!");
//     console.log(sayi);
//     break;
//   } else if (tahmin < sayi) {
//     alert("daha yüksek bir sayı giriniz");
//   } else {
//     alert("daha küçük bir sayı giriniz");
//   }

//   hak++;
// } while (hak <= 5);
// if (hak > 5) {
//   alert("Hakkınız kalmadı. Sayı: " + sayi);
// }
// let sayi = Math.round(Math.random() * 100);
// let hak = 1;
// do {

//   console.log(sayi);

//   let tahmin = +prompt("Bir sayi tahmini yapınız");
//   if (tahmin === sayi) {
//     alert("Tahmininiz doğru!");
//     console.log(sayi);
//     break;
//   } else if (tahmin < sayi) {
//     alert("Daha yüksek bir sayı giriniz");
//   } else {
//     alert("Daha küçük bir sayı giriniz");
//   }

//   hak++;
// } while (hak <= 5);

// if (hak > 5) {
//   alert("Hakkınız kalmadı.");
// }
// let hak = 1;
// do {
//   let sayi = Math.round(Math.random() * 100);
//   console.log(sayi);

//   let tahmin = +prompt("Bir sayi tahmini yapınız");
//   if (tahmin === sayi) {
//     alert("Tahmininiz doğru!");
//     console.log(sayi);
//     break;
//   } else if (tahmin < sayi) {
//     alert("Daha yüksek bir sayı giriniz");
//   } else {
//     alert("Daha küçük bir sayı giriniz");
//   }

//   hak++;
// } while (hak <= 5);

// if (hak > 5) {
//   alert("Hakkınız kalmadı.");
// }

// let ucgenAlan = (taban, yukseklik) => {
//   let sonuc = (taban * yukseklik) / 2;
//   console.log(sonuc);
// };

// ucgenAlan(5, 5);

// let num1= +prompt("1.sayıyı giriniz")

// let kareAl = (num1)=>{
//   sonuc= num1*num1;
//   return sonuc
// }
// console.log(kareAl(num1));

// let sayi1 = +prompt("bir sayı giriniz");
// let sayi2 = +prompt("üssü giriniz");

// let usAl = (sayi1, sayi2) => {
//   let sonuc = Math.pow(sayi1, sayi2);
//   return sonuc;
// };
// console.log(usAl(sayi1, sayi2));

// let year = +prompt("yıl giriniz")

// let artikYil = function(year){
//   if ( (year%4===0 && year%100!==0) || year%400===0){
//     console.log(`${year} artık yıldır.`);
//   }
//   else{ console.log(`${year} artık değildir.`);}
// }

// artikYil(year);






