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
const track = document.querySelector('.carousel-track');
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

  const slideWidth = slides[0].offsetWidth + 40; // slide + gap
  const containerWidth = track.parentElement.offsetWidth;
  const totalWidth = slideWidth * slides.length;

  // Calculate center offset
  let offset = (slideWidth * current) - (containerWidth / 2) + (slideWidth / 2);

  // Add buffer to avoid cutoff
  const buffer = 40; // or try 50/60 if still cut off
  const maxOffset = totalWidth - containerWidth + buffer;

  // Clamp values
  if (offset < 0) offset = 0;
  if (offset > maxOffset) offset = maxOffset;

  track.style.transform = `translateX(-${offset}px)`;
}



nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateCarousel();
  }
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel); // recalc on screen resize

