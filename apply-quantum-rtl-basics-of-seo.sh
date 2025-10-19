#!/bin/bash

# Quantum-Level RTL Implementation Script for basics-of-seo.html
# This script applies advanced RTL transformations optimized for Hebrew language speakers

echo "Quantum RTL Implementation for basics-of-seo.html initiated..."

# Create backup with timestamp
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
BACKUP_FILE="basics-of-seo.html.bak.${TIMESTAMP}"
echo "Creating backup: ${BACKUP_FILE}"
cp basics-of-seo.html "${BACKUP_FILE}"

# Create quantum RTL CSS file
echo "Creating quantum RTL CSS file..."
cat > basics-of-seo-quantum-rtl.css << 'EOF'
/* Quantum-Level RTL CSS for basics-of-seo.html */
/* Optimized for native Hebrew speakers with advanced bidirectional rendering */

/* Global RTL transformations */
:root {
  --rtl-direction: rtl;
  --rtl-text-align: right;
  --rtl-mirror: scaleX(-1);
  --quantum-transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

/* Apply RTL to html and body */
html[dir="rtl"] body {
  direction: rtl;
  text-align: right;
  unicode-bidi: embed;
}

/* Header RTL adjustments */
html[dir="rtl"] header {
  text-align: right;
}

html[dir="rtl"] .header-inner-container {
  flex-direction: row-reverse;
}

/* Content RTL adjustments */
html[dir="rtl"] .prose {
  text-align: right;
}

html[dir="rtl"] h1, 
html[dir="rtl"] h2, 
html[dir="rtl"] h3, 
html[dir="rtl"] h4, 
html[dir="rtl"] h5, 
html[dir="rtl"] h6 {
  text-align: right;
}

/* Navigation RTL fixes */
html[dir="rtl"] .Header_navLinkItem__l2xbK {
  text-align: right;
}

html[dir="rtl"] .Header_contentLeft__LvrzL {
  text-align: right;
}

/* Form elements RTL adjustments */
html[dir="rtl"] input, 
html[dir="rtl"] textarea, 
html[dir="rtl"] select {
  text-align: right;
  direction: rtl;
}

/* Table RTL transformations */
html[dir="rtl"] table {
  text-align: right;
  direction: rtl;
}

html[dir="rtl"] th,
html[dir="rtl"] td {
  text-align: right;
}

/* Quantum-level mirroring for icons and graphics */
html[dir="rtl"] .mirror-icon {
  transform: var(--rtl-mirror);
}

/* Fix for code blocks and preformatted text */
html[dir="rtl"] pre, 
html[dir="rtl"] code {
  direction: ltr;
  text-align: left;
  unicode-bidi: bidi-override;
}

/* Bidirectional text handling */
html[dir="rtl"] [data-bidi="auto"] {
  unicode-bidi: plaintext;
}

/* Quantum transition effects */
.quantum-rtl-transition {
  transition: var(--quantum-transition);
}

/* Responsive RTL adjustments */
@media (max-width: 768px) {
  html[dir="rtl"] .Header_wrapper__1yY2x {
    flex-direction: column-reverse;
  }
}
EOF

# Create quantum RTL JS file
echo "Creating quantum RTL JavaScript file..."
cat > basics-of-seo-quantum-rtl.js << 'EOF'
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
EOF

# Create verification JavaScript file
echo "Creating quantum RTL verification file..."
cat > basics-of-seo-quantum-rtl-verification.js << 'EOF'
/**
 * Quantum RTL Verification Script
 * Validates the RTL implementation on the page
 */
function verifyQuantumRTL() {
  const results = {
    htmlAttributes: false,
    cssLoaded: false,
    jsLoaded: false,
    textDirection: false,
    bidirectionalHandling: false
  };

  // Check HTML attributes
  const html = document.documentElement;
  results.htmlAttributes = html.getAttribute('lang') === 'he' && html.getAttribute('dir') === 'rtl';

  // Check if CSS is loaded
  const cssLink = document.querySelector('link[href="basics-of-seo-quantum-rtl.css"]');
  results.cssLoaded = !!cssLink;

  // Check if JS is loaded
  results.jsLoaded = typeof window.quantumRTL !== 'undefined';

  // Check text direction
  results.textDirection = document.body.style.direction === 'rtl' || getComputedStyle(document.body).direction === 'rtl';

  // Check bidirectional handling
  const bidirectionalElements = document.querySelectorAll('[data-bidi="auto"]');
  results.bidirectionalHandling = bidirectionalElements.length > 0;

  // Log results
  console.log('Quantum RTL Verification Results:', results);
  
  // Return success status
  return Object.values(results).every(result => result === true);
}

// Run verification after a short delay to ensure all resources are loaded
setTimeout(verifyQuantumRTL, 1000);
EOF

# Update HTML file with proper attributes and add resource links
echo "Updating HTML file with RTL attributes and resource links..."

# Use perl to update HTML tag attributes and add resource links
perl -i -0pe 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">\n<!-- Quantum-Level RTL Implementation for Hebrew Language Support -->/' basics-of-seo.html

# Add CSS link before closing head tag
perl -i -0pe 's/<\/head>/<link rel="stylesheet" href="basics-of-seo-quantum-rtl.css">\n<\/head>/' basics-of-seo.html

# Add JS scripts before closing body tag
perl -i -0pe 's/<\/body>/<script src="basics-of-seo-quantum-rtl.js"><\/script>\n<script src="basics-of-seo-quantum-rtl-verification.js"><\/script>\n<\/body>/' basics-of-seo.html

echo "Verification checks in progress..."

# Verify implementation
HTML_TAG_CHECK=$(grep -c '<html lang="he" dir="rtl">' basics-of-seo.html)
CSS_LINK_CHECK=$(grep -c '<link rel="stylesheet" href="basics-of-seo-quantum-rtl.css">' basics-of-seo.html)
JS_LINK_CHECK=$(grep -c '<script src="basics-of-seo-quantum-rtl.js"></script>' basics-of-seo.html)
VERIFICATION_LINK_CHECK=$(grep -c '<script src="basics-of-seo-quantum-rtl-verification.js"></script>' basics-of-seo.html)

# Output verification results
echo "\n===== Quantum RTL Implementation Verification ====="
echo "HTML Tag with Hebrew lang and RTL dir: $([ $HTML_TAG_CHECK -gt 0 ] && echo '✓ PASS' || echo '✗ FAIL')"
echo "CSS Resource Link: $([ $CSS_LINK_CHECK -gt 0 ] && echo '✓ PASS' || echo '✗ FAIL')"
echo "JS Implementation Link: $([ $JS_LINK_CHECK -gt 0 ] && echo '✓ PASS' || echo '✗ FAIL')"
echo "Verification Script Link: $([ $VERIFICATION_LINK_CHECK -gt 0 ] && echo '✓ PASS' || echo '✗ FAIL')"

# Summary
echo "\n===== Implementation Summary ====="
echo "Backup created: ${BACKUP_FILE}"
echo "Quantum RTL CSS file created: basics-of-seo-quantum-rtl.css"
echo "Quantum RTL JS file created: basics-of-seo-quantum-rtl.js"
echo "Verification JS file created: basics-of-seo-quantum-rtl-verification.js"
echo "HTML file updated with RTL attributes and resource links"
echo "\nQuantum-Level RTL Implementation for basics-of-seo.html completed."
echo "To deploy changes, run: firebase deploy"