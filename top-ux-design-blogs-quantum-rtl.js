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
