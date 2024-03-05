// Soru: Object.keys() methodu nedir ve ne işe yarar?

// Cevap: Object.keys() methodu, bir nesnenin sahip olduğu özelliklerin isimlerini içeren bir dizi döndürür. Örneğin:


const myObject1 = { name: 'John', age: 25, city: 'New York' };
const keys = Object.keys(myObject1);
// keys: ['name', 'age', 'city']


// Soru: Object.values() methodu nasıl kullanılır ve ne sağlar?

// Cevap: Object.values() methodu, bir nesnenin sahip olduğu özelliklerin değerlerini içeren bir dizi döndürür. Örneğin:


const myObject2 = { name: 'John', age: 25, city: 'New York' };
const values = Object.values(myObject2);
// values: ['John', 25, 'New York']
// Soru: Object.assign() methodu nedir ve ne işe yarar?

// Cevap: Object.assign() methodu, bir veya daha fazla kaynak nesnesini hedef nesneye birleştirir. Bu, nesneler arasında özelliklerin kopyalanmasını sağlar. Örneğin:


// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// const result = Object.assign(target, source);
// // result: { a: 1, b: 3, c: 4 }


// Soru: Object.hasOwnProperty() methodu ne işe yarar?

// Cevap: Object.hasOwnProperty() methodu, belirli bir özelliğin nesnenin kendisine ait olup olmadığını kontrol eder. Örneğin:


const myObject3 = { name: 'John', age: 25 };
console.log(myObject3.hasOwnProperty('name')); // true
console.log(myObject3.hasOwnProperty('gender')); // false



// Soru: Object.entries() methodu nedir ve ne işe yarar?

// Cevap: Object.entries() methodu, bir nesnenin sahip olduğu özelliklerin isim-değer çiftlerini içeren bir dizi döndürür. Bu, nesnenin içeriğini kolayca döngüyle gezmek için kullanılabilir. Örneğin:


const myObject4 = { name: 'John', age: 25, city: 'New York' };
const entries = Object.entries(myObject4);
console.log(entries);
// entries: [['name', 'John'], ['age', 25], ['city', 'New York']]

// Soru: Object.create() methodu nasıl kullanılır?

// Cevap: Object.create() methodu, belirli bir prototip nesnesi üzerinden yeni bir nesne oluşturur. Örneğin:


const person = {
  name: 'John',
  age: 25,
};

const newPerson = Object.create(person);
console.log(newPerson);


// Soru: Object.entries() ve forEach ile nesne özelliklerini döngü içinde nasıl kullanabilirsiniz?

// Cevap:0


const myObject = { name: 'John', age: 25, city: 'New York' };

Object.entries(myObject).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Çıktı: name: John, age: 25, city: New York



