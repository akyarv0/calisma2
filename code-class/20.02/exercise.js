// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"

// let ad = prompt("Adınızı Giriniz:");
// let soyad = prompt("soyadınızı Giriniz:");

// let isimFormatla = function(ad,soyad){
//     let girilenAd = ad.charAt(0).toUpperCase() + ad.slice(1).toLowerCase()
//     let girilenSoyad = soyad.charAt(0).toUpperCase() + soyad.slice(1).toLowerCase()
//     format = `${girilenSoyad}, ${girilenAd}`;
//     console.log(format);

// }
// isimFormatla(ad,soyad)

// 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
// input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
// output : // Pijamali hasta, yagiz sofore cabucak guvendi.

// function turkceKarakterleriCevir(input) {
//   let output = "";
//   for (let i = 0; i < input.length; i++) {
//     let harf = input[i];
//     if (harf === "ç") output += "c";
//     else if (harf === "Ç") output += "C";
//     else if (harf === "ğ") output += "g";
//     else if (harf === "Ğ") output += "G";
//     else if (harf === "ı") output += "i";
//     else if (harf === "İ") output += "I";
//     else if (harf === "ö") output += "o";
//     else if (harf === "Ö") output += "O";
//     else if (harf === "ş") output += "s";
//     else if (harf === "Ş") output += "S";
//     else if (harf === "ü") output += "u";
//     else if (harf === "Ü") output += "U";
//     else output = output + harf; // Türkçe bir karakter değilse olduğu gibi ekle
//   }
//   return output;
// }

// Fonksiyonu test etmek için örnek bir kullanım:
// let input = "Pijamalı hasta, yağız şoföre çabucak güvendi.";
// console.log(input[0]);
// let output = turkceKarakterleriCevir(input);
// console.log(output); // "Pijamali hasta, yagiz sofore cabucak guvendi."

// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]

// let dizi1 = [1, 2, 3, 4, 5];
// let dizi2 = [3, 4, 5, 6, 7];

let dizi1 = [1, 2, 3, 4, 5];
let dizi2 = [3, 4, 5, 6, 7];

// dizi1'in elemanları üzerinde filtreleme yaparak ortak elemanları bul
let ortakElemanlar = dizi1.filter(eleman => dizi2.includes(eleman));

console.log(ortakElemanlar); // [3, 4, 5]



// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28
// let sayilar = [1, 2, 3, 4, 5];

// let sonuc = sayilar
//   .filter((x) => x % 2 === 0)

//   .map((x) => x * 2)
//   .reduce((x, y) => x + y, 0);
// console.log(sonuc); // Sonucu yazdır

// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
// input : [1, 2, 3, 4, 5]
// output : [5, 4, 3, 2, 1]
// let input2 = [1, 2, 3, 4, 5];
// let output2 = [];

// input2.forEach(eleman => {
//   output2.unshift(eleman); // Her elemanı çıkarılan dizinin başına ekleyin
// });

// console.log(output2); // [5, 4, 3, 2, 1]





// function turkceKarakterleriCevir(input) {
//     const harfler = {
//         'ç': 'c', 'Ç': 'C', 'ğ': 'g', 'Ğ': 'G',
//         'ı': 'i', 'İ': 'I', 'ö': 'o', 'Ö': 'O',
//         'ş': 's', 'Ş': 'S', 'ü': 'u', 'Ü': 'U'
//     };
//     return input.replace(/[çÇğĞıİöÖşŞüÜ]/g, harf => harfler[harf]);
// }

// // Fonksiyonu test etmek için örnek bir kullanım:
// let input = "Pijamalı hasta, yağız şoföre çabucak güvendi.";
// let output = turkceKarakterleriCevir(input);
// console.log(output); // "Pijamali hasta, yagiz sofore cabucak guvendi."