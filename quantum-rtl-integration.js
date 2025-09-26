// 🔮 Quantum RTL Integration
// Nivaro Hebrew Website - Complete Integration System

/**
 * Quantum RTL Integration System
 * Complete integration of all quantum RTL components
 * Provides unified API for quantum-level RTL transformations
 */

class QuantumRTLIntegration {
    constructor(options = {}) {
        this.version = '1.0.0';
        this.isInitialized = false;
        this.components = new Map();
        this.eventBus = new EventTarget();
        this.performanceMetrics = new Map();
        this.userPreferences = new Map();
        
        // Initialize configuration
        this.config = this.initializeConfiguration(options);
        
        // Initialize components
        this.initializeComponents();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize user preferences
        this.initializeUserPreferences();
        
        console.log('🔮 Quantum RTL Integration System initialized');
    }
    
    /**
     * Initialize configuration with defaults and user options
     */
    initializeConfiguration(options) {
        const defaultConfig = {
            // Core settings
            autoInitialize: true,
            debug: false,
            language: 'he',
            direction: 'rtl',
            
            // Component settings
            transformer: {
                enabled: true,
                intensity: 60,
                speed: 'medium',
                autoDetectHebrew: true
            },
            
            measurer: {
                enabled: true,
                mode: 'ondemand',
                visualization: true
            },
            
            controlPanel: {
                enabled: true,
                position: 'bottom-left',
                hotkeys: true,
                presets: ['gentle', 'balanced', 'aggressive', 'hebrew']
            },
            
            // Performance settings
            performance: {
                lazyLoad: true,
                throttleDelay: 100,
                batchSize: 50,
                cacheEnabled: true
            },
            
            // User experience
            userExperience: {
                smoothTransitions: true,
                responsive: true,
                accessibility: true,
                keyboardShortcuts: true
            },
            
            // Advanced features
            advanced: {
                quantumEntanglement: true,
                mutationObserver: true,
                intersectionObserver: true,
                resizeObserver: true
            }
        };
        
        return this.deepMerge(defaultConfig, options);
    }
    
    /**
     * Initialize all quantum RTL components
     */
    initializeComponents() {
        // Initialize Quantum RTL Transformer
        if (this.config.transformer.enabled && typeof QuantumRTLTransformer !== 'undefined') {
            this.components.set('transformer', new QuantumRTLTransformer({
                debug: this.config.debug,
                intensity: this.config.transformer.intensity,
                speed: this.config.transformer.speed,
                autoTransform: false, // Manual control
                hebrew: {
                    autoDetect: this.config.transformer.autoDetectHebrew
                },
                performance: this.config.performance,
                quantum: {
                    entanglement: this.config.advanced.quantumEntanglement,
                    coherence: true,
                    measurement: this.config.measurer.mode
                }
            }));
            
            console.log('✅ Quantum RTL Transformer initialized');
        }
        
        // Initialize Quantum RTL Measurer
        if (this.config.measurer.enabled && typeof QuantumRTLMeasurer !== 'undefined') {
            this.components.set('measurer', new QuantumRTLMeasurer({
                debug: this.config.debug,
                mode: this.config.measurer.mode,
                visualization: this.config.measurer.visualization,
                performance: this.config.performance
            }));
            
            console.log('✅ Quantum RTL Measurer initialized');
        }
        
        // Initialize Quantum RTL Control Panel
        if (this.config.controlPanel.enabled && typeof QuantumRTLControlPanel !== 'undefined') {
            this.components.set('controlPanel', new QuantumRTLControlPanel({
                debug: this.config.debug,
                position: this.config.controlPanel.position,
                hotkeys: this.config.controlPanel.hotkeys,
                presets: this.config.controlPanel.presets,
                performance: this.config.performance
            }));
            
            console.log('✅ Quantum RTL Control Panel initialized');
        }
        
        // Initialize Test Suite (development only)
        if (this.config.debug && typeof QuantumRTLTestSuite !== 'undefined') {
            this.components.set('testSuite', new QuantumRTLTestSuite());
            console.log('✅ Quantum RTL Test Suite initialized');
        }
    }
    
    /**
     * Setup event listeners for component communication
     */
    setupEventListeners() {
        // Transformer events
        this.eventBus.addEventListener('quantum:transform:start', (event) => {
            this.log('Transform started', event.detail);
            this.updatePerformanceMetrics('transform', 'start', event.detail);
        });
        
        this.eventBus.addEventListener('quantum:transform:complete', (event) => {
            this.log('Transform completed', event.detail);
            this.updatePerformanceMetrics('transform', 'complete', event.detail);
        });
        
        // Measurer events
        this.eventBus.addEventListener('quantum:measure:start', (event) => {
            this.log('Measurement started', event.detail);
        });
        
        this.eventBus.addEventListener('quantum:measure:complete', (event) => {
            this.log('Measurement completed', event.detail);
        });
        
        // Control panel events
        this.eventBus.addEventListener('quantum:control:change', (event) => {
            this.log('Control changed', event.detail);
            this.handleControlChange(event.detail);
        });
        
        // User preference events
        this.eventBus.addEventListener('quantum:preference:change', (event) => {
            this.log('Preference changed', event.detail);
            this.updateUserPreference(event.detail.key, event.detail.value);
        });
        
        // Window events
        window.addEventListener('resize', this.throttle(() => {
            this.handleResize();
        }, 250));
        
        window.addEventListener('beforeunload', () => {
            this.cleanup();
        });
        
        // Keyboard shortcuts
        if (this.config.userExperience.keyboardShortcuts) {
            this.setupKeyboardShortcuts();
        }
    }
    
    /**
     * Initialize user preferences
     */
    initializeUserPreferences() {
        // Load saved preferences
        const savedPreferences = localStorage.getItem('quantum-rtl-preferences');
        if (savedPreferences) {
            try {
                const preferences = JSON.parse(savedPreferences);
                for (const [key, value] of Object.entries(preferences)) {
                    this.userPreferences.set(key, value);
                }
            } catch (error) {
                this.log('Failed to load user preferences', error);
            }
        }
        
        // Apply user preferences
        this.applyUserPreferences();
    }
    
    /**
     * Apply user preferences to components
     */
    applyUserPreferences() {
        // Apply intensity preference
        if (this.userPreferences.has('intensity')) {
            const transformer = this.components.get('transformer');
            if (transformer) {
                transformer.config.intensity = this.userPreferences.get('intensity');
            }
        }
        
        // Apply preset preference
        if (this.userPreferences.has('preset')) {
            this.applyPreset(this.userPreferences.get('preset'));
        }
        
        // Apply visualization preference
        if (this.userPreferences.has('visualization')) {
            const measurer = this.components.get('measurer');
            if (measurer) {
                measurer.config.visualization = this.userPreferences.get('visualization');
            }
        }
    }
    
    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl/Cmd + Shift combinations
            if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
                switch (event.key) {
                    case 'Q':
                        event.preventDefault();
                        this.toggleControlPanel();
                        break;
                    case 'M':
                        event.preventDefault();
                        this.toggleMeasurer();
                        break;
                    case 'R':
                        event.preventDefault();
                        this.resetTransformations();
                        break;
                    case 'T':
                        event.preventDefault();
                        this.runTests();
                        break;
                    case '1':
                        event.preventDefault();
                        this.applyPreset('gentle');
                        break;
                    case '2':
                        event.preventDefault();
                        this.applyPreset('balanced');
                        break;
                    case '3':
                        event.preventDefault();
                        this.applyPreset('aggressive');
                        break;
                    case '4':
                        event.preventDefault();
                        this.applyPreset('hebrew');
                        break;
                }
            }
        });
    }
    
    /**
     * Main initialization method
     */
    async initialize() {
        if (this.isInitialized) {
            this.log('System already initialized');
            return;
        }
        
        try {
            this.log('Initializing Quantum RTL Integration System...');
            
            // Load required resources
            await this.loadResources();
            
            // Initialize components
            await this.startComponents();
            
            // Apply initial transformations
            await this.applyInitialTransformations();
            
            // Setup observers
            this.setupObservers();
            
            this.isInitialized = true;
            this.emit('quantum:system:initialized', { timestamp: Date.now() });
            
            this.log('Quantum RTL Integration System initialized successfully');
            
        } catch (error) {
            this.log('Failed to initialize system', error);
            this.emit('quantum:system:error', { error: error.message });
            throw error;
        }
    }
    
    /**
     * Load required resources (fonts, stylesheets, etc.)
     */
    async loadResources() {
        this.log('Loading resources...');
        
        // Load Hebrew fonts
        await this.loadHebrewFonts();
        
        // Load additional stylesheets if needed
        if (this.config.userExperience.smoothTransitions) {
            this.injectTransitionStyles();
        }
        
        this.log('Resources loaded successfully');
    }
    
    /**
     * Load Hebrew fonts
     */
    async loadHebrewFonts() {
        const fonts = [
            { family: 'Rubik', weight: '400' },
            { family: 'Rubik', weight: '500' },
            { family: 'Rubik', weight: '700' },
            { family: 'Arial Hebrew', weight: '400' }
        ];
        
        const fontPromises = fonts.map(font => {
            return document.fonts.load(`${font.weight} 16px "${font.family}"`);
        });
        
        try {
            await Promise.all(fontPromises);
            this.log('Hebrew fonts loaded successfully');
        } catch (error) {
            this.log('Failed to load some Hebrew fonts', error);
        }
    }
    
    /**
     * Inject transition styles for smooth animations
     */
    injectTransitionStyles() {
        const style = document.createElement('style');
        style.textContent = `
            [data-quantum-rtl="true"] {
                transition: all 0.3s ease-in-out !important;
            }
            
            .quantum-rtl-transitioning {
                transition: all 0.3s ease-in-out !important;
                will-change: direction, text-align, margin, padding !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Start all components
     */
    async startComponents() {
        const promises = [];
        
        for (const [name, component] of this.components) {
            if (typeof component.start === 'function') {
                promises.push(component.start());
            }
        }
        
        await Promise.all(promises);
        this.log('All components started successfully');
    }
    
    /**
     * Apply initial transformations
     */
    async applyInitialTransformations() {
        const transformer = this.components.get('transformer');
        if (!transformer) {
            this.log('No transformer available for initial transformations');
            return;
        }
        
        this.log('Applying initial transformations...');
        
        // Detect Hebrew content
        if (this.config.transformer.autoDetectHebrew) {
            const hebrewElements = this.detectHebrewElements();
            for (const element of hebrewElements) {
                transformer.transformElement(element, 'auto-detected-hebrew');
            }
        }
        
        // Transform document if RTL
        if (this.config.direction === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl') {
            transformer.transformElement(document.body, 'document-rtl');
        }
        
        this.log('Initial transformations applied successfully');
    }
    
    /**
     * Setup observers for dynamic content
     */
    setupObservers() {
        if (!this.config.advanced.mutationObserver) {
            return;
        }
        
        const transformer = this.components.get('transformer');
        if (!transformer || !transformer.mutationObserver) {
            return;
        }
        
        // Start observing
        transformer.mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false
        });
        
        this.log('Mutation observer started');
    }
    
    /**
     * Detect Hebrew elements in the document
     */
    detectHebrewElements() {
        const hebrewRegex = /[\u0590-\u05FF]/;
        const elements = [];
        
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    const text = node.textContent.trim();
                    return hebrewRegex.test(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        let textNode;
        while (textNode = walker.nextNode()) {
            const element = textNode.parentElement;
            if (element && !elements.includes(element)) {
                elements.push(element);
            }
        }
        
        return elements;
    }
    
    /**
     * Apply preset configuration
     */
    applyPreset(presetName) {
        const transformer = this.components.get('transformer');
        if (!transformer) {
            this.log('No transformer available for preset application');
            return;
        }
        
        const presets = {
            gentle: { intensity: 30, speed: 'slow', animation: { duration: 500 } },
            balanced: { intensity: 60, speed: 'medium', animation: { duration: 300 } },
            aggressive: { intensity: 90, speed: 'fast', animation: { duration: 150 } },
            hebrew: { intensity: 100, speed: 'instant', animation: { duration: 0 } }
        };
        
        const preset = presets[presetName];
        if (!preset) {
            this.log(`Unknown preset: ${presetName}`);
            return;
        }
        
        // Apply preset
        transformer.config.intensity = preset.intensity;
        transformer.config.speed = preset.speed;
        
        if (transformer.config.animation) {
            transformer.config.animation.duration = preset.animation.duration;
        }
        
        this.log(`Applied preset: ${presetName}`);
        this.emit('quantum:preset:applied', { preset: presetName, config: preset });
    }
    
    /**
     * Transform specific element
     */
    transformElement(element, elementId = null) {
        const transformer = this.components.get('transformer');
        if (!transformer) {
            this.log('No transformer available');
            return false;
        }
        
        const id = elementId || `manual-${Date.now()}`;
        return transformer.transformElement(element, id);
    }
    
    /**
     * Transform multiple elements
     */
    transformElements(elements, baseId = 'batch') {
        const transformer = this.components.get('transformer');
        if (!transformer) {
            this.log('No transformer available');
            return [];
        }
        
        const results = [];
        elements.forEach((element, index) => {
            const result = transformer.transformElement(element, `${baseId}-${index}`);
            results.push(result);
        });
        
        return results;
    }
    
    /**
     * Reset all transformations
     */
    resetTransformations() {
        const transformer = this.components.get('transformer');
        if (!transformer) {
            this.log('No transformer available for reset');
            return;
        }
        
        transformer.destroy();
        this.components.set('transformer', new QuantumRTLTransformer({
            debug: this.config.debug,
            intensity: this.config.transformer.intensity,
            speed: this.config.transformer.speed
        }));
        
        this.log('All transformations reset');
        this.emit('quantum:transform:reset', { timestamp: Date.now() });
    }
    
    /**
     * Toggle control panel visibility
     */
    toggleControlPanel() {
        const controlPanel = this.components.get('controlPanel');
        if (!controlPanel) {
            this.log('Control panel not available');
            return;
        }
        
        if (controlPanel.isOpen()) {
            controlPanel.close();
        } else {
            controlPanel.open();
        }
    }
    
    /**
     * Toggle measurer
     */
    toggleMeasurer() {
        const measurer = this.components.get('measurer');
        if (!measurer) {
            this.log('Measurer not available');
            return;
        }
        
        if (measurer.isActive()) {
            measurer.deactivate();
        } else {
            measurer.activate();
        }
    }
    
    /**
     * Run tests (development only)
     */
    async runTests() {
        const testSuite = this.components.get('testSuite');
        if (!testSuite) {
            this.log('Test suite not available');
            return;
        }
        
        this.log('Running quantum RTL tests...');
        const results = await testSuite.runAllTests();
        this.log('Tests completed', results);
        
        return results;
    }
    
    /**
     * Handle control changes from control panel
     */
    handleControlChange(detail) {
        const { control, value } = detail;
        
        switch (control) {
            case 'intensity':
                this.updateIntensity(value);
                break;
            case 'speed':
                this.updateSpeed(value);
                break;
            case 'preset':
                this.applyPreset(value);
                break;
            case 'visualization':
                this.updateVisualization(value);
                break;
        }
    }
    
    /**
     * Update transformation intensity
     */
    updateIntensity(intensity) {
        const transformer = this.components.get('transformer');
        if (transformer) {
            transformer.config.intensity = intensity;
            this.log(`Updated intensity to ${intensity}`);
        }
    }
    
    /**
     * Update transformation speed
     */
    updateSpeed(speed) {
        const transformer = this.components.get('transformer');
        if (transformer) {
            transformer.config.speed = speed;
            this.log(`Updated speed to ${speed}`);
        }
    }
    
    /**
     * Update visualization settings
     */
    updateVisualization(enabled) {
        const measurer = this.components.get('measurer');
        if (measurer) {
            measurer.config.visualization = enabled;
            this.log(`Updated visualization to ${enabled}`);
        }
    }
    
    /**
     * Update user preference
     */
    updateUserPreference(key, value) {
        this.userPreferences.set(key, value);
        
        // Save to localStorage
        try {
            const preferences = Object.fromEntries(this.userPreferences);
            localStorage.setItem('quantum-rtl-preferences', JSON.stringify(preferences));
        } catch (error) {
            this.log('Failed to save user preferences', error);
        }
    }
    
    /**
     * Update performance metrics
     */
    updatePerformanceMetrics(operation, phase, detail) {
        const key = `${operation}:${phase}`;
        const metrics = this.performanceMetrics.get(key) || {
            count: 0,
            totalDuration: 0,
            averageDuration: 0,
            minDuration: Infinity,
            maxDuration: 0
        };
        
        if (detail.duration) {
            metrics.count++;
            metrics.totalDuration += detail.duration;
            metrics.averageDuration = metrics.totalDuration / metrics.count;
            metrics.minDuration = Math.min(metrics.minDuration, detail.duration);
            metrics.maxDuration = Math.max(metrics.maxDuration, detail.duration);
        }
        
        this.performanceMetrics.set(key, metrics);
    }
    
    /**
     * Handle window resize
     */
    handleResize() {
        this.log('Window resized, updating responsive transformations');
        
        // Update responsive transformations
        const transformer = this.components.get('transformer');
        if (transformer && transformer.config.responsive?.enabled) {
            transformer.updateResponsiveTransformations();
        }
    }
    
    /**
     * Get system status
     */
    getStatus() {
        const status = {
            version: this.version,
            initialized: this.isInitialized,
            components: {},
            performance: {},
            preferences: Object.fromEntries(this.userPreferences)
        };
        
        // Component status
        for (const [name, component] of this.components) {
            status.components[name] = {
                available: !!component,
                active: typeof component.isActive === 'function' ? component.isActive() : true
            };
        }
        
        // Performance metrics
        for (const [key, metrics] of this.performanceMetrics) {
            status.performance[key] = {
                count: metrics.count,
                averageDuration: metrics.averageDuration.toFixed(2),
                minDuration: metrics.minDuration.toFixed(2),
                maxDuration: metrics.maxDuration.toFixed(2)
            };
        }
        
        return status;
    }
    
    /**
     * Get system statistics
     */
    getStatistics() {
        const transformer = this.components.get('transformer');
        const measurer = this.components.get('measurer');
        
        return {
            transformedElements: transformer ? transformer.getTransformedElementsCount() : 0,
            measurementsTaken: measurer ? measurer.getMeasurementsCount() : 0,
            uptime: this.isInitialized ? Date.now() - this.startTime : 0,
            performance: Object.fromEntries(this.performanceMetrics),
            preferences: Object.fromEntries(this.userPreferences)
        };
    }
    
    /**
     * Export system state
     */
    exportState() {
        return {
            version: this.version,
            config: this.config,
            preferences: Object.fromEntries(this.userPreferences),
            statistics: this.getStatistics(),
            timestamp: Date.now()
        };
    }
    
    /**
     * Import system state
     */
    importState(state) {
        if (state.version !== this.version) {
            throw new Error(`Version mismatch: expected ${this.version}, got ${state.version}`);
        }
        
        // Apply preferences
        if (state.preferences) {
            for (const [key, value] of Object.entries(state.preferences)) {
                this.updateUserPreference(key, value);
            }
        }
        
        // Apply configuration
        if (state.config) {
            this.config = this.deepMerge(this.config, state.config);
        }
        
        this.log('System state imported successfully');
    }
    
    /**
     * Cleanup system resources
     */
    cleanup() {
        this.log('Cleaning up Quantum RTL Integration System...');
        
        // Stop all components
        for (const component of this.components.values()) {
            if (typeof component.destroy === 'function') {
                component.destroy();
            }
            if (typeof component.stop === 'function') {
                component.stop();
            }
        }
        
        // Clear event listeners
        this.eventBus.removeEventListener('quantum:transform:start', null);
        this.eventBus.removeEventListener('quantum:transform:complete', null);
        
        // Clear data
        this.components.clear();
        this.performanceMetrics.clear();
        
        this.log('System cleanup completed');
    }
    
    // Utility methods
    
    /**
     * Deep merge objects
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
     * Throttle function execution
     */
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }
    
    /**
     * Emit custom event
     */
    emit(eventName, detail = {}) {
        const event = new CustomEvent(eventName, { detail });
        this.eventBus.dispatchEvent(event);
    }
    
    /**
     * Add event listener
     */
    addEventListener(eventName, callback) {
        this.eventBus.addEventListener(eventName, callback);
    }
    
    /**
     * Remove event listener
     */
    removeEventListener(eventName, callback) {
        this.eventBus.removeEventListener(eventName, callback);
    }
    
    /**
     * Log messages
     */
    log(message, data = null) {
        if (this.config.debug) {
            console.log(`🔮 Quantum RTL: ${message}`, data || '');
        }
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumRTLIntegration;
} else if (typeof window !== 'undefined') {
    window.QuantumRTLIntegration = QuantumRTLIntegration;
    
    // Auto-initialize if config is available
    document.addEventListener('DOMContentLoaded', () => {
        if (window.QuantumRTLConfig && window.QuantumRTLConfig.autoInitialize !== false) {
            window.quantumRTL = new QuantumRTLIntegration();
            window.quantumRTL.initialize().then(() => {
                console.log('🎯 Quantum RTL system auto-initialized');
            }).catch(error => {
                console.error('Failed to auto-initialize Quantum RTL system:', error);
            });
        }
    });
}