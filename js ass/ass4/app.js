//***********************************/
//*        CHECKOUT APP
//***********************************/

//! Donguler ile event tanımlamak mümkündür ancak fazla sayida event fazla tuketimi demektir. Bunun yerine bubbling ile parent elementler tek bir event tanımlanarak aşağıdaki elementlerin eventler yakalabilir. Yakalan event event.target ile ayrıştırılabilir.

//? Selectors
const deleteAllbtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");

//? Event Handler

deleteAllbtn.addEventListener("click", () => {
  // console.log(deleteAllbtn);
  products.textContent = "No products";
  products.classList.add("no-product");
  document.querySelector(".delete-div").remove();
  //   document.querySelector("delete-div").style.display = "none";
});

products.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   if (e.target.classList.contains("fa-plus")) {
  //     alert("plus");
  //   }
  //   else if(e.target.classList.contains("fa-minus")){
  //     alert("minus")
  //   }
  //   else if(e.target.classList.contains("fa-trash-can")){
  //     alert("delete")
  //   }

  if (e.target.classList.contains("fa-plus")) {
    // const discountedPrice = document.getElementById("discounted-price")
    // console.log(discountedPrice.innerText);
    // document.getElementById("quantity").textContent++

    e.target.previousElementSibling.textContent++;
    calculatePrice(e.target);
  }

  // if (e.target.classList.contains("fa-minus")) {
  //   e.target.nextElementSibling.textContent--;
  // }
});
const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest("product-info")
    .querySelector("#discounted-price");
  const productprice = btn
    .closest("product-info")
    .querySelector("#product-price");



};
