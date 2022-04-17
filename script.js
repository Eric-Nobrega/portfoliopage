const colorBtn = document.getElementById("colorChangeBtn");
colorBtn.addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("dark-mode");
});
