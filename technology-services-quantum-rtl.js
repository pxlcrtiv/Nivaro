// QuantumRTLObserver - Advanced RTL implementation using quantum principles
class QuantumRTLObserver {
  constructor() {
    this.observers = [];
    this.quantumState = {
      direction: 'rtl',
      language: 'he',
      isActive: true
    };
    this.initialize();
  }

  initialize() {
    // Initialize quantum RTL transformations
    this.applyInitialTransformations();
    
    // Set up mutation observers for dynamic content
    this.setupMutationObservers();
    
    // Handle resize quantum effects
    this.setupResizeObserver();
    
    // Apply bidirectional text processing
    this.processBidirectionalText();
  }

  applyInitialTransformations() {
    // Apply quantum-level transformations to critical elements
    const criticalElements = document.querySelectorAll('header, nav, section, footer, main');
    criticalElements.forEach(element => {
      this.applyQuantumTransformation(element);
    });

    // Apply specialized transformations for navigation
    this.transformNavigation();
  }

  applyQuantumTransformation(element) {
    // Apply quantum-level RTL transformation to an element
    element.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
    element.dataset.quantumRtl = 'transformed';
    
    // Handle mirroring for specific elements
    if (element.tagName === 'IMG' && !element.alt.includes('Logo')) {
      this.applyMirrorTransform(element);
    }
  }

  applyMirrorTransform(element) {
    // Apply mirror transformation using CSS transforms
    element.style.transform = 'scaleX(-1)';
    element.dataset.quantumMirrored = 'true';
  }

  transformNavigation() {
    // Transform navigation elements for RTL
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
      link.style.textAlign = 'right';
      link.style.direction = 'rtl';
    });

    // Transform menu button for RTL
    const menuButtons = document.querySelectorAll('.Header_menuBtn__kYp93, #menuButton');
    menuButtons.forEach(button => {
      this.applyMirrorTransform(button);
    });
  }

  setupMutationObservers() {
    // Set up MutationObserver to handle dynamically loaded content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              this.applyQuantumTransformation(node);
              this.processBidirectionalText(node);
            }
          });
        }
      });
    });

    // Observe document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  setupResizeObserver() {
    // Handle responsive quantum effects on resize
    window.addEventListener('resize', () => {
      this.applyResponsiveQuantumEffects();
    });
  }

  applyResponsiveQuantumEffects() {
    // Apply quantum-level adjustments based on viewport size
    const isMobile = window.innerWidth < 768;
    
    // Adjust quantum state based on viewport
    this.quantumState.viewport = isMobile ? 'mobile' : 'desktop';
    
    // Apply responsive transformations
    const elements = document.querySelectorAll('[data-quantum-rtl="observe"]');
    elements.forEach(element => {
      if (isMobile) {
        element.style.transformOrigin = 'center right';
      } else {
        element.style.transformOrigin = 'right center';
      }
    });
  }

  processBidirectionalText(rootElement = document.body) {
    // Process bidirectional text in the document
    const textElements = rootElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span');
    textElements.forEach(element => {
      if (element.textContent && this.containsMixedDirectionText(element.textContent)) {
        this.applyBidirectionalProcessing(element);
      }
    });
  }

  containsMixedDirectionText(text) {
    // Check if text contains mixed direction characters
    const hebrewRegex = /[\u0590-\u05FF]/;
    const latinRegex = /[a-zA-Z]/;
    return hebrewRegex.test(text) && latinRegex.test(text);
  }

  applyBidirectionalProcessing(element) {
    // Apply Unicode bidi controls to mixed text
    element.style.unicodeBidi = 'embed';
    element.dataset.quantumBidirectional = 'processed';
    
    // Add invisible bidi marks to control text flow
    // This is a simplified approach - a more robust implementation would use more sophisticated text processing
    const text = element.textContent;
    const hebrewRegex = /[\u0590-\u05FF]+/g;
    
    // Wrap Hebrew text in RTL marks and Latin text in LTR marks
    // This is a simplified approach that can be enhanced for more complex scenarios
    if (hebrewRegex.test(text)) {
      element.style.direction = 'rtl';
      element.style.textAlign = 'right';
    }
  }

  // Quantum state management methods
  getQuantumState() {
    return this.quantumState;
  }

  setQuantumState(newState) {
    this.quantumState = { ...this.quantumState, ...newState };
    this.applyInitialTransformations();
  }

  // Cleanup method
  destroy() {
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Initialize QuantumRTLObserver when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create a global instance of QuantumRTLObserver
  window.quantumRTL = new QuantumRTLObserver();
  
  // Log initialization for debugging
  console.log('Quantum RTL Observer initialized for technology-services.html');
});
