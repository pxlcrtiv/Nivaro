// Quantum RTL Verification Script for Top UX Design Blogs Page

class QuantumRTLVerifier {
    constructor() {
        this.verificationResults = {
            rtlAttribute: false,
            languageAttribute: false,
            cssLoaded: false,
            jsLoaded: false,
            transformationsApplied: false,
            verificationTimestamp: null
        };
        
        this.requiredRTLFiles = [
            'top-ux-design-blogs-quantum-rtl.css',
            'top-ux-design-blogs-quantum-rtl.js',
            'top-ux-design-blogs-quantum-rtl-verification.js'
        ];
    }

    // Run complete quantum RTL verification
    verify() {
        console.log('Running Quantum RTL Verification for Top UX Design Blogs Page...');
        
        // Verify HTML RTL attributes
        this.verifyHTMLAttributes();
        
        // Verify required RTL files are loaded
        this.verifyRequiredFiles();
        
        // Verify RTL transformations are applied
        this.verifyTransformations();
        
        // Record verification timestamp
        this.verificationResults.verificationTimestamp = new Date().toISOString();
        
        // Log verification results
        this.logVerificationResults();
        
        return this.verificationResults;
    }

    // Verify HTML RTL and language attributes
    verifyHTMLAttributes() {
        const htmlElement = document.documentElement;
        
        // Verify RTL direction
        this.verificationResults.rtlAttribute = htmlElement.dir === 'rtl';
        
        // Verify Hebrew language
        this.verificationResults.languageAttribute = htmlElement.lang === 'he';
        
        console.log(`HTML RTL attribute verification: ${this.verificationResults.rtlAttribute ? 'PASS' : 'FAIL'}`);
        console.log(`HTML language attribute verification: ${this.verificationResults.languageAttribute ? 'PASS' : 'FAIL'}`);
    }

    // Verify required RTL files are loaded
    verifyRequiredFiles() {
        // Check if CSS is loaded
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        this.verificationResults.cssLoaded = Array.from(cssLinks).some(link => 
            link.href.includes('top-ux-design-blogs-quantum-rtl.css')
        );
        
        // Check if JS is loaded
        const scriptTags = document.querySelectorAll('script');
        this.verificationResults.jsLoaded = Array.from(scriptTags).some(script => 
            script.src.includes('top-ux-design-blogs-quantum-rtl.js')
        );
        
        console.log(`Quantum RTL CSS verification: ${this.verificationResults.cssLoaded ? 'PASS' : 'FAIL'}`);
        console.log(`Quantum RTL JS verification: ${this.verificationResults.jsLoaded ? 'PASS' : 'FAIL'}`);
    }

    // Verify RTL transformations are applied
    verifyTransformations() {
        // Check if RTL class is applied to body
        const bodyHasRTLClass = document.body.classList.contains('quantum-rtl-active');
        
        // Check if text alignment is right for main content
        const mainContent = document.querySelector('.prose');
        const textAlignIsRight = mainContent && getComputedStyle(mainContent).textAlign === 'right';
        
        // Check if direction is RTL for HTML
        const directionIsRTL = getComputedStyle(document.documentElement).direction === 'rtl';
        
        this.verificationResults.transformationsApplied = 
            bodyHasRTLClass && textAlignIsRight && directionIsRTL;
        
        console.log(`RTL transformations verification: ${this.verificationResults.transformationsApplied ? 'PASS' : 'FAIL'}`);
    }

    // Log verification results
    logVerificationResults() {
        const allPassed = Object.values(this.verificationResults).every(result => 
            result === true || result === null
        );
        
        console.log('=== Quantum RTL Verification Results ===');
        console.log(`HTML RTL Attribute: ${this.verificationResults.rtlAttribute ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`HTML Language Attribute: ${this.verificationResults.languageAttribute ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`CSS File Loaded: ${this.verificationResults.cssLoaded ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`JS File Loaded: ${this.verificationResults.jsLoaded ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`Transformations Applied: ${this.verificationResults.transformationsApplied ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`Verification Timestamp: ${this.verificationResults.verificationTimestamp}`);
        console.log(`Overall Status: ${allPassed ? '✅ ALL VERIFICATIONS PASSED' : '❌ VERIFICATION FAILED'}`);
        console.log('========================================');
    }

    // Export verification results as JSON
    exportResults() {
        return JSON.stringify(this.verificationResults, null, 2);
    }
}

// Initialize verification when page is fully loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        const verifier = new QuantumRTLVerifier();
        verifier.verify();
        
        // Expose to window for debugging
        window.quantumRTLVerifier = verifier;
    }, 1000); // Small delay to ensure all scripts are loaded
});
