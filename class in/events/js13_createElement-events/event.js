//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******");

const yazdir = () => document.write("Hello FS16");

yazdir();

//? Selectorler
const h2 = document.querySelector(".add-item h2");
const body = document.querySelector("body");
const myInput = document.getElementById("input");

const add = document.getElementById("btn");

const ul = document.querySelector("ul");

//?event tanımlamalari

//* mouse h2 elemenitini üzerine geldiğinde tetiklenir
h2.onmouseover = function () {
  //   h2.style.color = "red"
  h2.classList.add("red", "center");
};

//* mouse h2 elemenitinin üzerinden ayrıldığınıda tetiklenir

body.onload = function () {
  myInput.focus();
};

add.onclick = function (e) {
  // console.log(e);
  // console.log(e.target);
  const li = document.createElement("li");
  li.textContent = myInput.value;
  console.log(li);
  ul.appendChild(li);
  myInput.value = "";
};

