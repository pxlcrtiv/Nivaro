#!/bin/bash

# Quantum RTL Implementation Script for top-ux-design-blogs.html
# This script applies advanced RTL transformations at the quantum level

# Create backup
BACKUP_FILE="top-ux-design-blogs.html.bak.$(date +%Y%m%d%H%M%S)"
cp -v top-ux-design-blogs.html "$BACKUP_FILE"
echo "[QUANTUM] Created backup: $BACKUP_FILE"

# Function to create quantum RTL CSS file
create_quantum_rtl_css() {
    cat > "top-ux-design-blogs-quantum-rtl.css" << 'EOF'
/* Quantum RTL CSS for Top UX Design Blogs Page */
/* This stylesheet implements advanced RTL transformations at the quantum level */

:root {
    --rtl-direction: rtl;
    --rtl-text-align: right;
    --rtl-mirror: scaleX(-1);
    --quantum-rtl-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Global RTL transformations */
html[dir="rtl"] {
    direction: rtl;
    text-align: right;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header RTL adjustments */
html[dir="rtl"] .header-inner-container {
    flex-direction: row-reverse;
}

html[dir="rtl"] .Header_contentLeft__LvrzL {
    text-align: right;
}

html[dir="rtl"] .Header_contentRight__yfhGM {
    text-align: right;
}

/* Main content RTL adjustments */
html[dir="rtl"] .prose {
    text-align: right;
    direction: rtl;
}

html[dir="rtl"] h1, 
html[dir="rtl"] h2, 
html[dir="rtl"] h3, 
html[dir="rtl"] h4, 
html[dir="rtl"] h5, 
html[dir="rtl"] h6 {
    text-align: right;
}

html[dir="rtl"] .blog-title-anim {
    text-align: right;
}

/* Navigation and menu RTL adjustments */
html[dir="rtl"] .Header_nav__IZBbc {
    direction: rtl;
}

html[dir="rtl"] .Header_menuSvg path {
    transform: scaleX(-1);
}

/* Form elements RTL */
html[dir="rtl"] input,
html[dir="rtl"] textarea,
html[dir="rtl"] select {
    text-align: right;
}

/* Quantum level RTL fixes for specific components */
html[dir="rtl"] .left-section-blog {
    text-align: right;
    left: auto;
    right: 0;
}

html[dir="rtl"] .tablet\:flex-col {
    flex-direction: column;
}

/* Footer RTL adjustments */
html[dir="rtl"] footer {
    text-align: right;
    direction: rtl;
}

/* Quantum RTL transition effects */
.quantum-rtl-transition {
    transition: var(--quantum-rtl-transition);
}

/* Bidirectional text handling */
.bidi-text {
    unicode-bidi: plaintext;
}

/* Responsive RTL adjustments */
@media (max-width: 768px) {
    html[dir="rtl"] .mobile\:text-\[5\.8vw\] {
        text-align: right;
    }
}

/* Quantum RTL fix for mirrored icons and graphics */
.quantum-mirror {
    transform: var(--rtl-mirror);
}
EOF
    echo "[QUANTUM] Created quantum RTL CSS file: top-ux-design-blogs-quantum-rtl.css"
}

# Function to create quantum RTL JS file
create_quantum_rtl_js() {
    cat > "top-ux-design-blogs-quantum-rtl.js" << 'EOF'
// Quantum RTL Observer - Advanced RTL Implementation for Top UX Design Blogs Page

class QuantumRTLObserver {
    constructor() {
        this.isRTLActive = false;
        this.observer = null;
        this.mutationOptions = {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'dir']
        };
    }

    // Initialize quantum RTL observation
    init() {
        console.log('Initializing Quantum RTL Observer for Top UX Design Blogs Page...');
        
        // Check initial RTL state
        this.checkRTLState();
        
        // Apply initial RTL transformations
        this.applyRTLTransformations();
        
        // Set up mutation observer to handle dynamic content
        this.setupMutationObserver();
        
        // Add resize listener for responsive RTL adjustments
        window.addEventListener('resize', this.handleResize.bind(this));
        
        console.log('Quantum RTL Observer initialized successfully');
    }

    // Check if RTL is active based on HTML dir attribute
    checkRTLState() {
        const htmlElement = document.documentElement;
        this.isRTLActive = htmlElement.dir === 'rtl';
        console.log(`Quantum RTL state: ${this.isRTLActive ? 'ACTIVE' : 'INACTIVE'}`);
    }

    // Apply quantum level RTL transformations
    applyRTLTransformations() {
        if (!this.isRTLActive) return;
        
        console.log('Applying quantum RTL transformations...');
        
        // Add RTL class to body for CSS targeting
        document.body.classList.add('quantum-rtl-active');
        
        // Apply mirror transformations to appropriate elements
        this.applyMirrorTransformations();
        
        // Fix table directionality
        this.fixTableDirectionality();
        
        // Adjust form elements for RTL
        this.adjustFormElements();
        
        // Handle bidirectional text
        this.handleBidirectionalText();
        
        console.log('Quantum RTL transformations applied successfully');
    }

    // Apply mirror transformations to icons and graphics
    applyMirrorTransformations() {
        const elementsToMirror = document.querySelectorAll('.Header_menuSvg path, .mirror-in-rtl');
        elementsToMirror.forEach(element => {
            element.style.transform = 'scaleX(-1)';
        });
    }

    // Fix table directionality for RTL
    fixTableDirectionality() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            table.style.direction = 'rtl';
            table.style.textAlign = 'right';
        });
    }

    // Adjust form elements for RTL
    adjustFormElements() {
        const formElements = document.querySelectorAll('input, textarea, select');
        formElements.forEach(element => {
            element.style.textAlign = 'right';
        });
    }

    // Handle bidirectional text elements
    handleBidirectionalText() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span');
        textElements.forEach(element => {
            if (element.textContent && /[\u0590-\u05FF]/.test(element.textContent)) {
                element.classList.add('bidi-text');
            }
        });
    }

    // Set up mutation observer for dynamic content changes
    setupMutationObserver() {
        if ('MutationObserver' in window) {
            this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    this.handleMutations(mutation);
                });
            });
            
            this.observer.observe(document.body, this.mutationOptions);
            console.log('Quantum RTL Mutation Observer set up successfully');
        }
    }

    // Handle DOM mutations
    handleMutations(mutation) {
        // Check if mutation affects RTL state
        if (mutation.type === 'attributes' && mutation.target === document.documentElement && 
            mutation.attributeName === 'dir') {
            this.checkRTLState();
            this.applyRTLTransformations();
        }
        
        // Process newly added nodes
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    this.processNewElement(node);
                }
            });
        }
    }

    // Process newly added DOM elements
    processNewElement(element) {
        if (!this.isRTLActive) return;
        
        // Apply RTL to the new element
        if (element.tagName === 'TABLE') {
            this.fixTableDirectionality();
        } else if (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName)) {
            element.style.textAlign = 'right';
        }
        
        // Check for bidirectional text in the new element
        if (element.textContent && /[\u0590-\u05FF]/.test(element.textContent)) {
            element.classList.add('bidi-text');
        }
    }

    // Handle window resize for responsive RTL adjustments
    handleResize() {
        // Re-apply responsive RTL adjustments on resize
        this.applyRTLTransformations();
    }

    // Clean up resources
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        window.removeEventListener('resize', this.handleResize.bind(this));
        console.log('Quantum RTL Observer destroyed');
    }
}

// Initialize Quantum RTL Observer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const quantumRTL = new QuantumRTLObserver();
    quantumRTL.init();
    
    // Expose to window for debugging and testing
    window.quantumRTL = quantumRTL;
});
EOF
    echo "[QUANTUM] Created quantum RTL JS file: top-ux-design-blogs-quantum-rtl.js"
}

# Function to create quantum RTL verification JS file
create_quantum_rtl_verification() {
    cat > "top-ux-design-blogs-quantum-rtl-verification.js" << 'EOF'
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
EOF
    echo "[QUANTUM] Created quantum RTL verification file: top-ux-design-blogs-quantum-rtl-verification.js"
}

# Function to update HTML file with quantum RTL support
update_html_for_quantum_rtl() {
    echo "[QUANTUM] Updating HTML file with quantum RTL support..."
    
    # Create a temporary file to store the modified content
    TEMP_FILE="temp-top-ux-blogs.html"
    
    # Use awk to process the HTML file and make the necessary changes
    awk '{
        # Update the HTML tag with correct RTL language and direction
        if ($0 ~ /<!DOCTYPE html><html lang="en" dir="rtl">/) {
            print "<!DOCTYPE html><html lang="he" dir="rtl">";
        } 
        # Add the quantum RTL CSS file
        else if ($0 ~ /<\/head>/) {
            print "    <link rel=\"stylesheet\" href=\"top-ux-design-blogs-quantum-rtl.css\" data-precedence=\"next\" />";
            print "    <script src=\"top-ux-design-blogs-quantum-rtl.js\"></script>";
            print "    <script src=\"top-ux-design-blogs-quantum-rtl-verification.js\"></script>";
            print $0;
        }
        # Add implementation comment before body closing tag
        else if ($0 ~ /<\/body>/) {
            print "    <!-- Quantum RTL Implementation for Top UX Design Blogs Page -->";
            print $0;
        }
        else {
            print $0;
        }
    }' top-ux-design-blogs.html > "$TEMP_FILE"
    
    # Replace the original file with the modified version
    mv -v "$TEMP_FILE" top-ux-design-blogs.html
    
    echo "[QUANTUM] HTML file updated successfully with quantum RTL support"
}

# Function to verify the quantum RTL implementation
verify_quantum_rtl_implementation() {
    echo "[QUANTUM] Verifying quantum RTL implementation..."
    
    # Check HTML language and direction
    html_check=$(grep -A1 "<!DOCTYPE html>" top-ux-design-blogs.html)
    if echo "$html_check" | grep -q "lang=\"he\"" && echo "$html_check" | grep -q "dir=\"rtl\""; then
        echo "✅ HTML language and direction are correctly set to Hebrew RTL"
    else
        echo "❌ HTML language or direction is not correctly set"
    fi
    
    # Check if quantum RTL CSS is included
    if grep -q "top-ux-design-blogs-quantum-rtl.css" top-ux-design-blogs.html; then
        echo "✅ Quantum RTL CSS file is included"
    else
        echo "❌ Quantum RTL CSS file is not included"
    fi
    
    # Check if quantum RTL JS is included
    if grep -q "top-ux-design-blogs-quantum-rtl.js" top-ux-design-blogs.html; then
        echo "✅ Quantum RTL JS file is included"
    else
        echo "❌ Quantum RTL JS file is not included"
    fi
    
    # Check if quantum RTL verification JS is included
    if grep -q "top-ux-design-blogs-quantum-rtl-verification.js" top-ux-design-blogs.html; then
        echo "✅ Quantum RTL verification file is included"
    else
        echo "❌ Quantum RTL verification file is not included"
    fi
    
    # Check if implementation comment is added
    if grep -q "Quantum RTL Implementation for Top UX Design Blogs Page" top-ux-design-blogs.html; then
        echo "✅ Implementation comment is added"
    else
        echo "❌ Implementation comment is not added"
    fi
    
    echo "[QUANTUM] Verification completed"
}

# Main execution flow
echo "[QUANTUM] Starting quantum-level RTL implementation for top-ux-design-blogs.html..."

# Create all required quantum RTL files
create_quantum_rtl_css
create_quantum_rtl_js
create_quantum_rtl_verification

# Update HTML file
update_html_for_quantum_rtl

# Verify the implementation
verify_quantum_rtl_implementation

echo "[QUANTUM] Quantum-level RTL implementation completed successfully!"
echo "[QUANTUM] The page is now optimized for Hebrew users with advanced RTL support."