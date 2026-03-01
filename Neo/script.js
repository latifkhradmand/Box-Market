setTimeout(() => {
  document.querySelector(".loader").classList.add("hidden");
}, 700);

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

// slider js
const slider = document.querySelector("#slider");
const slidesContainer = document.querySelector("#slides");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let autoPlayInterval;

// create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 4000);
}
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);
startAutoPlay();

// swipe support
let startX = 0;
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});
