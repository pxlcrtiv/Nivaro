// Quantum RTL Observer - Advanced RTL Implementation for Power Remote Designers Page
class QuantumRTLObserver {
  constructor() {
    this.state = 'superposition';
    this.observeDOM();
    this.initRTL();
  }

  observeDOM() {
    // Quantum-level DOM observation for real-time RTL adjustments
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          this.collapseWaveFunction();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      attributes: true,
      subtree: true
    });
  }

  collapseWaveFunction() {
    // Simulate quantum collapse to ensure RTL state consistency
    this.state = 'rtl';
    this.adjustContentDirection();
  }

  initRTL() {
    // Initialize quantum RTL state
    document.documentElement.setAttribute('lang', 'he');
    document.documentElement.setAttribute('dir', 'rtl');
    
    // Add RTL class to body for CSS targeting
    document.body.classList.add('quantum-rtl');
    document.body.classList.add('power-remote-designers-rtl');
    
    // Set initial state
    this.state = 'rtl';
    
    // Defer main adjustments until DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.entangleElements();
      this.adjustContentDirection();
      this.fixNavigation();
      this.applyMirrorTransformations();
      this.setupQuantumEffects();
    });
  }

  entangleElements() {
    // Create quantum entanglement between related UI elements
    const articleElements = document.querySelectorAll('article.prose');
    const sidebarElements = document.querySelectorAll('.left-section-blog');
    const socialIcons = document.querySelectorAll('.Header_socialItems__GV7GF');
    
    // Store entangled pairs for coordinated RTL adjustments
    this.entangledPairs = [
      { primary: articleElements, secondary: sidebarElements },
      { primary: socialIcons, secondary: null }
    ];
  }

  adjustContentDirection() {
    // Adjust text direction for all content blocks
    const contentBlocks = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, li');
    contentBlocks.forEach(block => {
      block.style.direction = 'rtl';
      block.style.textAlign = 'right';
    });

    // Adjust flexbox layouts for RTL
    const flexContainers = document.querySelectorAll('.flex, .flex-row');
    flexContainers.forEach(container => {
      const currentJustify = container.style.justifyContent;
      if (currentJustify.includes('flex-start')) {
        container.style.justifyContent = 'flex-end';
      } else if (currentJustify.includes('flex-end')) {
        container.style.justifyContent = 'flex-start';
      }
    });

    // Adjust margin/padding for RTL layout
    const elementsWithLeftMargin = document.querySelectorAll('[style*="margin-left"], [class*="ml-"]');
    elementsWithLeftMargin.forEach(element => {
      const leftMargin = element.style.marginLeft;
      const rightMargin = element.style.marginRight;
      element.style.marginLeft = rightMargin;
      element.style.marginRight = leftMargin;
    });
  }

  fixNavigation() {
    // Adjust navigation elements for RTL
    const headerLogo = document.querySelector('.header-logo');
    if (headerLogo) {
      headerLogo.style.marginRight = 'auto';
    }

    // Fix menu button positioning
    const menuButton = document.querySelector('.Header_menuBtn__kYp93');
    if (menuButton) {
      menuButton.style.marginLeft = '0';
    }

    // Adjust dropdown menu direction
    const navLinks = document.querySelectorAll('.Header_navLinkItem__l2xbK');
    navLinks.forEach(link => {
      link.style.textAlign = 'right';
    });
  }

  applyMirrorTransformations() {
    // Apply quantum mirror transformations to UI elements
    const images = document.querySelectorAll('img:not(.header-logo):not(.dark\:invert)');
    images.forEach(img => {
      // Store original state for potential collapse
      img.dataset.originalSrc = img.src;
      
      // Apply subtle RTL-specific adjustments
      img.style.marginRight = '0';
      img.style.marginLeft = '1rem';
    });

    // Adjust code blocks and technical elements
    const codeElements = document.querySelectorAll('code, pre');
    codeElements.forEach(code => {
      code.style.direction = 'ltr'; // Keep code in LTR for readability
    });
  }

  setupQuantumEffects() {
    // Setup quantum-inspired animations and transitions
    const fadeInElements = document.querySelectorAll('h1, h2, .Header_navLink__wkFKz');
    fadeInElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateX(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      // Staggered animation based on quantum probability
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }, 100 * (index % 7)); // Quantum-inspired modulus for distribution
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-size]');
    interactiveElements.forEach(element => {
      element.style.transition = 'all 0.3s ease';
      
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.02)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
      });
    });
  }

  // Quantum measurement function - returns current RTL state
  measureState() {
    return this.state;
  }

  // Quantum reset function - reinitializes RTL state
  resetState() {
    this.state = 'superposition';
    this.initRTL();
  }
}

// Initialize quantum RTL observer when the script loads
(function() {
  // Create quantum delay to ensure proper loading sequence
  const quantumDelay = Math.random() * 100;
  
  setTimeout(() => {
    // Create global instance for verification
    window.quantumRTLObserver = new QuantumRTLObserver();
    
    // Log successful initialization
    console.log('✅ Quantum RTL Observer initialized for Power Remote Designers page');
  }, quantumDelay);
})();