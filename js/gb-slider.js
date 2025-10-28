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

// Function to apply custom image and text properties from data attributes
function applyCustomImageProperties() {
  const slideImages = document.querySelectorAll('.slide-image');
  const slideTexts = document.querySelectorAll('.slide-text');
  const slideContents = document.querySelectorAll('.slide-content');
  
  slideImages.forEach(slideImage => {
    // Narrowest properties
    const narrowestMaxWidth = slideImage.getAttribute('data-narrowest-max-width');
    const narrowestWidthPercentage = slideImage.getAttribute('data-narrowest-width-percentage');
    const narrowestClipHeight = slideImage.getAttribute('data-narrowest-clip-height-px');
    
    // Middle properties
    const middleMaxWidth = slideImage.getAttribute('data-middle-max-width');
    const middleWidthPercentage = slideImage.getAttribute('data-middle-width-percentage');
    const middleClipHeight = slideImage.getAttribute('data-middle-clip-height-px');
    
    // Widest properties
    const widestMaxWidth = slideImage.getAttribute('data-widest-max-width');
    const widestWidthPercentage = slideImage.getAttribute('data-widest-width-percentage');
    const widestClipHeight = slideImage.getAttribute('data-widest-clip-height-px');
    
    // Apply narrowest properties
    if (narrowestMaxWidth) {
      slideImage.style.setProperty('--narrowest-max-width', narrowestMaxWidth);
    }
    if (narrowestWidthPercentage) {
      slideImage.style.setProperty('--narrowest-width-percentage', narrowestWidthPercentage);
    }
    if (narrowestClipHeight) {
      slideImage.style.setProperty('--narrowest-clip-height', narrowestClipHeight);
    }
    
    // Apply middle properties
    if (middleMaxWidth) {
      slideImage.style.setProperty('--middle-max-width', middleMaxWidth);
    }
    if (middleWidthPercentage) {
      slideImage.style.setProperty('--middle-width-percentage', middleWidthPercentage);
    }
    if (middleClipHeight) {
      slideImage.style.setProperty('--middle-clip-height', middleClipHeight);
    }
    
    // Apply widest properties
    if (widestMaxWidth) {
      slideImage.style.setProperty('--widest-max-width', widestMaxWidth);
    }
    if (widestWidthPercentage) {
      slideImage.style.setProperty('--widest-width-percentage', widestWidthPercentage);
    }
    if (widestClipHeight) {
      slideImage.style.setProperty('--widest-clip-height', widestClipHeight);
    }
  });
  
  // Apply slide-text custom properties
  slideTexts.forEach(slideText => {
    // Narrowest properties
    const narrowestWidthPx = slideText.getAttribute('data-narrowest-width-px');
    const narrowestWidthPercent = slideText.getAttribute('data-narrowest-width-percent');
    
    // Middle properties
    const middleWidthPx = slideText.getAttribute('data-middle-width-px');
    const middleWidthPercent = slideText.getAttribute('data-middle-width-percent');
    
    // Widest properties
    const widestWidthPx = slideText.getAttribute('data-widest-width-px');
    const widestWidthPercent = slideText.getAttribute('data-widest-width-percent');
    
    // Apply narrowest properties
    if (narrowestWidthPx) {
      slideText.style.setProperty('--narrowest-text-width', narrowestWidthPx);
    }
    if (narrowestWidthPercent) {
      slideText.style.setProperty('--narrowest-text-width-percent', narrowestWidthPercent);
    }
    
    // Apply middle properties
    if (middleWidthPx) {
      slideText.style.setProperty('--middle-text-width', middleWidthPx);
    }
    if (middleWidthPercent) {
      slideText.style.setProperty('--middle-text-width-percent', middleWidthPercent);
    }
    
    // Apply widest properties
    if (widestWidthPx) {
      slideText.style.setProperty('--widest-text-width', widestWidthPx);
    }
    if (widestWidthPercent) {
      slideText.style.setProperty('--widest-text-width-percent', widestWidthPercent);
    }
  });
  
  // Note: slide-content reverse properties are handled directly by CSS attribute selectors
  // No JavaScript processing needed for data-narrowest-reverse, data-middle-reverse, data-widest-reverse
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
