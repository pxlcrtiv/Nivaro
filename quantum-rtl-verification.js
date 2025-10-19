/**
 * Quantum RTL Verification Script
 * This script verifies that all quantum-level RTL components are properly loaded and functioning
 * on the who-we-are.html page
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('%c🔍 Quantum RTL Verification Starting...', 'font-size: 16px; color: #00d4ff; font-weight: bold');
        
        // Verify document language and direction
        verifyDocumentSettings();
        
        // Check if all required scripts are loaded
        checkRequiredScripts();
        
        // Verify quantum configuration
        verifyQuantumConfiguration();
        
        // Check core quantum RTL functionality
        verifyQuantumRTLFunctionality();
        
        // Test element-level transformations
        testElementTransformations();
        
        // Summarize verification results
        summarizeVerification();
        
        console.log('%c✅ Quantum RTL Verification Complete', 'font-size: 16px; color: #4CAF50; font-weight: bold');
        console.log('%cPress Ctrl+Shift+T to activate the Quantum RTL Test Interface', 'color: #00d4ff');
    });
    
    /**
     * Verify document language and direction settings
     */
    function verifyDocumentSettings() {
        const html = document.documentElement;
        const lang = html.lang;
        const dir = html.getAttribute('dir');
        
        console.group('%c📄 Document Settings', 'color: #00d4ff');
        console.log('Language:', lang);
        console.log('Direction:', dir);
        
        if (lang === 'he' && dir === 'rtl') {
            console.log('%c✓ Correct Hebrew RTL settings detected', 'color: #4CAF50');
        } else {
            console.warn('%c⚠️ Document language or direction may need adjustment', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Check if all required quantum RTL scripts are loaded
     */
    function checkRequiredScripts() {
        const requiredScripts = [
            'quantum-rtl-config.js',
            'quantum-rtl.js',
            'custom-element-rtl.js',
            'rtl-console-helper.js',
            'rtl-test-demo.js',
            'who-we-are-rtl-init.js',
            'quantum-rtl-test-who-we-are.js'
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
                console.log('%c✓ ' + script, 'color: #4CAF50');
            } else {
                console.warn('%c⚠️ ' + script + ' not found', 'color: #FF9800');
                allLoaded = false;
            }
        });
        
        if (allLoaded) {
            console.log('%c✓ All required quantum RTL scripts are loaded', 'color: #4CAF50');
        }
        
        console.groupEnd();
    }
    
    /**
     * Verify quantum RTL configuration
     */
    function verifyQuantumConfiguration() {
        console.group('%c⚙️ Quantum Configuration', 'color: #00d4ff');
        
        if (window.QuantumRTLConfig) {
            console.log('%c✓ QuantumRTLConfig is available', 'color: #4CAF50');
            
            // Check key configuration properties
            const keyProperties = [
                'quantumCore.intensity',
                'quantumCore.speed',
                'hebrewLanguage.enabled',
                'elementSelectors',
                'cssProperties'
            ];
            
            keyProperties.forEach(prop => {
                const value = getNestedProperty(window.QuantumRTLConfig, prop);
                if (value !== undefined) {
                    console.log('  - ' + prop + ':', value);
                } else {
                    console.warn('  - ' + prop + ': Not configured');
                }
            });
            
            // Check if Hebrew optimization is enabled
            if (window.QuantumRTLConfig.hebrewLanguage && window.QuantumRTLConfig.hebrewLanguage.enabled) {
                console.log('%c✓ Hebrew language optimization is enabled', 'color: #4CAF50');
            }
            
        } else {
            console.warn('%c⚠️ QuantumRTLConfig is not available', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Verify quantum RTL core functionality
     */
    function verifyQuantumRTLFunctionality() {
        console.group('%c🧠 Quantum RTL Core Functionality', 'color: #00d4ff');
        
        if (window.quantumRTL) {
            console.log('%c✓ quantumRTL object is available', 'color: #4CAF50');
            
            // Check key methods
            const keyMethods = ['initialize', 'transformElement', 'reinitialize', 'getQuantumState'];
            
            let methodsAvailable = true;
            keyMethods.forEach(method => {
                if (typeof window.quantumRTL[method] === 'function') {
                    console.log('  - ' + method + '() method exists');
                } else {
                    console.warn('  - ' + method + '() method is missing');
                    methodsAvailable = false;
                }
            });
            
            if (methodsAvailable) {
                console.log('%c✓ All core quantum RTL methods are available', 'color: #4CAF50');
            }
            
            // Try to get quantum state if possible
            if (typeof window.quantumRTL.getQuantumState === 'function') {
                try {
                    const quantumState = window.quantumRTL.getQuantumState();
                    console.log('  - Current quantum state:', quantumState);
                } catch (error) {
                    console.warn('  - Could not retrieve quantum state:', error.message);
                }
            }
            
        } else {
            console.warn('%c⚠️ quantumRTL object is not available', 'color: #FF9800');
        }
        
        console.groupEnd();
    }
    
    /**
     * Test element-level transformations
     */
    function testElementTransformations() {
        console.group('%c🔄 Element-Level Transformations', 'color: #00d4ff');
        
        // Check if any elements have been transformed
        const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]');
        console.log('Number of transformed elements:', transformedElements.length);
        
        if (transformedElements.length > 0) {
            console.log('%c✓ Element-level transformations detected', 'color: #4CAF50');
            
            // Log a sample of transformed elements
            const sampleSize = Math.min(3, transformedElements.length);
            for (let i = 0; i < sampleSize; i++) {
                const element = transformedElements[i];
                const tagName = element.tagName.toLowerCase();
                const id = element.id ? '#' + element.id : '';
                const classes = element.className ? '.' + element.className.split(' ').join('.') : '';
                console.log('  - Sample ' + (i+1) + ': ' + tagName + id + classes);
            }
            
        } else {
            console.warn('%c⚠️ No element-level transformations detected yet', 'color: #FF9800');
        }
        
        // Check for Hebrew-optimized elements
        const hebrewElements = document.querySelectorAll('[data-hebrew-optimized="true"]');
        console.log('Number of Hebrew-optimized elements:', hebrewElements.length);
        
        if (hebrewElements.length > 0) {
            console.log('%c✓ Hebrew optimization detected on elements', 'color: #4CAF50');
        }
        
        console.groupEnd();
    }
    
    /**
     * Summarize verification results
     */
    function summarizeVerification() {
        console.group('%c📊 Verification Summary', 'color: #00d4ff; font-weight: bold');
        
        const html = document.documentElement;
        const lang = html.lang;
        const dir = html.getAttribute('dir');
        const hasConfig = !!window.QuantumRTLConfig;
        const hasCore = !!window.quantumRTL;
        const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]').length;
        
        let overallStatus = '✅ SUCCESS';
        let statusColor = '#4CAF50';
        
        if (!(lang === 'he' && dir === 'rtl')) {
            overallStatus = '⚠️ NEEDS ATTENTION';
            statusColor = '#FF9800';
        } else if (!hasConfig || !hasCore) {
            overallStatus = '⚠️ NEEDS ATTENTION';
            statusColor = '#FF9800';
        }
        
        console.log('%cOverall Status: ' + overallStatus, 'color: ' + statusColor + '; font-weight: bold');
        console.log('- Document: ' + lang.toUpperCase() + ' / ' + dir.toUpperCase());
        console.log('- Quantum Config: ' + (hasConfig ? 'Available' : 'Missing'));
        console.log('- Quantum Core: ' + (hasCore ? 'Available' : 'Missing'));
        console.log('- Transformed Elements: ' + transformedElements);
        
        // Provide usage instructions
        console.log('\n%c💡 Usage Instructions', 'color: #00d4ff');
        console.log('1. Press Ctrl+Shift+T to activate the Quantum RTL Test Interface');
        console.log('2. Use the test interface to visualize and test quantum RTL transformations');
        console.log('3. Check the console for detailed diagnostics and statistics');
        
        console.groupEnd();
    }
    
    /**
     * Helper function to get nested properties from an object
     */
    function getNestedProperty(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }
})();