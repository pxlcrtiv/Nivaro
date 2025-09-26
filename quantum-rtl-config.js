// 🔮 Quantum RTL Configuration
// Nivaro Hebrew Website - Quantum-Level RTL Transformation

/**
 * Quantum RTL Configuration
 * This file contains all configurable parameters for the quantum RTL transformation system
 * Inspired by quantum mechanics and the Ant-Man universe principle: "As above, so below"
 */

const QuantumRTLConfig = {
    // Core Quantum Settings
    quantum: {
        intensity: 60,              // Quantum transformation intensity (0-100)
        speed: 'medium',            // Transformation speed: 'slow', 'medium', 'fast', 'instant'
        coherence: true,             // Maintain quantum coherence across transformations
        entanglement: true,          // Enable quantum entanglement between related elements
        measurement: 'realtime',     // Measurement mode: 'none', 'ondemand', 'realtime'
        debug: false,                // Enable debug mode with console logging
        logLevel: 'info'            // Log level: 'error', 'warn', 'info', 'verbose'
    },

    // Hebrew Language Detection
    hebrew: {
        autoDetect: true,            // Automatically detect Hebrew content
        languageCode: 'he',          // ISO language code for Hebrew
        rtlAttribute: 'rtl',         // RTL direction attribute
        fontFamily: 'Rubik, Arial Hebrew, sans-serif', // Hebrew font stack
        fallbackFonts: ['Arial Hebrew', 'David', 'Miriam', 'sans-serif']
    },

    // Element Selection and Targeting
    selectors: {
        // Default selectors for quantum transformation
        default: [
            'p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'li', 'ul', 'ol', 'blockquote', 'article', 'section',
            'nav', 'aside', 'main', 'header', 'footer', 'address'
        ],
        
        // Interactive elements
        interactive: [
            'button', 'input', 'textarea', 'select', 'label',
            'a', 'link', 'form', 'fieldset', 'legend'
        ],
        
        // Layout elements
        layout: [
            'flex', 'grid', 'container', 'row', 'col', 'column',
            'card', 'panel', 'box', 'wrapper'
        ],
        
        // Custom selectors (add your own)
        custom: [
            // '.nivaro-text',
            // '[data-nivaro-rtl="true"]',
            // '.hebrew-content',
            // '.rtl-required'
        ]
    },

    // CSS Properties for Quantum Transformation
    properties: {
        // Text and typography
        text: {
            direction: 'rtl',
            textAlign: 'right',
            unicodeBidi: 'embed',
            writingMode: 'horizontal-tb'
        },
        
        // Typography for Hebrew
        typography: {
            fontFamily: 'Rubik, Arial Hebrew, sans-serif',
            lineHeight: '1.6',
            letterSpacing: 'normal',
            wordSpacing: 'normal'
        },
        
        // Layout and positioning
        layout: {
            // Flexbox
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            
            // Grid
            gridDirection: 'rtl',
            gridAutoFlow: 'row dense',
            
            // Positioning
            left: 'auto',
            right: '0'
        },
        
        // Spacing adjustments
        spacing: {
            // Margins
            marginLeft: 'auto',
            marginRight: 'inherit',
            
            // Padding
            paddingLeft: 'inherit',
            paddingRight: 'inherit',
            
            // Border radius
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit'
        }
    },

    // Performance Optimization
    performance: {
        throttleDelay: 100,            // Throttle delay in milliseconds
        debounceDelay: 300,            // Debounce delay for rapid changes
        batchSize: 50,                 // Number of elements to transform in one batch
        useRAF: true,                  // Use requestAnimationFrame for smooth updates
        lazyLoad: true,                // Enable lazy loading for off-screen elements
        cacheEnabled: true,            // Enable caching of transformed elements
        cacheExpiry: 300000          // Cache expiry time in milliseconds (5 minutes)
    },

    // Animation and Transitions
    animation: {
        enabled: true,                 // Enable smooth transitions
        duration: 300,                 // Transition duration in milliseconds
        easing: 'ease-in-out',        // CSS easing function
        delay: 0,                      // Transition delay
        properties: ['direction', 'text-align', 'margin', 'padding', 'border-radius']
    },

    // Responsive Design
    responsive: {
        enabled: true,                 // Enable responsive transformations
        breakpoints: {
            mobile: 768,                // Mobile breakpoint in pixels
            tablet: 1024,               // Tablet breakpoint in pixels
            desktop: 1200               // Desktop breakpoint in pixels
        },
        
        // Different intensities for different devices
        intensities: {
            mobile: 80,                 // Higher intensity for mobile
            tablet: 70,                 // Medium intensity for tablet
            desktop: 60                 // Standard intensity for desktop
        }
    },

    // Browser Compatibility
    compatibility: {
        modernBrowsers: true,          // Optimize for modern browsers
        legacySupport: false,          // Enable legacy browser support (IE 11)
        autoprefixer: true,            // Add vendor prefixes automatically
        featureDetection: true,        // Detect browser features
        
        // Fallback strategies
        fallbacks: {
            cssVariables: true,          // Use CSS custom properties
            flexbox: true,              // Use flexbox for layout
            grid: true,                 // Use CSS Grid
            transforms: true            // Use CSS transforms
        }
    },

    // Integration Settings
    integration: {
        // Existing RTL handling
        preserveExistingRTL: true,      // Preserve existing RTL attributes
        respectHtmlDir: true,         // Respect HTML dir="rtl" attribute
        respectExistingCSS: true,       // Respect existing RTL CSS
        
        // Framework integration
        frameworks: {
            nextjs: false,              // Next.js specific optimizations
            react: false,               // React specific optimizations
            vue: false,                 // Vue.js specific optimizations
            angular: false              // Angular specific optimizations
        },
        
        // Third-party integrations
        thirdParty: {
            googleFonts: true,          // Load Hebrew fonts from Google Fonts
            fontAwesome: true,          // Support Font Awesome RTL icons
            bootstrap: false,            // Bootstrap RTL support
            tailwind: false              // Tailwind CSS RTL support
        }
    },

    // Advanced Quantum Features
    advanced: {
        // Quantum AI integration
        ai: {
            enabled: false,             // Enable AI-powered transformations
            learningMode: false,        // Enable machine learning
            userBehaviorTracking: false, // Track user behavior for optimization
            predictive: false          // Enable predictive transformations
        },
        
        // Quantum field effects
        fieldEffects: {
            enabled: false,              // Enable quantum field effects
            radius: 100,                // Field effect radius in pixels
            intensity: 0.5,             // Field effect intensity (0-1)
            propagation: false          // Enable field effect propagation
        },
        
        // Multi-dimensional transformations
        multiDimensional: {
            enabled: false,            // Enable multi-dimensional transformations
            dimensions: 3,              // Number of dimensions (3-11)
            parallelUniverses: false,   // Enable parallel universe transformations
            timeTravel: false          // Enable temporal transformations (experimental)
        }
    },

    // Preset Configurations
    presets: {
        // Gentle quantum transformation
        gentle: {
            quantum: { intensity: 30, speed: 'slow' },
            animation: { duration: 500, easing: 'ease-out' },
            performance: { throttleDelay: 200, batchSize: 25 }
        },
        
        // Balanced quantum transformation
        balanced: {
            quantum: { intensity: 60, speed: 'medium' },
            animation: { duration: 300, easing: 'ease-in-out' },
            performance: { throttleDelay: 100, batchSize: 50 }
        },
        
        // Aggressive quantum transformation
        aggressive: {
            quantum: { intensity: 90, speed: 'fast' },
            animation: { duration: 150, easing: 'ease-in' },
            performance: { throttleDelay: 50, batchSize: 100 }
        },
        
        // Hebrew-optimized transformation
        hebrew: {
            quantum: { intensity: 100, speed: 'instant' },
            hebrew: { autoDetect: true, fontFamily: 'Rubik, Arial Hebrew, sans-serif' },
            properties: {
                text: { direction: 'rtl', textAlign: 'right' },
                typography: { fontFamily: 'Rubik, Arial Hebrew, sans-serif', lineHeight: '1.6' }
            },
            animation: { duration: 0, enabled: false }
        },
        
        // Performance-optimized transformation
        performance: {
            quantum: { intensity: 70, speed: 'fast' },
            performance: {
                throttleDelay: 50,
                debounceDelay: 150,
                batchSize: 75,
                useRAF: true,
                lazyLoad: true,
                cacheEnabled: true
            },
            animation: { duration: 200, enabled: true }
        }
    },

    // Development and Debugging
    development: {
        // Debug settings
        debugMode: false,              // Enable debug mode
        verboseLogging: false,         // Enable verbose logging
        performanceMonitoring: false,  // Monitor performance metrics
        memoryTracking: false,         // Track memory usage
        
        // Development tools
        tools: {
            hotReload: false,           // Enable hot reload for development
            sourceMaps: false,          // Generate source maps
            profiling: false,           // Enable performance profiling
            testing: false              // Enable testing mode
        }
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumRTLConfig;
} else if (typeof window !== 'undefined') {
    window.QuantumRTLConfig = QuantumRTLConfig;
}

// Configuration helper functions
const QuantumRTLConfigHelper = {
    /**
     * Get configuration by preset name
     * @param {string} presetName - Name of the preset (gentle, balanced, aggressive, hebrew, performance)
     * @returns {Object} Configuration object
     */
    getPreset(presetName) {
        return QuantumRTLConfig.presets[presetName] || QuantumRTLConfig.presets.balanced;
    },

    /**
     * Merge configurations
     * @param {Object} baseConfig - Base configuration
     * @param {Object} overrideConfig - Override configuration
     * @returns {Object} Merged configuration
     */
    mergeConfigs(baseConfig, overrideConfig) {
        return this.deepMerge(baseConfig, overrideConfig);
    },

    /**
     * Deep merge objects
     * @param {Object} target - Target object
     * @param {Object} source - Source object
     * @returns {Object} Merged object
     */
    deepMerge(target, source) {
        const result = { ...target };
        
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                    result[key] = this.deepMerge(result[key] || {}, source[key]);
                } else {
                    result[key] = source[key];
                }
            }
        }
        
        return result;
    },

    /**
     * Validate configuration
     * @param {Object} config - Configuration to validate
     * @returns {boolean} True if valid, throws error if invalid
     */
    validateConfig(config) {
        // Add validation logic here
        return true;
    },

    /**
     * Get default configuration
     * @returns {Object} Default configuration
     */
    getDefaultConfig() {
        return QuantumRTLConfig;
    }
};

// Export helper
if (typeof module !== 'undefined' && module.exports) {
    module.exports.QuantumRTLConfigHelper = QuantumRTLConfigHelper;
} else if (typeof window !== 'undefined') {
    window.QuantumRTLConfigHelper = QuantumRTLConfigHelper;
}