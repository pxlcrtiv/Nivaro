/**
 * Quantum RTL Verification Tool for Nivaro UX Design Glossary Guide Page
 * This script provides advanced verification and debugging capabilities for RTL implementation.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quantum RTL Verification: Initializing for UX Design Glossary Guide...');
    
    // Verification container configuration
    const verificationConfig = {
        debugMode: false,
        highlightElements: true,
        showConsole: true,
        autoRun: true,
        testFrequency: 2000, // ms
        elementSelectors: {
            mainContent: 'main',
            headings: 'h1, h2, h3, h4, h5, h6',
            paragraphs: 'p',
            lists: 'ul, ol, li',
            links: 'a',
            buttons: 'button',
            images: 'img',
            glossarySpecific: {
                article: '.prose',
                title: '.text-\[3vw\]',
                searchInput: '[aria-label="search by term"]',
                termCards: '.styles_card__iiC1w',
                termTitle: '.styles_cardMain__jy_X1 h2',
                termDescription: '.styles_cardMain__jy_X1 p',
                glossaryGrid: '.grid.grid-cols-4',
                readMoreLinks: '.styles_readMore__jYGPP'
            }
        },
        verificationModules: {
            documentSetup: true,
            contentRTL: true,
            mediaElements: true,
            navigation: true,
            hebrewText: true,
            responsiveBehavior: true,
            performance: true
        },
        // Debug visualization settings
        debugStyles: {
            highlightColor: 'rgba(74, 144, 226, 0.3)',
            borderColor: '#4a90e2',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
        },
        // Quantum verification parameters
        quantumParameters: {
            coherenceThreshold: 0.85,
            entanglementLevel: 0.75,
            waveFunctionCollapse: 'measured'
        }
    };
    
    // Results storage
    const verificationResults = {
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        resultsByModule: {},
        timestamp: new Date().toISOString(),
        debugInfo: []
    };
    
    // Create verification container
    const createVerificationContainer = () => {
        // Check if container already exists
        if (document.getElementById('quantum-rtl-verification-container')) {
            return;
        }
        
        const container = document.createElement('div');
        container.id = 'quantum-rtl-verification-container';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #1a1a1a;
            color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 9999;
            min-width: 320px;
            max-width: 500px;
            max-height: 60vh;
            overflow-y: auto;
            font-family: 'Arial', sans-serif;
        `;
        
        // Header
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid #444;
        `;
        header.innerHTML = `
            <h3 style="margin: 0; font-size: 14px; color: #4a90e2;">Quantum RTL Verification</h3>
            <div style="display: flex; gap: 8px;">
                <button id="minimize-verification" style="background: #333; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">Minimize</button>
            </div>
        `;
        
        // Results display
        const resultsDisplay = document.createElement('div');
        resultsDisplay.id = 'verification-results';
        resultsDisplay.style.cssText = `
            font-size: 12px;
            line-height: 1.4;
            margin-bottom: 10px;
        `;
        
        // Action buttons
        const actionButtons = document.createElement('div');
        actionButtons.style.cssText = `
            display: flex;
            gap: 8px;
            margin-bottom: 10px;
        `;
        
        const rerunButton = document.createElement('button');
        rerunButton.id = 'rerun-verification';
        rerunButton.textContent = 'Re-run Verification';
        rerunButton.style.cssText = `
            background: #4a90e2;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            flex: 1;
        `;
        
        const toggleDebugButton = document.createElement('button');
        toggleDebugButton.id = 'toggle-debug';
        toggleDebugButton.textContent = 'Toggle Debug';
        toggleDebugButton.style.cssText = `
            background: #666;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        actionButtons.appendChild(rerunButton);
        actionButtons.appendChild(toggleDebugButton);
        
        // Debug console
        const debugConsole = document.createElement('div');
        debugConsole.id = 'debug-console';
        debugConsole.style.cssText = `
            background: #2a2a2a;
            padding: 8px;
            border-radius: 4px;
            font-size: 11px;
            max-height: 150px;
            overflow-y: auto;
            white-space: pre-wrap;
            font-family: monospace;
        `;
        
        container.appendChild(header);
        container.appendChild(resultsDisplay);
        container.appendChild(actionButtons);
        container.appendChild(debugConsole);
        
        document.body.appendChild(container);
        
        // Add event listeners
        document.getElementById('rerun-verification').addEventListener('click', runFullVerification);
        document.getElementById('toggle-debug').addEventListener('click', toggleDebugMode);
        document.getElementById('minimize-verification').addEventListener('click', toggleVerificationContainer);
    };
    
    // Toggle verification container visibility
    const toggleVerificationContainer = () => {
        const container = document.getElementById('quantum-rtl-verification-container');
        const resultsDisplay = document.getElementById('verification-results');
        const actionButtons = document.querySelector('#quantum-rtl-verification-container > div:nth-child(3)');
        const debugConsole = document.getElementById('debug-console');
        
        const isMinimized = resultsDisplay.style.display === 'none';
        
        if (isMinimized) {
            resultsDisplay.style.display = 'block';
            actionButtons.style.display = 'flex';
            debugConsole.style.display = verificationConfig.showConsole ? 'block' : 'none';
            document.getElementById('minimize-verification').textContent = 'Minimize';
        } else {
            resultsDisplay.style.display = 'none';
            actionButtons.style.display = 'none';
            debugConsole.style.display = 'none';
            document.getElementById('minimize-verification').textContent = 'Maximize';
        }
    };
    
    // Toggle debug mode
    const toggleDebugMode = () => {
        verificationConfig.debugMode = !verificationConfig.debugMode;
        verificationConfig.highlightElements = !verificationConfig.highlightElements;
        
        if (verificationConfig.debugMode) {
            logToConsole('Debug mode enabled. Elements will be highlighted.');
            highlightElementsForDebug();
        } else {
            logToConsole('Debug mode disabled. Removing highlights.');
            removeElementHighlights();
        }
        
        updateResultsDisplay();
    };
    
    // Log to debug console
    const logToConsole = (message, type = 'info') => {
        const debugConsole = document.getElementById('debug-console');
        if (!debugConsole) return;
        
        const timestamp = new Date().toLocaleTimeString();
        let color = '#aaa';
        
        switch(type) {
            case 'success': color = '#4CAF50'; break;
            case 'error': color = '#f44336'; break;
            case 'warning': color = '#ff9800'; break;
            case 'info':
            default: color = '#aaa'; break;
        }
        
        const logEntry = document.createElement('div');
        logEntry.style.color = color;
        logEntry.innerHTML = `[${timestamp}] ${message}`;
        
        debugConsole.appendChild(logEntry);
        debugConsole.scrollTop = debugConsole.scrollHeight;
        
        // Store for later analysis
        verificationResults.debugInfo.push({
            timestamp: new Date().toISOString(),
            type: type,
            message: message
        });
    };
    
    // Update results display
    const updateResultsDisplay = () => {
        const resultsDisplay = document.getElementById('verification-results');
        if (!resultsDisplay) return;
        
        let html = `
            <div style="margin-bottom: 8px;">
                <strong>Overall Status:</strong> 
                <span style="color: ${verificationResults.failedTests === 0 ? '#4CAF50' : '#f44336'};">
                    ${verificationResults.failedTests === 0 ? 'PASS' : 'FAIL'}
                </span>
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Tests:</strong> ${verificationResults.passedTests}/${verificationResults.totalTests} passed
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Debug Mode:</strong> ${verificationConfig.debugMode ? 'ON' : 'OFF'}
            </div>
        `;
        
        // Add module-specific results
        if (Object.keys(verificationResults.resultsByModule).length > 0) {
            html += '<div style="margin-top: 8px;"><strong>Module Results:</strong></div>';
            
            Object.entries(verificationResults.resultsByModule).forEach(([module, results]) => {
                const modulePassed = results.failed === 0;
                html += `
                    <div style="margin-left: 10px; margin-top: 2px; font-size: 11px;">
                        <strong>${module}:</strong> 
                        <span style="color: ${modulePassed ? '#4CAF50' : '#f44336'};">
                            ${results.passed}/${results.total} passed
                        </span>
                    </div>
                `;
            });
        }
        
        resultsDisplay.innerHTML = html;
    };
    
    // Highlight elements for debugging
    const highlightElementsForDebug = () => {
        if (!verificationConfig.highlightElements) return;
        
        // Remove existing highlights first
        removeElementHighlights();
        
        // Define elements to highlight
        const highlightGroups = [
            { selector: verificationConfig.elementSelectors.headings, color: 'rgba(74, 144, 226, 0.3)' },
            { selector: verificationConfig.elementSelectors.paragraphs, color: 'rgba(76, 175, 80, 0.3)' },
            { selector: verificationConfig.elementSelectors.lists, color: 'rgba(255, 152, 0, 0.3)' },
            { selector: verificationConfig.elementSelectors.links, color: 'rgba(233, 30, 99, 0.3)' },
            { selector: verificationConfig.elementSelectors.buttons, color: 'rgba(156, 39, 176, 0.3)' },
            { selector: verificationConfig.elementSelectors.images, color: 'rgba(0, 188, 212, 0.3)' },
            { selector: verificationConfig.elementSelectors.glossarySpecific.termCards, color: 'rgba(255, 193, 7, 0.3)' }
        ];
        
        highlightGroups.forEach(group => {
            const elements = document.querySelectorAll(group.selector);
            elements.forEach(element => {
                // Store original style
                element.setAttribute('data-original-style', element.getAttribute('style') || '');
                
                // Apply highlight
                const currentStyle = element.style.cssText;
                element.style.cssText = `${currentStyle}
                    background-color: ${group.color} !important;
                    border: 1px solid ${verificationConfig.debugStyles.borderColor} !important;
                    border-radius: ${verificationConfig.debugStyles.borderRadius} !important;
                    transition: ${verificationConfig.debugStyles.transition} !important;
                `;
                
                // Add tooltip
                const title = element.getAttribute('title') || '';
                const elementType = element.tagName.toLowerCase();
                const selectorInfo = group.selector;
                element.setAttribute('title', `${title}${title ? ' - ' : ''}Type: ${elementType}, Selector: ${selectorInfo}`);
            });
        });
    };
    
    // Remove element highlights
    const removeElementHighlights = () => {
        const elementsWithHighlight = document.querySelectorAll('[data-original-style]');
        elementsWithHighlight.forEach(element => {
            const originalStyle = element.getAttribute('data-original-style');
            element.setAttribute('style', originalStyle);
            element.removeAttribute('data-original-style');
        });
    };
    
    // Helper function to test RTL properties
    const testRTLProperty = (element, property, expectedValue, testName) => {
        verificationResults.totalTests++;
        
        const actualValue = window.getComputedStyle(element)[property];
        const testPassed = actualValue === expectedValue;
        
        if (testPassed) {
            verificationResults.passedTests++;
            logToConsole(`✅ PASS: ${testName} (${property} is ${actualValue})`, 'success');
        } else {
            verificationResults.failedTests++;
            logToConsole(`❌ FAIL: ${testName} (Expected ${property} to be ${expectedValue}, but got ${actualValue})`, 'error');
        }
        
        return testPassed;
    };
    
    // Helper function to check if element exists
    const checkElementExists = (selector, testName) => {
        verificationResults.totalTests++;
        
        const element = document.querySelector(selector);
        const testPassed = element !== null;
        
        if (testPassed) {
            verificationResults.passedTests++;
            logToConsole(`✅ PASS: ${testName} (Element exists)`, 'success');
        } else {
            verificationResults.failedTests++;
            logToConsole(`❌ FAIL: ${testName} (Element not found)`, 'error');
        }
        
        return testPassed;
    };
    
    // Module: Verify document setup
    const verifyDocumentSetup = () => {
        if (!verificationConfig.verificationModules.documentSetup) return;
        
        logToConsole('Starting document setup verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Check HTML lang attribute
        const htmlElement = document.documentElement;
        const langTest = testRTLProperty(htmlElement, 'lang', 'he', 'HTML language is set to Hebrew (he)');
        moduleResults.total++;
        if (langTest) moduleResults.passed++;
        else moduleResults.failed++;
        
        // Check HTML dir attribute
        const dirTest = testRTLProperty(htmlElement, 'direction', 'rtl', 'HTML direction is set to RTL');
        moduleResults.total++;
        if (dirTest) moduleResults.passed++;
        else moduleResults.failed++;
        
        // Check if quantum RTL scripts are loaded
        const quantumScriptLoaded = document.querySelector('script[src*="glossary-quantum-rtl.js"]') !== null;
        moduleResults.total++;
        if (quantumScriptLoaded) {
            moduleResults.passed++;
            logToConsole('✅ PASS: Glossary quantum RTL script is loaded', 'success');
        } else {
            moduleResults.failed++;
            logToConsole('❌ FAIL: Glossary quantum RTL script is not loaded', 'error');
        }
        
        verificationResults.resultsByModule['Document Setup'] = moduleResults;
        logToConsole(`Document setup verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Module: Verify content RTL properties
    const verifyContentRTL = () => {
        if (!verificationConfig.verificationModules.contentRTL) return;
        
        logToConsole('Starting content RTL verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Check main article container
        const articleContainer = document.querySelector(verificationConfig.elementSelectors.glossarySpecific.article);
        if (articleContainer) {
            const articleDirTest = testRTLProperty(articleContainer, 'direction', 'rtl', 'Article container direction is RTL');
            moduleResults.total++;
            if (articleDirTest) moduleResults.passed++;
            else moduleResults.failed++;
            
            const articleAlignTest = testRTLProperty(articleContainer, 'textAlign', 'right', 'Article container text alignment is right');
            moduleResults.total++;
            if (articleAlignTest) moduleResults.passed++;
            else moduleResults.failed++;
        }
        
        // Check glossary title
        const pageTitle = document.querySelector(verificationConfig.elementSelectors.glossarySpecific.title);
        if (pageTitle) {
            const titleAlignTest = testRTLProperty(pageTitle, 'textAlign', 'right', 'Page title text alignment is right');
            moduleResults.total++;
            if (titleAlignTest) moduleResults.passed++;
            else moduleResults.failed++;
        }
        
        // Check glossary search input
        const searchInput = document.querySelector(verificationConfig.elementSelectors.glossarySpecific.searchInput);
        if (searchInput) {
            const inputDirTest = testRTLProperty(searchInput, 'direction', 'rtl', 'Search input direction is RTL');
            moduleResults.total++;
            if (inputDirTest) moduleResults.passed++;
            else moduleResults.failed++;
        }
        
        // Check glossary term cards
        const termCards = document.querySelectorAll(verificationConfig.elementSelectors.glossarySpecific.termCards);
        if (termCards.length > 0) {
            logToConsole(`Found ${termCards.length} glossary term cards`);
            
            // Test first few term cards
            const cardsToTest = Math.min(5, termCards.length);
            for (let i = 0; i < cardsToTest; i++) {
                const card = termCards[i];
                const cardDirTest = testRTLProperty(card, 'direction', 'rtl', `Term card ${i+1} direction is RTL`);
                moduleResults.total++;
                if (cardDirTest) moduleResults.passed++;
                else moduleResults.failed++;
                
                // Check term title inside the card
                const termTitle = card.querySelector(verificationConfig.elementSelectors.glossarySpecific.termTitle);
                if (termTitle) {
                    const titleAlignTest = testRTLProperty(termTitle, 'textAlign', 'right', `Term title ${i+1} text alignment is right`);
                    moduleResults.total++;
                    if (titleAlignTest) moduleResults.passed++;
                    else moduleResults.failed++;
                }
                
                // Check term description inside the card
                const termDescription = card.querySelector(verificationConfig.elementSelectors.glossarySpecific.termDescription);
                if (termDescription) {
                    const descAlignTest = testRTLProperty(termDescription, 'textAlign', 'right', `Term description ${i+1} text alignment is right`);
                    moduleResults.total++;
                    if (descAlignTest) moduleResults.passed++;
                    else moduleResults.failed++;
                }
            }
        }
        
        verificationResults.resultsByModule['Content RTL'] = moduleResults;
        logToConsole(`Content RTL verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Module: Verify media elements
    const verifyMediaElements = () => {
        if (!verificationConfig.verificationModules.mediaElements) return;
        
        logToConsole('Starting media elements verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Check images within glossary cards
        const imagesInCards = document.querySelectorAll(`${verificationConfig.elementSelectors.glossarySpecific.termCards} img`);
        if (imagesInCards.length > 0) {
            logToConsole(`Found ${imagesInCards.length} images in glossary term cards`);
            
            // Test first few images
            const imagesToTest = Math.min(3, imagesInCards.length);
            for (let i = 0; i < imagesToTest; i++) {
                const image = imagesInCards[i];
                
                // Check if image is properly aligned in RTL context
                const parent = image.parentElement;
                if (parent) {
                    const parentAlignTest = testRTLProperty(parent, 'textAlign', 'right', `Image container ${i+1} text alignment is right`);
                    moduleResults.total++;
                    if (parentAlignTest) moduleResults.passed++;
                    else moduleResults.failed++;
                }
            }
        }
        
        // Check for proper image loading
        const allImages = document.querySelectorAll('img');
        if (allImages.length > 0) {
            logToConsole(`Found ${allImages.length} total images on the page`);
            
            // Test image loading status
            let loadedImages = 0;
            allImages.forEach(image => {
                if (image.complete && image.naturalHeight > 0) {
                    loadedImages++;
                }
            });
            
            logToConsole(`Images loaded: ${loadedImages}/${allImages.length}`);
        }
        
        verificationResults.resultsByModule['Media Elements'] = moduleResults;
        logToConsole(`Media elements verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Module: Verify Hebrew text handling
    const verifyHebrewTextHandling = () => {
        if (!verificationConfig.verificationModules.hebrewText) return;
        
        logToConsole('Starting Hebrew text handling verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Helper function to detect Hebrew characters
        const hasHebrewChars = (text) => {
            const hebrewRegex = /[\u0590-\u05FF]/;
            return hebrewRegex.test(text);
        };
        
        // Check for elements with Hebrew-optimized font stack
        const hebrewTextElements = document.querySelectorAll('.hebrew-text');
        if (hebrewTextElements.length > 0) {
            logToConsole(`Found ${hebrewTextElements.length} elements with Hebrew text optimization`);
            
            // Check font family for Hebrew elements
            hebrewTextElements.forEach((element, index) => {
                if (index < 5) { // Test first 5 elements
                    const fontFamily = window.getComputedStyle(element).fontFamily;
                    const hasHebrewFont = fontFamily.includes('Hebrew');
                    
                    moduleResults.total++;
                    if (hasHebrewFont) {
                        moduleResults.passed++;
                        logToConsole(`✅ PASS: Hebrew element ${index+1} has Hebrew font family`, 'success');
                    } else {
                        moduleResults.failed++;
                        logToConsole(`❌ FAIL: Hebrew element ${index+1} does not have Hebrew font family`, 'error');
                    }
                }
            });
        } else {
            logToConsole('No elements with Hebrew text class found', 'warning');
        }
        
        // Check for quantum coherence attribute on potential Hebrew text elements
        const quantumCoherentElements = document.querySelectorAll('[data-quantum-coherence="enabled"]');
        if (quantumCoherentElements.length > 0) {
            logToConsole(`Found ${quantumCoherentElements.length} elements with quantum coherence enabled`);
        }
        
        verificationResults.resultsByModule['Hebrew Text'] = moduleResults;
        logToConsole(`Hebrew text handling verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Module: Verify responsive behavior
    const verifyResponsiveBehavior = () => {
        if (!verificationConfig.verificationModules.responsiveBehavior) return;
        
        logToConsole('Starting responsive behavior verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Check current viewport and apply corresponding checks
        const viewportWidth = window.innerWidth;
        logToConsole(`Current viewport width: ${viewportWidth}px`);
        
        // Check glossary grid responsiveness
        const glossaryGrid = document.querySelector(verificationConfig.elementSelectors.glossarySpecific.glossaryGrid);
        if (glossaryGrid) {
            const gridStyle = window.getComputedStyle(glossaryGrid);
            const gridGap = gridStyle.gap;
            
            logToConsole(`Glossary grid gap: ${gridGap}`);
            
            // Verify grid has appropriate gap for current viewport
            if (viewportWidth < 768 && gridGap.includes('3vw')) {
                moduleResults.passed++;
                logToConsole('✅ PASS: Mobile grid gap is correctly set to 3vw', 'success');
            } else if (viewportWidth >= 768 && gridGap.includes('2.5vw')) {
                moduleResults.passed++;
                logToConsole('✅ PASS: Desktop grid gap is correctly set to 2.5vw', 'success');
            } else {
                moduleResults.failed++;
                logToConsole(`❌ FAIL: Grid gap (${gridGap}) does not match expected value for current viewport`, 'error');
            }
            
            moduleResults.total++;
        }
        
        // Check if window has glossary resize timeout handler
        if (window.glossaryResizeTimeout !== undefined) {
            moduleResults.passed++;
            logToConsole('✅ PASS: Resize timeout handler is properly registered', 'success');
        } else {
            moduleResults.failed++;
            logToConsole('❌ FAIL: Resize timeout handler is not registered', 'error');
        }
        
        moduleResults.total++;
        
        verificationResults.resultsByModule['Responsive Behavior'] = moduleResults;
        logToConsole(`Responsive behavior verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Module: Verify performance
    const verifyPerformance = () => {
        if (!verificationConfig.verificationModules.performance) return;
        
        logToConsole('Starting performance verification...');
        
        const moduleResults = { passed: 0, failed: 0, total: 0 };
        
        // Check for scroll optimization handler
        if (window.lastScrollTime !== undefined) {
            moduleResults.passed++;
            logToConsole('✅ PASS: Scroll optimization handler is active', 'success');
        } else {
            moduleResults.failed++;
            logToConsole('❌ FAIL: Scroll optimization handler is not active', 'error');
        }
        
        moduleResults.total++;
        
        // Check for quantum CSS variables
        const quantumFieldIntensity = getComputedStyle(document.documentElement).getPropertyValue('--quantum-field-intensity');
        if (quantumFieldIntensity !== '') {
            moduleResults.passed++;
            logToConsole(`✅ PASS: Quantum field intensity variable is set to ${quantumFieldIntensity}`, 'success');
        } else {
            moduleResults.failed++;
            logToConsole('❌ FAIL: Quantum field intensity variable is not set', 'error');
        }
        
        moduleResults.total++;
        
        verificationResults.resultsByModule['Performance'] = moduleResults;
        logToConsole(`Performance verification complete: ${moduleResults.passed}/${moduleResults.total} passed`);
    };
    
    // Run full verification sequence
    const runFullVerification = () => {
        logToConsole('Running full quantum RTL verification sequence...');
        
        // Reset results
        verificationResults.totalTests = 0;
        verificationResults.passedTests = 0;
        verificationResults.failedTests = 0;
        verificationResults.resultsByModule = {};
        verificationResults.timestamp = new Date().toISOString();
        
        // Clear debug console
        const debugConsole = document.getElementById('debug-console');
        if (debugConsole) {
            debugConsole.innerHTML = '';
        }
        
        // Run verification modules
        verifyDocumentSetup();
        verifyContentRTL();
        verifyMediaElements();
        verifyHebrewTextHandling();
        verifyResponsiveBehavior();
        verifyPerformance();
        
        // Update results display
        updateResultsDisplay();
        
        // If debug mode is enabled, highlight elements
        if (verificationConfig.debugMode) {
            highlightElementsForDebug();
        }
        
        // Log final result
        logToConsole(`Quantum RTL verification completed: ${verificationResults.passedTests}/${verificationResults.totalTests} tests passed.`);
        
        // Expose results to window for external access
        window.quantumRTLVerificationResults = verificationResults;
        
        return verificationResults;
    };
    
    // Initialize verification tool
    const initializeVerification = () => {
        // Create verification container
        createVerificationContainer();
        
        // Run verification if autoRun is enabled
        if (verificationConfig.autoRun) {
            // Delay slightly to ensure all page scripts have loaded
            setTimeout(() => {
                runFullVerification();
            }, 1000);
        }
        
        // Set up periodic testing if configured
        if (verificationConfig.testFrequency > 0) {
            setInterval(() => {
                // Only run periodic tests if debug mode is enabled
                if (verificationConfig.debugMode) {
                    logToConsole('Running periodic verification...');
                    runFullVerification();
                }
            }, verificationConfig.testFrequency);
        }
    };
    
    // Start initialization
    initializeVerification();
    
    // Expose public API for external control
    window.websiteGlossaryRTLVerification = {
        runVerification: runFullVerification,
        toggleDebug: toggleDebugMode,
        getResults: () => verificationResults,
        getConfig: () => verificationConfig,
        showContainer: () => {
            const container = document.getElementById('quantum-rtl-verification-container');
            if (container) {
                container.style.display = 'block';
            }
        },
        hideContainer: () => {
            const container = document.getElementById('quantum-rtl-verification-container');
            if (container) {
                container.style.display = 'none';
            }
        }
    };
});