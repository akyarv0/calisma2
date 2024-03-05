// "Sıralı bir dizi içinde (örneğin, bir dizi içinde) tekrar eden sayıları bulun ve bu tekrar eden sayıların her biri için kaç kere tekrar ettiğini hesaplayın. Sonuçları bir obje olarak döndürün."

// const arr12 = [12, 15, 2, 4, 12, 2, 7, 8, 4];

// const again = arr12.reduce((acc,number) => {
//   acc[number] = (acc[number]|| 0)+1
// return acc;
// },{})

// console.log(again);

// const tekrar = arr12.reduce((acc, number) => {
//   acc[number] = (acc[number] || 0) + 1;
//   // console.log([number]);
//   return acc
// }, {});
// console.log(tekrar);

// const tekrar = arr1.filter(
//   (item, index, array) => array.indexOf(item) !== index
// );
// console.log(tekrar);

// const tekrar1 = arr1.filter((item, index) => arr1.indexOf(item) !== index)

// "Sıralı bir dizi içindeki her bir sayının, dizideki tüm önceki sayılarla çarpımını hesaplayın. Örneğin, [1, 2, 3, 4] dizisi için sonuç [1, 2, 6, 24] olmalıdır."

// const sayilar = [3, 2, 3, 4];
// for (let i = 1; i < sayilar.length; i++) {
//   sayilar[i] = sayilar[i] * sayilar[i - 1];
// }

// console.log(sayilar);

// console.log(sayilar);

// let multiple = arr[0];  //adem çözüm
// const n = array.filter((x,i=1,arr) => i<arr.length ).map((x,i=1,arr)=> multiple *= arr[i]);
// console.log(n);

// "Verilen bir dizideki her bir kelimenin uzunluğunu hesaplayarak bu uzunlukları içeren yeni bir dizi oluşturun." Örneğin ["merhaba", "dünya", "javascript"] sonucu [7, 5, 10] olamlı
//? 1.Çözüm
// const words = ["merhaba", "dünya", "javascript"];

// const rakam = words.map((m) => {(m = m.length)});
// console.log(rakam);

const words = ["hello", "world", "codeium"];
let sonuc = true;
const abc = () => {
  for (let i of words) {
    sonuc = i.includes("a");
    return sonuc;
  }
};
console.log(abc());

// const rakam = words.map(m => { return m.length; });

// console.log(rakam);

// const kelimeU = words.map((m) => m.length);
// console.log(kelimeU); //map ile daha güzel

// //? 2.cözüm
// const uzunluk = [];
// for (let i in words) {
//  uzunluk.push(words[i].length);
// }
// console.log(uzunluk);

// // ipucu --->const wordsNum = words[0].length // 7

// "Verilen bir dizideki pozitif çift sayıların karelerini alarak bu sayıları sıralı bir şekilde büyükten küçüğe doğru listeleyin."
const arr2 = [12, 15, 2, 4, 12, 2, 7, 8, 4];

const sirala = arr2
  .filter((m) => (m = m % 2 == 0 && m > 0))
  .map((m) => (m = m ** 2))
  .sort((a, b) => b - a)
  .reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
console.log(sirala);

// const kareAl1 = arr2
//   .filter((m) => m % 2 === 0)
//   .map((m) => m ** 2)
//   .sort((a, b) => b - a);
// console.log(kareAl1);

// const karesi = arr2
//   .filter((number) => number > 0 && number % 2 === 0)
//   .map((number) => number ** 2)
//   .sort((a, b) => b - a);

// console.log(karesi);

// const arr2Evens = [];
// for (let i of arr2) {
//   if (i % 2 === 0 && i > 0) {
//     i = i ** 2;
//     arr2Evens.push(i);
//   }
// }

// console.log(arr2Evens.sort((a, b) => b - a));

// // const numbers = [-10, -2, 8, 5, -12, 20, 17]; --------adem çözüm----------
// // const result = numbers
// //   .filter((x) => x > 0 && x % 2 === 0)
// //   .map((y) => y ** 2)
// //   .sort((a, b) => b - a);
// // console.log(result);

// let myArr = ["hello", "world", "FS cohort 16!"];
// myArr = myArr.map((item) => item.toUpperCase());
// let cohort = myArr[2];
// cohort.toLowerCase(); // işe yaramıyor sebebi heap-steack muhabbeti yüzünden
// console.log(cohort);

// const numbers = [15.5, 2.3, 1.1, 4.7];
// const toplam = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(toplam); // Output: 23.6

// // const arr1 = [3, 5, 3, 4, 5];

// // const tekrar = arr1.reduce((acc, number) => {
// //   acc[number] = (acc[number] || 0) + 1;
// //   // console.log([number]);
// //   return acc
// // }, {});
// // console.log(tekrar);

// // "Sıralı bir dizi içinde (örneğin, bir dizi içinde) tekrar eden sayıları bulun ve bu tekrar eden sayıların her biri için kaç kere tekrar ettiğini hesaplayın. Sonuçları bir obje olarak döndürün.

// // reduce metodu bu dizinin her elemanı için aşağıdaki adımları takip eder:

// //? 1. Başlangıç Durumu:
// // Akümülatör (acc) başlangıçta boş bir obje {} olarak belirlenmiştir.
// // Dizi elemanları (number): [3, 5, 3, 4, 5]

// //? 2.İlk Eleman (3):
// // acc: {} (Başlangıçta boş)
// // İşlem: acc[3] = (acc[3] || 0) + 1 => acc[3]= 0 + 1
// // Sonuç: acc => {3: 1}

// //? 3. İkinci Eleman (5):
// // acc: {3: 1}
// // İşlem: acc[5] = (acc[5] || 0) + 1 => acc[5] = 0 + 1
// // Sonuç: acc => {3: 1, 5: 1}

// //? 4. Üçüncü Eleman (3):
// // acc: {3: 1, 5: 1}
// // İşlem: acc[3] = (acc[3] || 0) + 1 => acc[3] = 1 + 1
// // Sonuç: acc => {3: 2, 5: 1}

// //? 5. Dördüncü Eleman (4):
// // acc: {3: 2, 5: 1}
// // İşlem: acc[4] = (acc[4] || 0) + 1 => acc[4] = 0 + 1
// // Sonuç: acc => {3: 2, 5: 1, 4: 1}

// //? 6. Beşinci Eleman (5):
// // acc: {3: 2, 5: 1, 4: 1}
// // İşlem: acc[5] = (acc[5] || 0) + 1 => acc[5] = 1 + 1
// // Sonuç: acc => {3: 2, 5: 2, 4: 1}

// //? Son Durum:

// // acc => {3: 2, 5: 2, 4: 1}
// // console.log(tekrar); çıktısı: {3: 2, 5: 2, 4: 1}
// // Her adımda, acc objesi o anki elemanın frekansını günceller ve sonraki adıma geçer. İşlem tamamlandığında, acc objesi her sayının frekansını içeren bir tablo haline gelmiş olur.
