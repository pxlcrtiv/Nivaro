/**
 * Quantum RTL Implementation for Nivaro Website Cost Guide Page
 * This script applies advanced quantum-level RTL transformations specifically optimized for the cost guide content.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quantum RTL for Website Cost Guide: Initializing advanced Hebrew optimization...');
    
    // Quantum Website Cost Guide RTL Configuration
    const quantumCostGuideConfig = {
        intensity: 85,               // Higher intensity for detailed content readability
        speed: 'medium',             // Smooth animations for complex content
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
            costGuideSpecific: {
                article: '.prose',
                title: '.blog-title-anim',
                authorInfo: '.left-section-blog',
                content: 'article',
                images: 'article img',
                quotes: 'blockquote',
                codeBlocks: 'pre, code',
                pricingTables: '.pricing-table, .comparison-table',
                costFactors: '.cost-factor',
                faqSection: '.faq',
                socialSharing: '.social-sharing'
            }
        },
        // Animation settings optimized for reading experience
        animation: {
            duration: 700,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            staggerDelay: 40,         // Subtle stagger for content blocks
            properties: ['transform', 'opacity', 'padding', 'margin']
        },
        // Performance optimization for content-heavy page
        performance: {
            throttleDelay: 150,       // Optimized for scrolling performance
            debounceDelay: 300,
            batchSize: 15,            // Larger batch size for content-heavy page
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
                desktop: 85
            }
        },
        // Advanced quantum features
        quantumFeatures: {
            fieldEffects: {
                enabled: true,
                radius: 25,
                intensity: 0.25
            },
            multiDimensional: {
                enabled: true,
                dimensionCount: 2,
                parallelUniverses: 1
            }
        }
    };
    
    // Initialize QuantumRTLTransformer for cost guide content
    const costGuideQuantumTransformer = new window.QuantumRTLTransformer(quantumCostGuideConfig);
    
    // Apply RTL transformations to cost guide-specific elements
    const applyCostGuideSpecificTransformations = () => {
        console.log('Quantum RTL for Website Cost Guide: Applying page-specific transformations...');
        
        // Transform article container
        const articleContainer = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.article);
        if (articleContainer) {
            costGuideQuantumTransformer.applyElementTransformation(articleContainer, {
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
        const pageTitle = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.title);
        if (pageTitle) {
            costGuideQuantumTransformer.applyElementTransformation(pageTitle, {
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
        
        // Transform author information sidebar
        const authorInfo = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.authorInfo);
        if (authorInfo) {
            costGuideQuantumTransformer.applyElementTransformation(authorInfo, {
                transformType: 'layout',
                priority: 'medium',
                additionalProperties: {
                    textAlign: 'right',
                    float: 'right' // Adjust float for RTL
                }
            });
        }
        
        // Transform content text elements
        const textElements = document.querySelectorAll(
            `${quantumCostGuideConfig.elementSelectors.text}, ${quantumCostGuideConfig.elementSelectors.costGuideSpecific.content} ${quantumCostGuideConfig.elementSelectors.text}`
        );
        
        textElements.forEach((element, index) => {
            // Apply staggered animation for text blocks
            setTimeout(() => {
                costGuideQuantumTransformer.applyElementTransformation(element, {
                    transformType: 'text',
                    priority: 'medium',
                    additionalProperties: {
                        textAlign: 'right',
                        direction: 'rtl'
                    }
                });
            }, index * quantumCostGuideConfig.animation.staggerDelay);
        });
        
        // Transform images and media
        const mediaElements = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.images);
        mediaElements.forEach(media => {
            costGuideQuantumTransformer.applyElementTransformation(media, {
                transformType: 'visual',
                priority: 'medium',
                additionalProperties: {
                    textAlign: 'right',
                    marginLeft: '1.5rem',
                    marginRight: '0',
                    clear: 'right'
                }
            });
        });
        
        // Transform blockquotes with special styling
        const blockquotes = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.quotes);
        blockquotes.forEach(blockquote => {
            costGuideQuantumTransformer.applyElementTransformation(blockquote, {
                transformType: 'visual',
                priority: 'medium',
                additionalProperties: {
                    textAlign: 'right',
                    borderLeft: 'none',
                    borderRight: '4px solid #5d5ad6',
                    paddingLeft: '0',
                    paddingRight: '1rem'
                }
            });
        });
        
        // Transform code blocks (preserve LTR for code)
        const codeBlocks = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.codeBlocks);
        codeBlocks.forEach(code => {
            costGuideQuantumTransformer.applyElementTransformation(code, {
                transformType: 'special',
                priority: 'high',
                additionalProperties: {
                    direction: 'ltr',  // Keep code LTR
                    textAlign: 'left', // Keep code aligned left
                    unicodeBidi: 'embed' // Isolate code direction
                }
            });
        });
        
        // Transform pricing tables and comparison elements
        const pricingTables = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.pricingTables);
        pricingTables.forEach(table => {
            costGuideQuantumTransformer.applyElementTransformation(table, {
                transformType: 'layout',
                priority: 'high',
                additionalProperties: {
                    direction: 'rtl'
                }
            });
        });
        
        // Transform cost factor elements
        const costFactors = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.costFactors);
        costFactors.forEach(factor => {
            costGuideQuantumTransformer.applyElementTransformation(factor, {
                transformType: 'layout',
                priority: 'medium',
                additionalProperties: {
                    textAlign: 'right',
                    direction: 'rtl'
                }
            });
        });
        
        // Transform FAQ sections
        const faqSections = document.querySelectorAll(quantumCostGuideConfig.elementSelectors.costGuideSpecific.faqSection);
        faqSections.forEach(faq => {
            costGuideQuantumTransformer.applyElementTransformation(faq, {
                transformType: 'layout',
                priority: 'medium',
                additionalProperties: {
                    textAlign: 'right',
                    direction: 'rtl'
                }
            });
        });
    };
    
    // Set up quantum monitoring for dynamically loaded content
    const setupCostGuideQuantumMonitoring = () => {
        console.log('Quantum RTL for Website Cost Guide: Setting up quantum monitoring...');
        
        // Create mutation observer to detect dynamically loaded content
        const costGuideContentObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    // Process newly added nodes for RTL
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            // Apply transformations to the new node and its children
                            costGuideQuantumTransformer.applyTransformationToElement(node);
                            
                            // Special handling for cost guide-specific elements
                            if (node.matches(quantumCostGuideConfig.elementSelectors.costGuideSpecific.article)) {
                                applyCostGuideSpecificTransformations();
                            }
                        }
                    });
                }
            });
        });
        
        // Start observing the main content area
        const mainContent = document.querySelector('main');
        if (mainContent) {
            costGuideContentObserver.observe(mainContent, {
                childList: true,
                subtree: true
            });
        }
        
        // Observe article container specifically
        const articleContainer = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.article);
        if (articleContainer) {
            costGuideContentObserver.observe(articleContainer, {
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
        if (!quantumCostGuideConfig.hebrewLanguage.autoDetect) return;
        
        console.log('Quantum RTL for Website Cost Guide: Applying Hebrew text optimizations...');
        
        const allTextElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote');
        
        allTextElements.forEach(element => {
            if (detectHebrewText(element)) {
                // Apply special font stack for Hebrew text
                element.style.fontFamily = quantumCostGuideConfig.hebrewLanguage.fontStack;
                
                // Add special class for Hebrew elements
                if (!element.classList.contains('hebrew-text')) {
                    element.classList.add('hebrew-text');
                }
                
                // Enable quantum coherence for Hebrew text
                if (quantumCostGuideConfig.coherence) {
                    element.setAttribute('data-quantum-coherence', 'enabled');
                }
            }
        });
    };
    
    // Function to handle responsive RTL adjustments
    const handleResponsiveRTL = () => {
        const viewportWidth = window.innerWidth;
        let currentIntensity = quantumCostGuideConfig.intensity;
        
        // Adjust intensity based on viewport width
        if (viewportWidth < quantumCostGuideConfig.responsive.breakpoints.mobile) {
            currentIntensity = quantumCostGuideConfig.responsive.intensities.mobile;
        } else if (viewportWidth < quantumCostGuideConfig.responsive.breakpoints.tablet) {
            currentIntensity = quantumCostGuideConfig.responsive.intensities.tablet;
        } else {
            currentIntensity = quantumCostGuideConfig.responsive.intensities.desktop;
        }
        
        // Update quantum transformer with new intensity
        costGuideQuantumTransformer.updateIntensity(currentIntensity);
        
        // Adjust layout for different screen sizes
        const articleContainer = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.article);
        const authorInfo = document.querySelector(quantumCostGuideConfig.elementSelectors.costGuideSpecific.authorInfo);
        
        if (viewportWidth < quantumCostGuideConfig.responsive.breakpoints.tablet && authorInfo) {
            // On mobile, ensure author info is properly positioned
            authorInfo.style.float = 'none';
            authorInfo.style.width = '100%';
        }
    };
    
    // Initialize and run all transformations
    const initializeCostGuideQuantumRTL = () => {
        console.log('Quantum RTL for Website Cost Guide: Initializing complete transformation sequence...');
        
        // First, apply basic quantum transformations
        costGuideQuantumTransformer.applyTransformations();
        
        // Then apply cost guide-specific transformations
        applyCostGuideSpecificTransformations();
        
        // Apply Hebrew text optimizations
        applyHebrewOptimizations();
        
        // Set up monitoring for dynamic content
        setupCostGuideQuantumMonitoring();
        
        // Handle initial responsive state
        handleResponsiveRTL();
        
        console.log('Quantum RTL for Website Cost Guide: Initialization complete. Quantum state stabilized.');
    };
    
    // Run the initialization
    initializeCostGuideQuantumRTL();
    
    // Add event listeners for responsive handling
    window.addEventListener('resize', () => {
        // Debounce resize events for performance
        clearTimeout(window.costGuideResizeTimeout);
        window.costGuideResizeTimeout = setTimeout(handleResponsiveRTL, quantumCostGuideConfig.performance.debounceDelay);
    });
    
    // Add event listener for scroll optimization
    window.addEventListener('scroll', () => {
        // Throttle scroll events for performance
        if (!window.lastScrollTime || (Date.now() - window.lastScrollTime) > quantumCostGuideConfig.performance.throttleDelay) {
            window.lastScrollTime = Date.now();
            
            // Apply quantum field effects based on scroll position
            if (quantumCostGuideConfig.quantumFeatures.fieldEffects.enabled) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const scrollProgress = Math.min(scrollPosition / (document.body.scrollHeight - windowHeight), 1);
                
                // Update quantum field effects based on scroll progress
                document.documentElement.style.setProperty('--quantum-field-intensity', (scrollProgress * quantumCostGuideConfig.quantumFeatures.fieldEffects.intensity).toString());
            }
        }
    });
    
    // Expose public API for external control
    window.costGuideRTLControls = {
        reinitialize: initializeCostGuideQuantumRTL,
        applyHebrewOptimizations: applyHebrewOptimizations,
        checkResponsive: handleResponsiveRTL,
        getConfig: () => quantumCostGuideConfig,
        toggleDebug: () => costGuideQuantumTransformer.toggleDebug()
    };
});