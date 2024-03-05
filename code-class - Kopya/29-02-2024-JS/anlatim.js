//TODO_29/2/2024 JS ÇALIŞMA SORULARI
//! SORU1
/* İki farklı objeyi birleştiren bir JavaScript fonksiyonu yazın. 
İki obje verilecek ve bu objelerin özellikleri birleştirilecek.
Eğer aynı özellik ismine sahip iki özellik varsa, 
ikinci objedeki değer alınacak.*/
const menu1={
    corba:"mercimek",
    anaYemek:"Güveç",
    icecek:"Ayran",
    tatli:"Sütlaç"
}   

const menu2={
    corba:"Yayla",
    baslangic:"Paçanga böreği",
    meyve:"Mevsim Meyvelerinden 3 adet",
    tatli:"Kazandibi",
    ikram:["fındık","badem","ceviz"],
    icecek:"çay"
}

//TODO-ÇÖZÜM1
//! SPREAD(...) operatörü iki objeyi birleştirdiğinde aynı değerde olanların ikincisini alıyor.

// const toplamMenu={...menu1,...menu2}
// console.log(toplamMenu);

//TODO-ÇÖZÜM2
/* for-in ile tanımlanan boş objenin içerisine  değerler atanıyor
 menu 2 yi daha sonra for ile işleme koyduğum için aynı değer onu aldı*/


// function birArada(menu1,menu2){
//     let toplamMenu={}
//     for(let i in menu1){
//         toplamMenu[i]=menu1[i]
//     }
//     for(let i in menu2){
        
//         toplamMenu[i]=menu2[i]}
    
    
//     return toplamMenu
// }

// const menuToplam= birArada(menu1,menu2);
// console.log(menuToplam);

//TODO-ÇÖZÜM3
function birArada(menu1,menu2){
    let toplamMenu={}

    let key1=Object.keys(menu1);
    let key2=Object.keys(menu2);
    const key= [...key1,...key2]//bu halde hem array oldu hemde değerler birden fazla yazdı.
    key.forEach(i=>{
        if(i in menu1 && i in menu2){
            toplamMenu[i]=menu2[i]
        }else if(i in menu2){
            toplamMenu[i]=menu2[i]
        }else{
            toplamMenu[i]=menu1[i]
        }
    })

    return toplamMenu
    
}
// const menuToplam= birArada(menu1,menu2);
// console.log(menuToplam);





//!SORU2
/* Verilen bir nesne dizisindeki her bir nesnenin belirli bir 
özelliğini kullanarak nesneleri gruplayan bir fonksiyon yazın. 
Gruplar, özelliğin değerine göre oluşturulacaktır.Her grup, 
özelliğin değerine sahip nesnelerin bir dizisini içermelidir.*/

const ogrenciler = [
    { ad: "Ahmet", yas: 25, sehir: "İstanbul" },
    { ad: "Ayşe", yas: 30, sehir: "Ankara" },
    { ad: "Mehmet", yas: 28, sehir: "Diyarbakir" },
    { ad: "Fatma", yas: 35, sehir: "Bursa" },
    { ad: "Hasan", yas: 25, sehir: "İstanbul" },
    { ad: "Emel", yas: 30, sehir: "Ankara" },
    { ad: "Hüseyin", yas: 28, sehir: "Diyarbakir" },
    { ad: "Zafer", yas: 35, sehir: "Bursa" },
    { ad: "Yaşar", yas: 25, sehir: "İstanbul" },
    { ad: "zeynep", yas: 30, sehir: "Ankara" },
    { ad: "Hatice", yas: 28, sehir: "Diyarbakir" },
    { ad: "Gülsüm", yas: 35, sehir: "Bursa" }

]
// let buyuk=ogrenciler.filter((ogrenci)=>ogrenci.yas>=30)
// let kucuk= ogrenciler.filter((ogrenci)=> ogrenci.yas<30)
// console.log(buyuk);
// console.log(kucuk);

//TODO_ÇÖZÜM1
// const memleket= ogrenciler.filter(p=>p.sehir==="İstanbul").map(p=>`${p.ad}-${p.sehir}`)
// console.log(memleket);

//TODO_ÇÖZÜM2
// const memleket=()=>{
//     const hemsehri={};
//     ogrenciler.forEach(ogrenci=>{
//         if(!hemsehri[ogrenci.sehir]){//böyle bir key olmadığı için true döndürüyor
//             hemsehri[ogrenci.sehir]=[]// burada boş dizi oluştu.
//             // console.log(hemsehri);
//         }
//         hemsehri[ogrenci.sehir].push(ogrenci)
//     })
//     return hemsehri
// }

// console.log(memleket(ogrenciler));
// const gruplar= memleket(ogrenciler)
// console.log(gruplar.Diyarbakir);
//TODO_ÇÖZÜM3_Yeni grup
const kisiler = {
    kisi1: { ad: "Ahmet", memleket: "İstanbul", yas: 25 },
    kisi2: { ad: "Ayşe", memleket: "Ankara", yas: 30 },
    kisi3: { ad: "Mehmet", memleket: "İzmir", yas: 28 },
    kisi4: { ad: "Fatma", memleket: "Antalya", yas: 35 },
    kisi5: { ad: "Hasan", memleket: "Bursa", yas: 27 }
    
};

// const azCok= ()=>{
//     let yolunYarisi=[]
//     let yolunBası=[]
//     for(let kisi of Object.values(kisiler)){
//         if(kisi.yas<30){
//            yolunBası.push(kisi);
//         }else{
//            yolunYarisi.push(kisi)
//         }
//     }
//     return {yolunYarisi, yolunBası}
// }

// console.log(azCok().yolunBası);
// console.log(azCok().yolunYarisi);










//!SORU3
//!)Bu employee nesnesi üzerinde çalışan bir fonksiyon yazın:
//?Bu fonksiyon, çalışanın maaşının yıllara göre performansı ile 
//?artışını hesaplamalıdır. İşlev, her yılın başında yapılan zam miktarını hesaplamalıdır.
// TODO-Zam miktarı, geçen yılın performansına bağlı olarak belirlenmelidir:
 /*"Excellent" performans için %10,
  "Good" performans için %7, 
  "Satisfactory" performans için %5, 
  "Poor" performans için %2.
 //?Fonksiyon, her yılın zammını ve son maaşı içeren bir nesne döndürmelidir.
 //*Ayrıca, bu fonksiyonun işlevselliğini test eden bir test senaryosu oluşturun. */
 
 
 const employee = {
    name: "John Doe",
    department: "Software Development",
    salary: 60000,
    performance: {
        year1: "Excellent",
        year2: "Good",
        year3: "Excellent"
    },
    projects: [
        { name: "Project A", status: "Completed" },
        { name: "Project B", status: "Ongoing" },
        { name: "Project C", status: "Pending" }
    ]
};

//TODO_ÇÖZÜM:
const kolaysaYap = (employee) => {
    let maasArtislari = {};
    let { salary, performance } = employee;
    let oncekiYilinZamliMaasi = salary; 

    for (let [year, performans] of Object.entries(performance)) {
       

        if (performans === "Excellent") {
            artisOrani = 0.1; 
        } else if (performans === "Good") {
            artisOrani = 0.07;       }

        artisMiktari = oncekiYilinZamliMaasi * artisOrani; 
        salary += artisMiktari; 
        // console.log(salary);

       
        maasArtislari[year] = {           
            zamOrani: artisOrani,
            zamMiktarı: artisMiktari,
            yeniMaas: salary,
            sene:year,

        };

        
    }

    return maasArtislari;
};

const deneme = kolaysaYap(employee);
console.log(deneme);
