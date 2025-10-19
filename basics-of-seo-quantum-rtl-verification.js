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
