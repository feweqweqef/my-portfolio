// Typing Animation when the page first loads
const text = "Hello, I am Hafeezah";
const el = document.getElementById("typewriter");

let i = 0;
function type() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();





// CODE for the carousel slider in about me section
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === current) {
      slide.classList.add('active');
    }
  });

  const track = document.querySelector('.carousel-track');
  const slideWidth = slides[0].offsetWidth + 40; // slide width + gap
  const containerWidth = track.parentElement.offsetWidth; // visible container width

  // Calculate offset so that the current slide is centered
  let offset = (slideWidth * current) - (containerWidth / 2) + (slideWidth / 2);

  // Prevent scrolling past the first slide (no negative offset)
  if (offset < 0) offset = 0;

  // Prevent scrolling past the last slide
  const maxOffset = slideWidth * (slides.length) - containerWidth;
  if (offset > maxOffset) offset = maxOffset;

  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel); // optional: recalc on resize

