// GB Slider - Custom slider functionality

// Function to load slider content
function loadSliderContent() {
  fetch('index-slider.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('slider-container').innerHTML = html;
      applyCustomImageProperties();
      initializeSlider();
    })
    .catch(error => {
      console.error('Error loading slider:', error);
    });
}

// Function to apply custom image properties from data attributes
function applyCustomImageProperties() {
  const slideImages = document.querySelectorAll('.slide-image');
  
  slideImages.forEach(slideImage => {
    // Mobile properties
    const mobileMaxWidth = slideImage.getAttribute('data-mobile-max-width');
    const mobileWidthPercentage = slideImage.getAttribute('data-mobile-width-percentage');
    
    // Tablet properties
    const tabletMaxWidth = slideImage.getAttribute('data-tablet-max-width');
    const tabletWidthPercentage = slideImage.getAttribute('data-tablet-width-percentage');
    
    // Desktop properties
    const desktopMaxWidth = slideImage.getAttribute('data-desktop-max-width');
    const desktopWidthPercentage = slideImage.getAttribute('data-desktop-width-percentage');
    
    // Apply mobile properties
    if (mobileMaxWidth) {
      slideImage.style.setProperty('--mobile-max-width', mobileMaxWidth);
    }
    if (mobileWidthPercentage) {
      slideImage.style.setProperty('--mobile-width-percentage', mobileWidthPercentage);
    }
    
    // Apply tablet properties
    if (tabletMaxWidth) {
      slideImage.style.setProperty('--tablet-max-width', tabletMaxWidth);
    }
    if (tabletWidthPercentage) {
      slideImage.style.setProperty('--tablet-width-percentage', tabletWidthPercentage);
    }
    
    // Apply desktop properties
    if (desktopMaxWidth) {
      slideImage.style.setProperty('--desktop-max-width', desktopMaxWidth);
    }
    if (desktopWidthPercentage) {
      slideImage.style.setProperty('--desktop-width-percentage', desktopWidthPercentage);
    }
  });
}

// Function to equalize slide heights
function equalizeSlideHeights() {
  const slides = document.querySelectorAll('.glide__slide');
  if (slides.length === 0) return;
  
  // Reset heights first
  slides.forEach(slide => {
    slide.style.height = 'auto';
  });
  
  // Find the tallest slide
  let maxHeight = 0;
  slides.forEach(slide => {
    const slideHeight = slide.offsetHeight;
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });
  
  // Set all slides to the same height
  slides.forEach(slide => {
    slide.style.height = maxHeight + 'px';
  });
}

// Function to initialize Glide.js slider
function initializeSlider() {
  const glide = new Glide('.hero-slider', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 4000
  }); 
  
  glide.mount();
  
  // Equalize heights after mounting
  setTimeout(() => {
    equalizeSlideHeights();
  }, 100);
  
  // Re-equalize on window resize
  window.addEventListener('resize', () => {
    setTimeout(() => {
      equalizeSlideHeights();
    }, 100);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadSliderContent();
});
