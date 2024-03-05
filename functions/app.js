// let matDogru = +prompt("matematik doğru sayısını giriniz");
// if (matDogru<0 || matDogru>41){
//     alert("girilen doğru sayısı 40'dan fazla olamaz geçersiz işlem.")
// }
// let turDogru = +prompt("Türkçe doğru sayınızı giriniz");
// if (turDogru<0 || turDogru>41){
//     alert("girilen doğru sayısı 40'dan fazla olamaz geçersiz işlem.")
// }

// let fenDogru = +prompt("Fen dogru sayını giriniz");
// if (fenDogru<0 || fenDogru>21){
//     alert("girilen doğru sayısı 20'dan fazla olamaz geçersiz işlem.")
// }
// let sosDogru = +prompt("sosyal doğru sayınızı giriniz");
// if (sosDogru<0 || sosDogru>21){
//     alert("girilen doğru sayısı 20'dan fazla olamaz geçersiz işlem.")
//     }

// // let soruSayisi = 120;
// let okulPuani = +prompt("okul Puanı giriniz");
// if (okulPuani<0 || okulPuani>60){
//     alert("girilen puanı 60'dan fazla olamaz geçersiz işlem.")

// }
// let osymPuani = 100;
// let puanHesapla = () => {
// MatPuan = matDogru * 4 - (40 - matDogru);
// TurPuan = turDogru * 4 - (40 - turDogru);
// FenPuan = fenDogru * 4 - (20 - fenDogru);
// SosPuan = sosDogru * 4 - (20 - sosDogru);
//   toplamPuan = okulPuani + osymPuani + MatPuan + TurPuan + FenPuan + SosPuan;
//   return toplamPuan;
// };

// console.log(puanHesapla());

// let matDogru;
// let turDogru;
// let fenDogru;
// let sosDogru;
// let okulPuani;

// while (true) {
//   matDogru = parseInt(
//     prompt("Matematik doğru sayısını giriniz (0 ile 40 arasında):")
//   );
//   if (matDogru >= 0 && matDogru <= 40 && !isNaN(matDogru)) {
//     break;
//   } else {
//     alert("Geçersiz giriş. Lütfen 0 ile 40 arasında bir sayı girin.");
//   }
// }

// while (true) {
//   turDogru = parseInt(
//     prompt("Türkçe doğru sayınızı giriniz (0 ile 40 arasında):")
//   );
//   if (turDogru >= 0 && turDogru <= 40 && !isNaN(turDogru)) {
//     break;
//   } else {
//     alert("Geçersiz giriş. Lütfen 0 ile 40 arasında bir sayı girin.");
//   }
// }

// while (true) {
//   fenDogru = parseInt(
//     prompt("Fen doğru sayınızı giriniz (0 ile 20 arasında):")
//   );
//   if (fenDogru >= 0 && fenDogru <= 20 && !isNaN(fenDogru)) {
//     break;
//   } else {
//     alert("Geçersiz giriş. Lütfen 0 ile 20 arasında bir sayı girin.");
//   }
// }

// while (true) {
//   sosDogru = parseInt(
//     prompt("Sosyal doğru sayınızı giriniz (0 ile 20 arasında):")
//   );
//   if (sosDogru >= 0 && sosDogru <= 20 && !isNaN(sosDogru)) {
//     break;
//   } else {
//     alert("Geçersiz giriş. Lütfen 0 ile 20 arasında bir sayı girin.");
//   }
// }

// while (true) {
//   okulPuani = parseInt(prompt("Okul puanınızı giriniz (0 ile 60 arasında):"));
//   if (okulPuani >= 0 && okulPuani <= 60 && !isNaN(okulPuani)) {
//     break;
//   } else {
//     alert("Geçersiz giriş. Lütfen 0 ile 60 arasında bir sayı girin.");
//   }
// }

// let osymPuani = 100;

// let MatPuan = matDogru * 4 - (40 - matDogru);
// let TurPuan = turDogru * 4 - (40 - turDogru);
// let FenPuan = fenDogru * 4 - (20 - fenDogru);
// let SosPuan = sosDogru * 4 - (20 - sosDogru);
// let toplamPuan = okulPuani + osymPuani + MatPuan + TurPuan + FenPuan + SosPuan;
// (toplamPuan<0) ? console.log("Puanınız 0'dır") : console.log(toplamPuan);

//? Pratik 11 - 1 -100 arasındaki tüm sayıları sırasıyla console'a yazdıralım ancak sayı 4'e tam bölünüyorsa "Clarus",  5 ile tam bölünüyorsa "Way", hem 4'e hem de 5'e tam bölünüyorsa "Clarusway" yazdıralım.

// for (let i = 1; i <= 100; i++) {
//   if (i % 4 === 0 && i % 5 === 0) {
//     console.log( `${i} Clarusway`);
//   } else if (i % 4 === 0) {
//     console.log("Clarus");
//   } else if (i % 5 === 0) {
//     console.log(`Way`);
//   } else {
//     console.log(i);
//   }
// }
// for (let i = 1; i <= 100; i++) {
//   if (i % 4 === 0 && i % 5 === 0) {
//     console.log("Clarusway");
//   }
//   if (i % 4 === 0) {
//     console.log("Clarus");

//   }
//   if (i % 5 === 0) {
//     console.log("Way");

//   }
//   if (i % 4 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
// }

// let hesapMakinesi = function(sayi1,sayi2,islem){
 
//  if(islem==="topla"){
//   sonuc=sayi1+sayi2
//  }
//  return sonuc
 
  

// }

// console.log(hesapMakinesi(3,4,"topla"));
