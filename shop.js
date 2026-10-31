document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider-slide');
  const indicators = document.querySelectorAll('.slider-indicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });
  
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
    });
  });

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
});
