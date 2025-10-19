// Nivaro Hebrew Website - Quantum RTL Verification for Services Page

/**
 * quantum-rtl-verification-services.js
 * This script verifies that all quantum-level RTL components are properly loaded and functioning
 * on the services.html page
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('%c🔍 Quantum RTL Verification for Services Page Starting...', 'font-size: 16px; color: #00d4ff; font-weight: bold');
        
        // Record start time for performance measurement
        const startTime = performance.now();
        
        // Initialize verification results
        const verificationResults = {
            documentSettings: {
                passed: false,
                details: {}
            },
            requiredScripts: {
                passed: false,
                loaded: [],
                missing: []
            },
            quantumConfiguration: {
                passed: false,
                details: {}
            },
            rtlImplementation: {
                passed: false,
                transformedElements: 0,
                totalElements: 0,
                transformationRatio: 0
            },
            interactiveElements: {
                passed: false,
                checked: 0,
                transformed: 0
            },
            performance: {
                passed: false,
                verificationTime: 0
            },
            timestamp: new Date().toISOString(),
            page: 'services.html'
        };
        
        // Verify document language and direction settings
        verifyDocumentSettings(verificationResults);
        
        // Check if all required quantum RTL scripts are loaded
        checkRequiredScripts(verificationResults);
        
        // Verify quantum configuration
        verifyQuantumConfiguration(verificationResults);
        
        // Check core quantum RTL functionality
        verifyRTLImplementation(verificationResults);
        
        // Test interactive elements
        testInteractiveElements(verificationResults);
        
        // Measure performance
        measurePerformance(verificationResults, startTime);
        
        // Summarize verification results
        summarizeVerification(verificationResults);
        
        // Store results in localStorage for reference
        localStorage.setItem('quantum-rtl-verification-results', JSON.stringify(verificationResults));
        
        console.log('%c✅ Quantum RTL Verification for Services Page Complete', 'font-size: 16px; color: #4CAF50; font-weight: bold');
        console.log('%cPress Ctrl+Shift+T to activate the Quantum RTL Test Interface', 'color: #00d4ff');
    });
    
    /**
     * Verify document language and direction settings
     * @param {Object} results - Verification results object
     */
    function verifyDocumentSettings(results) {
        const html = document.documentElement;
        const lang = html.lang;
        const dir = html.getAttribute('dir');
        
        console.group('%c📄 Document Settings', 'color: #00d4ff');
        console.log('Language:', lang);
        console.log('Direction:', dir);
        
        results.documentSettings.details = {
            language: lang,
            direction: dir
        };
        
        if (lang === 'he' && dir === 'rtl') {
            results.documentSettings.passed = true;
            console.log('%c✓ Correct Hebrew RTL settings detected', 'color: #4CAF50');
        } else {
            results.documentSettings.passed = false;
            console.warn('%c⚠️ Document language or direction may need adjustment', 'color: #FF9800');
            
            // Attempt to fix document settings if they're incorrect
            attemptFixDocumentSettings();
        }
        
        console.groupEnd();
    }
    
    /**
     * Attempt to fix document language and direction settings
     */
    function attemptFixDocumentSettings() {
        const html = document.documentElement;
        
        try {
            // Set correct language and direction
            html.lang = 'he';
            html.setAttribute('dir', 'rtl');
            
            console.log('%c🔧 Attempted to fix document settings: lang="he", dir="rtl"', 'color: #2196F3');
        } catch (error) {
            console.error('❌ Error attempting to fix document settings:', error);
        }
    }
    
    /**
     * Check if all required quantum RTL scripts are loaded
     * @param {Object} results - Verification results object
     */
    function checkRequiredScripts(results) {
        const requiredScripts = [
            'quantum-rtl-config.js',
            'quantum-rtl.js',
            'custom-element-rtl.js',
            'rtl-console-helper.js',
            'rtl-test-demo.js',
            'services-rtl-init.js',
            'quantum-rtl-test-services.js'
        ];
        
        console.group('%c📜 Required Scripts', 'color: #00d4ff');
        
        const scripts = document.querySelectorAll('script[src]');
        const loadedScripts = Array.from(scripts).map(script => 
            script.src.split('/').pop()
        );
        
        let allLoaded = true;
        
        requiredScripts.forEach(script => {
            const isLoaded = loadedScripts.some(loaded => loaded.includes(script));
            
            if (isLoaded) {
                results.requiredScripts.loaded.push(script);
                console.log('%c✓ ' + script, 'color: #4CAF50');
            } else {
                results.requiredScripts.missing.push(script);
                console.warn('%c⚠️ ' + script + ' not found', 'color: #FF9800');
                allLoaded = false;
            }
        });
        
        results.requiredScripts.passed = allLoaded;
        
        if (allLoaded) {
            console.log('%c✓ All required quantum RTL scripts are loaded', 'color: #4CAF50');
        } else {
            console.log('%c⚠️ ' + results.requiredScripts.missing.length + ' required scripts are missing', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Verify quantum RTL configuration
     * @param {Object} results - Verification results object
     */
    function verifyQuantumConfiguration(results) {
        console.group('%c⚙️ Quantum Configuration', 'color: #00d4ff');
        
        if (window.QuantumRTLConfig) {
            results.quantumConfiguration.passed = true;
            console.log('%c✓ QuantumRTLConfig is available', 'color: #4CAF50');
            
            // Check key configuration properties
            const keyProperties = [
                'quantum.intensity',
                'quantum.speed',
                'quantum.coherence',
                'quantum.entanglement',
                'hebrew.autoDetect',
                'hebrew.languageCode',
                'selectors.default',
                'selectors.interactive',
                'selectors.layout',
                'performance.lazyLoad'
            ];
            
            keyProperties.forEach(prop => {
                const value = getNestedProperty(window.QuantumRTLConfig, prop);
                
                if (value !== undefined) {
                    results.quantumConfiguration.details[prop] = value;
                    console.log('  - ' + prop + ': ' + (typeof value === 'object' ? JSON.stringify(value) : value));
                } else {
                    console.warn('  - ' + prop + ': Not configured');
                }
            });
            
            // Check if Hebrew optimization is enabled
            if (window.QuantumRTLConfig.hebrew && window.QuantumRTLConfig.hebrew.autoDetect) {
                console.log('%c✓ Hebrew language optimization is enabled', 'color: #4CAF50');
            }
            
        } else {
            results.quantumConfiguration.passed = false;
            console.warn('%c⚠️ QuantumRTLConfig is not available', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Verify RTL implementation on the page
     * @param {Object} results - Verification results object
     */
    function verifyRTLImplementation(results) {
        console.group('%c🧩 RTL Implementation', 'color: #00d4ff');
        
        // Count transformed elements
        const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]');
        const totalElements = document.querySelectorAll('*');
        const transformationRatio = totalElements.length > 0 ? 
            (transformedElements.length / totalElements.length * 100).toFixed(2) : 0;
        
        results.rtlImplementation.transformedElements = transformedElements.length;
        results.rtlImplementation.totalElements = totalElements.length;
        results.rtlImplementation.transformationRatio = transformationRatio;
        
        // Consider implementation successful if at least 80% of elements are transformed
        results.rtlImplementation.passed = transformationRatio >= 80;
        
        console.log(`Transformed elements: ${transformedElements.length} / ${totalElements.length} (${transformationRatio}%)`);
        
        if (results.rtlImplementation.passed) {
            console.log('%c✓ RTL implementation is sufficient', 'color: #4CAF50');
        } else {
            console.warn('%c⚠️ RTL implementation may be insufficient', 'color: #FF9800');
        }
        
        // Check specific service page elements
        checkServicePageElements();
        
        console.groupEnd();
    }
    
    /**
     * Check service page specific elements
     */
    function checkServicePageElements() {
        const elementTypes = [
            { selector: '.service-card, [class*="service-card"]', name: 'Service Cards' },
            { selector: '.service-features, [class*="features"]', name: 'Service Features' },
            { selector: '.service-navigation, .service-tabs', name: 'Service Navigation' },
            { selector: 'header, [class*="header"]', name: 'Header Elements' },
            { selector: 'nav, [class*="nav"]', name: 'Navigation Elements' },
            { selector: '.hebrew-content', name: 'Hebrew Content Elements' }
        ];
        
        elementTypes.forEach(type => {
            const elements = document.querySelectorAll(type.selector);
            const transformedCount = Array.from(elements).filter(el => 
                el.hasAttribute('data-quantum-rtl')
            ).length;
            
            console.log(`${type.name}: ${transformedCount} / ${elements.length} transformed`);
            
            // Highlight if less than 70% of a specific element type is transformed
            if (elements.length > 0 && (transformedCount / elements.length) < 0.7) {
                console.warn(`⚠️ ${type.name} may need additional transformation`);
            }
        });
    }
    
    /**
     * Test interactive elements for proper RTL behavior
     * @param {Object} results - Verification results object
     */
    function testInteractiveElements(results) {
        console.group('%c🎯 Interactive Elements', 'color: #00d4ff');
        
        const interactiveSelectors = [
            'button', 
            'a', 
            'input', 
            'textarea', 
            'select',
            '.service-button',
            '[class*="button"]'
        ];
        
        let totalChecked = 0;
        let totalTransformed = 0;
        
        interactiveSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            totalChecked += elements.length;
            
            elements.forEach(element => {
                if (element.hasAttribute('data-quantum-rtl')) {
                    totalTransformed++;
                }
            });
        });
        
        results.interactiveElements.checked = totalChecked;
        results.interactiveElements.transformed = totalTransformed;
        
        // Consider interactive elements successful if at least 90% are transformed
        results.interactiveElements.passed = totalChecked > 0 ? 
            (totalTransformed / totalChecked) >= 0.9 : true;
        
        console.log(`Interactive elements: ${totalTransformed} / ${totalChecked} transformed`);
        
        if (results.interactiveElements.passed) {
            console.log('%c✓ Interactive elements are properly transformed', 'color: #4CAF50');
        } else {
            console.warn('%c⚠️ Some interactive elements may need additional transformation', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Measure verification performance
     * @param {Object} results - Verification results object
     * @param {number} startTime - Start time of verification
     */
    function measurePerformance(results, startTime) {
        const endTime = performance.now();
        const verificationTime = endTime - startTime;
        
        results.performance.verificationTime = verificationTime;
        
        // Consider performance good if verification completes in under 500ms
        results.performance.passed = verificationTime < 500;
        
        console.log(`Verification completed in ${verificationTime.toFixed(2)}ms`);
    }
    
    /**
     * Summarize verification results
     * @param {Object} results - Verification results object
     */
    function summarizeVerification(results) {
        console.group('%c📊 Verification Summary', 'color: #00d4ff; font-weight: bold');
        
        // Calculate overall pass/fail status
        const overallPassed = 
            results.documentSettings.passed &&
            results.requiredScripts.passed &&
            results.quantumConfiguration.passed &&
            results.rtlImplementation.passed &&
            results.interactiveElements.passed &&
            results.performance.passed;
        
        // Create summary table
        const summaryItems = [
            { name: 'Document Settings', status: results.documentSettings.passed ? '✅ Passed' : '⚠️ Warning' },
            { name: 'Required Scripts', status: results.requiredScripts.passed ? '✅ Passed' : `⚠️ ${results.requiredScripts.missing.length} Missing` },
            { name: 'Quantum Configuration', status: results.quantumConfiguration.passed ? '✅ Passed' : '⚠️ Warning' },
            { name: 'RTL Implementation', status: results.rtlImplementation.passed ? '✅ Passed' : `⚠️ ${results.rtlImplementation.transformationRatio}% Coverage` },
            { name: 'Interactive Elements', status: results.interactiveElements.passed ? '✅ Passed' : '⚠️ Warning' },
            { name: 'Performance', status: results.performance.passed ? '✅ Good' : `⚠️ ${results.performance.verificationTime.toFixed(2)}ms` },
            { name: 'Overall Status', status: overallPassed ? '✅ PASSED' : '❌ FAILED' }
        ];
        
        summaryItems.forEach(item => {
            const statusColor = item.status.includes('✅') ? '#4CAF50' : 
                              item.status.includes('⚠️') ? '#FF9800' : '#FF6B6B';
            
            console.log(`%c${item.name}: ${item.status}`, `color: ${statusColor}`);
        });
        
        // Provide recommendations based on results
        if (!overallPassed) {
            console.log('\n%c💡 Recommendations:', 'color: #2196F3; font-weight: bold');
            
            if (!results.documentSettings.passed) {
                console.log('  - Ensure document has lang="he" and dir="rtl" attributes');
            }
            
            if (results.requiredScripts.missing.length > 0) {
                console.log(`  - Add missing scripts: ${results.requiredScripts.missing.join(', ')}`);
            }
            
            if (!results.rtlImplementation.passed) {
                console.log('  - Increase transformation coverage for better RTL experience');
                console.log('  - Run \'window.servicesRTLControls.reinitialize()\' in console to retry transformation');
            }
            
            console.log('  - Press Ctrl+Shift+T to activate the Quantum RTL Test Interface for detailed diagnostics');
        }
        
        console.groupEnd();
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
    
    // Expose verification API for debugging
    window.quantumRTLVerification = {
        getResults: function() {
            return JSON.parse(localStorage.getItem('quantum-rtl-verification-results') || '{}');
        },
        
        runAgain: function() {
            console.log('🔄 Running quantum RTL verification again...');
            // Reload the page to rerun verification
            location.reload();
        },
        
        fixDocumentSettings: function() {
            attemptFixDocumentSettings();
        }
    };
})();