/**
 * Quantum RTL Implementation for Nivaro UX Design Glossary Guide Page
 * This script applies advanced quantum-level RTL transformations specifically optimized for glossary content.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quantum RTL for UX Design Glossary: Initializing advanced Hebrew optimization...');
    
    // Quantum Glossary RTL Configuration
    const quantumGlossaryConfig = {
        intensity: 85,               // Higher intensity for detailed glossary content
        speed: 'medium',             // Smooth animations for list items
        coherence: true,             // Enable quantum coherence for text elements
        entanglement: true,          // Enable quantum entanglement between related elements
        hebrewLanguage: {
            autoDetect: true,        // Automatically detect Hebrew text
            languageCode: 'he',      // Set Hebrew language code
            fontStack: '"Open Sans Hebrew", "Noto Sans Hebrew", Arial, sans-serif' // Optimized font stack
        },
        elementSelectors: {
            default: '[data-quantum-rtl], .quantum-rtl',
            interactive: 'button, a, input, select, textarea',
            layout: '.blog-layout, .prose, .article-content',
            text: 'h1, h2, h3, h4, h5, h6, p, li, blockquote',
            media: 'img, video, figure',
            glossarySpecific: {
                article: '.prose',
                title: '.text-\[3vw\]',
                searchInput: '[aria-label="search by term"]',
                termCards: '.styles_card__iiC1w',
                termTitle: '.styles_cardMain__jy_X1 h2',
                termDescription: '.styles_cardMain__jy_X1 p',
                navigation: '.Header_navLinkItem__l2xbK',
                glossaryGrid: '.grid.grid-cols-4',
                readMoreLinks: '.styles_readMore__jYGPP'
            }
        },
        // Animation settings optimized for glossary reading experience
        animation: {
            duration: 650,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            staggerDelay: 35,         // Subtle stagger for glossary items
            properties: ['transform', 'opacity', 'padding', 'margin']
        },
        // Performance optimization for content-heavy page
        performance: {
            throttleDelay: 150,
            debounceDelay: 250,
            batchSize: 20,
            caching: true
        },
        // Responsive design breakpoints
        responsive: {
            breakpoints: {
                mobile: 360,
                tablet: 768,
                desktop: 1200
            },
            intensities: {
                mobile: 80,
                tablet: 85,
                desktop: 90
            }
        },
        // Advanced quantum features
        quantumFeatures: {
            fieldEffects: {
                enabled: true,
                radius: 30,
                intensity: 0.3
            },
            multiDimensional: {
                enabled: true,
                dimensionCount: 2,
                parallelUniverses: 1
            }
        }
    };
    
    // Initialize QuantumRTLTransformer for glossary content
    const glossaryQuantumTransformer = new window.QuantumRTLTransformer(quantumGlossaryConfig);
    
    // Apply RTL transformations to glossary-specific elements
    const applyGlossarySpecificTransformations = () => {
        console.log('Quantum RTL for UX Design Glossary: Applying page-specific transformations...');
        
        // Transform article container
        const articleContainer = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.article);
        if (articleContainer) {
            glossaryQuantumTransformer.applyElementTransformation(articleContainer, {
                transformType: 'layout',
                priority: 'high',
                additionalProperties: {
                    textAlign: 'right',
                    lineHeight: '1.8',  // Optimized for Hebrew reading of detailed content
                    letterSpacing: '0.02em' // Improved readability
                }
            });
        }
        
        // Transform page title with special animation
        const pageTitle = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.title);
        if (pageTitle) {
            glossaryQuantumTransformer.applyElementTransformation(pageTitle, {
                transformType: 'text',
                priority: 'highest',
                additionalProperties: {
                    textAlign: 'right',
                    fontWeight: '700'
                },
                animation: {
                    duration: 1200,
                    specialEffect: 'quantumEntanglement' // Special effect for title
                }
            });
        }
        
        // Transform glossary search input
        const searchInput = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.searchInput);
        if (searchInput) {
            glossaryQuantumTransformer.applyElementTransformation(searchInput, {
                transformType: 'interactive',
                priority: 'high',
                additionalProperties: {
                    textAlign: 'right',
                    direction: 'rtl'
                }
            });
        }
        
        // Transform glossary grid layout
        const glossaryGrid = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.glossaryGrid);
        if (glossaryGrid) {
            glossaryQuantumTransformer.applyElementTransformation(glossaryGrid, {
                transformType: 'layout',
                priority: 'medium',
                additionalProperties: {
                    direction: 'rtl'
                }
            });
        }
        
        // Transform glossary term cards with staggered animation
        const termCards = document.querySelectorAll(quantumGlossaryConfig.elementSelectors.glossarySpecific.termCards);
        
        termCards.forEach((card, index) => {
            // Apply staggered animation for term cards
            setTimeout(() => {
                glossaryQuantumTransformer.applyElementTransformation(card, {
                    transformType: 'layout',
                    priority: 'medium',
                    additionalProperties: {
                        direction: 'rtl'
                    }
                });
                
                // Transform term title inside each card
                const termTitle = card.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.termTitle);
                if (termTitle) {
                    glossaryQuantumTransformer.applyElementTransformation(termTitle, {
                        transformType: 'text',
                        priority: 'medium',
                        additionalProperties: {
                            textAlign: 'right',
                            fontWeight: '600'
                        }
                    });
                }
                
                // Transform term description inside each card
                const termDescription = card.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.termDescription);
                if (termDescription) {
                    glossaryQuantumTransformer.applyElementTransformation(termDescription, {
                        transformType: 'text',
                        priority: 'medium',
                        additionalProperties: {
                            textAlign: 'right',
                            direction: 'rtl'
                        }
                    });
                }
                
                // Transform read more links
                const readMoreLink = card.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.readMoreLinks);
                if (readMoreLink) {
                    glossaryQuantumTransformer.applyElementTransformation(readMoreLink, {
                        transformType: 'interactive',
                        priority: 'medium',
                        additionalProperties: {
                            textAlign: 'right'
                        }
                    });
                }
            }, index * quantumGlossaryConfig.animation.staggerDelay);
        });
        
        // Transform content text elements
        const textElements = document.querySelectorAll(
            `${quantumGlossaryConfig.elementSelectors.text}, ${quantumGlossaryConfig.elementSelectors.glossarySpecific.article} ${quantumGlossaryConfig.elementSelectors.text}`
        );
        
        textElements.forEach((element, index) => {
            // Apply staggered animation for text blocks
            setTimeout(() => {
                glossaryQuantumTransformer.applyElementTransformation(element, {
                    transformType: 'text',
                    priority: 'medium',
                    additionalProperties: {
                        textAlign: 'right',
                        direction: 'rtl'
                    }
                });
            }, index * quantumGlossaryConfig.animation.staggerDelay);
        });
    };
    
    // Set up quantum monitoring for dynamically loaded content
    const setupGlossaryQuantumMonitoring = () => {
        console.log('Quantum RTL for UX Design Glossary: Setting up quantum monitoring...');
        
        // Create mutation observer to detect dynamically loaded content
        const glossaryContentObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    // Process newly added nodes for RTL
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            // Apply transformations to the new node and its children
                            glossaryQuantumTransformer.applyTransformationToElement(node);
                            
                            // Special handling for glossary-specific elements
                            if (node.matches(quantumGlossaryConfig.elementSelectors.glossarySpecific.termCards)) {
                                // Apply term card specific transformations
                                const termTitle = node.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.termTitle);
                                const termDescription = node.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.termDescription);
                                
                                if (termTitle) {
                                    glossaryQuantumTransformer.applyElementTransformation(termTitle, {
                                        transformType: 'text',
                                        priority: 'medium',
                                        additionalProperties: {
                                            textAlign: 'right',
                                            fontWeight: '600'
                                        }
                                    });
                                }
                                
                                if (termDescription) {
                                    glossaryQuantumTransformer.applyElementTransformation(termDescription, {
                                        transformType: 'text',
                                        priority: 'medium',
                                        additionalProperties: {
                                            textAlign: 'right',
                                            direction: 'rtl'
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            });
        });
        
        // Start observing the main content area
        const mainContent = document.querySelector('main');
        if (mainContent) {
            glossaryContentObserver.observe(mainContent, {
                childList: true,
                subtree: true
            });
        }
        
        // Observe glossary grid specifically
        const glossaryGrid = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.glossaryGrid);
        if (glossaryGrid) {
            glossaryContentObserver.observe(glossaryGrid, {
                childList: true,
                subtree: true
            });
        }
    };
    
    // Helper function to detect Hebrew text in elements
    const detectHebrewText = (element) => {
        const text = element.textContent || '';
        const hebrewChars = /[\u0590-\u05FF]/;
        return hebrewChars.test(text);
    };
    
    // Function to apply special Hebrew text optimizations
    const applyHebrewOptimizations = () => {
        if (!quantumGlossaryConfig.hebrewLanguage.autoDetect) return;
        
        console.log('Quantum RTL for UX Design Glossary: Applying Hebrew text optimizations...');
        
        const allTextElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
        
        allTextElements.forEach(element => {
            if (detectHebrewText(element)) {
                // Apply special font stack for Hebrew text
                element.style.fontFamily = quantumGlossaryConfig.hebrewLanguage.fontStack;
                
                // Add special class for Hebrew elements
                if (!element.classList.contains('hebrew-text')) {
                    element.classList.add('hebrew-text');
                }
                
                // Enable quantum coherence for Hebrew text
                if (quantumGlossaryConfig.coherence) {
                    element.setAttribute('data-quantum-coherence', 'enabled');
                }
            }
        });
        
        // Special optimization for glossary terms
        const termTitles = document.querySelectorAll(quantumGlossaryConfig.elementSelectors.glossarySpecific.termTitle);
        termTitles.forEach(title => {
            if (detectHebrewText(title)) {
                title.style.fontWeight = '700';
                title.style.letterSpacing = '0.03em';
            }
        });
    };
    
    // Function to handle responsive RTL adjustments
    const handleResponsiveRTL = () => {
        const viewportWidth = window.innerWidth;
        let currentIntensity = quantumGlossaryConfig.intensity;
        
        // Adjust intensity based on viewport width
        if (viewportWidth < quantumGlossaryConfig.responsive.breakpoints.mobile) {
            currentIntensity = quantumGlossaryConfig.responsive.intensities.mobile;
        } else if (viewportWidth < quantumGlossaryConfig.responsive.breakpoints.tablet) {
            currentIntensity = quantumGlossaryConfig.responsive.intensities.tablet;
        } else {
            currentIntensity = quantumGlossaryConfig.responsive.intensities.desktop;
        }
        
        // Update quantum transformer with new intensity
        glossaryQuantumTransformer.updateIntensity(currentIntensity);
        
        // Adjust grid layout for different screen sizes
        const glossaryGrid = document.querySelector(quantumGlossaryConfig.elementSelectors.glossarySpecific.glossaryGrid);
        if (glossaryGrid) {
            // Responsive adjustments for grid layout
            if (viewportWidth < quantumGlossaryConfig.responsive.breakpoints.tablet) {
                // On smaller screens, ensure proper spacing and alignment
                glossaryGrid.style.gap = '3vw';
            } else {
                glossaryGrid.style.gap = '2.5vw';
            }
        }
    };
    
    // Initialize and run all transformations
    const initializeGlossaryQuantumRTL = () => {
        console.log('Quantum RTL for UX Design Glossary: Initializing complete transformation sequence...');
        
        // First, apply basic quantum transformations
        glossaryQuantumTransformer.applyTransformations();
        
        // Then apply glossary-specific transformations
        applyGlossarySpecificTransformations();
        
        // Apply Hebrew text optimizations
        applyHebrewOptimizations();
        
        // Set up monitoring for dynamic content
        setupGlossaryQuantumMonitoring();
        
        // Handle initial responsive state
        handleResponsiveRTL();
        
        console.log('Quantum RTL for UX Design Glossary: Initialization complete. Quantum state stabilized.');
    };
    
    // Run the initialization
    initializeGlossaryQuantumRTL();
    
    // Add event listeners for responsive handling
    window.addEventListener('resize', () => {
        // Debounce resize events for performance
        clearTimeout(window.glossaryResizeTimeout);
        window.glossaryResizeTimeout = setTimeout(handleResponsiveRTL, quantumGlossaryConfig.performance.debounceDelay);
    });
    
    // Add event listener for scroll optimization
    window.addEventListener('scroll', () => {
        // Throttle scroll events for performance
        if (!window.lastScrollTime || (Date.now() - window.lastScrollTime) > quantumGlossaryConfig.performance.throttleDelay) {
            window.lastScrollTime = Date.now();
            
            // Apply quantum field effects based on scroll position
            if (quantumGlossaryConfig.quantumFeatures.fieldEffects.enabled) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const scrollProgress = Math.min(scrollPosition / (document.body.scrollHeight - windowHeight), 1);
                
                // Update quantum field effects based on scroll progress
                document.documentElement.style.setProperty('--quantum-field-intensity', (scrollProgress * quantumGlossaryConfig.quantumFeatures.fieldEffects.intensity).toString());
            }
        }
    });
    
    // Expose public API for external control
    window.glossaryRTLControls = {
        reinitialize: initializeGlossaryQuantumRTL,
        applyHebrewOptimizations: applyHebrewOptimizations,
        checkResponsive: handleResponsiveRTL,
        getConfig: () => quantumGlossaryConfig,
        toggleDebug: () => glossaryQuantumTransformer.toggleDebug()
    };
});