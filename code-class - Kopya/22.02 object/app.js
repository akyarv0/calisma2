// //! Bir dizindeki sayıların toplamını istiyoruz ancak her bir sayıya önce 3 ekleyip sonra toplanacak. Örneğin [1,2,3] sonuç 15 olmalı.

// const numbers = [1, 2, 3];

// const result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue + 3;
// }, 0) 

// console.log(result);


//! TOPLAMA

// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce((acc,cur) => acc + cur,0)

// console.log(sum) // 15


//!FİLTRELEME

// const numbers = [1,2,3,4,5]
// /* -------------------------------------------------------------------------- */
// //!                           filter yöntemi                                  */
// /* -------------------------------------------------------------------------- */
// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers);


// /* -------------------------------------------------------------------------- */
// //!                           reduce yöntemi                                  */
// /* -------------------------------------------------------------------------- */

// const evenNumbers2 = numbers.reduce((acc,number) => {
//     if(number % 2 === 0) {
//         acc.push(number)
//     }
//     return acc
// },[]) // bunu yazmazsak yukardaki push methodu push yapacak bir şey bulamaz.

// console.log(evenNumbers);


//!NESNE OLUŞTURMA

const numbers = [1,2,3,4,5,1,3,4,5] // sayıların sıra numarasını gösteren bir object yazın.

const objNumbers = numbers.reduce((acc,cur,index) => {
    acc[`number-${index + 1}`] = cur
    return acc
},{})

console.log(objNumbers);  // for döngüsü ve forEach ile de yapılır



//! Min-Max Bulma

// const numbers = [3,1,7,5,2]
/* -------------------------------------------------------------------------- */
//!                           Math.min yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const min = Math.min(...numbers)
// console.log(min);


/* -------------------------------------------------------------------------- */
//!                           reduce yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const min = numbers.reduce((acc,cur) => Math.min(acc,cur),Infinity) //!infinity bir sayı değeridir ve sonsuzluğu temsil eder. Bu değer diğer sayılardan daha büyüktür.
// console.log(min);
// const max = numbers.reduce((acc,cur) => Math.max(acc,cur),-Infinity) //! -infinity bir sayı değeridir ve sonsuzluğu temsil eder. Bu değer diğer sayılardan daha küçüktür.
// console.log(max);


//!STRİNG BİRLEŞTİRME

// const words = ['Merhaba', 'dünya', '!']

// const sentence = words.reduce((acc,cur) => acc + ' ' + cur,'') //aslında başta merhaba yazdı. sonra merhaba dünya yazdı. sonra merhaba dünya ! yazdı.
// console.log(sentence);

//! GRUPLAMA - NESNE DİZİSİ İŞLEMLERİ

const data = [
    {
        name: 'Alice',
        age: 30
    },
    {
        name: 'Bob',
        age: 25
    },
    {
        name: 'Charlie',
        age: 30
    },
    {
        name: 'john',
        age: 35
    },
    {
        name: 'jack',
        age: 32
    },
]

//? GRUPLAMA

const groupAge = data.reduce((acc,person) => {
    const age = person.age
    if(!acc[age]){
        acc[age] = []
    }
    acc[age].push(person)
    return acc
},{})

console.log(groupAge);

//? Yaş toplamı bulma

// const totalAge = data.reduce((acc,person) => acc + person.age,0)
// console.log(totalAge);

//? 35 yaşından küçük kişileri filtreleme
/* -------------------------------------------------------------------------- */
//!                           filter yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const over35 = data.filter(person => person.age < 35) 
// console.log(over35);


/* -------------------------------------------------------------------------- */
//!                           reduce yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const over35 = data.reduce((acc,person) => {
//     if(person.age < 35) {
//         acc.push(person)
//     }
//     return acc
// },[])

// console.log(over35);



// const numbers = [1, 2, 3, 4, 5, 1, 3, 4, 5];
// reduce metodu bu dizinin her elemanı için aşağıdaki adımları takip eder:

// Başlangıç Durumu:
// Akümülatör (acc) başlangıçta boş bir obje {} olarak belirlenmiştir.
// Dizi elemanları (cur) ve onların indeksleri (index): [(1, 0), (2, 1), (3, 2), (4, 3), (5, 4), (1, 5), (3, 6), (4, 7), (5, 8)]
// İlk Eleman için Döngü (1, indeks: 0):
// acc: {} (Başlangıçta boş)
// İşlem: acc['number-1'] = 1
// Sonuç: acc => {'number-1': 1}
// İkinci Eleman için Döngü (2, indeks: 1):
// acc: {'number-1': 1}
// İşlem: acc['number-2'] = 2
// Sonuç: acc => {'number-1': 1, 'number-2': 2}
// Üçüncü Eleman için Döngü (3, indeks: 2):
// acc: {'number-1': 1, 'number-2': 2}
// İşlem: acc['number-3'] = 3
// Sonuç: acc => {'number-1': 1, 'number-2': 2, 'number-3': 3}
// ... ve bu adımlar dizinin sonuna kadar devam eder.

// Son Eleman için Döngü (5, indeks: 8):
// acc: ...
// İşlem: acc['number-9'] = 5
// Sonuç: acc => {'number-1': 1, 'number-2': 2, ..., 'number-9': 5}
// Son Durum:

// acc => {'number-1': 1, 'number-2': 2, 'number-3': 3, 'number-4': 4, 'number-5': 5, 'number-6': 1, 'number-7': 3, 'number-8': 4, 'number-9': 5}
// console.log(objNumbers); çıktısı: {'number-1': 1, 'number-2': 2, 'number-3': 3, 'number-4': 4, 'number-5': 5, 'number-6': 1, 'number-7': 3, 'number-8': 4, 'number-9': 5}
// Bu işlemle, her dizi elemanı için bir anahtar oluşturulur ve bu anahtar, "number-" ile başlayıp elemanın indeksine eşit olan bir sayının 1 fazlasıyla sonlanır (indeks 0'dan başladığı için 1 eklenir). Her anahtarın değeri ise dizi elemanının kendisidir. Bu yöntemle, dizi elemanlarının sıra numaralarını ve değerlerini içeren bir obje elde edilir.