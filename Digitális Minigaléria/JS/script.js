document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.biography-slider');

  sliders.forEach((slider) => {
    const images = Array.from(slider.querySelectorAll('.card-image'));
    const prevButton = slider.querySelector('.slider-button.prev');
    const nextButton = slider.querySelector('.slider-button.next');

    if (!images.length) return;

    let currentIndex = 0;

    const showImage = (index) => {
      currentIndex = (index + images.length) % images.length;
      images.forEach((image, imageIndex) => {
        image.classList.toggle('active', imageIndex === currentIndex);
      });
    };

    prevButton?.addEventListener('click', () => showImage(currentIndex - 1));
    nextButton?.addEventListener('click', () => showImage(currentIndex + 1));
  });
});
