// let otomobil = {
//   marka: "Toyota",
//   model: "Corolla",
//   yil: 2020,
// };
// console.log(otomobil.marka); // Toyota

// //   Soru 2: Obje Metodu Ekleme
// // Yukarıdaki otomobil objesine bir metod ekleyin. Bu metod, otomobilin tam adını (marka ve model) birleştirip geri döndürmelidir. Metodu oluşturun ve kullanarak sonucu konsola yazdırın.

// // Cevap 2:

// // otomobil.tamAd = function() {
// //   return this.marka + " " + this.model;
// // };
// // console.log(otomobil.tamAd()); // Toyota Corolla

// // Soru 3: Obje İçindeki Özellikleri Döngüyle Yazdırma
// // Bir döngü kullanarak otomobil objesinin tüm özelliklerini ve değerlerini konsola yazdırın.

// // Cevap 3:

// // for (let ozellik in otomobil) {
// //   console.log(`${ozellik}: ${otomobil[ozellik]}`);
// // }
// for (let ozellik in otomobil) {
//   if (otomobil.hasOwnProperty(ozellik)) {
//     console.log(`${ozellik}: ${otomobil[ozellik]}`);
//   }
// }

// // Soru 4: Obje Kopyalama
// // otomobil objesinin bir kopyasını oluşturun ve bu kopyaya renk özelliği ekleyin. Orijinal otomobil objesinde bu değişikliğin olup olmadığını kontrol edin.

// // Cevap 4:

// let otomobilKopya = Object.assign({}, otomobil);
// otomobilKopya.renk = "mavi";
// console.log(otomobil.renk); // undefined
// console.log(otomobilKopya.renk); // mavi

// // Soru 5: Obje İçindeki Bir Özelliği Silme
// // otomobil objesinden yil özelliğini silin ve objenin son halini konsola yazdırın.

// // Cevap 5:

// delete otomobil.yil;
// console.log(otomobil);

// // Soru 1: Obje Oluşturma ve Değiştirme
// // Bir kitap objesi oluşturun. Bu obje, title (başlık), author (yazar) ve year (yıl) adlı üç özelliğe sahip olsun. İlk olarak, bu özelliklere uygun değerleri atayın. Sonra, bir özelliğin değerini değiştirerek güncel değeri konsola yazdırın.

// const kitap = {
//   title: "Book",
//   author: "N.Hikmet",
//   year: "1960",
// };

// kitap["title"] = "Poet";
// console.log(kitap);

// // Soru 2: Obje Metodu Ekleme ve Kullanma
// // Kitap objesine bir metod ekleyin. Bu metod, kitabın tam adını (title ve author'un birleşimi) döndürmelidir. Metodu oluşturun ve kullanarak sonucu konsola yazdırın.

// // const tamIsim = function(){
// //     yazdir= kitap.title +" "+ kitap.author
// //     return yazdir
// // }
// // console.log(tamIsim());

// // kitap.tamIsim = function () {
// //   return this.title + " " + this.author;
// // };
// // console.log(kitap.tamIsim());

// // Soru 3: Obje İçindeki Özellikleri Listeleyerek Yazdırma
// // Bir döngü kullanarak kitap objesinin tüm özelliklerini ve değerlerini konsola yazdırın.

// for (ozellik in kitap) {
//   console.log(ozellik + ":" + kitap[ozellik]);
// }
// for (let ozellik in kitap) {
//   console.log(ozellik + ": " + kitap.ozellik);
// }

// // Soru 4: Yeni Bir Özellik Ekleyip Kopyalama
// // Kitap objesine bir genre (tür) özelliği ekleyin. Sonra, bu objeden bir kopya oluşturun ve kopyadaki genre özelliğini değiştirin. İlk objenin genre özelliğinin değişip değişmediğini kontrol edin.
// kitap.basim = "1966";
// console.log(kitap);

// // Soru 5: Objeden Bir Özelliği Silme
// // Kitap objesinden bir özelliği (örneğin, year) silin ve objenin son halini konsola yazdırın.
// delete kitap["basim"];
// console.log(kitap);
// // Başarılar dilerim!

// // Soru 1: Prototip İle Metod Ekleme
// // Bir "Hayvan" constructor fonksiyonu oluşturun. Bu fonksiyon, hayvanın adını (ad) ve yaşını (yas) parametre olarak almalıdır. Ardından, tüm hayvan nesneleri için geçerli olacak bir sesCikar metodu ekleyin, bu metodun çıktısı hayvanın sesini temsil etsin.

// const hayvan = {
//   kopek: {
//     ad: "lesi",
//     yas: 5,
//   },
//   kedi: {
//     ad: "munir",
//     yas: 3,
//   },
//   inek: {
//     ad: "sari kız",
//     yas: 5,
//   },
//   ses1() {
//     console.log("hav hav");
//   },

//   ses2() {
//     console.log("miyav");
//   },

//   ses3() {
//     console.log("hav");
//   },}

