const menubtn = document.querySelectorAll(".mobileMenu button");
const menubtntext = document.querySelectorAll(".mobileMenu button span");
menubtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("mobileMenuActive");
  });
});
