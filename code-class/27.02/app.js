//! Bir restoranın menüsünü temsil eden bir JavaScript nesnesi oluşturun. Bu nesne, menüdeki yemeklerin adlarını özellikler olarak içermelidir. Ayrıca, her yemeğin fiyatını döndüren bir metodu da içermelidir. Oluşturduğunuz bu nesneyi kullanarak, menüdeki bir yemeğin adını almak ve fiyatını öğrenmek için nasıl bir JavaScript kodu yazarsınız?

const restoranMenusu = {
  pizza: {
    fiyat: 20
  },
  hamburger: {
    fiyat: 15
  },
  salata: {
    fiyat: 12
  }
};

// const yemekAdi = 'pizza';

























//! Bir şirketin çalışanlarını temsil eden bir JavaScript uygulaması yapmanız isteniyor. Her çalışanın adı, departmanı ve maaşı bilgilerini içeren bir nesne dizisi oluşturun. Ardından, şirket içindeki departmanlara göre çalışanların maaş ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, departman adını parametre olarak alacak ve ilgili departmandaki çalışanların maaş ortalamasını döndürecek. Eğer belirtilen departmanda çalışan yoksa, "Belirtilen departmanda çalışan bulunamadı!" mesajını döndürün. Örneğin:

var calisanlar = [
    { ad: "Ali", departman: "Muhasebe", maas: 4000 },
    { ad: "Ayşe", departman: "İnsan Kaynakları", maas: 6000 },
    { ad: "Fatma", departman: "Muhasebe", maas: 4500 },
    { ad: "Mehmet", departman: "Satış", maas: 5500 },
    { ad: "Ahmet", departman: "İnsan Kaynakları", maas: 5000 }
  ];

function maaslar(){

 calisanlar.forEach((calisan)=> console.log(calisan.maas))

}
 maaslar()

 const ortalamaMaas = calisanlar.reduce((toplam, maas)=> toplam+=maas,0)
 console.log(ortalamaMaas);

















//   function departmanMaasOrtalamasi(departman) {
//     const departmandakiCalisanlar = calisanlar.filter(calisan => calisan.departman === departman);
//     if (departmandakiCalisanlar.length === 0) {
//       return "Belirtilen departmanda çalışan bulunamadı!";
//     }
//     const toplamMaas = departmandakiCalisanlar.reduce((toplam, calisan) => toplam + calisan.maas, 0);
//     const maasOrtalamasi = toplamMaas / departmandakiCalisanlar.length;
//     return maasOrtalamasi;
//   }
  
//   console.log(departmanMaasOrtalamasi("Muhasebe")); // Beklenen çıktı: 4250
//   console.log(departmanMaasOrtalamasi("Satış")); // Beklenen çıktı: 5500
//   console.log(departmanMaasOrtalamasi("Bilgi Teknolojileri")); // Beklenen çıktı: Belirtilen departmanda çalışan bulunamadı!









//   //! Bir online öğrenci takip sistemi geliştiriyorsunuz. Her öğrencinin adı, sınıfı ve aldığı dersler bilgilerini içeren bir öğrenci nesnesi oluşturun. Ayrıca, her dersin adı, öğretmeni ve öğrencilere verilen notlar bilgilerini içeren bir ders nesnesi oluşturun.

// // 1. Öğrencilerin derslere kaydolmasını sağlayan bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını ve kaydolmak istediği dersleri almalıdır.
// // 2. Bir öğrencinin aldığı notları görüntüleyen bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını almalı ve aldığı dersler ile bu derslerde aldığı notları listelemelidir.
// // 3. Bir dersin öğrencilerinin not ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, dersin adını almalı ve bu derse kayıtlı öğrencilerin not ortalamasını döndürmelidir.

// // Bu özellikleri gerçekleştiren bir JavaScript programı yazın.


// // Öğrenci ve ders nesneleri oluşturulmasıconst numbers = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num, index, array) => {
//   console.log(`Total: ${total}, Number: ${num}, Index: ${index}, Array: ${array}`);
//   return total + num;
// }, 0);

// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const toplam = numbers.filter((num)=> num=num%2==0).reduce((toplam,num)=> toplam+=num,0)
// console.log(toplam);

const numbers = [1, 2, 3, 4, 5];


