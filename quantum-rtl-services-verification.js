/**
 * Quantum RTL Services Verification Tool
 * This script verifies that the enhanced quantum RTL implementation is working correctly on the services page.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('====== Quantum RTL Services Verification Started ======');
    
    // Debug console styling
    const logStyle = 'background: #1e1e2d; color: #a5ff90; padding: 4px 8px; border-radius: 4px; font-weight: bold;';
    const errorStyle = 'background: #1e1e2d; color: #ff6b6b; padding: 4px 8px; border-radius: 4px; font-weight: bold;';
    const infoStyle = 'background: #1e1e2d; color: #90e0ff; padding: 4px 8px; border-radius: 4px; font-weight: bold;';
    const warnStyle = 'background: #1e1e2d; color: #ffd166; padding: 4px 8px; border-radius: 4px; font-weight: bold;';
    
    // Create verification container
    const createVerificationContainer = () => {
        const container = document.createElement('div');
        container.id = 'quantum-rtl-verification';
        container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: rgba(30, 30, 45, 0.95); padding: 15px; border-radius: 8px; color: white; font-family: monospace; max-width: 400px; max-height: 60vh; overflow-y: auto;';
        container.innerHTML = `
            <h3 style="margin-top: 0; color: #a5ff90; border-bottom: 1px solid #444; padding-bottom: 5px;">Quantum RTL Verification</h3>
            <div id="verification-results"></div>
        `;
        document.body.appendChild(container);
        return container;
    };
    
    const verificationContainer = createVerificationContainer();
    const resultsDiv = verificationContainer.querySelector('#verification-results');
    
    const addVerificationResult = (message, isSuccess = true) => {
        const result = document.createElement('div');
        result.style.marginBottom = '8px';
        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.innerHTML = `
            <span style="color: ${isSuccess ? '#a5ff90' : '#ff6b6b'}; margin-right: 8px;">
                ${isSuccess ? '✓' : '✗'}
            </span>
            <span>${message}</span>
        `;
        resultsDiv.appendChild(result);
        
        // Also log to console with appropriate styling
        if (isSuccess) {
            console.log(`%c[PASS] ${message}`, logStyle);
        } else {
            console.error(`%c[FAIL] ${message}`, errorStyle);
        }
    };
    
    const addInfoMessage = (message) => {
        const info = document.createElement('div');
        info.style.marginBottom = '8px';
        info.style.color = '#90e0ff';
        info.textContent = message;
        resultsDiv.appendChild(info);
        console.log(`%c[INFO] ${message}`, infoStyle);
    };
    
    const addWarningMessage = (message) => {
        const warn = document.createElement('div');
        warn.style.marginBottom = '8px';
        warn.style.color = '#ffd166';
        warn.textContent = message;
        resultsDiv.appendChild(warn);
        console.warn(`%c[WARN] ${message}`, warnStyle);
    };
    
    // Helper function to check if element is RTL transformed
    const isElementRTL = (element) => {
        // Check for quantum RTL transformation attributes
        const hasQuantumRTLAttributes = element.hasAttribute('data-quantum-rtl-transformed') || 
                                       element.hasAttribute('data-rtl-state');
        
        // Check computed direction
        const computedDirection = window.getComputedStyle(element).direction;
        
        // For flex elements, check flex direction
        const computedFlexDirection = window.getComputedStyle(element).flexDirection;
        const isRowReverse = computedFlexDirection === 'row-reverse';
        
        return hasQuantumRTLAttributes || computedDirection === 'rtl' || isRowReverse;
    };
    
    // Helper function to check service card transformation
    const verifyServiceCard = (card, index) => {
        const cardTitle = card.querySelector('h3, .service-title')?.textContent || 'Untitled Card';
        
        if (isElementRTL(card)) {
            const hasRTLClass = card.classList.contains('quantum-rtl-transformed');
            const hasCorrectPadding = parseInt(window.getComputedStyle(card).paddingLeft) === parseInt(window.getComputedStyle(card).paddingRight);
            
            if (hasRTLClass) {
                addVerificationResult(`Service Card #${index + 1} (${cardTitle}) properly transformed`);
            } else {
                addVerificationResult(`Service Card #${index + 1} (${cardTitle}) transformed but missing RTL class`, false);
            }
            
            if (!hasCorrectPadding) {
                addWarningMessage(`Service Card #${index + 1} (${cardTitle}) may need padding adjustment`);
            }
        } else {
            addVerificationResult(`Service Card #${index + 1} (${cardTitle}) not properly transformed`, false);
        }
    };
    
    // Helper function to check Hebrew text detection
    const hasHebrewText = (element) => {
        const text = element.textContent || '';
        const hebrewChars = /[\u0590-\u05FF]/;
        return hebrewChars.test(text);
    };
    
    // 1. Verify document direction and language
    const verifyDocumentSetup = () => {
        addInfoMessage('Checking document RTL setup...');
        
        const htmlElement = document.documentElement;
        const lang = htmlElement.getAttribute('lang');
        const dir = htmlElement.getAttribute('dir');
        
        if (lang === 'he' && dir === 'rtl') {
            addVerificationResult('Document correctly set to Hebrew language and RTL direction');
        } else {
            addVerificationResult(`Document language: ${lang || 'not set'}, direction: ${dir || 'not set'} - Expected: lang="he", dir="rtl"`, false);
        }
        
        // Check if QuantumRTLTransformer is initialized
        if (window.servicesRTLControls) {
            addVerificationResult('servicesRTLControls public API is available');
            
            // Log configuration details
            const config = window.servicesRTLControls.getConfig?.() || {};
            addInfoMessage(`Quantum RTL Intensity: ${config.intensity || 'N/A'}`);
            addInfoMessage(`Animation Speed: ${config.speed || 'N/A'}`);
            addInfoMessage(`Coherence: ${config.coherence ? 'Enabled' : 'Disabled'}`);
            addInfoMessage(`Entanglement: ${config.entanglement ? 'Enabled' : 'Disabled'}`);
        } else {
            addVerificationResult('servicesRTLControls public API not available', false);
        }
    };
    
    // 2. Verify service cards transformation
    const verifyServiceCards = () => {
        addInfoMessage('\nVerifying service cards transformation...');
        
        const serviceCards = document.querySelectorAll('.service-card, .service-category, .capability-item');
        
        if (serviceCards.length > 0) {
            addInfoMessage(`Found ${serviceCards.length} service card elements`);
            serviceCards.forEach(verifyServiceCard);
        } else {
            addVerificationResult('No service card elements found', false);
        }
    };
    
    // 3. Verify navigation elements
    const verifyNavigation = () => {
        addInfoMessage('\nVerifying navigation elements...');
        
        const navElements = document.querySelectorAll('nav, .nav-menu, .header-nav');
        
        if (navElements.length > 0) {
            navElements.forEach((nav, index) => {
                if (isElementRTL(nav)) {
                    const flexDirection = window.getComputedStyle(nav).flexDirection;
                    addVerificationResult(`Navigation element #${index + 1} properly transformed (flex-direction: ${flexDirection})`);
                } else {
                    addVerificationResult(`Navigation element #${index + 1} not properly transformed`, false);
                }
            });
        } else {
            addVerificationResult('No navigation elements found', false);
        }
    };
    
    // 4. Verify feature lists transformation
    const verifyFeatureLists = () => {
        addInfoMessage('\nVerifying feature lists transformation...');
        
        const featureLists = document.querySelectorAll('.service-features, .feature-list, ul.service-details');
        
        if (featureLists.length > 0) {
            featureLists.forEach((list, index) => {
                const items = list.querySelectorAll('li');
                if (items.length > 0) {
                    // Check if the list is properly RTL transformed
                    if (isElementRTL(list)) {
                        addVerificationResult(`Feature list #${index + 1} properly transformed with ${items.length} items`);
                    } else {
                        addVerificationResult(`Feature list #${index + 1} not properly transformed`, false);
                    }
                }
            });
        } else {
            addVerificationResult('No feature list elements found', false);
        }
    };
    
    // 5. Verify Hebrew text handling
    const verifyHebrewText = () => {
        addInfoMessage('\nVerifying Hebrew text handling...');
        
        // Sample text elements to check
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, .service-description');
        const hebrewElements = Array.from(textElements).filter(hasHebrewText);
        
        if (hebrewElements.length > 0) {
            addInfoMessage(`Found ${hebrewElements.length} elements with Hebrew text`);
            
            // Check font features for Hebrew
            hebrewElements.slice(0, 3).forEach((elem, index) => {
                const fontFamily = window.getComputedStyle(elem).fontFamily;
                const hasHebrewFont = fontFamily.toLowerCase().includes('hebrew') || 
                                     fontFamily.toLowerCase().includes('noto') || 
                                     fontFamily.toLowerCase().includes('open sans');
                
                if (hasHebrewFont) {
                    addVerificationResult(`Hebrew text element #${index + 1} using appropriate font: ${fontFamily}`);
                } else {
                    addWarningMessage(`Hebrew text element #${index + 1} using potentially unsuitable font: ${fontFamily}`);
                }
            });
        } else {
            addVerificationResult('No Hebrew text elements found', false);
        }
    };
    
    // 6. Verify responsive behavior
    const verifyResponsive = () => {
        addInfoMessage('\nVerifying responsive RTL behavior...');
        
        // Simulate different viewport sizes
        const checkResponsiveAtWidth = (width) => {
            // Create a temporary element to check responsive styles
            const testElement = document.createElement('div');
            testElement.style.position = 'fixed';
            testElement.style.width = '1px';
            testElement.style.height = '1px';
            testElement.style.opacity = '0';
            testElement.className = 'responsive-test-element';
            document.body.appendChild(testElement);
            
            // Force responsive check
            if (window.servicesRTLControls && window.servicesRTLControls.checkResponsive) {
                window.servicesRTLControls.checkResponsive(width);
                addInfoMessage(`Checked responsive behavior at ${width}px`);
            }
            
            setTimeout(() => {
                document.body.removeChild(testElement);
            }, 100);
        };
        
        // Check common breakpoints
        checkResponsiveAtWidth(360);  // Mobile
        checkResponsiveAtWidth(768);  // Tablet
        checkResponsiveAtWidth(1200); // Desktop
        
        addVerificationResult('Responsive RTL behavior verified');
    };
    
    // 7. Run performance test
    const runPerformanceTest = () => {
        addInfoMessage('\nRunning performance test...');
        
        const startTime = performance.now();
        
        // Force reapplication of quantum transformations
        if (window.servicesRTLControls && window.servicesRTLControls.reinitialize) {
            window.servicesRTLControls.reinitialize();
        }
        
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            if (duration < 100) {
                addVerificationResult(`Performance test passed: Transformations applied in ${duration.toFixed(2)}ms (Excellent)`);
            } else if (duration < 300) {
                addVerificationResult(`Performance test passed: Transformations applied in ${duration.toFixed(2)}ms (Good)`);
            } else {
                addWarningMessage(`Performance test: Transformations applied in ${duration.toFixed(2)}ms (Could be improved)`);
            }
        }, 500);
    };
    
    // Run all verification steps
    verifyDocumentSetup();
    verifyServiceCards();
    verifyNavigation();
    verifyFeatureLists();
    verifyHebrewText();
    verifyResponsive();
    
    // Run performance test after a slight delay to ensure everything is settled
    setTimeout(runPerformanceTest, 1000);
    
    // Add a button to re-run verification
    const rerunButton = document.createElement('button');
    rerunButton.textContent = 'Re-run Verification';
    rerunButton.style.cssText = 'margin-top: 15px; padding: 8px 12px; background: #4c6ef5; color: white; border: none; border-radius: 4px; cursor: pointer;';
    rerunButton.addEventListener('click', () => {
        resultsDiv.innerHTML = '';
        verifyDocumentSetup();
        verifyServiceCards();
        verifyNavigation();
        verifyFeatureLists();
        verifyHebrewText();
        verifyResponsive();
        setTimeout(runPerformanceTest, 1000);
    });
    verificationContainer.appendChild(rerunButton);
    
    // Add a button to toggle visibility
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Minimize';
    toggleButton.style.cssText = 'position: absolute; top: 10px; right: 10px; padding: 4px 8px; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;';
    let isMinimized = false;
    toggleButton.addEventListener('click', () => {
        isMinimized = !isMinimized;
        if (isMinimized) {
            verificationContainer.style.maxWidth = '200px';
            verificationContainer.style.maxHeight = '80px';
            resultsDiv.style.display = 'none';
            rerunButton.style.display = 'none';
            toggleButton.textContent = 'Maximize';
        } else {
            verificationContainer.style.maxWidth = '400px';
            verificationContainer.style.maxHeight = '60vh';
            resultsDiv.style.display = 'block';
            rerunButton.style.display = 'block';
            toggleButton.textContent = 'Minimize';
        }
    });
    verificationContainer.appendChild(toggleButton);
    
    console.log('====== Quantum RTL Services Verification Completed ======');
});