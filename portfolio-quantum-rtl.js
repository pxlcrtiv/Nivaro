// Quantum RTL implementation for Portfolio page
(function() {
  'use strict';

  // Observer pattern for quantum state management
  class QuantumObserver {
    constructor() {
      this.observers = [];
    }

    subscribe(observer) {
      this.observers.push(observer);
    }

    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }

  // RTL direction manager with quantum entanglement
  const rtlManager = {
    quantumObserver: new QuantumObserver(),
    isRTL: document.documentElement.dir === 'rtl',

    init() {
      // Register portfolio-specific RTL components
      this.registerPortfolioComponents();
      this.setupQuantumEffects();
      this.quantumObserver.notify({type: 'init', isRTL: this.isRTL});
    },

    registerPortfolioComponents() {
      // Observe and transform portfolio grid layouts
      this.observePortfolioGrid();
      // Adjust navigation elements
      this.adjustNavigation();
      // Fix image alignment for RTL
      this.fixImageAlignment();
    },

    observePortfolioGrid() {
      // Quantum-enhanced grid observation
      const grids = document.querySelectorAll('.portfolio-grid, .portfolio-marquee');
      grids.forEach(grid => {
        const gridObserver = {
          update(data) {
            if (data.isRTL) {
              grid.style.direction = 'rtl';
              grid.style.textAlign = 'right';
            }
          }
        };
        this.quantumObserver.subscribe(gridObserver);
        gridObserver.update({isRTL: this.isRTL});
      });
    },

    adjustNavigation() {
      // Modify navigation elements for RTL
      const navItems = document.querySelectorAll('.Header_navLinkItem__l2xbK');
      if (this.isRTL) {
        navItems.forEach(item => {
          const serial = item.querySelector('.Header_contentHeadingSerial__xVuxD');
          const link = item.querySelector('.Header_navLink__wkFKz');
          if (serial && link) {
            item.insertBefore(link, serial);
          }
        });
      }
    },

    fixImageAlignment() {
      // Fix image alignment for RTL layout
      const images = document.querySelectorAll('[alt="image"]');
      if (this.isRTL) {
        images.forEach(img => {
          const currentTransform = img.style.transform;
          if (currentTransform.includes('translate-x')) {
            // Calculate mirrored X position for RTL
            const translateXMatch = currentTransform.match(/translate-x\s*\(\s*([^)]+)\s*\)/);
            if (translateXMatch) {
              const value = translateXMatch[1];
              if (value.includes('vw')) {
                // Mirror percentage-based values
                const numValue = parseFloat(value);
                const mirroredValue = 100 - numValue;
                const newTransform = currentTransform.replace(
                  translateXMatch[0], 
                  `translate-x(${mirroredValue}vw)`
                );
                img.style.transform = newTransform;
              }
            }
          }
        });
      }
    },

    setupQuantumEffects() {
      // Add quantum decoherence effect for smooth transitions
      document.documentElement.classList.add('quantum-rtl-transition');
      
      // Create quantum measurement for RTL state
      window.addEventListener('resize', () => {
        // Quantum measurement collapses the state
        this.quantumObserver.notify({type: 'resize', isRTL: this.isRTL});
      });
    }
  };

  // Initialize quantum RTL when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => rtlManager.init());
  } else {
    rtlManager.init();
  }
})();
