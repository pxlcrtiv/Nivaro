/**
 * ElementRTLTransformer - A nano-scale RTL transformation system
 * Inspired by quantum mechanics, this system affects RTL at the smallest element level
 * Like Ant-Man entering the quantum realm, we can manipulate reality at the element level
 */
class ElementRTLTransformer {
    constructor() {
        this.transformedElements = new Map();
        this.isActive = false;
        this.quantumState = new Map();
    }
    
    /**
     * Transform individual element to RTL
     * @param {HTMLElement} element - The element to transform
     * @param {Object} options - Transformation options
     */
    transformElement(element, options = {}) {
        if (!element || this.transformedElements.has(element)) {
            return;
        }
        
        // Store original state for potential reversal
        const originalState = {
            direction: element.style.direction,
            textAlign: element.style.textAlign,
            marginLeft: element.style.marginLeft,
            marginRight: element.style.marginRight,
            paddingLeft: element.style.paddingLeft,
            paddingRight: element.style.paddingRight,
            float: element.style.float,
            clear: element.style.clear
        };
        
        this.transformedElements.set(element, originalState);
        
        // Apply RTL transformations
        element.setAttribute('data-quantum-rtl', 'true');
        
        // Force RTL direction and text alignment
        if (!options.preserveDirection) {
            element.style.direction = 'rtl';
            element.style.textAlign = options.textAlign || 'right';
        }
        
        // Swap margins if needed
        if (options.swapMargins !== false) {
            const computedStyle = window.getComputedStyle(element);
            const marginLeft = computedStyle.marginLeft;
            const marginRight = computedStyle.marginRight;
            
            if (marginLeft !== '0px' && marginLeft !== 'auto') {
                element.style.marginRight = marginLeft;
                element.style.marginLeft = '0px';
            }
        }
        
        // Swap padding if needed
        if (options.swapPadding !== false) {
            const computedStyle = window.getComputedStyle(element);
            const paddingLeft = computedStyle.paddingLeft;
            const paddingRight = computedStyle.paddingRight;
            
            if (paddingLeft !== '0px') {
                element.style.paddingRight = paddingLeft;
                element.style.paddingLeft = '0px';
            }
        }
        
        // Handle flexbox containers
        if (options.transformFlex !== false) {
            if (element.style.display === 'flex' || window.getComputedStyle(element).display === 'flex') {
                if (element.style.flexDirection === 'row') {
                    element.style.flexDirection = 'row-reverse';
                }
            }
        }
        
        console.log('🔬 Element transformed to RTL at quantum level');
    }
    
    /**
     * Transform multiple elements
     * @param {NodeList|Array} elements - Elements to transform
     * @param {Object} options - Transformation options
     */
    transformElements(elements, options = {}) {
        elements.forEach(element => {
            this.transformElement(element, options);
        });
    }
    
    /**
     * Revert element to original state
     * @param {HTMLElement} element - The element to revert
     */
    revertElement(element) {
        if (!element || !this.transformedElements.has(element)) {
            return;
        }
        
        const originalState = this.transformedElements.get(element);
        
        // Restore original styles
        element.style.direction = originalState.direction;
        element.style.textAlign = originalState.textAlign;
        element.style.marginLeft = originalState.marginLeft;
        element.style.marginRight = originalState.marginRight;
        element.style.paddingLeft = originalState.paddingLeft;
        element.style.paddingRight = originalState.paddingRight;
        element.style.float = originalState.float;
        element.style.clear = originalState.clear;
        
        // Remove quantum attribute
        element.removeAttribute('data-quantum-rtl');
        
        // Remove from transformed elements map
        this.transformedElements.delete(element);
        
        console.log('🔬 Element reverted from quantum RTL state');
    }
    
    /**
     * Apply RTL to specific element IDs
     * @param {Array} ids - Array of element IDs
     * @param {Object} options - Transformation options
     */
    transformByIds(ids, options = {}) {
        ids.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                this.transformElement(element, options);
            }
        });
    }
    
    /**
     * Apply RTL to elements by CSS selector
     * @param {String} selector - CSS selector
     * @param {Object} options - Transformation options
     */
    transformBySelector(selector, options = {}) {
        const elements = document.querySelectorAll(selector);
        this.transformElements(elements, options);
    }
}

// Initialize and export the transformer
if (typeof window !== 'undefined') {
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Create transformer instance
        window.quantumElementRTL = new ElementRTLTransformer();
        
        // Example usage - transform specific elements on the page
        // You can modify these selectors or add your own
        setTimeout(() => {
            // Transform header navigation to RTL
            window.quantumElementRTL.transformBySelector('.Header_navLinkItem__l2xbK', {
                swapMargins: true,
                swapPadding: true
            });
            
            // Transform main content sections
            window.quantumElementRTL.transformBySelector('main section', {
                swapMargins: true,
                swapPadding: true,
                transformFlex: true
            });
            
            // Add more specific transformations as needed
            console.log('🚀 Quantum element-level RTL transformation complete!');
            console.log('🔮 Use window.quantumElementRTL to transform specific elements.');
            console.log('   Example: window.quantumElementRTL.transformBySelector(".your-class")');
        }, 1000);
    });
}

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElementRTLTransformer;
}