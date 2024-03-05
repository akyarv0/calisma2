// let sayi1 = parseFloat(prompt("1. sayıyı giriniz"));
// let sayi2 = parseFloat(prompt("2. sayıyı giriniz"));
// let islem = prompt("Yapmak istediğiniz işlemi giriniz (+, -, *, /):");

// let hesapMakinesi = (sayi1, sayi2, islem) => {
//   let sonuc; // Declare sonuc without initializing to 0
//   if (islem == "+") {
//     sonuc = sayi1 + sayi2;
//   } else if (islem == "-") {
//     sonuc = sayi1 - sayi2;
//   } else if (islem == "*") {
//     sonuc = sayi1 * sayi2;
//   } else if (islem == "/") {
//     if (sayi2 !== 0) {
//       sonuc = sayi1 / sayi2;
//     } else {
//       console.log("Sıfıra bölme hatası");
//       return; // Exit the function early
//     }
//   } else {
//     console.log("Geçersiz işlem");
//     return; // Exit the function early
//   }
//   console.log("Sonuç:", sonuc); // Log the result
// };

// hesapMakinesi(sayi1, sayi2, islem); // Call the function without logging the return value

// let EvenOrOdd = (number) =>

//   number % 2 === 0
//     ? console.log("Girdiğiniz sayı çifttir.")
//     : console.log("Girdiğiniz sayı tektir.");

// EvenOrOdd(86);
// EvenOrOdd(73);

// let alanHesapla = (yaricap)=> {
//     let alan = Math.PI*yaricap**2
//     console.log(alan);

// }
// alanHesapla(2);

// let yasHesapla = (dogumTarihi)=>{
//     let yas = 2024-dogumTarihi
//     console.log(yas);
// }
// yasHesapla(1966)

// let alanUcgen = (taban,yukseklik) => {
//     let taban =+prompt("Taban değerini giriniz:");
//     let yukseklik =+prompt("Yükseklik değerini giriniz:");
//     let alan = taban*yukseklik/2
//     console.log(alan);
//     return alan

// }
// console.log(alanUcgen(4,3));
// console.log(alanUcgen(23,62));

// let kareAl = (sayi)=> {
//   let sonuc = sayi ** 2;
//   console.log(sonuc);
// };
// kareAl(5);
//! Expression Yöntemi 
// let leapYear = function (year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`Girdiğiniz ${year} artık yıldır`);
//   } else {
//     console.log(`Girdiğiniz ${year} artık yıl değildir.`);
//   }
// };

// leapYear(2020);
// leapYear(1900);
// leapYear(2000);


// let leapYear = function () {
//   let girilenYear = +prompt("Yıl giriniz"); // Kullanıcıdan yıl bilgisini alın ve sayıya dönüştürün
//   if ((girilenYear % 4 === 0 && girilenYear % 100 !== 0) || girilenYear % 400 === 0) {
//     console.log(`Girdiğiniz ${girilenYear} artık yıldır`); // Artık yıl ise konsola yazdır
//   } else {
//     console.log(`Girdiğiniz ${girilenYear} artık yıl değildir.`); // Artık yıl değilse konsola yazdır
//   }
// };
// leapYear()
// leapYear(); // Fonksiyonu çağır

// let leapYear = function () {
//   let girilenYear = +prompt("Yıl giriniz");
//   if ((girilenYear % 4 === 0 && girilenYear % 100 !== 0) || girilenYear % 400 === 0) {
//     console.log(`Girdiğiniz ${girilenYear} artık yıldır`);
//   } else {
//     console.log(`Girdiğiniz ${girilenYear} artık yıl değildir.`);
//   }
// };

// // Call the function without arguments
// leapYear();

// const maas = [40000, 50000, 20000, 30000, 25500];

// const azMaas = maas
//   .filter((m) => m < 40000)
//   .map((m) => m * 1.25)
//   .reduce((m, n) => m + n);
// console.log(azMaas);

// let arr = [1, 2, 3];

// for (let value of arr) {
//   console.log(value); // çıktı: 1, 2, 3
// }

const numbers = [1, 4, 9, 16, 25];

// Soru 1: numbers dizisinin ilk elemanına nasıl erişilir ve bu değeri yazdırabilirsiniz?
// Soru 2: numbers dizisinin son elemanına nasıl erişilir ve bu değeri yazdırabilirsiniz?
// Soru 3: numbers dizisinin ortadaki elemanına (örneğin, 9) nasıl erişilir ve bu değeri yazdırabilirsiniz?
// Soru 4: numbers dizisinin uzunluğu kaçtır ve bu değeri nasıl bulabilirsiniz?
const firstEl = numbers[0]
console.log(numbers[0]);

const lastEl = numbers[2]
console.log(lastEl);


console.log(numbers.length);

const mixedArray = [10, "Hello", true, [1, 2, 3], { name: "John", age: 25 }];

// Soru 5: mixedArray dizisinin 3. elemanı bir boole değerdir. Bu değeri nasıl kontrol edebilirsiniz?
// Soru 6: mixedArray dizisinin 4. elemanı bir dizi içeriyor. Bu dizinin uzunluğunu nasıl bulabilirsiniz?
// Soru 7: mixedArray dizisinin 5. elemanı bir nesnedir. Bu nesnenin "name" özelliğine nasıl erişebilirsiniz?
// Soru 8: mixedArray dizisinin elemanlarını tek bir string'e nasıl birleştirebilirsiniz?

const control = mixedArray.includes(true)
console.log(control);

console.log(mixedArray[3].length);

console.log( mixedArray[4]["name"]);
console.log(mixedArray.join()); 

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Soru 9: matrix dizisinin 2. satırındaki 3. elemana nasıl erişebilirsiniz?
// Soru 10: matrix dizisinin her bir satırındaki elemanları toplamak için nasıl bir kod yazabilirsiniz?
// Soru 11: matrix dizisinin her bir sütunundaki elemanları toplamak için nasıl bir kod yazabilirsiniz?
// Soru 12: matrix dizisinin elemanlarını gezerek her elemanın karesini içeren yeni bir matris nasıl oluşturabilirsiniz?

console.log(matrix[1][2]); 

for (let i = 0; i < matrix.length; i++) {
  let toplam = 0;
  for (let j = 0; j < matrix[i].length; j++) {
    toplam += matrix[i][j];
  }
  console.log(toplam);
}
// matrix dizisinin sütun sayısını alalım
const columnCount = matrix[0].length;

// Her bir sütun için bir döngü
for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
  let columnTotal = 0;

  // Her bir satırı gezerek sütun elemanlarını topla
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    columnTotal += matrix[rowIndex][columnIndex];
  }

  console.log(`Sütun ${columnIndex + 1} toplamı: ${columnTotal}`);
}
