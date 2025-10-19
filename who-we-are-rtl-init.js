/**
 * Quantum RTL Initialization for who-we-are.html
 * This script customizes quantum-level RTL transformations specifically for the About page
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 Initializing quantum-level RTL for who-we-are.html');
        
        // Enhance the existing quantumRTL instance with page-specific configurations
        if (window.quantumRTL) {
            console.log('🔍 Quantum RTL instance detected');
            
            // Create a custom configuration specifically for who-we-are.html
            const pageConfig = {
                quantum: {
                    intensity: 75, // Slightly higher intensity for better text readability
                    speed: 'medium',
                    coherence: true,
                    entanglement: true,
                    measurement: 'realtime'
                },
                selectors: {
                    // Add page-specific selectors
                    custom: [
                        '.Header_navLinkItem__l2xbK',
                        '.Header_contentLeft__LvrzL',
                        '.Header_contentRight__yfhGM',
                        '.Header_contentRightBodyTop__CDkVP'
                    ]
                },
                animation: {
                    enabled: true,
                    duration: 400, // Slightly longer duration for smoother transitions
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }
            };
            
            // Apply page-specific transformations
            applyPageSpecificTransformations();
            
            // Set up quantum state monitoring
            setupQuantumMonitoring();
            
            console.log('✅ Quantum-level RTL initialized for who-we-are.html');
        } else {
            console.warn('⚠️ Quantum RTL instance not found. Creating a new instance...');
            
            // Create a new QuantumRTLTransformer instance if one doesn't exist
            if (window.QuantumRTLTransformer) {
                window.quantumRTL = new QuantumRTLTransformer({
                    debug: true,
                    quantumLevel: 'element',
                    autoInit: true,
                    intensity: 75,
                    hebrew: {
                        autoDetect: true
                    }
                });
                
                console.log('✅ New Quantum RTL instance created for who-we-are.html');
                applyPageSpecificTransformations();
                setupQuantumMonitoring();
            } else {
                console.error('❌ QuantumRTLTransformer class not available');
            }
        }
    });
    
    /**
     * Apply page-specific quantum transformations
     * Targets specific elements that need special attention
     */
    function applyPageSpecificTransformations() {
        console.log('🎯 Applying page-specific quantum transformations');
        
        // Target header navigation elements
        const navElements = document.querySelectorAll('.Header_navLinkItem__l2xbK, .Header_contentLeft__LvrzL, .Header_contentRight__yfhGM');
        navElements.forEach((el, index) => {
            // Add quantum RTL attributes with slight delay for staggered animation
            setTimeout(() => {
                el.setAttribute('data-quantum-rtl', 'true');
                el.setAttribute('data-quantum-id', `nav-${index}`);
                
                // Apply additional Hebrew optimization
                if (hasHebrewText(el)) {
                    el.setAttribute('data-hebrew-optimized', 'true');
                }
            }, index * 50); // Staggered delay for smooth animation
        });
        
        // Enhance quantum state for content sections
        enhanceContentSections();
        
        // Optimize interactive elements for RTL
        optimizeInteractiveElements();
    }
    
    /**
     * Enhance content sections with quantum-level RTL
     */
    function enhanceContentSections() {
        const contentSections = document.querySelectorAll('section');
        contentSections.forEach((section, index) => {
            // Add quantum RTL attributes with section-specific configuration
            section.setAttribute('data-quantum-section', index);
            section.setAttribute('data-quantum-optimized', 'true');
        });
    }
    
    /**
     * Optimize interactive elements for RTL
     */
    function optimizeInteractiveElements() {
        const interactiveElements = document.querySelectorAll('a, button, .showreel-btn');
        interactiveElements.forEach(el => {
            // Add RTL-optimized hover states
            if (el.classList.contains('showreel-btn')) {
                el.setAttribute('data-rtl-hover', 'optimized');
            }
        });
    }
    
    /**
     * Set up quantum state monitoring
     */
    function setupQuantumMonitoring() {
        console.log('👁️ Setting up quantum state monitoring');
        
        // Create a mutation observer to monitor dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && node.tagName) { // Element node
                            // Apply quantum RTL to newly added elements
                            setTimeout(() => {
                                if (window.quantumRTL && window.quantumRTL.transformElement) {
                                    window.quantumRTL.transformElement(node, `dynamic-${Date.now()}`);
                                }
                            }, 100);
                        }
                    });
                }
            });
        });
        
        // Observe the entire document for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Expose monitoring controls globally
        window.quantumPageControls = {
            refresh: () => applyPageSpecificTransformations(),
            getStatus: () => ({
                elementsTransformed: document.querySelectorAll('[data-quantum-rtl="true"]').length,
                hebrewElements: document.querySelectorAll('[data-hebrew-optimized="true"]').length
            }),
            toggleMonitoring: () => {
                if (observer) {
                    if (observer._isActive) {
                        observer.disconnect();
                        observer._isActive = false;
                    } else {
                        observer.observe(document.body, { childList: true, subtree: true });
                        observer._isActive = true;
                    }
                    return observer._isActive;
                }
                return false;
            }
        };
    }
    
    /**
     * Helper function to detect Hebrew text in an element
     */
    function hasHebrewText(element) {
        if (!element || !element.textContent) return false;
        // Basic Hebrew character detection regex
        const hebrewRegex = /[\u0590-\u05FF]/;
        return hebrewRegex.test(element.textContent);
    }
})();