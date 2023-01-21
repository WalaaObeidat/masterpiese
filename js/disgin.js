// const filters = document.getElementById("filters");
// const productList = document.getElementById("product-list");

// filters.addEventListener("change", () => {
//   const category = filters.querySelector("#category").value;
//   const price = filters.querySelector("#price").value;

//   productList.querySelectorAll(".product").forEach((product) => {
//     if (
//       (category === "all" || product.dataset.category === category) &&
//       (price === "all" || checkPrice(product.dataset.price, price))
//     ) {
//       product.style.display = "flex";
//     } else {
//       product.style.display = "none";
//     }
//   });
// });

// function checkPrice(productPrice, filterPrice) {
//   if (filterPrice === "0-50") {
//     return parseInt(productPrice) >= 0 && parseInt(productPrice) <= 50;
//   } else if (filterPrice === "50-100") {
//     return parseInt(productPrice) > 50 && parseInt(productPrice) <= 100;
//   } else if (filterPrice === "100+") {
//     return parseInt(productPrice) > 100;
//   }
// }
