// console.log(1 && 3);
// console.log(0 && 1);
// console.log([] && 1);

// console.log(0 || false);
// console.log(0 || true);
// console.log(1 || true);

// //if/else - ternary
// // kullanıcıdan yaş değeri alan ve yaş >= 18 ise "Yaşınız ... , oy verebilirsiniz.", aksi halde "Yaşınız ... , oy veremezsiniz." uyarısı veren kodu if/else ve ternary kullanarak yazınız
// const yas = +prompt("yaşınızı giriniz");
// if (yas > 18) {
//   const curYear = new Date().getFullYear();
//   console.log(`Yaşınız ${yas}. Ehliyet alabilirsiniz`);
// } else {
//   console.log(`Yaşınız ${yas}. Ehliyet alamazsınız`);
// }
// let curYear = new Date().getFullYear()
// console.log(curYear);
//functions
// kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

function yasHesapla(isim, dogumTarihi) {
  const curYear = new Date().getFullYear();
  console.log(`${isim} , ${curYear - dogumTarihi}`);
}

yasHesapla("Ahmet", 1994);

const yasHesapla2 = (ad, dTarihi) => {
  const curYear = new Date().getFullYear();
  console.log(`${ad} , ${curYear - dTarihi}`);
};
yasHesapla2("Veysel", 1994);

//Array iterators
//  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const kucukHarf = isimler.map((isim) => (isim = isim.toLowerCase()));

console.log(kucukHarf);

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
const fiyatlar = [100, 250, 50, 89];

const kucuk250 = fiyatlar.filter((fiyat)=>fiyat = fiyat<100)

console.log(kucuk250);



//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  },
  {
    name: 'Merve',
    surname: 'Veli',
    job: 'developer',
    age: 26,
  }
];

const kucuk30 = kisiler.filter((kisi) => kisi.age < 30);
kucuk30.forEach((kisi) => console.log(kisi.name));


// Objects
// calisan objesinde … değerlerini consola yazdırınız
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };



// const { lokasyon : {ilce}}= calisan
// console.log(ilce);
// Spread
// araclar ve otomobiller dizilerini başka bir dizide birleştiriniz
// const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
// const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];



// calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };



// calisan.yas = 50

// console.log(calisan);

// const yasGuncel = { ...calisan, yas: 45 };

// console.log(yasGuncel);



//Destructuring
// car objesinden brand, model,name,surname propertilerini destruct ediniz
// const car = {
//     brand: 'BMW',
//     model: 1990,
//     engine: 1.6,
//     owner:{
//       name: 'Ahmet',
//       surname: 'Can',
//   },
// };

// const {brand, model, owner:{name,surname}}= car

// console.log(name,surname);



















// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
  // this.getSummary= function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`
  // }
// }
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// const book1 = new Book("Crime and Punishment", "Dostoevski", 1880);

// console.log(book1.getSummary());

// Inheritence

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     // this.description = description

//     // getSummary(){
//     //     return `${this.title} was written by ${this.author} in ${this.year}`   //? burada yazarsak her instancede olur bellekte yer kaplar.
//     // }
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }
// }

// // sub class tanımlanması

// class Magazine extends Book {
//   constructor(title, author, year, mounth) {
//     super(title, author, year);
//     this.mount = mounth;
//   }
// }

// const mag1 = new Magazine("SRE", "Einstein", 1930, "Nov");

// console.log(mag1);
