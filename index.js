// function search(){
//     const input = document.querySelector("input").value.toLowerCase();
//     const prodName = document.querySelectorAll("h2");
//     const product = document.querySelectorAll(".product");

//     for(var i=0; i<prodName.length; i++){
//         if(prodName[i].innerHTML.toLowerCase().includes(input)){
//             product[i].style.display = "flex";
//             // prodName[i].style.display = "block";
//         }
//         else{
//             product[i].style.display = "none";
//         }
//     }
// }

const input = document.querySelector("input");

input.addEventListener("keyup", function () {
  const inpVal = input.value.toLowerCase();
  const prodName = document.querySelectorAll("h2");
  const product = document.querySelectorAll(".product");

  for (var i = 0; i < prodName.length; i++) {
    if (prodName[i].innerHTML.toLowerCase().includes(inpVal)) {
      product[i].style.display = "flex";
      // prodName[i].style.display = "block";
    } else {
      product[i].style.display = "none";
    }
  }
});
