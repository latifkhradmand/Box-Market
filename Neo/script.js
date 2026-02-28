const menubtn = document.querySelectorAll(".mobileMenu button");
menubtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menubtn.forEach((btn) => {
      btn.classList.remove("mobileMenuActive");
    });
    btn.classList.add("mobileMenuActive");
  });
});

const burgerfullmenu = document.querySelector(".burgerfullmnu");
const burgerBtn = document.querySelector(".burgerBtn");
const burgerBtnicon = document.querySelector(".burgerBtn i");

burgerBtn.addEventListener("click", () => {
  burgerfullmenu.classList.toggle("translate-x-60");
  burgerBtn.classList.toggle("-rotate-[90deg]");
  burgerBtnicon.classList.toggle("fa-bars");
  burgerBtnicon.classList.toggle("fa-close");
});
