var buttons = document.querySelectorAll(".product-addtocart");
console.log(buttons);

var confirmation = document.querySelector(".confirmation");
console.log(confirmation);

function showNotification() {
  confirmation.classList.add("is-active");
  setTimeout(function () {
    confirmation.classList.remove("is-active");
  }, 2000);
}

buttons.forEach(function (button) {
  button.addEventListener("click", showNotification);
});
