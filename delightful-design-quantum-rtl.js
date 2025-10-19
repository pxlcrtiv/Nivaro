// Delightful Design Quantum RTL Implementation
class DelightfulDesignQuantumRTL {
  constructor() {
    this.rtlObserver = null;
    this.quantumZones = [];
  }

  initialize() {
    // Wait for QuantumRTLObserver to be available
    if (window.quantumRTL) {
      this.rtlObserver = window.quantumRTL;
      this.registerQuantumZones();
      this.setupObservers();
      console.log('[Quantum RTL] Delightful Design implementation initialized');
    } else {
      setTimeout(() => this.initialize(), 100);
    }
  }

  registerQuantumZones() {
    this.quantumZones = document.querySelectorAll('.quantum-rtl-zone');
  }

  setupObservers() {
    // Observe main content area
    const mainContent = document.querySelector('main');
    if (mainContent) {
      this.rtlObserver.observe(mainContent, this.handleRTLChange.bind(this));
    }

    // Observe article content
    const articleContent = document.querySelector('article');
    if (articleContent) {
      this.rtlObserver.observe(articleContent, this.handleRTLChange.bind(this));
    }
  }

  handleRTLChange(isRTL) {
    // Apply quantum-level RTL transformations
    this.applyDirectionSpecificStyles(isRTL);
    this.updateElementPositions(isRTL);
  }

  applyDirectionSpecificStyles(isRTL) {
    const styleClass = isRTL ? 'quantum-rtl-active' : 'quantum-ltr-active';
    const oppositeClass = isRTL ? 'quantum-ltr-active' : 'quantum-rtl-active';
    
    document.body.classList.remove(oppositeClass);
    document.body.classList.add(styleClass);
  }

  updateElementPositions(isRTL) {
    // Adjust positions of specific elements based on direction
    const leftSection = document.querySelector('.left-section-blog');
    if (leftSection) {
      leftSection.style.textAlign = isRTL ? 'right' : 'left';
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const delightfulDesignRTL = new DelightfulDesignQuantumRTL();
  delightfulDesignRTL.initialize();
});
