/**
 * Quantum RTL Transformer
 * A nano-level RTL transformation system inspired by quantum mechanics
 * Like Ant-Man entering the quantum realm, this system affects RTL at the smallest scale
 * 
 * @author Quantum Engineer from Trillion+ light years future
 * @version 1.0.0
 * @description Transforms individual elements at the quantum level for perfect Hebrew RTL
 */

class QuantumRTLTransformer {
    constructor(options = {}) {
        // Load configuration from quantum-rtl-config.js if available
        let baseConfig = {};
        if (typeof window !== 'undefined' && window.QuantumRTLConfig) {
            baseConfig = window.QuantumRTLConfig;
        }
        
        // Merge with provided options
        this.config = this.mergeConfig(baseConfig, options);
        
        this.quantumState = new Map();
        this.observers = new Set();
        this.isActive = false;
        this.mutationObserver = null;
        this.transformedElements = new Set();
        this.performanceMetrics = {
            transformations: 0,
            startTime: Date.now(),
            averageTime: 0
        };
        
        if (this.config.debug || this.config.quantum?.debug) {
            console.log('🎯 Quantum RTL Transformer initialized with config:', this.config);
        }
        
        if (this.config.autoTransform || this.config.quantum?.autoTransform) {
            this.init();
        }
    }
    
    /**
     * Merge configuration with options
     * @param {Object} baseConfig - Base configuration
     * @param {Object} options - User options
     * @returns {Object} Merged configuration
     */
    mergeConfig(baseConfig, options) {
        const defaultConfig = {
            debug: false,
            autoTransform: true,
            intensity: 60,
            speed: 'medium',
            preserveExisting: true,
            measurementMode: 'ondemand',
            quantum: {
                intensity: 60,
                speed: 'medium',
                coherence: true,
                entanglement: true,
                measurement: 'ondemand',
                debug: false
            },
            hebrew: {
                autoDetect: true,
                languageCode: 'he',
                rtlAttribute: 'rtl',
                fontFamily: 'Rubik, Arial Hebrew, sans-serif'
            },
            performance: {
                throttleDelay: 100,
                batchSize: 50,
                useRAF: true,
                lazyLoad: true,
                cacheEnabled: true
            },
            animation: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        };
        
        // Deep merge configurations
        return this.deepMerge(defaultConfig, baseConfig, options);
    }
    
    /**
     * Deep merge multiple objects
     * @param {Object} target - Target object
     * @param {...Object} sources - Source objects
     * @returns {Object} Merged object
     */
    deepMerge(target, ...sources) {
        const result = { ...target };
        
        sources.forEach(source => {
            if (source && typeof source === 'object') {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                            result[key] = this.deepMerge(result[key] || {}, source[key]);
                        } else {
                            result[key] = source[key];
                        }
                    }
                }
            }
        });
        
        return result;
    }

    /**
     * Initialize the quantum RTL transformation
     * Like entering the quantum realm - everything becomes possible at this scale
     */
    init() {
        if (!this.isRTL) {
            console.log('Quantum RTL: Document is not RTL, skipping transformation');
            return;
        }

        this.log('Initializing Quantum RTL Transformer...');
        
        // Apply quantum transformations to existing elements
        this.transformExistingElements();
        
        // Set up mutation observer for new elements (like quantum entanglement)
        if (this.options.mutationObserver) {
            this.setupQuantumObserver();
        }
        
        // Apply quantum CSS custom properties
        this.applyQuantumCSS();
        
        this.log('Quantum RTL transformation complete');
    }

    /**
     * Transform all existing elements at the quantum level
     * Each element gets its own quantum state and transformation
     */
    transformExistingElements() {
        const elements = document.querySelectorAll('*');
        this.log(`Transforming ${elements.length} elements at quantum level...`);
        
        elements.forEach((element, index) => {
            this.transformElement(element, index);
        });
    }

    /**
     * Transform individual element at quantum level
     * Like manipulating individual atoms in the quantum realm
     */
    transformElement(element, quantumId) {
        if (!element || this.quantumStates.has(element)) {
            return;
        }

        const quantumState = {
            id: quantumId,
            originalStyles: {},
            transformedStyles: {},
            timestamp: Date.now(),
            elementType: element.tagName.toLowerCase(),
            hasTextContent: element.textContent.trim().length > 0
        };

        // Store original quantum state
        this.storeQuantumState(element, quantumState);

        // Apply quantum transformations based on element type
        this.applyQuantumTransformations(element, quantumState);

        // Mark element as quantum-transformed
        element.setAttribute('data-quantum-rtl', 'true');
        element.setAttribute('data-quantum-id', quantumId);
    }

    /**
     * Store the original quantum state of an element
     * Like preserving the quantum signature before transformation
     */
    storeQuantumState(element, state) {
        const computedStyle = window.getComputedStyle(element);
        
        state.originalStyles = {
            direction: computedStyle.direction,
            textAlign: computedStyle.textAlign,
            marginLeft: computedStyle.marginLeft,
            marginRight: computedStyle.marginRight,
            paddingLeft: computedStyle.paddingLeft,
            paddingRight: computedStyle.paddingRight,
            float: computedStyle.float,
            clear: computedStyle.clear,
            borderRadius: computedStyle.borderRadius,
            transform: computedStyle.transform,
            writingMode: computedStyle.writingMode
        };

        this.quantumStates.set(element, state);
    }

    /**
     * Apply quantum-level transformations based on element analysis
     * This is where the quantum magic happens - each element gets unique treatment
     */
    applyQuantumTransformations(element, state) {
        const transformations = [];

        // Quantum Text Transformation
        if (state.hasTextContent) {
            this.applyQuantumTextTransform(element, transformations);
        }

        // Quantum Layout Transformation
        this.applyQuantumLayoutTransform(element, transformations);

        // Quantum Visual Transformation
        this.applyQuantumVisualTransform(element, transformations);

        // Quantum Interactive Transformation
        this.applyQuantumInteractiveTransform(element, transformations);

        // Apply all quantum transformations
        transformations.forEach(transform => {
            if (transform.property && transform.value) {
                element.style.setProperty(transform.property, transform.value, 'important');
                state.transformedStyles[transform.property] = transform.value;
            }
        });

        this.log(`Quantum transformed element ${state.id} (${state.elementType}) with ${transformations.length} modifications`);
    }

    /**
     * Apply quantum text transformations
     * Manipulates text flow at the subatomic level
     */
    applyQuantumTextTransform(element, transformations) {
        // Force RTL direction for text elements
        transformations.push({
            property: 'direction',
            value: 'rtl'
        });

        // Ensure proper text alignment
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.textAlign === 'left') {
            transformations.push({
                property: 'text-align',
                value: 'right'
            });
        }

        // Handle Hebrew-specific text properties
        if (this.containsHebrew(element.textContent)) {
            transformations.push({
                property: 'font-feature-settings',
                value: '"kern" 1, "liga" 1, "calt" 1'
            });
            
            transformations.push({
                property: 'text-rendering',
                value: 'optimizeLegibility'
            });
        }
    }

    /**
     * Apply quantum layout transformations
     * Manipulates spatial relationships at the quantum level
     */
    applyQuantumLayoutTransform(element, transformations) {
        const computedStyle = window.getComputedStyle(element);
        
        // Quantum margin swapping
        if (computedStyle.marginLeft !== '0px' && computedStyle.marginLeft !== 'auto') {
            transformations.push({
                property: 'margin-right',
                value: computedStyle.marginLeft
            });
            transformations.push({
                property: 'margin-left',
                value: '0px'
            });
        }

        // Quantum padding swapping
        if (computedStyle.paddingLeft !== '0px') {
            transformations.push({
                property: 'padding-right',
                value: computedStyle.paddingLeft
            });
            transformations.push({
                property: 'padding-left',
                value: '0px'
            });
        }

        // Quantum float transformation
        if (computedStyle.float === 'left') {
            transformations.push({
                property: 'float',
                value: 'right'
            });
        } else if (computedStyle.float === 'right') {
            transformations.push({
                property: 'float',
                value: 'left'
            });
        }
    }

    /**
     * Apply quantum visual transformations
     * Manipulates visual properties at the photon level
     */
    applyQuantumVisualTransform(element, transformations) {
        const computedStyle = window.getComputedStyle(element);
        
        // Quantum border radius transformation
        if (computedStyle.borderRadius.includes('border-top-left-radius')) {
            transformations.push({
                property: 'border-radius',
                value: this.swapBorderRadius(computedStyle.borderRadius)
            });
        }

        // Quantum transform transformation
        if (computedStyle.transform.includes('translateX')) {
            transformations.push({
                property: 'transform',
                value: this.swapTransform(computedStyle.transform)
            });
        }
    }

    /**
     * Apply quantum interactive transformations
     * Manipulates user interaction properties
     */
    applyQuantumInteractiveTransform(element, transformations) {
        // Add quantum hover effects for RTL
        if (element.matches('a, button, [role="button"]')) {
            element.addEventListener('mouseenter', this.quantumHover.bind(this));
            element.addEventListener('mouseleave', this.quantumUnhover.bind(this));
        }
    }

    /**
     * Quantum hover effect - like quantum tunneling
     */
    quantumHover(event) {
        const element = event.target;
        element.style.setProperty('transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 'important');
        
        // Apply quantum hover transformation
        if (this.quantumStates.has(element)) {
            const state = this.quantumStates.get(element);
            element.style.setProperty('transform', 'translateX(-2px) scale(1.02)', 'important');
        }
    }

    /**
     * Quantum unhover effect - return from quantum state
     */
    quantumUnhover(event) {
        const element = event.target;
        element.style.setProperty('transform', 'translateX(0) scale(1)', 'important');
    }

    /**
     * Set up quantum observer for new elements
     * Like quantum entanglement - observes changes across the DOM
     */
    setupQuantumObserver() {
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        this.transformElement(node, this.quantumStates.size);
                        // Transform child elements too
                        node.querySelectorAll('*').forEach((child, index) => {
                            this.transformElement(child, this.quantumStates.size + index + 1);
                        });
                    }
                });
            });
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        this.log('Quantum observer activated - monitoring DOM changes');
    }

    /**
     * Apply quantum CSS custom properties
     * Creates quantum-level CSS variables for dynamic RTL
     */
    applyQuantumCSS() {
        const quantumCSS = `
            :root {
                --quantum-rtl-direction: rtl;
                --quantum-rtl-text-align: right;
                --quantum-rtl-margin-left: 0;
                --quantum-rtl-margin-right: auto;
                --quantum-rtl-padding-left: 0;
                --quantum-rtl-padding-right: inherit;
                --quantum-rtl-transform: translateX(0);
                --quantum-rtl-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            [data-quantum-rtl="true"] {
                direction: var(--quantum-rtl-direction) !important;
                text-align: var(--quantum-rtl-text-align) !important;
                transition: var(--quantum-rtl-transition) !important;
            }

            [data-quantum-rtl="true"]:hover {
                transform: var(--quantum-rtl-transform) translateX(-2px) scale(1.02) !important;
            }

            /* Quantum Hebrew font optimization */
            [data-quantum-rtl="true"]:lang(he) {
                font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
                text-rendering: optimizeLegibility;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = quantumCSS;
        styleSheet.id = 'quantum-rtl-styles';
        document.head.appendChild(styleSheet);

        this.log('Quantum CSS applied to document');
    }

    /**
     * Utility functions for quantum transformations
     */
    containsHebrew(text) {
        return /[\u0590-\u05FF]/.test(text);
    }

    swapBorderRadius(borderRadius) {
        return borderRadius
            .replace(/border-top-left-radius/g, 'border-top-right-radius')
            .replace(/border-top-right-radius/g, 'border-top-left-radius')
            .replace(/border-bottom-left-radius/g, 'border-bottom-right-radius')
            .replace(/border-bottom-right-radius/g, 'border-bottom-left-radius');
    }

    swapTransform(transform) {
        return transform.replace(/translateX\(([^)]+)\)/g, (match, value) => {
            const numValue = parseFloat(value);
            return `translateX(${-numValue}${value.replace(numValue.toString(), '')})`;
        });
    }

    /**
     * Logging utility for quantum operations
     */
    log(message) {
        if (this.options.debug) {
            console.log(`🔮 Quantum RTL: ${message}`);
        }
    }

    /**
     * Destroy quantum transformer and restore original states
     * Like collapsing the quantum wave function back to classical state
     */
    destroy() {
        this.log('Collapsing quantum wave function...');
        
        if (this.observer) {
            this.observer.disconnect();
        }

        // Restore all quantum states to original
        this.quantumStates.forEach((state, element) => {
            Object.entries(state.originalStyles).forEach(([property, value]) => {
                if (value && value !== 'none' && value !== 'auto') {
                    element.style.setProperty(property, value);
                }
            });
            
            element.removeAttribute('data-quantum-rtl');
            element.removeAttribute('data-quantum-id');
        });

        // Remove quantum CSS
        const quantumStyles = document.getElementById('quantum-rtl-styles');
        if (quantumStyles) {
            quantumStyles.remove();
        }

        this.quantumStates.clear();
        this.log('Quantum transformation collapsed');
    }
}

// Quantum RTL initialization
// Like the quantum realm - this activates when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if RTL is enabled
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    
    if (isRTL) {
        console.log('🚀 Initializing Quantum RTL Transformer...');
        window.quantumRTL = new QuantumRTLTransformer({
            debug: true,
            quantumLevel: 'element',
            autoInit: true
        });
        
        // Expose quantum controls globally
        window.quantumControls = {
            transform: () => window.quantumRTL.transformExistingElements(),
            destroy: () => window.quantumRTL.destroy(),
            reinitialize: () => {
                window.quantumRTL.destroy();
                window.quantumRTL = new QuantumRTLTransformer({ debug: true });
            }
        };
        
        console.log('🔮 Quantum RTL ready! Use window.quantumControls to manipulate the quantum realm.');
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumRTLTransformer;
}