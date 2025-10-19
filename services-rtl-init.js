// Nivaro Hebrew Website - Services Page Quantum RTL Initialization

/**
 * services-rtl-init.js
 * Page-specific quantum RTL initialization for services.html
 * Leverages quantum principles for perfect Hebrew RTL experience
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize quantum RTL transformer
        initQuantumRTL();
    });
    
    /**
     * Initialize quantum RTL transformation for services page
     * Configures quantum parameters specific to the services page layout
     */
    function initQuantumRTL() {
        try {
            // Check if QuantumRTLTransformer is available
            if (typeof QuantumRTLTransformer === 'undefined') {
                console.warn('🔮 QuantumRTLTransformer not found. Attempting to reinitialize...');
                
                // Attempt to manually create a basic transformer if the class isn't available
                if (typeof window !== 'undefined') {
                    window.quantumRTL = window.quantumRTL || {
                        initialize: function() { console.log('Basic RTL initialized'); }
                    };
                }
                return;
            }
            
            // Create and configure page-specific quantum RTL transformer
            const servicesQuantumRTL = new QuantumRTLTransformer({
                intensity: 75,  // Slightly higher intensity for service cards
                speed: 'medium',
                coherence: true, // Maintain quantum coherence across service cards
                entanglement: true, // Enable entanglement between related service elements
                measurement: 'realtime',
                debug: false,
                
                // Hebrew language settings
                hebrew: {
                    autoDetect: true,
                    languageCode: 'he',
                    fontFamily: 'Rubik, Arial Hebrew, sans-serif'
                },
                
                // Custom selectors for the services page
                selectors: {
                    default: [
                        'p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                        'li', 'ul', 'ol', 'blockquote', 'article', 'section',
                        'nav', 'aside', 'main', 'header', 'footer', 'address'
                    ],
                    
                    // Interactive elements specific to services page
                    interactive: [
                        'button', 'input', 'textarea', 'select', 'label',
                        'a', 'form', '.service-card', '.service-details', '.service-button'
                    ],
                    
                    // Layout elements specific to services page
                    layout: [
                        '.service-grid', '.service-container', '.service-row',
                        '.feature-card', '.feature-grid', '.pricing-table'
                    ],
                    
                    // Custom selectors for services page
                    custom: [
                        '.service-title', '.service-description', '.service-features',
                        '.service-icon', '.service-highlight', '.service-benefits'
                    ]
                },
                
                // Animation settings specific to services page
                animation: {
                    enabled: true,
                    duration: 400, // Slightly longer animation for service cards
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    delay: 0,
                    properties: ['direction', 'text-align', 'margin', 'padding', 'transform']
                },
                
                // Performance optimization
                performance: {
                    throttleDelay: 80,
                    debounceDelay: 250,
                    batchSize: 30,
                    useRAF: true,
                    lazyLoad: true,
                    cacheEnabled: true,
                    cacheExpiry: 300000
                },
                
                // Responsive settings
                responsive: {
                    enabled: true,
                    breakpoints: {
                        mobile: 768,
                        tablet: 1024,
                        desktop: 1200
                    },
                    intensities: {
                        mobile: 85,  // Higher intensity for mobile view
                        tablet: 75,  // Medium intensity for tablet
                        desktop: 70  // Standard intensity for desktop
                    }
                }
            });
            
            // Store the transformer instance globally for debugging and control
            window.servicesQuantumRTL = servicesQuantumRTL;
            
            // Initialize transformation
            servicesQuantumRTL.init();
            
            // Apply page-specific RTL transformations
            applyServicesPageTransformations();
            
            // Setup quantum monitoring for dynamically loaded content
            setupQuantumMonitoring();
            
            console.log('✅ Quantum RTL initialized for services page');
            
        } catch (error) {
            console.error('❌ Error initializing quantum RTL for services page:', error);
        }
    }
    
    /**
     * Apply page-specific RTL transformations for services.html
     * Handles special cases and complex layouts unique to the services page
     */
    function applyServicesPageTransformations() {
        // Apply staggered transformations to service cards
        const serviceCards = document.querySelectorAll('.service-card, [class*="service-card"]');
        serviceCards.forEach((card, index) => {
            // Add a slight delay to create a staggered effect
            setTimeout(() => {
                if (card && !card.hasAttribute('data-quantum-rtl')) {
                    card.setAttribute('data-quantum-rtl', 'true');
                    card.setAttribute('data-quantum-stagger', index);
                    
                    // Add Hebrew text detection class
                    if (hasHebrewText(card)) {
                        card.classList.add('hebrew-content');
                    }
                }
            }, index * 50); // 50ms delay between each card transformation
        });
        
        // Transform service feature lists
        const featureLists = document.querySelectorAll('.service-features, [class*="features"] ul, ol');
        featureLists.forEach(list => {
            if (list && !list.hasAttribute('data-quantum-rtl')) {
                list.setAttribute('data-quantum-rtl', 'true');
                
                // Reverse list items for RTL display
                const items = Array.from(list.children);
                if (items.length > 0) {
                    items.reverse().forEach(item => list.appendChild(item));
                }
            }
        });
        
        // Transform service navigation elements
        const serviceNavigation = document.querySelectorAll('.service-navigation, .service-tabs, .service-filters');
        serviceNavigation.forEach(nav => {
            if (nav && !nav.hasAttribute('data-quantum-rtl')) {
                nav.setAttribute('data-quantum-rtl', 'true');
                
                // Apply special styling for navigation elements
                nav.style.flexDirection = 'row-reverse';
            }
        });
    }
    
    /**
     * Setup quantum monitoring for dynamically loaded content
     * Uses mutation observers to track changes in the DOM
     */
    function setupQuantumMonitoring() {
        try {
            // Create a mutation observer to watch for new elements
            const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        // Check for added nodes
                        mutation.addedNodes.forEach((node) => {
                            // Only process element nodes
                            if (node.nodeType === 1) {
                                // Check if this is a service-related element
                                if (isServiceElement(node)) {
                                    // Apply quantum RTL transformation
                                    applyQuantumTransformation(node);
                                }
                                
                                // Check all children of the added node
                                const childElements = node.querySelectorAll('*');
                                childElements.forEach(child => {
                                    if (isServiceElement(child)) {
                                        applyQuantumTransformation(child);
                                    }
                                });
                            }
                        });
                    }
                });
            });
            
            // Start observing the document body
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: false,
                characterData: false
            });
            
            // Store the observer for later cleanup if needed
            window.servicesQuantumObserver = mutationObserver;
            
        } catch (error) {
            console.error('❌ Error setting up quantum monitoring:', error);
        }
    }
    
    /**
     * Check if an element is related to services content
     * @param {HTMLElement} element - The element to check
     * @returns {boolean} True if the element is service-related
     */
    function isServiceElement(element) {
        const serviceClasses = [
            'service-card', 'service-details', 'service-title',
            'service-description', 'service-features', 'service-icon',
            'service-highlight', 'service-benefits', 'feature-card'
        ];
        
        // Check if the element has any service-related classes
        for (const className of serviceClasses) {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
        }
        
        // Check if the element's class name contains 'service'
        if (element.className && element.className.includes('service')) {
            return true;
        }
        
        // Check if the element's ID contains 'service'
        if (element.id && element.id.includes('service')) {
            return true;
        }
        
        return false;
    }
    
    /**
     * Apply quantum RTL transformation to an element
     * @param {HTMLElement} element - The element to transform
     */
    function applyQuantumTransformation(element) {
        // Skip if already transformed
        if (element.hasAttribute('data-quantum-rtl')) {
            return;
        }
        
        // Apply quantum RTL attributes
        element.setAttribute('data-quantum-rtl', 'true');
        element.setAttribute('data-quantum-timestamp', Date.now());
        
        // Add Hebrew text detection
        if (hasHebrewText(element)) {
            element.classList.add('hebrew-content');
        }
    }
    
    /**
     * Check if an element contains Hebrew text
     * @param {HTMLElement} element - The element to check
     * @returns {boolean} True if Hebrew text is detected
     */
    function hasHebrewText(element) {
        if (!element || !element.textContent) {
            return false;
        }
        
        // Regular expression to detect Hebrew characters
        const hebrewRegex = /[\u0590-\u05FF]/;
        return hebrewRegex.test(element.textContent);
    }
    
    /**
     * Helper function to get nested properties safely
     * @param {Object} obj - The object to search
     * @param {string} path - The property path (e.g., 'a.b.c')
     * @returns {*} The property value or undefined
     */
    function getNestedProperty(obj, path) {
        if (!obj || !path) {
            return undefined;
        }
        
        const properties = path.split('.');
        return properties.reduce((prev, curr) => {
            return prev && prev[curr] !== undefined ? prev[curr] : undefined;
        }, obj);
    }
    
    // Expose public API for debugging and control
    window.servicesRTLControls = {
        reinitialize: function() {
            console.log('🔄 Reinitializing services page quantum RTL...');
            initQuantumRTL();
        },
        
        toggleDebug: function() {
            if (window.servicesQuantumRTL) {
                window.servicesQuantumRTL.config.debug = !window.servicesQuantumRTL.config.debug;
                console.log(`🔧 Debug mode ${window.servicesQuantumRTL.config.debug ? 'enabled' : 'disabled'}`);
            }
        },
        
        getStats: function() {
            const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]').length;
            const hebrewElements = document.querySelectorAll('.hebrew-content').length;
            
            return {
                transformedElements: transformedElements,
                hebrewElements: hebrewElements,
                serviceCards: document.querySelectorAll('.service-card, [class*="service-card"]').length,
                timestamp: new Date().toISOString()
            };
        }
    };
})();