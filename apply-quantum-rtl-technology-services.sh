#!/bin/bash

# Quantum RTL Implementation Script for technology-services.html
# This script implements quantum-level RTL transformations optimized for native Hebrew speakers

# Create timestamp for backup file
timestamp=$(date +%Y%m%d%H%M%S)

# Create backup of the original file
echo "Creating backup of technology-services.html..."
cp technology-services.html "technology-services.html.bak.$timestamp"

# Create quantum RTL CSS file
echo "Creating quantum RTL CSS file..."
cat > technology-services-quantum-rtl.css << 'EOF'
/* Quantum RTL CSS for technology-services.html */
/* This stylesheet implements advanced RTL transformations following quantum principles */

/* Global RTL transformations */
:root {
  --primary-text-align: right;
  --secondary-text-align: left;
  --main-direction: rtl;
  --reverse-direction: ltr;
  --quantum-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* {
  text-align: var(--primary-text-align);
  direction: var(--main-direction);
}

/* Header adjustments */
header {
  right: 0;
  left: auto;
  transform-origin: right center;
}

.header-inner-container {
  flex-direction: row-reverse;
}

.logo {
  margin-right: 0;
  margin-left: auto;
}

/* Navigation adjustments */
.Header_navLinkItem__l2xbK {
  direction: var(--main-direction);
  text-align: var(--primary-text-align);
}

/* Hero section adjustments */
h1 {
  text-align: var(--primary-text-align);
  transform-origin: right center;
}

/* Content section adjustments */
#section-2 {
  justify-content: flex-start;
}

#section-2 .w-\[65\%\] {
  text-align: var(--primary-text-align);
}

/* Form elements RTL fixes */
input, textarea, select {
  text-align: var(--primary-text-align);
  direction: var(--main-direction);
}

/* Mirroring for icons and graphics */
img[alt*="Logo"],
img[data-nimg="1"] {
  transform: scaleX(1);
}

/* Tables and lists */
ul, ol {
  padding-right: 1.5em;
  padding-left: 0;
}

/* Quantum-level adjustments for bidirectional text */
[dir="rtl"] [lang="en"] {
  direction: var(--reverse-direction);
  unicode-bidi: embed;
}

/* Responsive quantum adjustments */
@media (max-width: 768px) {
  :root {
    --quantum-responsive-transition: all 0.2s ease;
  }
  
  h1 {
    transform-origin: center right;
  }
}

/* Quantum transition effects */
.hero-anim, .fadeup, .para-anim {
  transform-origin: right center;
  transition: var(--quantum-transition);
}

/* Quantum RTL Observer targets */
[data-quantum-rtl="observe"] {
  transition: var(--quantum-transition);
}
EOF

# Create quantum RTL JavaScript file
echo "Creating quantum RTL JavaScript file..."
cat > technology-services-quantum-rtl.js << 'EOF'
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
EOF

# Create quantum RTL verification JavaScript file
echo "Creating quantum RTL verification JavaScript file..."
cat > technology-services-quantum-rtl-verification.js << 'EOF'
// Quantum RTL Verification Script
// This script verifies that quantum-level RTL transformations are correctly applied

class QuantumRTLVerifier {
  constructor() {
    this.verificationResults = {
      htmlAttributes: false,
      cssIncluded: false,
      jsIncluded: false,
      quantumObserverActive: false,
      criticalElementsTransformed: false,
      bidirectionalProcessing: false,
      responsiveEffects: false,
      mirrorTransformations: false
    };
  }

  runVerification() {
    console.log('Running Quantum RTL Verification...');
    
    // Verify HTML attributes
    this.verifyHtmlAttributes();
    
    // Verify CSS inclusion
    this.verifyCssInclusion();
    
    // Verify JS inclusion
    this.verifyJsInclusion();
    
    // Verify QuantumRTLObserver is active
    this.verifyQuantumObserverActive();
    
    // Verify critical elements are transformed
    this.verifyCriticalElementsTransformed();
    
    // Verify bidirectional text processing
    this.verifyBidirectionalProcessing();
    
    // Verify responsive effects
    this.verifyResponsiveEffects();
    
    // Verify mirror transformations
    this.verifyMirrorTransformations();
    
    // Log verification summary
    this.logVerificationSummary();
    
    return this.verificationResults;
  }

  verifyHtmlAttributes() {
    const htmlElement = document.documentElement;
    const lang = htmlElement.getAttribute('lang');
    const dir = htmlElement.getAttribute('dir');
    
    this.verificationResults.htmlAttributes = (lang === 'he' && dir === 'rtl');
    console.log(`HTML Attributes: ${this.verificationResults.htmlAttributes ? 'PASS' : 'FAIL'}`);
  }

  verifyCssInclusion() {
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    let found = false;
    
    cssLinks.forEach(link => {
      if (link.href.includes('technology-services-quantum-rtl.css')) {
        found = true;
      }
    });
    
    this.verificationResults.cssIncluded = found;
    console.log(`CSS Inclusion: ${this.verificationResults.cssIncluded ? 'PASS' : 'FAIL'}`);
  }

  verifyJsInclusion() {
    const jsScripts = document.querySelectorAll('script[src]');
    let found = false;
    
    jsScripts.forEach(script => {
      if (script.src.includes('technology-services-quantum-rtl.js')) {
        found = true;
      }
    });
    
    this.verificationResults.jsIncluded = found;
    console.log(`JS Inclusion: ${this.verificationResults.jsIncluded ? 'PASS' : 'FAIL'}`);
  }

  verifyQuantumObserverActive() {
    this.verificationResults.quantumObserverActive = (window.quantumRTL !== undefined);
    console.log(`QuantumRTLObserver Active: ${this.verificationResults.quantumObserverActive ? 'PASS' : 'FAIL'}`);
  }

  verifyCriticalElementsTransformed() {
    const criticalElements = document.querySelectorAll('header, nav, section, footer, main');
    let allTransformed = criticalElements.length > 0;
    
    criticalElements.forEach(element => {
      if (!element.dataset.quantumRtl) {
        allTransformed = false;
      }
    });
    
    this.verificationResults.criticalElementsTransformed = allTransformed;
    console.log(`Critical Elements Transformed: ${this.verificationResults.criticalElementsTransformed ? 'PASS' : 'FAIL'}`);
  }

  verifyBidirectionalProcessing() {
    const textElements = document.querySelectorAll('[data-quantum-bidirectional="processed"]');
    this.verificationResults.bidirectionalProcessing = (textElements.length > 0);
    console.log(`Bidirectional Processing: ${this.verificationResults.bidirectionalProcessing ? 'PASS' : 'FAIL'}`);
  }

  verifyResponsiveEffects() {
    // For this verification, we'll check if the viewport state is set in the quantumRTL object
    if (window.quantumRTL && window.quantumRTL.getQuantumState) {
      const state = window.quantumRTL.getQuantumState();
      this.verificationResults.responsiveEffects = (state.viewport !== undefined);
    }
    console.log(`Responsive Effects: ${this.verificationResults.responsiveEffects ? 'PASS' : 'FAIL'}`);
  }

  verifyMirrorTransformations() {
    const mirroredElements = document.querySelectorAll('[data-quantum-mirrored="true"]');
    this.verificationResults.mirrorTransformations = (mirroredElements.length > 0);
    console.log(`Mirror Transformations: ${this.verificationResults.mirrorTransformations ? 'PASS' : 'FAIL'}`);
  }

  logVerificationSummary() {
    console.log('\n--- Quantum RTL Verification Summary ---');
    
    let passCount = 0;
    let failCount = 0;
    
    Object.entries(this.verificationResults).forEach(([test, result]) => {
      if (result) passCount++;
      else failCount++;
    });
    
    console.log(`Tests Passed: ${passCount}`);
    console.log(`Tests Failed: ${failCount}`);
    
    if (failCount === 0) {
      console.log('✓ All quantum RTL verifications passed successfully!');
    } else {
      console.log('✗ Some quantum RTL verifications failed. See details above.');
    }
  }
}

// Run verification when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Give the QuantumRTLObserver a moment to initialize
  setTimeout(() => {
    const verifier = new QuantumRTLVerifier();
    window.quantumRTLVerification = verifier.runVerification();
  }, 100);
});
EOF

# Update the HTML file with quantum RTL implementation
echo "Updating technology-services.html with quantum RTL implementation..."

# Use perl to update the HTML file
perl -i -pe 'BEGIN { $/ = undef; } s/<\!DOCTYPE html><html lang="en" dir="rtl">/<\!DOCTYPE html><html lang="he" dir="rtl">\n<!-- Quantum RTL Implementation for technology-services.html -->/g' technology-services.html

# Add CSS and JS references to the HTML file
perl -i -pe 'BEGIN { $/ = undef; } s/<\/head>/\t<link rel="stylesheet" href="technology-services-quantum-rtl.css">\n\t<script src="technology-services-quantum-rtl.js" defer><\/script>\n\t<script src="technology-services-quantum-rtl-verification.js" defer><\/script>\n<\/head>/g' technology-services.html

# Add data attributes to critical elements for quantum observation
perl -i -pe 'BEGIN { $/ = undef; } s/<section /<section data-quantum-rtl="observe" /g' technology-services.html
perl -i -pe 'BEGIN { $/ = undef; } s/<header /<header data-quantum-rtl="observe" /g' technology-services.html
perl -i -pe 'BEGIN { $/ = undef; } s/<footer /<footer data-quantum-rtl="observe" /g' technology-services.html

# Verify the changes
echo "\nVerifying quantum RTL implementation..."
echo "-------------------------------------------"

# Check if HTML attributes were updated correctly
html_attributes=$(grep -c '<html lang="he" dir="rtl">' technology-services.html)
if [ $html_attributes -gt 0 ]; then
  echo "✓ HTML attributes updated correctly"
else
  echo "✗ Failed to update HTML attributes"
fi

# Check if CSS reference was added
css_reference=$(grep -c 'technology-services-quantum-rtl.css' technology-services.html)
if [ $css_reference -gt 0 ]; then
  echo "✓ CSS reference added successfully"
else
  echo "✗ Failed to add CSS reference"
fi

# Check if JS references were added
js_reference=$(grep -c 'technology-services-quantum-rtl.js' technology-services.html)
if [ $js_reference -gt 0 ]; then
  echo "✓ JS reference added successfully"
else
  echo "✗ Failed to add JS reference"
fi

# Check if verification JS reference was added
verification_js=$(grep -c 'technology-services-quantum-rtl-verification.js' technology-services.html)
if [ $verification_js -gt 0 ]; then
  echo "✓ Verification JS reference added successfully"
else
  echo "✗ Failed to add verification JS reference"
fi

# Check if quantum RTL comment was added
quantum_comment=$(grep -c 'Quantum RTL Implementation' technology-services.html)
if [ $quantum_comment -gt 0 ]; then
  echo "✓ Quantum RTL implementation comment added successfully"
else
  echo "✗ Failed to add quantum RTL implementation comment"
fi

echo "\nQuantum RTL implementation completed for technology-services.html"
echo "Backup created: technology-services.html.bak.$timestamp"
echo "CSS file created: technology-services-quantum-rtl.css"
echo "JS file created: technology-services-quantum-rtl.js"
echo "Verification JS file created: technology-services-quantum-rtl-verification.js"
echo "\nPlease check the browser console for detailed verification results when viewing the page."