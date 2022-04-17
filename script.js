const colorBtn = document.getElementById("colorChangeBtn");
const navbar = document.getElementById("navbar");
const linkOne = document.getElementById("linkOne");
const linkTwo = document.getElementById("linkTwo");
const contactSection = document.getElementById("contactsection");
const footer = document.getElementsByClassName("footer");

colorBtn.addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("dark-mode");

  navbar.classList.remove("navbar-dark");
  navbar.classList.remove("bg-dark");
  navbar.classList.add("navbar-light");
  navbar.classList.add("bg-light");
  navbar.classList.add("light-nav");

  linkOne.classList.add("text-black");
  linkTwo.classList.add("text-black");

  contactSection.classList.remove("contactsection");
  contactSection.classList.add("bg-secondary");

  footer.classList.add("bg-white");
  footer.classList.add("text-black");
});
