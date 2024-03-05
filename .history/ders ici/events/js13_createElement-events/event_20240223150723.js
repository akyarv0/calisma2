//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******");

const yazdir = () => document.write("Hello FS16");

yazdir();

//? Selectorler
const h2 = document.querySelector(".add-item h2");

//?event tanımlamalari

//* mouse h2 elemenitini üzerine geldiğinde tetiklenir
h2.onmouseover = function () {
  //   h2.style.color = "red"
  h2.classList.add("red", "center");
};

//* mouse h2 elemenitinin üzerinden ayrıldığınıda tetiklenir
