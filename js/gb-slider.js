// GB Slider - Custom slider functionality

// Function to preload slider images
function preloadSliderImages(htmlContent) {
  return new Promise((resolve) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const images = tempDiv.querySelectorAll('img');
    
    if (images.length === 0) {
      resolve();
      return;
    }
    
    let loadedCount = 0;
    const totalImages = images.length;
    
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        resolve();
      }
    };
    
    images.forEach(img => {
      const newImg = new Image();
      newImg.onload = checkAllLoaded;
      newImg.onerror = checkAllLoaded; // Still resolve on error
      newImg.src = img.src;
    });
    
    // Fallback timeout for slow networks (3 seconds)
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

// Function to load slider content with preloading
async function loadSliderContent() {
  try {
    const response = await fetch('index-slider.html');
    const html = await response.text();
    
    // Preload all images before showing content
    await preloadSliderImages(html);
    
    // Insert content after images are loaded
    document.getElementById('slider-container').innerHTML = html;
    
    // Add loading class to prevent layout shift
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
      heroSlider.classList.add('loading');
    }
    
    // Use layout stability detection instead of fixed delays
    // Small initial delay to let DOM settle, then check for stability
    setTimeout(() => {
      applyCustomImageProperties();
      applySliderMaxHeights();
      
      // Wait for initial layout to stabilize before initializing slider
      waitForLayoutStability(() => {
        initializeSlider();
      });
    }, 25);
    
  } catch (error) {
    console.error('Error loading slider:', error);
    // Show error state
    document.getElementById('slider-container').innerHTML = '<div style="padding: 2rem; text-align: center; color: #666;">Unable to load slider content</div>';
  }
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

// Function to apply slider max height properties from data attributes
function applySliderMaxHeights() {
  const heroSlider = document.querySelector('.hero-slider');
  if (!heroSlider) return;
  
  // Get max height data attributes
  const narrowestMaxHeight = heroSlider.getAttribute('data-narrowest-max-height-px');
  const middleMaxHeight = heroSlider.getAttribute('data-middle-max-height-px');
  const widestMaxHeight = heroSlider.getAttribute('data-widest-max-height-px');
  
  // Apply CSS custom properties only if data attributes exist
  if (narrowestMaxHeight) {
    heroSlider.style.setProperty('--narrowest-slider-max-height', narrowestMaxHeight);
  }
  if (middleMaxHeight) {
    heroSlider.style.setProperty('--middle-slider-max-height', middleMaxHeight);
  }
  if (widestMaxHeight) {
    heroSlider.style.setProperty('--widest-slider-max-height', widestMaxHeight);
  }
  
  // Apply intelligent image scaling when content exceeds max height
  adjustImageSizesForMaxHeight();
}

// Function to intelligently resize images when content exceeds max height
function adjustImageSizesForMaxHeight() {
  const heroSlider = document.querySelector('.hero-slider');
  if (!heroSlider) return;
  
  const slides = heroSlider.querySelectorAll('.glide__slide');
  
  slides.forEach(slide => {
    const slideImages = slide.querySelectorAll('.slide-image img');
    const slideContent = slide.querySelector('.slide-content');
    
    // Get the current max height constraint for this breakpoint
    const maxHeight = getCurrentMaxHeight(heroSlider);
    if (!maxHeight) return; // No max height constraint, skip
    
    // Reset any previous scaling to get natural dimensions
    slideImages.forEach(img => {
      img.style.removeProperty('max-width');
      img.style.removeProperty('max-height');
      img.style.removeProperty('width');
      img.style.removeProperty('height');
    });
    
    // Remove any forced height constraints to measure natural content
    slide.style.removeProperty('height');
    
    // Wait a frame for layout to settle, then check if scaling is needed
    setTimeout(() => {
      const slidePadding = parseFloat(getComputedStyle(slide).paddingTop) + parseFloat(getComputedStyle(slide).paddingBottom);
      const availableContentHeight = maxHeight - slidePadding;
      const naturalSlideHeight = slide.offsetHeight;
      
      // Only scale if content actually exceeds the max height
      if (naturalSlideHeight > maxHeight) {
        const naturalContentHeight = slideContent.scrollHeight;
        const scaleFactor = (availableContentHeight * 0.90) / naturalContentHeight; // 90% to ensure fit
        
        slideImages.forEach(img => {
          const imgContainer = img.closest('.slide-image');
          const currentStyles = getComputedStyle(img);
          
          // Get current dimensions
          let currentMaxWidth = parseFloat(currentStyles.maxWidth) || img.offsetWidth;
          let currentMaxHeight = parseFloat(currentStyles.maxHeight) || img.offsetHeight;
          
          // Apply scaling only if needed
          const newMaxWidth = currentMaxWidth * scaleFactor;
          const newMaxHeight = currentMaxHeight * scaleFactor;
          
          img.style.maxWidth = newMaxWidth + 'px';
          img.style.maxHeight = newMaxHeight + 'px';
          img.style.width = 'auto';
          img.style.height = 'auto';
          
          // Ensure the image container doesn't override our constraints
          if (imgContainer) {
            imgContainer.style.maxHeight = newMaxHeight + 'px';
          }
        });
      }
      // If content fits naturally, do nothing - let it use its natural height
    }, 10);
  });
}

// Helper function to get current max height based on screen size
function getCurrentMaxHeight(heroSlider) {
  const width = window.innerWidth;
  
  if (width < 500) {
    const height = heroSlider.getAttribute('data-narrowest-max-height-px');
    return height ? parseInt(height) : null;
  } else if (width >= 500 && width < 1000) {
    const height = heroSlider.getAttribute('data-middle-max-height-px');
    return height ? parseInt(height) : null;
  } else {
    const height = heroSlider.getAttribute('data-widest-max-height-px');
    return height ? parseInt(height) : null;
  }
}

// Function to equalize slide heights
function equalizeSlideHeights() {
  const heroSlider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.glide__slide');
  if (slides.length === 0) return;
  
  // Check if there's a max height constraint
  const constraintMaxHeight = getCurrentMaxHeight(heroSlider);
  
  // Reset heights first to get natural dimensions
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
  
  // If there's a max height constraint, don't exceed it
  if (constraintMaxHeight && maxHeight > constraintMaxHeight) {
    maxHeight = constraintMaxHeight;
  }
  
  // Set all slides to the same height (but respecting max height constraint)
  slides.forEach(slide => {
    slide.style.height = maxHeight + 'px';
  });
}

// Function to detect when layout has stabilized
function waitForLayoutStability(callback, maxAttempts = 10) {
  const heroSlider = document.querySelector('.hero-slider');
  if (!heroSlider) {
    callback();
    return;
  }
  
  let previousHeight = 0;
  let stableCount = 0;
  let attempts = 0;
  
  const checkStability = () => {
    attempts++;
    const currentHeight = heroSlider.offsetHeight;
    
    // If height hasn't changed, increment stable count
    if (currentHeight === previousHeight && currentHeight > 0) {
      stableCount++;
    } else {
      stableCount = 0; // Reset if height changed
    }
    
    previousHeight = currentHeight;
    
    // Layout is stable if height hasn't changed for 2 consecutive checks
    if (stableCount >= 2 || attempts >= maxAttempts) {
      callback();
      return;
    }
    
    // Check again after a short delay
    setTimeout(checkStability, 50);
  };
  
  // Start stability checking
  setTimeout(checkStability, 10);
}

// Function to initialize Glide.js slider
function initializeSlider() {
  const sliderElement = document.querySelector('.hero-slider');
  if (!sliderElement) {
    console.error('Slider element not found');
    return;
  }
  
  const glide = new Glide('.hero-slider', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 4000,
    animationDuration: 600
  }); 
  
  glide.mount();
  
  // Wait for layout to stabilize before height calculations
  waitForLayoutStability(() => {
    adjustImageSizesForMaxHeight();
    
    // Add a small additional delay for final adjustments
    setTimeout(() => {
      equalizeSlideHeights();
      
      // Fade in the slider after all calculations are complete
      setTimeout(() => {
        if (sliderElement) {
          sliderElement.classList.remove('loading');
          sliderElement.classList.add('loaded');
        }
      }, 50);
    }, 25);
  });
  
  // Enhanced resize handler with stability detection
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    
    // Add loading state during resize recalculations
    if (sliderElement) {
      sliderElement.classList.add('loading');
      sliderElement.classList.remove('loaded');
    }
    
    resizeTimeout = setTimeout(() => {
      waitForLayoutStability(() => {
        adjustImageSizesForMaxHeight();
        equalizeSlideHeights();
        
        // Fade back in after resize calculations
        setTimeout(() => {
          if (sliderElement) {
            sliderElement.classList.remove('loading');
            sliderElement.classList.add('loaded');
          }
        }, 50);
      });
    }, 150);
  });
}

// Initialize when DOM is loaded - with lazy loading for better mobile performance
document.addEventListener('DOMContentLoaded', function() {
  // Load slider with minimal delay to allow critical content to render first
  // This significantly improves perceived loading speed on mobile devices
  setTimeout(loadSliderContent, 100);
});
