//?Soru:
//*Bir alışveriş uygulaması için veri yapısını modelleyelim. Ürünlerin bir listesi bulunacak ve her ürünün bir isim, fiyat ve stok adedi olacak. Ayrıca, bir kullanıcının sepetini temsil eden bir obje olacak ve bu sepete ürün eklemek, çıkarmak ve toplam tutarı hesaplamak için fonksiyonlar yazmamız gerekecek.

//! 1. Ürünleri temsil etmek için bir array ve her ürünü tanımlamak için bir obje kullanarak bir ürün listesi oluşturun. Her ürünün en az 3 özelliği olmalıdır.

const urunler = [
    { isim: "Laptop", fiyat: 5000, stokAdedi: 10 },
    { isim: "Telefon", fiyat: 2000, stokAdedi: 15 },
    { isim: "Tablet", fiyat: 1000, stokAdedi: 20 },
  ];
  
  
  // //! 2. Bir kullanıcı sepetini temsil eden bir obje oluşturun. Sepet boş başlamalı.
  // const kullaniciSepeti = {};
  
  // //! 3.Bir fonksiyon yazın (sepeteEkle), bu fonksiyon bir ürün ve adet parametreleri almalı ve kullanıcının sepetine belirtilen adette ürün eklemelidir. Eğer eklenmek istenen adet, ürünün stok adedinden fazlaysa uygun bir mesaj verilmelidir.
  
  // const [laptop, telefon, tablet] = urunler;
  // // console.log(laptop);
  // const sepeteEkle = (urun, adet) => {
  //   if (urun.stokAdedi >= adet) {
  //     kullaniciSepeti[urun.isim] = (kullaniciSepeti[urun.isim] || 0) + adet;
  //     urun.stokAdedi -= adet;
  //     console.log(`${urun.isim} sepete eklendi. Sepetiniz:`, kullaniciSepeti);
  //   } else {
  //     console.log(`Üzgünüz, ${urun.isim} için yeterli stok yok.`);
  //   }
  // };
  
  // sepeteEkle(laptop, 5);
  // sepeteEkle(telefon,7);
  // sepeteEkle(tablet,3)
  
  // //! 4.Bir fonksiyon yazın (sepettenCikar), bu fonksiyon bir ürün ve adet parametreleri almalı ve kullanıcının sepetinden belirtilen adette ürün çıkarmalıdır. Eğer çıkartılmak istenen adet, kullanıcının sepetindeki o üründen daha fazlaysa uygun bir mesaj verilmelidir.
  // const sepettenCikar = (urun, adet) => {
  //   if (kullaniciSepeti[urun.isim] !== undefined) {
  //     if (kullaniciSepeti[urun.isim] >= adet) {
  //       kullaniciSepeti[urun.isim] -= adet;
  //       urun.stokAdedi += adet;
  //       console.log(`${urun.isim} sepetten çıkarıldı. Sepetiniz:`, kullaniciSepeti);
  //     } else {
  //       console.log(`Üzgünüz, Sepetinizde ${adet} adet ${urun.isim} yok.`);
  //     }
  //   } else {
  //     console.log(`Üzgünüz, Sepetinizde ${urun.isim} yok.`);
  //   }
  // };
  
  // sepettenCikar(laptop,2)
  
  
  
  // //! 5.Bir fonksiyon yazın (toplamTutar), bu fonksiyon kullanıcının sepetindeki ürünlerin toplam tutarını hesaplamalı ve geri döndürmelidir. Bu fonksiyonu oluştururken map, reduce ve filter fonksiyonlarından en az bir tanesini kullanmalısınız.
  
  // const toplamTutar = () => {
  //   const toplamFiyat = Object.keys(kullaniciSepeti)
  //     .map(urunAdi => urunler.find(urun => urun.isim === urunAdi).fiyat * kullaniciSepeti[urunAdi])
  //     .reduce((toplam, fiyat) => toplam + fiyat, 0);
  //   return toplamFiyat;
  // };
  
  
  
  
  
  
  