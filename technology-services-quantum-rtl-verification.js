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
