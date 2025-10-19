/**
 * QuantumRTLObserver
 * Advanced RTL implementation optimized for Hebrew language speakers
 */
class QuantumRTLObserver {
  constructor() {
    this.observeDOM();
    this.applyRTLTransformations();
    this.setupMutationObserver();
  }

  // Apply initial RTL transformations
  applyRTLTransformations() {
    console.log('Quantum RTL Observer: Applying RTL transformations');
    
    // Handle mirroring for icons and graphics
    this.mirrorIcons();
    
    // Adjust tables for RTL
    this.adjustTables();
    
    // Fix form elements for RTL
    this.fixFormElements();
    
    // Process bidirectional text
    this.processBidirectionalText();
  }

  // Mirror icons that should be reversed in RTL
  mirrorIcons() {
    const iconSelectors = ['.arrow-icon', '.menu-icon', '.navigation-icon'];
    iconSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(icon => {
        icon.classList.add('mirror-icon');
      });
    });
  }

  // Adjust tables for RTL display
  adjustTables() {
    document.querySelectorAll('table').forEach(table => {
      table.setAttribute('dir', 'rtl');
      const caption = table.querySelector('caption');
      if (caption) caption.style.textAlign = 'right';
    });
  }

  // Fix form elements for RTL
  fixFormElements() {
    document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(element => {
      element.setAttribute('dir', 'auto');
    });
  }

  // Process bidirectional text
  processBidirectionalText() {
    document.querySelectorAll('.content p, .content li').forEach(element => {
      element.setAttribute('data-bidi', 'auto');
    });
  }

  // Observe DOM for changes
  observeDOM() {
    // Initial check
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.applyRTLTransformations());
    } else {
      this.applyRTLTransformations();
    }
  }

  // Setup mutation observer to handle dynamic content
  setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          this.applyRTLTransformations();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// Initialize QuantumRTLObserver when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.quantumRTL = new QuantumRTLObserver();
  console.log('Quantum RTL Observer initialized');
});
