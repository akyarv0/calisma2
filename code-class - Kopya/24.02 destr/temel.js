// // 1. Temel Nesne Yıkımı:

// const person = { name: 'John', age: 30, city: 'New York' };

// // Nesne yıkımı kullanarak özelliklere erişim
// const { name, age, city } = person;

// console.log(name); // John
// console.log(age);  // 30
// console.log(city); // New York


// // 2. Yeniden Adlandırma:

// const person = { name: 'John', age: 30, city: 'New York' };

// // Yeniden adlandırma ile nesne yıkımı
// const { name: fullName, age: years, city: residence } = person;

// console.log(fullName);   // John
// console.log(years);      // 30
// console.log(residence);  // New York










// // 3. Varsayılan Değerler:

// const person = { name: 'John', age: 30 };

// // Varsayılan değerlerle nesne yıkımı
// const { name, age, city = 'Unknown' } = person;

// console.log(name); // John
// console.log(age);  // 30
// console.log(city); // Unknown










// // 4. Fonksiyon Parametreleriyle Kullanım:

// const displayPersonInfo = ({ name, age, city = 'Unknown' }) => {
//   console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// };

// const person = { name: 'John', age: 30 };

// // Fonksiyona nesne yıkımı ile parametre gönderme
// displayPersonInfo(person);
// // Output: Name: John, Age: 30, City: Unknown












// // 5. Derin Nesne Yıkımı:

// const user = {
//   name: 'Alice',
//   address: {
//     city: 'Wonderland',
//     zip: '12345'
//   }
// };

// // Derin nesne yıkımı
// const { name, address: { city, zip } } = user;

// console.log(name); // Alice
// console.log(city); // Wonderland
// console.log(zip);  // 12345
// // Bu örnekler, JavaScript'te nesne yıkımının temel kullanımlarını göstermektedir. Nesne yıkımı, kodunuzu daha okunabilir ve esnek hale getirebilmeniz için güçlü bir araçtır.