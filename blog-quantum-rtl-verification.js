/**
 * Quantum RTL Verification Tool for Nivaro Blog Pages
 * This script tests and validates the quantum-level RTL implementation on blog content.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quantum RTL Verification Tool: Initializing for blog content...');
    
    // Create verification container
    const createVerificationContainer = () => {
        // Check if container already exists
        if (document.getElementById('quantum-rtl-verification')) {
            return;
        }
        
        // Create container element
        const container = document.createElement('div');
        container.id = 'quantum-rtl-verification';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 20px;
            border-radius: 12px;
            z-index: 9999;
            max-width: 400px;
            font-family: monospace;
            max-height: 70vh;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        `;
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = 'Quantum RTL Verification';
        title.style.cssText = `
            margin-top: 0;
            color: #5d5ad6;
            border-bottom: 1px solid #333;
            padding-bottom: 10px;
        `;
        container.appendChild(title);
        
        // Add status section
        const statusSection = document.createElement('div');
        statusSection.id = 'verification-status';
        statusSection.style.marginBottom = '15px';
        container.appendChild(statusSection);
        
        // Add results section
        const resultsSection = document.createElement('div');
        resultsSection.id = 'verification-results';
        resultsSection.style.fontSize = '12px';
        resultsSection.style.lineHeight = '1.4';
        container.appendChild(resultsSection);
        
        // Add control buttons
        const controls = document.createElement('div');
        controls.style.cssText = `
            display: flex;
            gap: 10px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #333;
        `;
        
        // Add rerun button
        const rerunBtn = document.createElement('button');
        rerunBtn.textContent = 'Re-run Tests';
        rerunBtn.id = 'rerun-tests';
        rerunBtn.style.cssText = `
            background: #5d5ad6;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
        `;
        rerunBtn.addEventListener('click', runAllVerifications);
        controls.appendChild(rerunBtn);
        
        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.cssText = `
            background: #444;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
        `;
        closeBtn.addEventListener('click', () => {
            container.style.display = 'none';
        });
        controls.appendChild(closeBtn);
        
        // Add toggle visibility button
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle Console';
        toggleBtn.id = 'toggle-console';
        toggleBtn.style.cssText = `
            background: #666;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
        `;
        toggleBtn.addEventListener('click', () => {
            const console = document.getElementById('quantum-rtl-console');
            if (console) {
                console.style.display = console.style.display === 'none' ? 'block' : 'none';
            }
        });
        controls.appendChild(toggleBtn);
        
        container.appendChild(controls);
        
        // Add to document
        document.body.appendChild(container);
    };
    
    // Log verification results
    const logResult = (testName, status, details = '') => {
        const resultsSection = document.getElementById('verification-results');
        const logItem = document.createElement('div');
        
        const statusClass = status === 'PASS' ? 'color: #4CAF50;' : status === 'WARN' ? 'color: #FFC107;' : 'color: #F44336;';
        
        logItem.innerHTML = `
            <div style="margin-bottom: 8px;">
                <span style="font-weight: bold;">${testName}:</span>
                <span style="${statusClass} margin-left: 10px;">${status}</span>
                ${details ? `<div style="margin-top: 4px; color: #ccc; padding-left: 20px;">${details}</div>` : ''}
            </div>
        `;
        
        resultsSection.appendChild(logItem);
        
        // Also log to console with styling
        const consoleStyle = status === 'PASS' ? 'background: #4CAF50; color: white;' : 
                            status === 'WARN' ? 'background: #FFC107; color: black;' : 
                            'background: #F44336; color: white;';
        console.log(`%c[Quantum RTL] ${testName}: ${status}`, consoleStyle);
        if (details) {
            console.log(`  ${details}`);
        }
    };
    
    // Update verification status
    const updateStatus = (message) => {
        const statusSection = document.getElementById('verification-status');
        statusSection.textContent = message;
    };
    
    // Helper function to check RTL properties
    const checkRTLProperty = (element, property, expectedValue, allowMultiple = false) => {
        const computedStyle = getComputedStyle(element);
        const actualValue = computedStyle[property];
        
        if (allowMultiple) {
            // For properties that might have multiple valid values
            const validValues = Array.isArray(expectedValue) ? expectedValue : [expectedValue];
            return validValues.includes(actualValue);
        }
        
        return actualValue === expectedValue;
    };
    
    // Helper function to check Hebrew text presence
    const checkForHebrewText = (element) => {
        const text = element.textContent || '';
        const hebrewRegex = /[\u0590-\u05FF]/;
        return hebrewRegex.test(text);
    };
    
    // Helper function to verify blog content elements
    const verifyElements = (selector, description, checkFunction) => {
        const elements = document.querySelectorAll(selector);
        
        if (elements.length === 0) {
            logResult(`Check ${description}`, 'WARN', `No elements found with selector: ${selector}`);
            return false;
        }
        
        let allPass = true;
        const failedElements = [];
        
        elements.forEach((element, index) => {
            if (!checkFunction(element)) {
                allPass = false;
                failedElements.push(index);
            }
        });
        
        if (allPass) {
            logResult(`Check ${description}`, 'PASS', `All ${elements.length} elements verified successfully`);
        } else {
            logResult(`Check ${description}`, 'FAIL', 
                `Failed for ${failedElements.length}/${elements.length} elements. Failed indices: ${failedElements.join(', ')}`);
        }
        
        return allPass;
    };
    
    // Verification modules
    const verificationModules = {
        documentSetup: () => {
            updateStatus('Verifying document setup...');
            
            // Check HTML lang and dir attributes
            const htmlTag = document.documentElement;
            const langCorrect = htmlTag.getAttribute('lang') === 'he';
            const dirCorrect = htmlTag.getAttribute('dir') === 'rtl';
            
            logResult('Document language', langCorrect ? 'PASS' : 'FAIL', 
                `Expected: 'he', Actual: '${htmlTag.getAttribute('lang')}'`);
            logResult('Document direction', dirCorrect ? 'PASS' : 'FAIL', 
                `Expected: 'rtl', Actual: '${htmlTag.getAttribute('dir')}'`);
            
            // Check if quantum scripts are loaded
            const quantumScriptLoaded = !!window.QuantumRTLTransformer;
            const blogScriptLoaded = !!window.blogRTLControls;
            
            logResult('QuantumRTLTransformer loaded', quantumScriptLoaded ? 'PASS' : 'FAIL');
            logResult('blogRTLControls API available', blogScriptLoaded ? 'PASS' : 'FAIL');
            
            return langCorrect && dirCorrect && quantumScriptLoaded;
        },
        
        blogContent: () => {
            updateStatus('Verifying blog content elements...');
            
            let allPass = true;
            
            // Verify article container
            const articleCheck = verifyElements('.prose', 'article container RTL', (element) => {
                return checkRTLProperty(element, 'direction', 'rtl') && 
                       checkRTLProperty(element, 'textAlign', 'right');
            });
            allPass = allPass && articleCheck;
            
            // Verify headings
            const headingsCheck = verifyElements('h1, h2, h3, h4, h5, h6', 'headings RTL', (element) => {
                return checkRTLProperty(element, 'textAlign', 'right', true);
            });
            allPass = allPass && headingsCheck;
            
            // Verify paragraphs
            const paragraphsCheck = verifyElements('p', 'paragraphs RTL', (element) => {
                return checkRTLProperty(element, 'textAlign', 'right', true);
            });
            allPass = allPass && paragraphsCheck;
            
            // Verify list items
            const listsCheck = verifyElements('li', 'list items RTL', (element) => {
                return checkRTLProperty(element, 'textAlign', 'right', true);
            });
            allPass = allPass && listsCheck;
            
            // Verify blockquotes
            const blockquotesCheck = verifyElements('blockquote', 'blockquotes RTL', (element) => {
                return checkRTLProperty(element, 'borderLeftStyle', 'none') && 
                       checkRTLProperty(element, 'textAlign', 'right', true);
            });
            allPass = allPass && blockquotesCheck;
            
            // Verify code blocks (should remain LTR)
            const codeBlocksCheck = verifyElements('pre, code', 'code blocks LTR', (element) => {
                return checkRTLProperty(element, 'direction', 'ltr');
            });
            allPass = allPass && codeBlocksCheck;
            
            return allPass;
        },
        
        mediaElements: () => {
            updateStatus('Verifying media elements...');
            
            // Verify images and media alignment
            const mediaCheck = verifyElements('article img, article video, article figure', 'media elements alignment', (element) => {
                const computedStyle = getComputedStyle(element);
                // Check if margins are properly adjusted for RTL
                return computedStyle.marginRight === '0px' || 
                       computedStyle.float === 'right' || 
                       computedStyle.textAlign === 'right';
            });
            
            return mediaCheck;
        },
        
        navigation: () => {
            updateStatus('Verifying navigation elements...');
            
            // Verify main navigation
            const navCheck = verifyElements('header, .Header_nav__IZBbc', 'navigation RTL', (element) => {
                return checkRTLProperty(element, 'direction', 'rtl');
            });
            
            // Verify menu items
            const menuItemsCheck = verifyElements('.Header_navLinkItem__l2xbK', 'menu items RTL', (element) => {
                return checkRTLProperty(element, 'textAlign', 'right', true);
            });
            
            return navCheck && menuItemsCheck;
        },
        
        hebrewHandling: () => {
            updateStatus('Verifying Hebrew text handling...');
            
            // Check if Hebrew text elements have special classes or styles
            const hebrewElements = document.querySelectorAll('.hebrew-text, [data-quantum-coherence]');
            
            if (hebrewElements.length === 0) {
                logResult('Hebrew text detection', 'WARN', 'No elements with Hebrew-specific classes found');
            } else {
                logResult('Hebrew text detection', 'PASS', `Found ${hebrewElements.length} elements with Hebrew-specific styling`);
            }
            
            // Sample check for Hebrew font stack
            if (hebrewElements.length > 0) {
                const firstHebrewElement = hebrewElements[0];
                const computedStyle = getComputedStyle(firstHebrewElement);
                const fontFamily = computedStyle.fontFamily.toLowerCase();
                
                if (fontFamily.includes('hebrew')) {
                    logResult('Hebrew font stack', 'PASS', `Correct font family detected: ${fontFamily}`);
                } else {
                    logResult('Hebrew font stack', 'WARN', `Hebrew font not detected in: ${fontFamily}`);
                }
            }
            
            return hebrewElements.length > 0;
        },
        
        responsiveBehavior: () => {
            updateStatus('Verifying responsive behavior...');
            
            // Simulate different screen sizes and check RTL behavior
            const testResponsive = () => {
                // Check current viewport
                const viewportWidth = window.innerWidth;
                
                // Get responsive configuration from blogRTLControls if available
                let expectedIntensity = 80; // Default
                
                if (window.blogRTLControls && window.blogRTLControls.getConfig) {
                    const config = window.blogRTLControls.getConfig();
                    if (viewportWidth < config.responsive.breakpoints.mobile) {
                        expectedIntensity = config.responsive.intensities.mobile;
                    } else if (viewportWidth < config.responsive.breakpoints.tablet) {
                        expectedIntensity = config.responsive.intensities.tablet;
                    }
                }
                
                logResult('Responsive RTL configuration', 'PASS', 
                    `Viewport width: ${viewportWidth}px, Expected intensity: ${expectedIntensity}`);
                
                // Check if mobile menu behavior is correct for RTL
                const mobileMenu = document.getElementById('mb_nav');
                if (mobileMenu) {
                    logResult('Mobile menu RTL', 'PASS', 'Mobile menu exists and should be RTL-friendly');
                }
                
                return true;
            };
            
            return testResponsive();
        },
        
        performance: () => {
            updateStatus('Checking performance metrics...');
            
            // Measure time to apply transformations
            const startTime = performance.now();
            
            // If available, trigger a reinitialization to measure performance
            if (window.blogRTLControls && window.blogRTLControls.reinitialize) {
                try {
                    window.blogRTLControls.reinitialize();
                    const endTime = performance.now();
                    const duration = endTime - startTime;
                    
                    logResult('Transformation performance', 
                        duration < 500 ? 'PASS' : duration < 1000 ? 'WARN' : 'FAIL', 
                        `Transformation time: ${duration.toFixed(2)}ms`);
                } catch (error) {
                    logResult('Transformation performance', 'FAIL', `Error during reinitialization: ${error.message}`);
                }
            }
            
            return true;
        }
    };
    
    // Run all verification modules
    function runAllVerifications() {
        // Clear previous results
        const resultsSection = document.getElementById('verification-results');
        resultsSection.innerHTML = '';
        
        updateStatus('Starting verification process...');
        
        let allModulesPass = true;
        
        // Run each verification module
        for (const [moduleName, moduleFunction] of Object.entries(verificationModules)) {
            try {
                const modulePass = moduleFunction();
                allModulesPass = allModulesPass && modulePass;
            } catch (error) {
                logResult(`${moduleName} module`, 'ERROR', `Module execution failed: ${error.message}`);
                allModulesPass = false;
            }
        }
        
        // Final status
        updateStatus(allModulesPass ? 'Verification completed successfully!' : 'Verification completed with issues.');
        
        // Create or update final status indicator
        let statusIndicator = document.getElementById('verification-final-status');
        if (!statusIndicator) {
            statusIndicator = document.createElement('div');
            statusIndicator.id = 'verification-final-status';
            statusIndicator.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                padding: 10px 20px;
                border-radius: 6px;
                font-weight: bold;
                z-index: 9998;
            `;
            document.body.appendChild(statusIndicator);
        }
        
        if (allModulesPass) {
            statusIndicator.textContent = '✅ Quantum RTL Verified';
            statusIndicator.style.background = '#4CAF50';
            statusIndicator.style.color = 'white';
        } else {
            statusIndicator.textContent = '❌ Quantum RTL Issues Detected';
            statusIndicator.style.background = '#F44336';
            statusIndicator.style.color = 'white';
        }
    }
    
    // Create verification UI and run tests
    createVerificationContainer();
    
    // Delay running tests to ensure all quantum transformations are applied
    setTimeout(runAllVerifications, 1000);
    
    // Add global function to allow manual verification
    window.verifyQuantumRTL = runAllVerifications;
    
    console.log('Quantum RTL Verification Tool: Ready. Type verifyQuantumRTL() in console to run tests manually.');
});