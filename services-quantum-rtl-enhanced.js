/**
 * services-quantum-rtl-enhanced.js
 * Enhanced quantum-level RTL implementation for services.html
 * Optimized for Hebrew text and service-specific elements
 * Leverages quantum entanglement principles for perfect RTL alignment
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded before initiating quantum-level transformations
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize enhanced quantum RTL for services page
        initEnhancedQuantumRTL();
    });
    
    /**
     * Initialize enhanced quantum RTL transformation for services page
     * Sets up quantum field effects specifically for service elements
     */
    function initEnhancedQuantumRTL() {
        try {
            // Check if the core quantum RTL system is available
            if (typeof window.quantumRTL === 'undefined' && typeof QuantumRTLTransformer === 'undefined') {
                console.warn('🔮 Core quantum RTL system not detected. Initializing emergency quantum field.');
                initializeEmergencyQuantumField();
                return;
            }
            
            // If the core system exists but isn't initialized, initialize it
            if (typeof QuantumRTLTransformer !== 'undefined' && typeof window.quantumRTL === 'undefined') {
                console.log('🚀 Initializing core quantum RTL transformer...');
                window.quantumRTL = new QuantumRTLTransformer({
                    quantum: {
                        intensity: 80,
                        speed: 'medium',
                        coherence: true,
                        entanglement: true,
                        measurement: 'realtime',
                        debug: true
                    },
                    hebrew: {
                        autoDetect: true,
                        languageCode: 'he',
                        fontFamily: 'Rubik, Arial Hebrew, sans-serif'
                    },
                    performance: {
                        batchSize: 40,
                        useRAF: true,
                        lazyLoad: true,
                        cacheEnabled: true
                    }
                });
                window.quantumRTL.init();
            }
            
            // Enhance with services-specific quantum transformations
            enhanceWithServicesQuantumTransformations();
            
            // Setup quantum-level monitoring for service elements
            setupQuantumServiceMonitoring();
            
            // Apply quantum Hebrew optimizations
            applyQuantumHebrewOptimizations();
            
            console.log('✨ Enhanced quantum RTL successfully initialized for services page');
            
        } catch (error) {
            console.error('❌ Quantum level error during RTL initialization:', error);
            // Fall back to basic RTL if quantum implementation fails
            applyBasicRTLTransformations();
        }
    }
    
    /**
     * Enhance the existing quantum RTL system with services-specific transformations
     * Targets service cards, feature lists, and navigation elements at the quantum level
     */
    function enhanceWithServicesQuantumTransformations() {
        // Create a quantum field specifically for service elements
        const serviceQuantumField = document.createElement('style');
        serviceQuantumField.id = 'services-quantum-field';
        serviceQuantumField.textContent = `
            /* Services-specific quantum RTL field effects */
            :root {
                --quantum-service-intensity: 1.2;
                --quantum-service-transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                --quantum-service-hover: translateX(-4px) scale(1.03);
            }
            
            /* Quantum optimization for service cards */
            [data-quantum-rtl="true"].service-card, 
            [data-quantum-rtl="true"][class*="service-card"] {
                transform-origin: center right;
                transition: var(--quantum-service-transition);
            }
            
            /* Quantum hover effect for service cards */
            [data-quantum-rtl="true"].service-card:hover,
            [data-quantum-rtl="true"][class*="service-card"]:hover {
                transform: var(--quantum-service-hover);
            }
            
            /* Quantum optimization for Hebrew text in service descriptions */
            [data-quantum-rtl="true"].service-description:lang(he),
            [data-quantum-rtl="true"].service-title:lang(he) {
                font-kerning: normal;
                font-variant-ligatures: common-ligatures;
                text-rendering: optimizeLegibility;
                word-spacing: 0.05em;
                letter-spacing: -0.01em;
            }
            
            /* Quantum alignment for service feature lists */
            [data-quantum-rtl="true"] .service-features,
            [data-quantum-rtl="true"] [class*="features"] ul,
            [data-quantum-rtl="true"] [class*="features"] ol {
                list-style-position: inside;
                padding-right: 0.5em;
                padding-left: 0;
            }
            
            /* Quantum layout for service navigation */
            [data-quantum-rtl="true"] .service-navigation,
            [data-quantum-rtl="true"] .service-tabs,
            [data-quantum-rtl="true"] .service-filters {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-start;
                gap: 1.5em;
            }
        `;
        
        document.head.appendChild(serviceQuantumField);
        
        // Apply quantum-level transformations to key service elements
        applyQuantumTransformationsToServiceElements();
        
        // Create quantum entanglement between related service elements
        createQuantumEntanglementBetweenServices();
    }
    
    /**
     * Apply quantum-level transformations to all service-specific elements
     * Ensures each service element is properly aligned in the RTL flow
     */
    function applyQuantumTransformationsToServiceElements() {
        // Define service-specific element selectors
        const serviceSelectors = [
            '.service-card', '[class*="service-card"]',
            '.service-container', '.service-row',
            '.service-title', '.service-description',
            '.service-features', '.service-icon',
            '.service-highlight', '.service-benefits',
            '.feature-card', '.feature-grid',
            '.pricing-table', '.service-navigation',
            '.service-tabs', '.service-filters'
        ];
        
        // Combine selectors into a single query
        const combinedSelector = serviceSelectors.join(', ');
        const serviceElements = document.querySelectorAll(combinedSelector);
        
        // Apply quantum transformations with a slight delay for each element
        // This creates a wave-like effect across the page
        serviceElements.forEach((element, index) => {
            setTimeout(() => {
                if (!element.hasAttribute('data-quantum-rtl')) {
                    // Apply quantum RTL attributes
                    element.setAttribute('data-quantum-rtl', 'true');
                    element.setAttribute('data-quantum-service', 'true');
                    element.setAttribute('data-quantum-index', index);
                    element.setAttribute('data-quantum-timestamp', Date.now());
                    
                    // Check for Hebrew content and optimize accordingly
                    if (containsHebrewText(element)) {
                        element.setAttribute('data-hebrew-content', 'true');
                        element.classList.add('hebrew-optimized');
                    }
                    
                    // Apply element-specific quantum adjustments
                    applyElementSpecificQuantumAdjustments(element);
                }
            }, index * 30); // 30ms delay creates a smooth wave effect
        });
    }
    
    /**
     * Apply element-specific quantum adjustments based on element type
     * @param {HTMLElement} element - The service element to adjust
     */
    function applyElementSpecificQuantumAdjustments(element) {
        // Get computed styles for precise quantum calculations
        const computedStyle = window.getComputedStyle(element);
        
        // Handle images and icons in RTL context
        if (element.tagName === 'IMG' || element.classList.contains('service-icon') || element.querySelector('svg')) {
            applyQuantumImageAdjustments(element, computedStyle);
        }
        
        // Handle service cards and containers with background images
        if (element.classList.contains('service-card') || element.classList.contains('feature-card')) {
            applyQuantumCardAdjustments(element, computedStyle);
        }
        
        // Handle text containers with Hebrew content
        if (containsHebrewText(element) && element.tagName.match(/^(P|H[1-6]|DIV|SPAN)$/)) {
            applyQuantumHebrewTextAdjustments(element, computedStyle);
        }
        
        // Handle layout containers
        if (element.classList.contains('service-container') || element.classList.contains('service-row')) {
            applyQuantumLayoutAdjustments(element, computedStyle);
        }
    }
    
    /**
     * Apply quantum-level adjustments to images and icons in RTL context
     * @param {HTMLElement} element - The image or icon element
     * @param {CSSStyleDeclaration} computedStyle - Computed styles of the element
     */
    function applyQuantumImageAdjustments(element, computedStyle) {
        // Check if the image has a float or position that needs adjustment
        if (computedStyle.float === 'left') {
            element.style.float = 'right';
        }
        
        // For images inside RTL text containers, ensure proper spacing
        if (element.parentElement && element.parentElement.getAttribute('dir') === 'rtl') {
            if (parseInt(computedStyle.marginLeft) > 0) {
                element.style.marginRight = computedStyle.marginLeft;
                element.style.marginLeft = '0';
            }
        }
        
        // Add a special marker for image quantum state
        element.setAttribute('data-quantum-image', 'true');
    }
    
    /**
     * Apply quantum-level adjustments to service cards
     * @param {HTMLElement} element - The service card element
     * @param {CSSStyleDeclaration} computedStyle - Computed styles of the element
     */
    function applyQuantumCardAdjustments(element, computedStyle) {
        // Adjust border radius for RTL (swap left/right)
        if (computedStyle.borderRadius !== '0px' && computedStyle.borderRadius !== '0') {
            const borderRadius = computedStyle.borderRadius;
            const rtlBorderRadius = swapBorderRadiusForRTL(borderRadius);
            element.style.borderRadius = rtlBorderRadius;
        }
        
        // Adjust box shadow for RTL direction
        if (computedStyle.boxShadow !== 'none') {
            const boxShadow = computedStyle.boxShadow;
            const rtlBoxShadow = swapBoxShadowForRTL(boxShadow);
            element.style.boxShadow = rtlBoxShadow;
        }
        
        // Add a special marker for card quantum state
        element.setAttribute('data-quantum-card', 'true');
    }
    
    /**
     * Apply quantum-level adjustments to Hebrew text elements
     * @param {HTMLElement} element - The text element
     * @param {CSSStyleDeclaration} computedStyle - Computed styles of the element
     */
    function applyQuantumHebrewTextAdjustments(element, computedStyle) {
        // Optimize font settings for Hebrew
        element.style.fontFamily = 'Rubik, Arial Hebrew, sans-serif';
        element.style.lineHeight = '1.6';
        element.style.textAlign = 'right';
        
        // Add font feature settings for better Hebrew rendering
        element.style.fontFeatureSettings = '"kern" 1, "liga" 1, "calt" 1, "mark" 1';
        element.style.fontVariantNumeric = 'lining-nums';
        
        // Add a special marker for Hebrew text quantum state
        element.setAttribute('data-quantum-hebrew', 'true');
    }
    
    /**
     * Apply quantum-level adjustments to layout containers
     * @param {HTMLElement} element - The layout container element
     * @param {CSSStyleDeclaration} computedStyle - Computed styles of the element
     */
    function applyQuantumLayoutAdjustments(element, computedStyle) {
        // Check if the element uses flexbox
        if (computedStyle.display === 'flex') {
            // If flex-direction is row, change to row-reverse
            if (computedStyle.flexDirection === 'row') {
                element.style.flexDirection = 'row-reverse';
            }
            
            // Adjust justify-content for RTL
            if (computedStyle.justifyContent === 'flex-start') {
                element.style.justifyContent = 'flex-end';
            } else if (computedStyle.justifyContent === 'flex-end') {
                element.style.justifyContent = 'flex-start';
            }
        }
        
        // Check if the element uses grid
        if (computedStyle.display === 'grid') {
            // Adjust grid-auto-flow for RTL
            if (computedStyle.gridAutoFlow === 'row') {
                element.style.gridAutoFlow = 'row dense';
            }
        }
        
        // Add a special marker for layout quantum state
        element.setAttribute('data-quantum-layout', 'true');
    }
    
    /**
     * Create quantum entanglement between related service elements
     * Ensures that related elements maintain coherence in their RTL transformations
     */
    function createQuantumEntanglementBetweenServices() {
        // Group service elements by their category or parent container
        const serviceGroups = new Map();
        
        // Find all service containers
        const serviceContainers = document.querySelectorAll('.service-container, [class*="service-container"]');
        
        serviceContainers.forEach((container, groupIndex) => {
            // Get all service elements within this container
            const containerServices = container.querySelectorAll('[data-quantum-service="true"]');
            
            if (containerServices.length > 0) {
                // Assign a group ID
                const groupId = `quantum-group-${groupIndex}`;
                serviceGroups.set(groupId, Array.from(containerServices));
                
                // Mark elements with their quantum group
                containerServices.forEach(element => {
                    element.setAttribute('data-quantum-group', groupId);
                });
            }
        });
        
        // Store the quantum groups globally for monitoring
        window.serviceQuantumGroups = serviceGroups;
        
        console.log(`🔗 Created ${serviceGroups.size} quantum entanglement groups for service elements`);
    }
    
    /**
     * Setup quantum-level monitoring for service elements
     * Uses advanced mutation observers to track changes in the DOM
     */
    function setupQuantumServiceMonitoring() {
        try {
            // Create a high-precision quantum mutation observer
            const quantumObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        // Process added nodes
                        mutation.addedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                processNewQuantumElement(node);
                            }
                        });
                    } else if (mutation.type === 'attributes') {
                        // Process attribute changes on quantum elements
                        if (mutation.target.hasAttribute('data-quantum-service')) {
                            processQuantumElementAttributeChange(mutation.target, mutation.attributeName);
                        }
                    }
                });
            });
            
            // Configure the observer to watch for changes across the entire document
            quantumObserver.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class', 'style', 'dir', 'lang']
            });
            
            // Store the observer for later reference
            window.servicesQuantumObserver = quantumObserver;
            
            // Setup periodic quantum state checks
            setupQuantumStateChecks();
            
        } catch (error) {
            console.error('❌ Failed to setup quantum service monitoring:', error);
        }
    }
    
    /**
     * Process a newly added element at the quantum level
     * @param {HTMLElement} element - The newly added element
     */
    function processNewQuantumElement(element) {
        // Check if this is a service-related element
        if (isServiceElement(element)) {
            // Apply quantum RTL transformation
            applyQuantumTransformation(element);
        }
        
        // Check all children of the added node
        const childElements = element.querySelectorAll('*');
        childElements.forEach(child => {
            if (isServiceElement(child)) {
                applyQuantumTransformation(child);
            }
        });
    }
    
    /**
     * Process attribute changes on quantum elements
     * @param {HTMLElement} element - The element with changed attributes
     * @param {string} attributeName - The name of the changed attribute
     */
    function processQuantumElementAttributeChange(element, attributeName) {
        // If the language or direction attributes change, reapply quantum transformations
        if (attributeName === 'lang' || attributeName === 'dir') {
            applyQuantumTransformation(element);
            
            // Check if the element contains Hebrew text
            if (attributeName === 'lang' && element.getAttribute('lang') === 'he') {
                element.setAttribute('data-hebrew-content', 'true');
                element.classList.add('hebrew-optimized');
            }
        }
        
        // If the class attribute changes, check if it's now a service element
        if (attributeName === 'class' && !element.hasAttribute('data-quantum-service') && isServiceElement(element)) {
            applyQuantumTransformation(element);
        }
    }
    
    /**
     * Setup periodic quantum state checks
     * Ensures that quantum coherence is maintained across service elements
     */
    function setupQuantumStateChecks() {
        // Schedule periodic quantum state checks
        window.servicesQuantumStateInterval = setInterval(() => {
            try {
                checkQuantumCoherence();
                checkHebrewOptimization();
                checkQuantumPerformance();
            } catch (error) {
                console.error('❌ Quantum state check failed:', error);
            }
        }, 5000); // Check every 5 seconds
        
        // Log that quantum state monitoring is active
        console.log('📊 Quantum service state monitoring activated');
    }
    
    /**
     * Check quantum coherence across service elements
     * Ensures that related elements maintain consistent RTL transformations
     */
    function checkQuantumCoherence() {
        // For each quantum group, check that all elements are in a coherent state
        if (window.serviceQuantumGroups) {
            window.serviceQuantumGroups.forEach((elements, groupId) => {
                let isCoherent = true;
                
                // Check if all elements in the group have the same quantum state
                elements.forEach(element => {
                    if (!element.hasAttribute('data-quantum-rtl') || 
                        element.getAttribute('data-quantum-group') !== groupId) {
                        isCoherent = false;
                    }
                });
                
                // If the group is not coherent, reapply transformations
                if (!isCoherent) {
                    console.log(`🔄 Restoring quantum coherence for group ${groupId}`);
                    elements.forEach(element => applyQuantumTransformation(element));
                }
            });
        }
    }
    
    /**
     * Check Hebrew text optimization
     * Ensures that elements with Hebrew text are properly optimized
     */
    function checkHebrewOptimization() {
        // Find all elements with Hebrew text that aren't properly optimized
        const hebrewElements = document.querySelectorAll(':lang(he), [data-hebrew-content="true"]');
        
        hebrewElements.forEach(element => {
            if (!element.classList.contains('hebrew-optimized')) {
                applyQuantumHebrewTextAdjustments(element, window.getComputedStyle(element));
            }
        });
    }
    
    /**
     * Check quantum performance metrics
     * Monitors the performance of quantum transformations
     */
    function checkQuantumPerformance() {
        // Count the number of transformed service elements
        const transformedElements = document.querySelectorAll('[data-quantum-service="true"]').length;
        const hebrewOptimizedElements = document.querySelectorAll('.hebrew-optimized').length;
        
        // Store performance metrics
        window.servicesQuantumPerformance = {
            timestamp: Date.now(),
            transformedElements: transformedElements,
            hebrewOptimizedElements: hebrewOptimizedElements,
            quantumGroups: window.serviceQuantumGroups ? window.serviceQuantumGroups.size : 0
        };
        
        // Log performance metrics in debug mode
        if (window.servicesQuantumRTL && window.servicesQuantumRTL.config && window.servicesQuantumRTL.config.debug) {
            console.log('⚡ Quantum performance metrics:', window.servicesQuantumPerformance);
        }
    }
    
    /**
     * Apply quantum-level Hebrew text optimizations
     * Enhances Hebrew text rendering across the entire services page
     */
    function applyQuantumHebrewOptimizations() {
        // Create a Hebrew optimization style sheet
        const hebrewOptimization = document.createElement('style');
        hebrewOptimization.id = 'hebrew-quantum-optimization';
        hebrewOptimization.textContent = `
            /* Quantum Hebrew text optimization */
            :lang(he), [data-hebrew-content="true"], .hebrew-optimized {
                --hebrew-font-stack: 'Rubik', 'Arial Hebrew', 'David', 'Miriam Libre', sans-serif;
                font-family: var(--hebrew-font-stack);
                font-smooth: antialiased;
                text-rendering: optimizeLegibility;
                direction: rtl;
                unicode-bidi: embed;
            }
            
            /* Quantum Hebrew typography adjustments */
            :lang(he) p, [data-hebrew-content="true"] p,
            :lang(he) div, [data-hebrew-content="true"] div,
            :lang(he) span, [data-hebrew-content="true"] span {
                line-height: 1.6;
                letter-spacing: normal;
                word-spacing: normal;
            }
            
            /* Quantum Hebrew heading optimization */
            :lang(he) h1, :lang(he) h2, :lang(he) h3, 
            :lang(he) h4, :lang(he) h5, :lang(he) h6,
            [data-hebrew-content="true"] h1, [data-hebrew-content="true"] h2, [data-hebrew-content="true"] h3,
            [data-hebrew-content="true"] h4, [data-hebrew-content="true"] h5, [data-hebrew-content="true"] h6 {
                font-weight: 600;
                letter-spacing: -0.02em;
                line-height: 1.3;
            }
            
            /* Quantum Hebrew list optimization */
            :lang(he) ul, :lang(he) ol,
            [data-hebrew-content="true"] ul, [data-hebrew-content="true"] ol {
                list-style-position: inside;
                padding-right: 0.5em;
                padding-left: 0;
            }
            
            /* Quantum Hebrew link optimization */
            :lang(he) a, [data-hebrew-content="true"] a {
                text-decoration: none;
                transition: all 0.3s ease;
            }
            
            /* Quantum Hebrew form element optimization */
            :lang(he) input, :lang(he) textarea, :lang(he) select,
            [data-hebrew-content="true"] input, [data-hebrew-content="true"] textarea, [data-hebrew-content="true"] select {
                text-align: right;
                direction: rtl;
            }
        `;
        
        document.head.appendChild(hebrewOptimization);
        
        // Apply Hebrew optimization to all elements containing Hebrew text
        document.querySelectorAll('*').forEach(element => {
            if (containsHebrewText(element) && !element.hasAttribute('data-hebrew-content')) {
                element.setAttribute('data-hebrew-content', 'true');
                element.classList.add('hebrew-optimized');
            }
        });
        
        console.log('📜 Applied quantum Hebrew text optimizations');
    }
    
    /**
     * Initialize emergency quantum field when core systems are unavailable
     * Provides basic quantum-level RTL functionality as a fallback
     */
    function initializeEmergencyQuantumField() {
        // Create a basic quantum RTL transformer
        window.emergencyQuantumRTL = {
            transformElement: function(element) {
                if (!element || element.hasAttribute('data-emergency-quantum')) {
                    return;
                }
                
                element.setAttribute('data-emergency-quantum', 'true');
                element.setAttribute('dir', 'rtl');
                
                // Apply basic RTL styles
                const computedStyle = window.getComputedStyle(element);
                
                // Swap margins
                if (computedStyle.marginLeft !== '0px' && computedStyle.marginLeft !== 'auto') {
                    element.style.marginRight = computedStyle.marginLeft;
                    element.style.marginLeft = '0px';
                }
                
                // Swap padding
                if (computedStyle.paddingLeft !== '0px') {
                    element.style.paddingRight = computedStyle.paddingLeft;
                    element.style.paddingLeft = '0px';
                }
                
                // Set text alignment
                if (computedStyle.textAlign === 'left') {
                    element.style.textAlign = 'right';
                }
                
                // Swap float
                if (computedStyle.float === 'left') {
                    element.style.float = 'right';
                } else if (computedStyle.float === 'right') {
                    element.style.float = 'left';
                }
            },
            
            transformAll: function() {
                const serviceElements = document.querySelectorAll(
                    '.service-card, [class*="service-card"], .service-container, .service-row, ' +
                    '.service-title, .service-description, .service-features, .service-icon, ' +
                    '.service-highlight, .service-benefits, .feature-card, .feature-grid, ' +
                    '.pricing-table, .service-navigation, .service-tabs, .service-filters'
                );
                
                serviceElements.forEach(element => {
                    this.transformElement(element);
                });
            }
        };
        
        // Apply emergency quantum transformations
        window.emergencyQuantumRTL.transformAll();
        
        // Create an emergency quantum style sheet
        const emergencyStyle = document.createElement('style');
        emergencyStyle.id = 'emergency-quantum-style';
        emergencyStyle.textContent = `
            [data-emergency-quantum="true"] {
                direction: rtl !important;
                text-align: right !important;
            }
            
            [data-emergency-quantum="true"] .service-features ul,
            [data-emergency-quantum="true"] .service-features ol {
                list-style-position: inside;
                padding-right: 0;
                padding-left: 0;
            }
        `;
        
        document.head.appendChild(emergencyStyle);
        
        console.log('⚠️ Emergency quantum RTL field activated');
    }
    
    /**
     * Apply basic RTL transformations as a final fallback
     */
    function applyBasicRTLTransformations() {
        // Create a basic RTL style sheet
        const basicRTLStyle = document.createElement('style');
        basicRTLStyle.id = 'basic-rtl-fallback';
        basicRTLStyle.textContent = `
            /* Basic RTL fallback styles */
            .service-card, [class*="service-card"],
            .service-container, .service-row,
            .service-title, .service-description,
            .service-features, .service-icon,
            .service-highlight, .service-benefits,
            .feature-card, .feature-grid,
            .pricing-table, .service-navigation,
            .service-tabs, .service-filters {
                direction: rtl !important;
                text-align: right !important;
            }
            
            .service-features ul, .service-features ol {
                list-style-position: inside !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }
        `;
        
        document.head.appendChild(basicRTLStyle);
        
        console.log('🛡️ Basic RTL fallback activated');
    }
    
    /**
     * Helper function to check if an element contains Hebrew text
     * @param {HTMLElement} element - The element to check
     * @returns {boolean} True if Hebrew text is detected
     */
    function containsHebrewText(element) {
        if (!element || !element.textContent) {
            return false;
        }
        
        // Regular expression to detect Hebrew characters
        const hebrewRegex = /[\u0590-\u05FF]/;
        return hebrewRegex.test(element.textContent);
    }
    
    /**
     * Helper function to check if an element is related to services content
     * @param {HTMLElement} element - The element to check
     * @returns {boolean} True if the element is service-related
     */
    function isServiceElement(element) {
        const serviceKeywords = ['service', 'feature', 'pricing'];
        
        // Check if the element has any service-related classes or ID
        if (element.className) {
            for (const keyword of serviceKeywords) {
                if (element.className.toLowerCase().includes(keyword)) {
                    return true;
                }
            }
        }
        
        if (element.id && element.id.toLowerCase()) {
            for (const keyword of serviceKeywords) {
                if (element.id.toLowerCase().includes(keyword)) {
                    return true;
                }
            }
        }
        
        // Check if the element is a child of a service container
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
            if (parent.className && serviceKeywords.some(keyword => 
                parent.className.toLowerCase().includes(keyword))) {
                return true;
            }
            parent = parent.parentElement;
        }
        
        return false;
    }
    
    /**
     * Helper function to apply quantum transformation to an element
     * @param {HTMLElement} element - The element to transform
     */
    function applyQuantumTransformation(element) {
        // Skip if already transformed
        if (element.hasAttribute('data-quantum-rtl')) {
            return;
        }
        
        // Apply quantum RTL attributes
        element.setAttribute('data-quantum-rtl', 'true');
        element.setAttribute('data-quantum-service', 'true');
        element.setAttribute('data-quantum-timestamp', Date.now());
        
        // Add Hebrew text detection
        if (containsHebrewText(element)) {
            element.setAttribute('data-hebrew-content', 'true');
            element.classList.add('hebrew-optimized');
        }
        
        // Apply element-specific adjustments
        applyElementSpecificQuantumAdjustments(element);
    }
    
    /**
     * Helper function to swap border radius for RTL
     * @param {string} borderRadius - The original border radius value
     * @returns {string} The RTL-adjusted border radius value
     */
    function swapBorderRadiusForRTL(borderRadius) {
        return borderRadius
            .replace(/border-top-left-radius/g, 'border-top-right-radius')
            .replace(/border-top-right-radius/g, 'border-top-left-radius')
            .replace(/border-bottom-left-radius/g, 'border-bottom-right-radius')
            .replace(/border-bottom-right-radius/g, 'border-bottom-left-radius');
    }
    
    /**
     * Helper function to swap box shadow for RTL
     * @param {string} boxShadow - The original box shadow value
     * @returns {string} The RTL-adjusted box shadow value
     */
    function swapBoxShadowForRTL(boxShadow) {
        // This is a simplified implementation - in a real quantum system, we would analyze
        // the shadow properties more deeply to determine the correct RTL adjustment
        return boxShadow.replace(/(\d+)px\s+(\d+)px/g, (match, x, y) => {
            // Swap the horizontal component of the shadow
            return `-${x}px ${y}px`;
        });
    }
    
    // Expose a public API for debugging and control
    window.servicesQuantumRTLControls = {
        // Reinitialize quantum RTL
        reinitialize: function() {
            console.log('🔄 Reinitializing enhanced quantum RTL for services page...');
            
            // Clean up existing quantum fields
            const existingFields = [
                'services-quantum-field', 
                'hebrew-quantum-optimization',
                'emergency-quantum-style',
                'basic-rtl-fallback'
            ];
            
            existingFields.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.remove();
                }
            });
            
            // Clear existing intervals
            if (window.servicesQuantumStateInterval) {
                clearInterval(window.servicesQuantumStateInterval);
            }
            
            // Reinitialize
            initEnhancedQuantumRTL();
        },
        
        // Get quantum state statistics
        getQuantumStats: function() {
            const stats = {
                timestamp: new Date().toISOString(),
                transformedElements: document.querySelectorAll('[data-quantum-rtl="true"]').length,
                serviceElements: document.querySelectorAll('[data-quantum-service="true"]').length,
                hebrewElements: document.querySelectorAll('[data-hebrew-content="true"]').length,
                hebrewOptimized: document.querySelectorAll('.hebrew-optimized').length,
                quantumGroups: window.serviceQuantumGroups ? window.serviceQuantumGroups.size : 0,
                hasCoreSystem: typeof window.quantumRTL !== 'undefined',
                hasEmergencySystem: typeof window.emergencyQuantumRTL !== 'undefined'
            };
            
            console.table('📊 Quantum RTL Statistics', stats);
            return stats;
        },
        
        // Check quantum coherence for a specific element or group
        checkCoherence: function(selector = '*') {
            const elements = document.querySelectorAll(selector);
            let coherentCount = 0;
            let incoherentCount = 0;
            
            elements.forEach(element => {
                if (element.hasAttribute('data-quantum-rtl')) {
                    coherentCount++;
                } else {
                    incoherentCount++;
                    // Mark incoherent elements for debugging
                    element.setAttribute('data-quantum-incoherent', 'true');
                }
            });
            
            console.log(`🔍 Coherence check for "${selector}": ${coherentCount} coherent, ${incoherentCount} incoherent elements`);
            
            return {
                coherent: coherentCount,
                incoherent: incoherentCount,
                total: elements.length
            };
        },
        
        // Apply quantum transformation to specific elements
        applyTransformation: function(selector) {
            const elements = document.querySelectorAll(selector);
            
            elements.forEach(element => {
                applyQuantumTransformation(element);
            });
            
            console.log(`✨ Applied quantum transformation to ${elements.length} elements matching "${selector}"`);
        },
        
        // Toggle debug mode
        toggleDebug: function() {
            window.servicesQuantumRTLDebug = !window.servicesQuantumRTLDebug;
            
            if (window.servicesQuantumRTLDebug) {
                console.log('🔧 Quantum RTL debug mode enabled');
                // Add debug styles
                const debugStyle = document.createElement('style');
                debugStyle.id = 'quantum-rtl-debug';
                debugStyle.textContent = `
                    [data-quantum-rtl="true"] { outline: 1px solid rgba(66, 153, 225, 0.3); }
                    [data-quantum-service="true"] { outline: 1px solid rgba(76, 175, 80, 0.3); }
                    [data-hebrew-content="true"] { background-color: rgba(255, 193, 7, 0.1); }
                    [data-quantum-incoherent="true"] { background-color: rgba(244, 67, 54, 0.1); }
                `;
                document.head.appendChild(debugStyle);
            } else {
                console.log('🔧 Quantum RTL debug mode disabled');
                // Remove debug styles
                const debugStyle = document.getElementById('quantum-rtl-debug');
                if (debugStyle) {
                    debugStyle.remove();
                }
                // Remove debug markers
                document.querySelectorAll('[data-quantum-incoherent="true"]').forEach(el => {
                    el.removeAttribute('data-quantum-incoherent');
                });
            }
            
            return window.servicesQuantumRTLDebug;
        },
        
        // Clean up quantum RTL system
        cleanup: function() {
            console.log('🧹 Cleaning up quantum RTL system...');
            
            // Clear intervals
            if (window.servicesQuantumStateInterval) {
                clearInterval(window.servicesQuantumStateInterval);
            }
            
            // Disconnect observers
            if (window.servicesQuantumObserver) {
                window.servicesQuantumObserver.disconnect();
            }
            
            // Remove quantum fields
            const fields = ['services-quantum-field', 'hebrew-quantum-optimization'];
            fields.forEach(id => {
                const field = document.getElementById(id);
                if (field) {
                    field.remove();
                }
            });
            
            console.log('🧹 Quantum RTL cleanup complete');
        }
    };
    
    // Add keyboard shortcut for quantum RTL testing (Ctrl+Shift+Q)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'q') {
            e.preventDefault();
            
            const stats = window.servicesQuantumRTLControls.getQuantumStats();
            const coherence = window.servicesQuantumRTLControls.checkCoherence('[data-quantum-service="true"]');
            
            console.log('🚀 Quantum RTL Quick Test Results:');
            console.log(`  - Transformed elements: ${stats.transformedElements}`);
            console.log(`  - Service elements: ${stats.serviceElements}`);
            console.log(`  - Hebrew elements: ${stats.hebrewElements}`);
            console.log(`  - Coherence: ${Math.round((coherence.coherent / coherence.total) * 100)}%`);
            
            alert(`Quantum RTL Test Results:\n\nTransformed Elements: ${stats.transformedElements}\nService Elements: ${stats.serviceElements}\nHebrew Elements: ${stats.hebrewElements}\nCoherence: ${Math.round((coherence.coherent / coherence.total) * 100)}%`);
        }
    });
})();