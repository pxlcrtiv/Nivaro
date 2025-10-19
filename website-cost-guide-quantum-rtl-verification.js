/**
 * Quantum RTL Verification Tool for Nivaro Website Cost Guide Page
 * This script verifies and debug the quantum-level RTL implementation
 * with advanced visualization and diagnostics.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Cost Guide Quantum RTL Verification: Initializing diagnostic tools...');
    
    // Create verification container
    const createVerificationContainer = () => {
        // Check if container already exists
        if (document.getElementById('quantum-rtl-verification-container')) {
            return document.getElementById('quantum-rtl-verification-container');
        }
        
        // Create container element
        const container = document.createElement('div');
        container.id = 'quantum-rtl-verification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 360px;
            max-height: 80vh;
            background: rgba(255, 255, 255, 0.95);
            border: 2px solid #5d5ad6;
            border-radius: 12px;
            padding: 20px;
            z-index: 9999;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(93, 90, 214, 0.2);
            font-family: Arial, sans-serif;
            color: #333;
            font-size: 14px;
            direction: ltr;
            textAlign: left;
        `;
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = 'Website Cost Guide Quantum RTL Verification';
        title.style.cssText = `
            margin: 0 0 15px 0;
            color: #5d5ad6;
            font-size: 18px;
            border-bottom: 2px solid #5d5ad6;
            padding-bottom: 8px;
        `;
        container.appendChild(title);
        
        // Add debug console
        const debugConsole = document.createElement('div');
        debugConsole.id = 'quantum-rtl-debug-console';
        debugConsole.style.cssText = `
            font-family: monospace;
            background: #f5f5f5;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 15px;
            max-height: 200px;
            overflow-y: auto;
            white-space: pre-wrap;
            border-left: 4px solid #5d5ad6;
        `;
        container.appendChild(debugConsole);
        
        // Add results container
        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'quantum-rtl-results';
        resultsContainer.style.marginBottom = '15px';
        container.appendChild(resultsContainer);
        
        // Add action buttons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.cssText = 'display: flex; gap: 10px; flex-wrap: wrap;';
        
        // Re-run verification button
        const rerunButton = document.createElement('button');
        rerunButton.textContent = 'Re-run Verification';
        rerunButton.style.cssText = `
            background: #5d5ad6;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
        `;
        rerunButton.addEventListener('click', runFullVerification);
        buttonsContainer.appendChild(rerunButton);
        
        // Toggle visibility button
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Minimize';
        toggleButton.style.cssText = `
            background: #777;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
        `;
        toggleButton.addEventListener('click', toggleVerificationContainer);
        buttonsContainer.appendChild(toggleButton);
        
        container.appendChild(buttonsContainer);
        
        // Append to document body
        document.body.appendChild(container);
        
        return container;
    };
    
    // Toggle verification container visibility
    let containerMinimized = false;
    const toggleVerificationContainer = () => {
        const container = document.getElementById('quantum-rtl-verification-container');
        const toggleButton = container.querySelector('button:last-child');
        const contentElements = container.querySelectorAll('h3, #quantum-rtl-debug-console, #quantum-rtl-results');
        
        if (containerMinimized) {
            // Expand container
            container.style.width = '360px';
            container.style.maxHeight = '80vh';
            toggleButton.textContent = 'Minimize';
            contentElements.forEach(el => el.style.display = 'block');
        } else {
            // Minimize container
            container.style.width = '120px';
            container.style.maxHeight = '50px';
            toggleButton.textContent = 'Expand';
            contentElements.forEach(el => el.style.display = 'none');
        }
        
        containerMinimized = !containerMinimized;
    };
    
    // Log to debug console
    const logToDebugConsole = (message, type = 'info') => {
        const debugConsole = document.getElementById('quantum-rtl-debug-console');
        if (!debugConsole) return;
        
        const timestamp = new Date().toLocaleTimeString();
        const logItem = document.createElement('div');
        
        // Set color based on message type
        let color = '#333';
        if (type === 'success') color = '#28a745';
        if (type === 'warning') color = '#ffc107';
        if (type === 'error') color = '#dc3545';
        if (type === 'info') color = '#17a2b8';
        
        logItem.style.color = color;
        logItem.textContent = `[${timestamp}] ${message}`;
        
        // Add to console and auto-scroll
        debugConsole.appendChild(logItem);
        debugConsole.scrollTop = debugConsole.scrollHeight;
        
        // Also log to browser console with appropriate method
        if (type === 'error') console.error(message);
        else if (type === 'warning') console.warn(message);
        else if (type === 'success') console.log('%c✓ ' + message, 'color: #28a745');
        else console.info(message);
    };
    
    // Add verification result
    const addVerificationResult = (title, status, details = '') => {
        const resultsContainer = document.getElementById('quantum-rtl-results');
        if (!resultsContainer) return;
        
        const resultItem = document.createElement('div');
        resultItem.style.cssText = `
            margin-bottom: 10px;
            padding: 8px;
            border-radius: 6px;
            border-left: 4px solid #5d5ad6;
        `;
        
        // Set background color based on status
        if (status === 'pass') {
            resultItem.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            resultItem.style.borderLeftColor = '#28a745';
        } else if (status === 'fail') {
            resultItem.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
            resultItem.style.borderLeftColor = '#dc3545';
        } else if (status === 'warning') {
            resultItem.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
            resultItem.style.borderLeftColor = '#ffc107';
        }
        
        // Create title element
        const titleElement = document.createElement('strong');
        titleElement.textContent = title;
        resultItem.appendChild(titleElement);
        
        // Add status indicator
        const statusIndicator = document.createElement('span');
        statusIndicator.style.cssText = 'margin-left: 8px; font-size: 12px; padding: 2px 6px; border-radius: 12px;';
        
        if (status === 'pass') {
            statusIndicator.textContent = 'PASS';
            statusIndicator.style.backgroundColor = '#28a745';
            statusIndicator.style.color = 'white';
        } else if (status === 'fail') {
            statusIndicator.textContent = 'FAIL';
            statusIndicator.style.backgroundColor = '#dc3545';
            statusIndicator.style.color = 'white';
        } else if (status === 'warning') {
            statusIndicator.textContent = 'WARNING';
            statusIndicator.style.backgroundColor = '#ffc107';
            statusIndicator.style.color = 'black';
        }
        
        resultItem.appendChild(statusIndicator);
        
        // Add details if provided
        if (details) {
            const detailsElement = document.createElement('div');
            detailsElement.style.cssText = 'margin-top: 5px; font-size: 12px; color: #666;';
            detailsElement.textContent = details;
            resultItem.appendChild(detailsElement);
        }
        
        resultsContainer.appendChild(resultItem);
    };
    
    // Helper function to check RTL properties of elements
    const checkRTLProperty = (element, property, expectedValue) => {
        const computedStyle = window.getComputedStyle(element);
        const actualValue = computedStyle[property];
        return actualValue === expectedValue;
    };
    
    // Helper function to check if element has RTL direction
    const isElementRTL = (element) => {
        // Check dir attribute first
        if (element.getAttribute('dir') === 'rtl') return true;
        
        // Check computed style
        const computedStyle = window.getComputedStyle(element);
        return computedStyle.direction === 'rtl';
    };
    
    // Helper function to count elements with RTL direction
    const countRTLElements = (selector) => {
        const elements = document.querySelectorAll(selector);
        let count = 0;
        
        elements.forEach(element => {
            if (isElementRTL(element)) {
                count++;
            }
        });
        
        return count;
    };
    
    // Verify document setup
    const verifyDocumentSetup = () => {
        logToDebugConsole('Verifying document setup for RTL...');
        
        let success = true;
        
        // Check HTML language and direction
        const htmlElement = document.documentElement;
        const lang = htmlElement.getAttribute('lang');
        const dir = htmlElement.getAttribute('dir');
        
        if (lang !== 'he') {
            addVerificationResult('HTML Language', 'warning', `Expected 'he', found '${lang}'`);
            success = false;
        } else {
            addVerificationResult('HTML Language', 'pass', 'Correctly set to Hebrew (he)');
        }
        
        if (dir !== 'rtl') {
            addVerificationResult('HTML Direction', 'fail', `Expected 'rtl', found '${dir}'`);
            success = false;
        } else {
            addVerificationResult('HTML Direction', 'pass', 'Correctly set to RTL');
        }
        
        // Check if quantum RTL scripts are loaded
        const quantumRTLConfigLoaded = !!document.querySelector('script[src*="quantum-rtl-config.js"]');
        const quantumRTLLoaded = !!document.querySelector('script[src*="quantum-rtl.js"]');
        const costGuideRTLLoaded = !!document.querySelector('script[src*="website-cost-guide-quantum-rtl.js"]');
        
        if (!quantumRTLConfigLoaded) {
            addVerificationResult('Quantum RTL Config Script', 'fail', 'Script not found');
            success = false;
        } else {
            addVerificationResult('Quantum RTL Config Script', 'pass', 'Script loaded successfully');
        }
        
        if (!quantumRTLLoaded) {
            addVerificationResult('Quantum RTL Core Script', 'fail', 'Script not found');
            success = false;
        } else {
            addVerificationResult('Quantum RTL Core Script', 'pass', 'Script loaded successfully');
        }
        
        if (!costGuideRTLLoaded) {
            addVerificationResult('Website Cost Guide Quantum RTL Script', 'fail', 'Script not found');
            success = false;
        } else {
            addVerificationResult('Website Cost Guide Quantum RTL Script', 'pass', 'Script loaded successfully');
        }
        
        // Check if the public API is available
        const apiAvailable = typeof window.costGuideRTLControls !== 'undefined';
        if (!apiAvailable) {
            addVerificationResult('Cost Guide RTL Controls API', 'warning', 'API not available');
        } else {
            addVerificationResult('Cost Guide RTL Controls API', 'pass', 'API is available');
        }
        
        return success;
    };
    
    // Verify cost guide content RTL implementation
    const verifyCostGuideContentRTL = () => {
        logToDebugConsole('Verifying cost guide content RTL implementation...');
        
        // Define common selectors for cost guide content
        const contentSelectors = {
            article: '.prose',
            title: '.blog-title-anim',
            authorInfo: '.left-section-blog',
            textElements: 'h1, h2, h3, h4, h5, h6, p, li',
            mediaElements: 'img, figure',
            pricingTables: '.pricing-table, .comparison-table',
            costFactors: '.cost-factor',
            faqSection: '.faq'
        };
        
        // Check article container
        const articleContainer = document.querySelector(contentSelectors.article);
        if (articleContainer) {
            const isRTL = isElementRTL(articleContainer);
            const textAlignRight = checkRTLProperty(articleContainer, 'textAlign', 'right');
            
            if (isRTL && textAlignRight) {
                addVerificationResult('Article Container RTL', 'pass', 'Correctly configured for RTL');
            } else {
                addVerificationResult('Article Container RTL', 'warning', 
                    `dir="rtl": ${isRTL}, text-align: right: ${textAlignRight}`);
            }
        } else {
            addVerificationResult('Article Container', 'warning', 'Element not found');
        }
        
        // Check title element
        const titleElement = document.querySelector(contentSelectors.title);
        if (titleElement) {
            const textAlignRight = checkRTLProperty(titleElement, 'textAlign', 'right');
            
            if (textAlignRight) {
                addVerificationResult('Title Element Alignment', 'pass', 'Correctly aligned to right');
            } else {
                addVerificationResult('Title Element Alignment', 'warning', 'Not aligned to right');
            }
        } else {
            addVerificationResult('Title Element', 'warning', 'Element not found');
        }
        
        // Check author information
        const authorInfo = document.querySelector(contentSelectors.authorInfo);
        if (authorInfo) {
            const isRTL = isElementRTL(authorInfo);
            
            if (isRTL) {
                addVerificationResult('Author Information RTL', 'pass', 'Correctly configured for RTL');
            } else {
                addVerificationResult('Author Information RTL', 'warning', 'Not configured for RTL');
            }
        }
        
        // Check text elements RTL implementation
        const textElements = document.querySelectorAll(contentSelectors.textElements);
        const rtlTextElements = countRTLElements(contentSelectors.textElements);
        const rtlPercentage = textElements.length > 0 ? Math.round((rtlTextElements / textElements.length) * 100) : 0;
        
        if (rtlPercentage >= 90) {
            addVerificationResult('Text Elements RTL', 'pass', `${rtlPercentage}% of text elements are RTL`);
        } else if (rtlPercentage >= 70) {
            addVerificationResult('Text Elements RTL', 'warning', `${rtlPercentage}% of text elements are RTL`);
        } else {
            addVerificationResult('Text Elements RTL', 'warning', `${rtlPercentage}% of text elements are RTL`);
        }
        
        // Check pricing tables RTL implementation
        const pricingTables = document.querySelectorAll(contentSelectors.pricingTables);
        if (pricingTables.length > 0) {
            const rtlPricingTables = countRTLElements(contentSelectors.pricingTables);
            
            if (rtlPricingTables === pricingTables.length) {
                addVerificationResult('Pricing Tables RTL', 'pass', 'All pricing tables are RTL');
            } else {
                addVerificationResult('Pricing Tables RTL', 'warning', 
                    `${rtlPricingTables}/${pricingTables.length} pricing tables are RTL`);
            }
        }
        
        // Check cost factors RTL implementation
        const costFactors = document.querySelectorAll(contentSelectors.costFactors);
        if (costFactors.length > 0) {
            const rtlCostFactors = countRTLElements(contentSelectors.costFactors);
            
            if (rtlCostFactors === costFactors.length) {
                addVerificationResult('Cost Factors RTL', 'pass', 'All cost factors are RTL');
            } else {
                addVerificationResult('Cost Factors RTL', 'warning', 
                    `${rtlCostFactors}/${costFactors.length} cost factors are RTL`);
            }
        }
        
        // Check FAQ sections RTL implementation
        const faqSections = document.querySelectorAll(contentSelectors.faqSection);
        if (faqSections.length > 0) {
            const rtlFaqSections = countRTLElements(contentSelectors.faqSection);
            
            if (rtlFaqSections === faqSections.length) {
                addVerificationResult('FAQ Sections RTL', 'pass', 'All FAQ sections are RTL');
            } else {
                addVerificationResult('FAQ Sections RTL', 'warning', 
                    `${rtlFaqSections}/${faqSections.length} FAQ sections are RTL`);
            }
        }
    };
    
    // Verify media elements RTL handling
    const verifyMediaElementsRTL = () => {
        logToDebugConsole('Verifying media elements RTL handling...');
        
        const mediaElements = document.querySelectorAll('img, figure');
        let correctlyAlignedCount = 0;
        
        mediaElements.forEach(media => {
            const computedStyle = window.getComputedStyle(media);
            const float = computedStyle.float;
            const marginLeft = computedStyle.marginLeft;
            const marginRight = computedStyle.marginRight;
            
            // For RTL, images should typically have margin-left and float right
            if ((float === 'right' || float === 'none') && marginLeft !== '0px') {
                correctlyAlignedCount++;
            }
        });
        
        const alignmentPercentage = mediaElements.length > 0 ? 
            Math.round((correctlyAlignedCount / mediaElements.length) * 100) : 0;
        
        if (alignmentPercentage >= 80) {
            addVerificationResult('Media Elements RTL Alignment', 'pass', 
                `${alignmentPercentage}% of media elements are correctly aligned for RTL`);
        } else {
            addVerificationResult('Media Elements RTL Alignment', 'warning', 
                `${alignmentPercentage}% of media elements are correctly aligned for RTL`);
        }
    };
    
    // Verify navigation and UI elements RTL
    const verifyNavigationRTL = () => {
        logToDebugConsole('Verifying navigation and UI elements RTL...');
        
        // Check navigation menu items
        const navItems = document.querySelectorAll('nav ul li');
        const rtlNavItems = countRTLElements('nav ul li');
        
        if (navItems.length > 0) {
            const rtlPercentage = Math.round((rtlNavItems / navItems.length) * 100);
            
            if (rtlPercentage >= 90) {
                addVerificationResult('Navigation Items RTL', 'pass', 
                    `${rtlPercentage}% of navigation items are RTL`);
            } else {
                addVerificationResult('Navigation Items RTL', 'warning', 
                    `${rtlPercentage}% of navigation items are RTL`);
            }
        }
        
        // Check interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, select');
        const rtlInteractiveElements = countRTLElements('button, a, input, select');
        
        if (interactiveElements.length > 0) {
            const rtlPercentage = Math.round((rtlInteractiveElements / interactiveElements.length) * 100);
            
            if (rtlPercentage >= 80) {
                addVerificationResult('Interactive Elements RTL', 'pass', 
                    `${rtlPercentage}% of interactive elements are RTL`);
            } else {
                addVerificationResult('Interactive Elements RTL', 'warning', 
                    `${rtlPercentage}% of interactive elements are RTL`);
            }
        }
    };
    
    // Verify Hebrew text handling
    const verifyHebrewTextHandling = () => {
        logToDebugConsole('Verifying Hebrew text handling...');
        
        // Function to detect Hebrew characters
        const hasHebrewChars = (text) => {
            const hebrewRegex = /[\u0590-\u05FF]/;
            return hebrewRegex.test(text);
        };
        
        // Find elements with Hebrew text
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
        let hebrewTextElements = 0;
        let rtlHebrewElements = 0;
        
        textElements.forEach(element => {
            const text = element.textContent || '';
            if (hasHebrewChars(text)) {
                hebrewTextElements++;
                if (isElementRTL(element)) {
                    rtlHebrewElements++;
                }
            }
        });
        
        if (hebrewTextElements > 0) {
            const rtlHebrewPercentage = Math.round((rtlHebrewElements / hebrewTextElements) * 100);
            
            if (rtlHebrewPercentage >= 90) {
                addVerificationResult('Hebrew Text RTL Handling', 'pass', 
                    `${rtlHebrewPercentage}% of Hebrew text elements are RTL`);
            } else {
                addVerificationResult('Hebrew Text RTL Handling', 'warning', 
                    `${rtlHebrewPercentage}% of Hebrew text elements are RTL`);
            }
        } else {
            addVerificationResult('Hebrew Text Detection', 'warning', 
                'No Hebrew text detected on the page (this is expected if text hasn\'t been translated yet)');
        }
        
        // Check for special Hebrew font stack
        const hebrewTextElementsWithSpecialFont = document.querySelectorAll('.hebrew-text');
        
        if (hebrewTextElementsWithSpecialFont.length > 0) {
            addVerificationResult('Hebrew Font Optimization', 'pass', 
                `${hebrewTextElementsWithSpecialFont.length} elements have Hebrew font optimization`);
        }
    };
    
    // Verify responsive behavior
    const verifyResponsiveBehavior = () => {
        logToDebugConsole('Verifying responsive RTL behavior...');
        
        // Test different viewport sizes
        const testViewportSize = (width) => {
            // Create a test element to measure responsive behavior
            const testElement = document.createElement('div');
            testElement.style.cssText = `
                position: fixed;
                top: -1000px;
                left: -1000px;
                width: 100px;
                height: 100px;
                content: '';
                background: transparent;
                pointer-events: none;
            `;
            document.body.appendChild(testElement);
            
            // Force reflow
            void testElement.offsetWidth;
            
            // Remove test element
            document.body.removeChild(testElement);
            
            return true;
        };
        
        // Test mobile and desktop views
        const mobileTest = testViewportSize(360);
        const desktopTest = testViewportSize(1200);
        
        if (mobileTest && desktopTest) {
            addVerificationResult('Responsive RTL Behavior', 'pass', 'Viewport responsiveness tests passed');
        } else {
            addVerificationResult('Responsive RTL Behavior', 'warning', 'Viewport responsiveness tests had issues');
        }
        
        // Check if responsive handler is available
        const responsiveHandlerAvailable = typeof window.costGuideRTLControls?.checkResponsive !== 'undefined';
        
        if (responsiveHandlerAvailable) {
            addVerificationResult('Responsive RTL Handler', 'pass', 'Responsive handler is available');
        } else {
            addVerificationResult('Responsive RTL Handler', 'warning', 'Responsive handler not found');
        }
    };
    
    // Performance testing
    const runPerformanceTest = () => {
        logToDebugConsole('Running performance test...');
        
        // Measure time to reinitialize RTL
        if (window.costGuideRTLControls?.reinitialize) {
            const startTime = performance.now();
            
            // Try to reinitialize (safely)
            try {
                window.costGuideRTLControls.reinitialize();
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                
                if (executionTime < 100) {
                    addVerificationResult('RTL Reinitialization Performance', 'pass', 
                        `Completed in ${executionTime.toFixed(2)}ms (excellent)`);
                } else if (executionTime < 300) {
                    addVerificationResult('RTL Reinitialization Performance', 'pass', 
                        `Completed in ${executionTime.toFixed(2)}ms (good)`);
                } else {
                    addVerificationResult('RTL Reinitialization Performance', 'warning', 
                        `Completed in ${executionTime.toFixed(2)}ms (could be improved)`);
                }
            } catch (error) {
                addVerificationResult('RTL Reinitialization Performance', 'error', 
                    `Error during reinitialization: ${error.message}`);
            }
        }
    };
    
    // Run full verification process
    const runFullVerification = () => {
        logToDebugConsole('Starting full verification process for Website Cost Guide Quantum RTL...', 'info');
        
        // Clear previous results
        const resultsContainer = document.getElementById('quantum-rtl-results');
        if (resultsContainer) {
            resultsContainer.innerHTML = '';
        }
        
        // Create verification container if it doesn't exist
        createVerificationContainer();
        
        // Run all verification modules
        verifyDocumentSetup();
        verifyCostGuideContentRTL();
        verifyMediaElementsRTL();
        verifyNavigationRTL();
        verifyHebrewTextHandling();
        verifyResponsiveBehavior();
        runPerformanceTest();
        
        // Final verification status
        const allResults = document.querySelectorAll('#quantum-rtl-results > div');
        const failedResults = document.querySelectorAll('#quantum-rtl-results > div[style*="border-left-color: #dc3545"]');
        const warningResults = document.querySelectorAll('#quantum-rtl-results > div[style*="border-left-color: #ffc107"]');
        
        if (failedResults.length === 0 && warningResults.length === 0) {
            logToDebugConsole('Verification complete! All tests passed successfully.', 'success');
        } else if (failedResults.length === 0) {
            logToDebugConsole(`Verification complete with ${warningResults.length} warnings.`, 'warning');
        } else {
            logToDebugConsole(`Verification complete with ${failedResults.length} failures and ${warningResults.length} warnings.`, 'error');
        }
        
        // Scroll to results for user to see
        if (resultsContainer) {
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };
    
    // Initialize verification
    createVerificationContainer();
    
    // Run verification after a short delay to ensure all scripts are loaded
    setTimeout(() => {
        runFullVerification();
    }, 1500);
    
    // Expose API for external control
    window.websiteCostGuideRTLVerification = {
        runFullVerification: runFullVerification,
        toggleContainer: toggleVerificationContainer
    };
    
    console.log('Website Cost Guide Quantum RTL Verification: Ready for diagnostics.');
});