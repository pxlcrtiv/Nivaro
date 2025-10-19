// Quantum-Level RTL JavaScript for Nivaro Hebrew Interface
// Engineered beyond the cosmic horizon for universal bidirectional harmony

(function() {
  'use strict';
  
  // Quantum RTL Engine initialization
  const QuantumRTLEngine = {
    init() {
      // Apply RTL to HTML document
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'he');
      
      // Initialize quantum-level RTL transformations
      this.applyBidirectionalFixes();
      this.mirrorElements();
      this.fixFlexboxDirections();
      this.handleMixedContent();
      
      // Apply responsive RTL adjustments
      this.setupResponsiveListeners();
      
      // Log quantum initialization success
      console.log('Quantum RTL Engine initialized successfully');
    },
    
    // Apply bidirectional fixes to all elements
    applyBidirectionalFixes() {
      // Fix form elements
      const formElements = document.querySelectorAll('input, textarea, select');
      formElements.forEach(el => {
        el.setAttribute('dir', 'rtl');
        if (el.type !== 'checkbox' && el.type !== 'radio') {
          el.style.textAlign = 'right';
        }
      });
      
      // Fix table elements
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        table.setAttribute('dir', 'rtl');
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
          cell.style.textAlign = 'right';
        });
      });
    },
    
    // Mirror elements that need RTL reflection
    mirrorElements() {
      const elementsToMirror = document.querySelectorAll(
        '.mirror-icon, .arrow, .icon-left, .icon-arrow-left, .arrow-icon'
      );
      
      elementsToMirror.forEach(el => {
        el.style.transform = 'scaleX(-1)';
        el.classList.add('quantum-mirrored');
      });
      
      // Handle navigation arrows and indicators
      const navArrows = document.querySelectorAll(
        '[class*="prev"], [class*="next"], [class*="previous"], [class*="next"]'
      );
      
      navArrows.forEach(arrow => {
        if (arrow.className.includes('prev') || arrow.className.includes('previous')) {
          // Swap classes for previous/next in RTL
          arrow.className = arrow.className.replace(/prev|previous/i, 'next-temp');
        } else if (arrow.className.includes('next')) {
          arrow.className = arrow.className.replace(/next/i, 'prev-temp');
        }
      });
      
      // Replace temp classes with proper classes
      navArrows.forEach(arrow => {
        arrow.className = arrow.className.replace('next-temp', 'next');
        arrow.className = arrow.className.replace('prev-temp', 'prev');
      });
    },
    
    // Fix flexbox directions for RTL
    fixFlexboxDirections() {
      const flexElements = document.querySelectorAll(
        '[class*="flex"], [class*="grid"], [class*="row"]'
      );
      
      flexElements.forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        if (computedStyle.display.includes('flex')) {
          if (computedStyle.flexDirection === 'row') {
            el.style.flexDirection = 'row-reverse';
          }
        }
      });
    },
    
    // Handle mixed LTR/RTL content appropriately
    handleMixedContent() {
      // Identify code blocks and technical content that should remain LTR
      const codeBlocks = document.querySelectorAll('pre, code, .code, .monospace');
      codeBlocks.forEach(block => {
        block.setAttribute('dir', 'ltr');
        block.style.textAlign = 'left';
        block.style.unicodeBidi = 'bidi-override';
      });
      
      // Handle numbers and dates in RTL text
      const textElements = document.querySelectorAll('p, span, li, td, th');
      textElements.forEach(el => {
        if (el.textContent.match(/\b\d+\b/)) {
          // Wrap numbers in LTR spans for proper display
          el.innerHTML = el.innerHTML.replace(/(\b\d+\b)/g, '<span dir="ltr" style="unicode-bidi: isolate">$1</span>');
        }
      });
    },
    
    // Setup responsive RTL listeners
    setupResponsiveListeners() {
      const handleResize = () => {
        const width = window.innerWidth;
        
        // Mobile-specific RTL adjustments
        if (width <= 768) {
          const mobileNavs = document.querySelectorAll('.mobile-menu, .menu-toggle');
          mobileNavs.forEach(nav => {
            nav.style.textAlign = 'right';
            nav.style.direction = 'rtl';
          });
        }
      };
      
      // Initial call and add event listener
      handleResize();
      window.addEventListener('resize', handleResize);
    }
  };
  
  // Initialize the Quantum RTL Engine when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => QuantumRTLEngine.init());
  } else {
    QuantumRTLEngine.init();
  }
  
  // Expose QuantumRTLEngine to global scope if needed
  window.QuantumRTLEngine = QuantumRTLEngine;
})();
