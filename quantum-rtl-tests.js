// 🔮 Quantum RTL Test Suite
// Nivaro Hebrew Website - Comprehensive Testing Framework

/**
 * Quantum RTL Test Suite
 * Comprehensive testing framework for quantum-level RTL transformations
 * Tests nano-level transformations, performance, and browser compatibility
 */

class QuantumRTLTestSuite {
    constructor() {
        this.tests = new Map();
        this.results = new Map();
        this.performanceMetrics = new Map();
        this.isRunning = false;
        this.testContainer = null;
        
        this.initializeTests();
        this.createTestContainer();
    }
    
    /**
     * Initialize all test cases
     */
    initializeTests() {
        // Core functionality tests
        this.tests.set('basic-rtl-transformation', this.testBasicRTLTransformation);
        this.tests.set('hebrew-detection', this.testHebrewDetection);
        this.tests.set('element-selection', this.testElementSelection);
        this.tests.set('quantum-state-management', this.testQuantumStateManagement);
        
        // Performance tests
        this.tests.set('transformation-speed', this.testTransformationSpeed);
        this.tests.set('memory-usage', this.testMemoryUsage);
        this.tests.set('large-dom-handling', this.testLargeDOMHandling);
        this.tests.set('mutation-observer-performance', this.testMutationObserverPerformance);
        
        // Browser compatibility tests
        this.tests.set('css-property-support', this.testCSSPropertySupport);
        this.tests.set('rtl-attribute-support', this.testRTLAttributeSupport);
        this.tests.set('font-loading', this.testFontLoading);
        this.tests.set('cross-browser-consistency', this.testCrossBrowserConsistency);
        
        // Edge cases and error handling
        this.tests.set('dynamic-content', this.testDynamicContent);
        this.tests.set('nested-elements', this.testNestedElements);
        this.tests.set('mixed-language-content', this.testMixedLanguageContent);
        this.tests.set('error-recovery', this.testErrorRecovery);
        
        // Advanced features
        this.tests.set('quantum-entanglement', this.testQuantumEntanglement);
        this.tests.set('animation-transitions', this.testAnimationTransitions);
        this.tests.set('responsive-breakpoints', this.testResponsiveBreakpoints);
        this.tests.set('custom-selectors', this.testCustomSelectors);
        
        // Integration tests
        this.tests.set('control-panel-integration', this.testControlPanelIntegration);
        this.tests.set('measurer-integration', this.testMeasurerIntegration);
        this.tests.set('configuration-loading', this.testConfigurationLoading);
        this.tests.set('preset-application', this.testPresetApplication);
    }
    
    /**
     * Create test container for DOM manipulation tests
     */
    createTestContainer() {
        this.testContainer = document.createElement('div');
        this.testContainer.id = 'quantum-rtl-test-container';
        this.testContainer.style.cssText = `
            position: fixed;
            top: -9999px;
            left: -9999px;
            width: 1px;
            height: 1px;
            overflow: hidden;
            visibility: hidden;
        `;
        document.body.appendChild(this.testContainer);
    }
    
    /**
     * Run all tests
     */
    async runAllTests() {
        console.log('🔮 Starting Quantum RTL Test Suite...');
        this.isRunning = true;
        const startTime = performance.now();
        
        const results = new Map();
        
        for (const [testName, testFunction] of this.tests) {
            try {
                console.log(`🧪 Running test: ${testName}`);
                const result = await this.runTest(testName, testFunction);
                results.set(testName, result);
                this.logTestResult(testName, result);
            } catch (error) {
                console.error(`❌ Test failed: ${testName}`, error);
                results.set(testName, {
                    passed: false,
                    error: error.message,
                    duration: 0
                });
            }
        }
        
        const totalDuration = performance.now() - startTime;
        this.generateReport(results, totalDuration);
        
        this.isRunning = false;
        return results;
    }
    
    /**
     * Run individual test
     */
    async runTest(testName, testFunction) {
        const startTime = performance.now();
        const startMemory = this.getMemoryUsage();
        
        try {
            const result = await testFunction.call(this);
            const duration = performance.now() - startTime;
            const memoryDelta = this.getMemoryUsage() - startMemory;
            
            return {
                passed: true,
                result: result,
                duration: duration,
                memoryDelta: memoryDelta,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                passed: false,
                error: error.message,
                duration: performance.now() - startTime,
                timestamp: new Date().toISOString()
            };
        }
    }
    
    /**
     * Test basic RTL transformation
     */
    async testBasicRTLTransformation() {
        const testElement = document.createElement('div');
        testElement.textContent = 'This is a test element for RTL transformation';
        testElement.className = 'test-rtl-element';
        this.testContainer.appendChild(testElement);
        
        // Initialize quantum RTL transformer
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            intensity: 100
        });
        
        // Transform the element
        quantumRTL.transformElement(testElement, 'test-element-1');
        
        // Verify transformation
        const hasRTLAttribute = testElement.getAttribute('data-quantum-rtl') === 'true';
        const hasQuantumID = testElement.getAttribute('data-quantum-id') === 'test-element-1';
        const computedStyle = window.getComputedStyle(testElement);
        const direction = computedStyle.direction;
        const textAlign = computedStyle.textAlign;
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        quantumRTL.destroy();
        
        return {
            rtlAttribute: hasRTLAttribute,
            quantumID: hasQuantumID,
            direction: direction,
            textAlign: textAlign,
            element: testElement
        };
    }
    
    /**
     * Test Hebrew content detection
     */
    async testHebrewDetection() {
        const hebrewText = 'זהו טקסט בעברית לבדיקת זיהוי שפה';
        const englishText = 'This is English text for language detection';
        const mixedText = 'Mixed טקסט with עברית and English';
        
        const hebrewElement = document.createElement('div');
        hebrewElement.textContent = hebrewText;
        
        const englishElement = document.createElement('div');
        englishElement.textContent = englishText;
        
        const mixedElement = document.createElement('div');
        mixedElement.textContent = mixedText;
        
        this.testContainer.appendChild(hebrewElement);
        this.testContainer.appendChild(englishElement);
        this.testContainer.appendChild(mixedElement);
        
        // Test Hebrew detection function
        const isHebrewDetected = this.detectHebrew(hebrewText);
        const isEnglishDetected = this.detectHebrew(englishText);
        const isMixedDetected = this.detectHebrew(mixedText);
        
        // Cleanup
        this.testContainer.removeChild(hebrewElement);
        this.testContainer.removeChild(englishElement);
        this.testContainer.removeChild(mixedElement);
        
        return {
            hebrewDetected: isHebrewDetected,
            englishDetected: isEnglishDetected,
            mixedDetected: isMixedDetected,
            hebrewText: hebrewText,
            englishText: englishText,
            mixedText: mixedText
        };
    }
    
    /**
     * Test element selection accuracy
     */
    async testElementSelection() {
        const testHTML = `
            <div class="hebrew-content">
                <p>טקסט בעברית</p>
                <span>עוד טקסט</span>
            </div>
            <div class="english-content">
                <p>English text</p>
                <span>More English</span>
            </div>
            <div data-rtl="true">
                <p>RTL content</p>
            </div>
        `;
        
        const testDiv = document.createElement('div');
        testDiv.innerHTML = testHTML;
        this.testContainer.appendChild(testDiv);
        
        // Test element selection
        const hebrewElements = testDiv.querySelectorAll('.hebrew-content *');
        const rtlElements = testDiv.querySelectorAll('[data-rtl="true"] *');
        const allElements = testDiv.querySelectorAll('*');
        
        // Cleanup
        this.testContainer.removeChild(testDiv);
        
        return {
            hebrewElements: hebrewElements.length,
            rtlElements: rtlElements.length,
            totalElements: allElements.length,
            selectionAccuracy: (hebrewElements.length + rtlElements.length) / allElements.length
        };
    }
    
    /**
     * Test quantum state management
     */
    async testQuantumStateManagement() {
        const testElement = document.createElement('div');
        testElement.textContent = 'Quantum state test';
        this.testContainer.appendChild(testElement);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false
        });
        
        // Test quantum state management
        const initialState = quantumRTL.getQuantumState(testElement);
        quantumRTL.setQuantumState(testElement, 'transformed');
        const updatedState = quantumRTL.getQuantumState(testElement);
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        quantumRTL.destroy();
        
        return {
            initialState: initialState,
            updatedState: updatedState,
            stateManagement: updatedState === 'transformed'
        };
    }
    
    /**
     * Test transformation speed
     */
    async testTransformationSpeed() {
        const elementCount = 100;
        const elements = [];
        
        // Create test elements
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.textContent = `Test element ${i}`;
            element.className = `test-element-${i}`;
            elements.push(element);
            this.testContainer.appendChild(element);
        }
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false
        });
        
        // Measure transformation speed
        const startTime = performance.now();
        
        elements.forEach((element, index) => {
            quantumRTL.transformElement(element, `speed-test-${index}`);
        });
        
        const endTime = performance.now();
        const totalDuration = endTime - startTime;
        const averageDuration = totalDuration / elementCount;
        
        // Cleanup
        elements.forEach(element => {
            this.testContainer.removeChild(element);
        });
        quantumRTL.destroy();
        
        return {
            elementCount: elementCount,
            totalDuration: totalDuration,
            averageDuration: averageDuration,
            elementsPerSecond: elementCount / (totalDuration / 1000)
        };
    }
    
    /**
     * Test memory usage
     */
    async testMemoryUsage() {
        const initialMemory = this.getMemoryUsage();
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false
        });
        
        // Create and transform many elements
        const elementCount = 500;
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.textContent = `Memory test element ${i}`;
            quantumRTL.transformElement(element, `memory-test-${i}`);
        }
        
        const peakMemory = this.getMemoryUsage();
        const memoryDelta = peakMemory - initialMemory;
        
        // Cleanup
        quantumRTL.destroy();
        
        // Force garbage collection if available
        if (window.gc) {
            window.gc();
        }
        
        const finalMemory = this.getMemoryUsage();
        const memoryRecovered = peakMemory - finalMemory;
        
        return {
            initialMemory: initialMemory,
            peakMemory: peakMemory,
            finalMemory: finalMemory,
            memoryDelta: memoryDelta,
            memoryRecovered: memoryRecovered,
            memoryEfficiency: (memoryRecovered / memoryDelta) * 100
        };
    }
    
    /**
     * Test large DOM handling
     */
    async testLargeDOMHandling() {
        const elementCount = 1000;
        const fragment = document.createDocumentFragment();
        
        // Create large DOM structure
        for (let i = 0; i < elementCount; i++) {
            const container = document.createElement('div');
            container.className = 'large-dom-container';
            
            for (let j = 0; j < 5; j++) {
                const child = document.createElement('p');
                child.textContent = `Large DOM test element ${i}-${j}`;
                container.appendChild(child);
            }
            
            fragment.appendChild(container);
        }
        
        const startTime = performance.now();
        this.testContainer.appendChild(fragment);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            performance: {
                batchSize: 100,
                throttleDelay: 50
            }
        });
        
        // Transform large DOM
        const containers = this.testContainer.querySelectorAll('.large-dom-container');
        containers.forEach((container, index) => {
            quantumRTL.transformElement(container, `large-dom-${index}`);
        });
        
        const endTime = performance.now();
        const totalDuration = endTime - startTime;
        
        // Cleanup
        this.testContainer.innerHTML = '';
        quantumRTL.destroy();
        
        return {
            elementCount: elementCount * 6, // containers + children
            totalDuration: totalDuration,
            elementsPerSecond: (elementCount * 6) / (totalDuration / 1000),
            averageTimePerContainer: totalDuration / elementCount
        };
    }
    
    /**
     * Test CSS property support
     */
    async testCSSPropertySupport() {
        const testElement = document.createElement('div');
        this.testContainer.appendChild(testElement);
        
        const cssProperties = [
            'direction',
            'textAlign',
            'writingMode',
            'unicodeBidi',
            'textAlignLast',
            'fontFeatureSettings'
        ];
        
        const supportResults = {};
        
        cssProperties.forEach(property => {
            const supported = this.testCSSProperty(property);
            supportResults[property] = supported;
        });
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        
        return {
            cssProperties: supportResults,
            supportedCount: Object.values(supportResults).filter(Boolean).length,
            totalCount: cssProperties.length,
            supportPercentage: (Object.values(supportResults).filter(Boolean).length / cssProperties.length) * 100
        };
    }
    
    /**
     * Test RTL attribute support
     */
    async testRTLAttributeSupport() {
        const testElement = document.createElement('div');
        testElement.setAttribute('dir', 'rtl');
        this.testContainer.appendChild(testElement);
        
        const computedStyle = window.getComputedStyle(testElement);
        const direction = computedStyle.direction;
        
        // Test with different elements
        const elements = ['div', 'p', 'span', 'h1', 'h2', 'h3', 'article', 'section'];
        const rtlSupport = {};
        
        elements.forEach(tagName => {
            const element = document.createElement(tagName);
            element.setAttribute('dir', 'rtl');
            element.textContent = 'RTL test';
            this.testContainer.appendChild(element);
            
            const style = window.getComputedStyle(element);
            rtlSupport[tagName] = style.direction === 'rtl';
            
            this.testContainer.removeChild(element);
        });
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        
        return {
            direction: direction,
            rtlSupport: rtlSupport,
            supportedElements: Object.keys(rtlSupport).filter(key => rtlSupport[key]),
            totalElements: elements.length
        };
    }
    
    /**
     * Test font loading for Hebrew
     */
    async testFontLoading() {
        const hebrewFonts = [
            'Rubik',
            'Arial Hebrew',
            'David',
            'Miriam',
            'Times New Roman'
        ];
        
        const fontLoadResults = {};
        
        for (const font of hebrewFonts) {
            try {
                const loaded = await this.testFontLoading(font);
                fontLoadResults[font] = loaded;
            } catch (error) {
                fontLoadResults[font] = false;
            }
        }
        
        return {
            fontResults: fontLoadResults,
            loadedFonts: Object.keys(fontLoadResults).filter(font => fontLoadResults[font]),
            failedFonts: Object.keys(fontLoadResults).filter(font => !fontLoadResults[font]),
            loadPercentage: (Object.values(fontLoadResults).filter(Boolean).length / hebrewFonts.length) * 100
        };
    }
    
    /**
     * Test cross-browser consistency
     */
    async testCrossBrowserConsistency() {
        const testCases = [
            { selector: 'p', property: 'direction', value: 'rtl' },
            { selector: 'div', property: 'textAlign', value: 'right' },
            { selector: 'span', property: 'unicodeBidi', value: 'embed' }
        ];
        
        const consistencyResults = {};
        
        testCases.forEach(testCase => {
            const element = document.createElement(testCase.selector);
            element.style[testCase.property] = testCase.value;
            this.testContainer.appendChild(element);
            
            const computedStyle = window.getComputedStyle(element);
            const actualValue = computedStyle[testCase.property];
            
            consistencyResults[`${testCase.selector}-${testCase.property}`] = {
                expected: testCase.value,
                actual: actualValue,
                consistent: actualValue === testCase.value
            };
            
            this.testContainer.removeChild(element);
        });
        
        return {
            consistencyResults: consistencyResults,
            consistentTests: Object.values(consistencyResults).filter(result => result.consistent).length,
            totalTests: testCases.length,
            consistencyPercentage: (Object.values(consistencyResults).filter(result => result.consistent).length / testCases.length) * 100
        };
    }
    
    /**
     * Test dynamic content handling
     */
    async testDynamicContent() {
        const container = document.createElement('div');
        container.id = 'dynamic-content-container';
        this.testContainer.appendChild(container);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            mutationObserver: true
        });
        
        // Add dynamic content
        const newElement = document.createElement('p');
        newElement.textContent = 'Dynamic Hebrew content: טקסט דינמי';
        container.appendChild(newElement);
        
        // Wait for mutation observer
        await this.wait(100);
        
        const hasRTLAttribute = newElement.getAttribute('data-quantum-rtl') === 'true';
        
        // Cleanup
        this.testContainer.removeChild(container);
        quantumRTL.destroy();
        
        return {
            dynamicContentHandled: hasRTLAttribute,
            mutationObserverActive: quantumRTL.mutationObserver !== null
        };
    }
    
    /**
     * Test nested elements transformation
     */
    async testNestedElements() {
        const container = document.createElement('div');
        container.className = 'parent-container';
        container.innerHTML = `
            <div class="child-container">
                <p class="nested-text">טקסט בעברית</p>
                <span class="nested-span">עוד טקסט</span>
                <div class="deeply-nested">
                    <h3>כותרת בעברית</h3>
                    <p>טקסט נוסף</p>
                </div>
            </div>
        `;
        this.testContainer.appendChild(container);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false
        });
        
        // Transform parent container
        quantumRTL.transformElement(container, 'nested-parent');
        
        // Check nested elements
        const nestedElements = container.querySelectorAll('*');
        const transformedElements = Array.from(nestedElements).filter(el => 
            el.getAttribute('data-quantum-rtl') === 'true'
        );
        
        // Cleanup
        this.testContainer.removeChild(container);
        quantumRTL.destroy();
        
        return {
            totalNestedElements: nestedElements.length,
            transformedNestedElements: transformedElements.length,
            transformationRate: (transformedElements.length / nestedElements.length) * 100
        };
    }
    
    /**
     * Test mixed language content
     */
    async testMixedLanguageContent() {
        const mixedContent = document.createElement('div');
        mixedContent.innerHTML = `
            <p>English text with some עברית mixed in</p>
            <p>טקסט בעברית עם some English text</p>
            <p>Mixed content with numbers 123 and עברית</p>
            <p>100% עברית content here</p>
        `;
        this.testContainer.appendChild(mixedContent);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            hebrew: { autoDetect: true }
        });
        
        quantumRTL.transformElement(mixedContent, 'mixed-content');
        
        const paragraphs = mixedContent.querySelectorAll('p');
        const transformedParagraphs = Array.from(paragraphs).filter(p => 
            p.getAttribute('data-quantum-rtl') === 'true'
        );
        
        // Cleanup
        this.testContainer.removeChild(mixedContent);
        quantumRTL.destroy();
        
        return {
            totalParagraphs: paragraphs.length,
            transformedParagraphs: transformedParagraphs.length,
            detectionAccuracy: (transformedParagraphs.length / paragraphs.length) * 100
        };
    }
    
    /**
     * Test error recovery
     */
    async testErrorRecovery() {
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false
        });
        
        let errorHandled = false;
        
        try {
            // Try to transform null element
            quantumRTL.transformElement(null, 'error-test');
        } catch (error) {
            errorHandled = true;
        }
        
        try {
            // Try to transform undefined element
            quantumRTL.transformElement(undefined, 'error-test-2');
        } catch (error) {
            errorHandled = true;
        }
        
        // Try to transform invalid element
        const invalidElement = { notAnElement: true };
        try {
            quantumRTL.transformElement(invalidElement, 'error-test-3');
        } catch (error) {
            errorHandled = true;
        }
        
        quantumRTL.destroy();
        
        return {
            errorRecovery: errorHandled,
            systemStability: true
        };
    }
    
    /**
     * Test quantum entanglement feature
     */
    async testQuantumEntanglement() {
        const container1 = document.createElement('div');
        const container2 = document.createElement('div');
        
        container1.className = 'entangled-container-1';
        container2.className = 'entangled-container-2';
        
        container1.innerHTML = '<p>Entangled element 1</p>';
        container2.innerHTML = '<p>Entangled element 2</p>';
        
        this.testContainer.appendChild(container1);
        this.testContainer.appendChild(container2);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            quantum: { entanglement: true }
        });
        
        // Create entanglement
        quantumRTL.entangleElements(container1, container2, 'test-entanglement');
        
        // Transform one element
        quantumRTL.transformElement(container1, 'entangled-1');
        
        // Check if both elements are transformed
        const container1Transformed = container1.getAttribute('data-quantum-rtl') === 'true';
        const container2Transformed = container2.getAttribute('data-quantum-rtl') === 'true';
        
        // Cleanup
        this.testContainer.removeChild(container1);
        this.testContainer.removeChild(container2);
        quantumRTL.destroy();
        
        return {
            entanglementCreated: true,
            bothElementsTransformed: container1Transformed && container2Transformed,
            entanglementEffectiveness: (container1Transformed && container2Transformed) ? 100 : 0
        };
    }
    
    /**
     * Test animation and transitions
     */
    async testAnimationTransitions() {
        const testElement = document.createElement('div');
        testElement.textContent = 'Animation test element';
        testElement.style.transition = 'all 0.3s ease-in-out';
        this.testContainer.appendChild(testElement);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            animation: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        });
        
        // Measure transition time
        const startTime = performance.now();
        quantumRTL.transformElement(testElement, 'animation-test');
        
        // Wait for transition to complete
        await this.wait(400);
        
        const endTime = performance.now();
        const transitionDuration = endTime - startTime;
        
        const hasTransition = window.getComputedStyle(testElement).transition !== 'none';
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        quantumRTL.destroy();
        
        return {
            animationEnabled: true,
            transitionApplied: hasTransition,
            transitionDuration: transitionDuration,
            withinExpectedTime: transitionDuration < 500
        };
    }
    
    /**
     * Test responsive breakpoints
     */
    async testResponsiveBreakpoints() {
        const testElement = document.createElement('div');
        testElement.className = 'responsive-test-element';
        testElement.textContent = 'Responsive test';
        this.testContainer.appendChild(testElement);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            responsive: {
                enabled: true,
                breakpoints: {
                    mobile: 768,
                    tablet: 1024,
                    desktop: 1200
                },
                intensities: {
                    mobile: 80,
                    tablet: 70,
                    desktop: 60
                }
            }
        });
        
        // Test different viewport sizes
        const breakpoints = [
            { width: 400, name: 'mobile' },
            { width: 800, name: 'tablet' },
            { width: 1400, name: 'desktop' }
        ];
        
        const breakpointResults = {};
        
        for (const breakpoint of breakpoints) {
            // Simulate viewport width
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: breakpoint.width
            });
            
            quantumRTL.transformElement(testElement, `responsive-${breakpoint.name}`);
            
            const intensity = quantumRTL.getIntensityForBreakpoint(breakpoint.name);
            breakpointResults[breakpoint.name] = {
                width: breakpoint.width,
                intensity: intensity,
                transformed: testElement.getAttribute('data-quantum-rtl') === 'true'
            };
        }
        
        // Cleanup
        this.testContainer.removeChild(testElement);
        quantumRTL.destroy();
        
        return {
            breakpointResults: breakpointResults,
            responsiveEnabled: true,
            allBreakpointsTested: Object.keys(breakpointResults).length === breakpoints.length
        };
    }
    
    /**
     * Test custom selectors
     */
    async testCustomSelectors() {
        const testHTML = `
            <div class="custom-rtl-element">Custom RTL element</div>
            <div data-custom-rtl="true">Data attribute element</div>
            <div id="custom-rtl-id">ID selector element</div>
            <div lang="he">Language attribute element</div>
        `;
        
        const container = document.createElement('div');
        container.innerHTML = testHTML;
        this.testContainer.appendChild(container);
        
        const quantumRTL = new QuantumRTLTransformer({
            debug: false,
            autoTransform: false,
            selectors: {
                custom: [
                    '.custom-rtl-element',
                    '[data-custom-rtl="true"]',
                    '#custom-rtl-id',
                    '[lang="he"]'
                ]
            }
        });
        
        // Transform using custom selectors
        const customElements = container.querySelectorAll(quantumRTL.config.selectors.custom.join(','));
        customElements.forEach((element, index) => {
            quantumRTL.transformElement(element, `custom-${index}`);
        });
        
        const transformedCustomElements = Array.from(customElements).filter(el => 
            el.getAttribute('data-quantum-rtl') === 'true'
        );
        
        // Cleanup
        this.testContainer.removeChild(container);
        quantumRTL.destroy();
        
        return {
            totalCustomElements: customElements.length,
            transformedCustomElements: transformedCustomElements.length,
            customSelectorEffectiveness: (transformedCustomElements.length / customElements.length) * 100
        };
    }
    
    /**
     * Test control panel integration
     */
    async testControlPanelIntegration() {
        if (typeof window.QuantumRTLControlPanel === 'undefined') {
            return {
                controlPanelAvailable: false,
                integrationPossible: false
            };
        }
        
        const controlPanel = new QuantumRTLControlPanel();
        const isOpen = controlPanel.isOpen();
        const presets = controlPanel.getPresets();
        const controls = controlPanel.getControls();
        
        return {
            controlPanelAvailable: true,
            integrationPossible: true,
            isOpen: isOpen,
            presetsCount: presets.length,
            controlsCount: controls.length,
            panelInitialized: controlPanel.initialized
        };
    }
    
    /**
     * Test measurer integration
     */
    async testMeasurerIntegration() {
        if (typeof window.QuantumRTLMeasurer === 'undefined') {
            return {
                measurerAvailable: false,
                integrationPossible: false
            };
        }
        
        const measurer = new QuantumRTLMeasurer();
        const isActive = measurer.isActive();
        const measurementTools = measurer.getAvailableTools();
        
        return {
            measurerAvailable: true,
            integrationPossible: true,
            isActive: isActive,
            measurementTools: measurementTools,
            toolsCount: measurementTools.length
        };
    }
    
    /**
     * Test configuration loading
     */
    async testConfigurationLoading() {
        if (typeof window.QuantumRTLConfig === 'undefined') {
            return {
                configAvailable: false,
                loadingPossible: false
            };
        }
        
        const config = window.QuantumRTLConfig;
        const hasQuantumSettings = !!config.quantum;
        const hasPresets = !!config.presets;
        const hasPerformanceSettings = !!config.performance;
        
        return {
            configAvailable: true,
            loadingPossible: true,
            hasQuantumSettings: hasQuantumSettings,
            hasPresets: hasPresets,
            hasPerformanceSettings: hasPerformanceSettings,
            configKeys: Object.keys(config)
        };
    }
    
    /**
     * Test preset application
     */
    async testPresetApplication() {
        if (typeof window.QuantumRTLConfig === 'undefined') {
            return {
                presetsAvailable: false,
                applicationPossible: false
            };
        }
        
        const config = window.QuantumRTLConfig;
        const presets = Object.keys(config.presets);
        const presetResults = {};
        
        presets.forEach(presetName => {
            const preset = config.presets[presetName];
            const hasIntensity = !!preset.quantum?.intensity;
            const hasSpeed = !!preset.quantum?.speed;
            
            presetResults[presetName] = {
                hasIntensity: hasIntensity,
                hasSpeed: hasSpeed,
                intensity: preset.quantum?.intensity,
                speed: preset.quantum?.speed
            };
        });
        
        return {
            presetsAvailable: true,
            applicationPossible: true,
            availablePresets: presets,
            presetResults: presetResults,
            totalPresets: presets.length
        };
    }
    
    // Helper methods
    
    /**
     * Get current memory usage
     */
    getMemoryUsage() {
        if (performance.memory) {
            return performance.memory.usedJSHeapSize;
        }
        return 0;
    }
    
    /**
     * Detect Hebrew text
     */
    detectHebrew(text) {
        const hebrewRegex = /[\u0590-\u05FF]/;
        return hebrewRegex.test(text);
    }
    
    /**
     * Test CSS property support
     */
    testCSSProperty(property) {
        const testElement = document.createElement('div');
        const prefixedProperties = [
            property,
            `webkit${property.charAt(0).toUpperCase() + property.slice(1)}`,
            `moz${property.charAt(0).toUpperCase() + property.slice(1)}`,
            `ms${property.charAt(0).toUpperCase() + property.slice(1)}`
        ];
        
        for (const prefixedProperty of prefixedProperties) {
            if (prefixedProperty in testElement.style) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Test font loading
     */
    async testFontLoading(fontName) {
        try {
            await document.fonts.load(`16px "${fontName}"`);
            return document.fonts.check(`16px "${fontName}"`);
        } catch (error) {
            return false;
        }
    }
    
    /**
     * Wait for specified time
     */
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * Log test result
     */
    logTestResult(testName, result) {
        const status = result.passed ? '✅' : '❌';
        const duration = result.duration ? `(${result.duration.toFixed(2)}ms)` : '';
        console.log(`${status} ${testName} ${duration}`);
        
        if (!result.passed && result.error) {
            console.error(`   Error: ${result.error}`);
        }
    }
    
    /**
     * Generate comprehensive test report
     */
    generateReport(results, totalDuration) {
        const passedTests = Array.from(results.values()).filter(result => result.passed).length;
        const failedTests = Array.from(results.values()).filter(result => !result.passed).length;
        const totalTests = results.size;
        const passRate = (passedTests / totalTests) * 100;
        
        console.log('\n' + '='.repeat(60));
        console.log('🔮 QUANTUM RTL TEST SUITE REPORT');
        console.log('='.repeat(60));
        console.log(`Total Tests: ${totalTests}`);
        console.log(`Passed: ${passedTests} ✅`);
        console.log(`Failed: ${failedTests} ❌`);
        console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
        console.log(`Total Duration: ${totalDuration.toFixed(2)}ms`);
        
        // Performance summary
        const performanceTests = Array.from(results.entries())
            .filter(([name]) => name.includes('speed') || name.includes('memory') || name.includes('performance'))
            .map(([name, result]) => ({ name, result }));
        
        if (performanceTests.length > 0) {
            console.log('\n📊 PERFORMANCE SUMMARY:');
            performanceTests.forEach(({ name, result }) => {
                if (result.passed && result.result) {
                    console.log(`  ${name}: ${JSON.stringify(result.result)}`);
                }
            });
        }
        
        // Failed tests details
        if (failedTests > 0) {
            console.log('\n❌ FAILED TESTS:');
            for (const [testName, result] of results) {
                if (!result.passed) {
                    console.log(`  ${testName}: ${result.error || 'Unknown error'}`);
                }
            }
        }
        
        console.log('\n' + '='.repeat(60));
        
        return {
            totalTests,
            passedTests,
            failedTests,
            passRate,
            totalDuration,
            results
        };
    }
    
    /**
     * Cleanup test resources
     */
    cleanup() {
        if (this.testContainer && this.testContainer.parentNode) {
            this.testContainer.parentNode.removeChild(this.testContainer);
        }
        
        this.tests.clear();
        this.results.clear();
        this.performanceMetrics.clear();
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumRTLTestSuite;
} else if (typeof window !== 'undefined') {
    window.QuantumRTLTestSuite = QuantumRTLTestSuite;
}

// Auto-run tests if in development mode
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    document.addEventListener('DOMContentLoaded', async () => {
        console.log('🧪 Quantum RTL Test Suite - Development Mode');
        
        // Create test suite instance
        const testSuite = new QuantumRTLTestSuite();
        
        // Add test button to page
        const testButton = document.createElement('button');
        testButton.textContent = 'Run Quantum RTL Tests';
        testButton.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 10000;
            padding: 10px 20px;
            background: #5d5ad6;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Rubik', sans-serif;
        `;
        
        testButton.addEventListener('click', async () => {
            testButton.disabled = true;
            testButton.textContent = 'Running tests...';
            
            try {
                const results = await testSuite.runAllTests();
                console.log('Test results:', results);
                
                testButton.textContent = 'Tests completed!';
                setTimeout(() => {
                    testButton.textContent = 'Run Quantum RTL Tests';
                    testButton.disabled = false;
                }, 2000);
            } catch (error) {
                console.error('Test suite error:', error);
                testButton.textContent = 'Tests failed!';
                setTimeout(() => {
                    testButton.textContent = 'Run Quantum RTL Tests';
                    testButton.disabled = false;
                }, 2000);
            }
        });
        
        document.body.appendChild(testButton);
        
        // Auto-run tests on page load (optional)
        // await testSuite.runAllTests();
    });
}