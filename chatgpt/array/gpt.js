const numbers = [1, 2, 3, 4, 5];
// Soru: Yukarıdaki 'numbers' array'ini kullanarak bir forEach döngüsü oluşturun ve her elemanı console'a yazdırın.

numbers.forEach((num) => console.log(num));

const colors = ["red", "green", "blue"];
// Soru: Array destructuring kullanarak 'colors' array'inden ilk iki rengi çıkarın ve iki farklı değişkene atayın.

const [firstColor, secondColor,thirdColor] = colors;//havada yakalama olayı

// İki farklı değişkene atayın
console.log("İlk Renk:", firstColor);
console.log("İkinci Renk:", secondColor);
console.log("Üçüncü renk:",thirdColor);

const fruits = ["apple", "orange", "banana"];
// Soru: 'fruits' array'inden ikinci elemana (orange) nasıl erişilir?

console.log(fruits[1]);

const names = ["Alice", "Bob", "Charlie"];
// Soru: 'names' array'ini kullanarak bir for loop oluşturun ve her ismi console'a yazdırın.

names.forEach((i) => console.log(i))



for (let i = 0; i < 3; i++) {
  console.log(i);
}

const coordinates = [10, 20, 30];
// Soru: Array destructuring ve forEach kullanarak 'coordinates' array'inin her elemanını 2 ile çarpıp yazdırın.

coordinates.forEach((corr)=> console.log(corr*2) )


//map methodu ile
const newcoor = coordinates
  .map((m) => (m = m * 2))
  .forEach((m) => console.log(m));

  const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Soru: 'numbers' array'inden yalnızca çift sayıları içeren yeni bir array oluşturun. Ardından, bu yeni array'in toplamını reduce kullanarak bulun. 
const ciftSayilar = sayilar.filter((sayi) => sayi%2===0).reduce((a,b)=> a+b )
console.log(ciftSayilar);












console.log( sayilar.filter((m)=> m%2===0).reduce((accumulator, currentValue) => accumulator + currentValue
 )); 








 const words = ['apple', 'orange', 'banana', 'strawberry', 'kiwi'];

// Soru: 'words' array'ini alfabetik sıraya göre sıralayın. Sonra, her kelimenin uzunluğunu içeren yeni bir array oluşturun.

const sirala = words.sort().forEach((m) => console.log(m.length))
console.log(sirala);









const newWords = words.sort().map((m)=> m.length);
console.log(newWords);




// Soru: 'students' array'inden bir öğrenciyi (örneğin, grade değeri 90'dan büyük olan bir öğrenci) bulun. Ayrıca, en az bir öğrencinin geçme notu (70 ve üstü) alıp almadığını kontrol edin.
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 95 }
];

const [person1,person2,person3,person4] = students

console.log(person1);
console.log(person4);


// `students` dizisinin bir kopyasını `studentsCopy` adında yeni bir diziye atayın.
const studentsCopy = [...students];

console.log(studentsCopy);





const above90 = students.filter(student => student.grade > 90);

console.log(above90);









// Notu 90'dan büyük olan bir öğrenciyi bul
// const highScoringStudent = students.find(student => student.grade > 90);
// console.log(highScoringStudent);

// En az bir öğrencinin 70 ve üstü bir nota sahip olup olmadığını kontrol et
// const isAnyonePassing = students.some(student => student.grade >= 70);
// console.log(isAnyonePassing);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Soru: 'matrix' array'indeki her alt dizinin bütün elemanları tek sayı mı kontrol edin. Ardından, tek sayı olan her elemanı iki katına çıkararak yeni bir matrix oluşturun.

const matrix1 = [...matrix]
console.log(matrix1); 








const result = matrix.every(subArray => subArray.every(num => num % 2 === 1)) 
            ? matrix.map(subArray => subArray.map(num => num * 2))
            : 'Not all elements are odd';

console.log(result);









