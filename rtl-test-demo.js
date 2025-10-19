/**
 * RTL Test Demo - Interactive demonstration of element-level RTL transformations
 * This script provides a visual interface to test and demonstrate the RTL transformation system
 * on the who-we-are.html page.
 */

// Wait for DOM to be fully loaded
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Wait for our RTL system to initialize
        setTimeout(() => {
            // Only create demo interface if we're not on a production environment
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                createRTLDemoInterface();
            }
        }, 2000);
    });
}

/**
 * Creates an interactive demo interface for testing RTL transformations
 */
function createRTLDemoInterface() {
    // Check if quantumElementRTL is available
    if (!window.quantumElementRTL) {
        console.warn('⚠️ RTL transformation system not initialized. Demo interface not created.');
        return;
    }
    
    // Create demo container
    const demoContainer = document.createElement('div');
    demoContainer.id = 'rtl-demo-container';
    demoContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        max-width: 350px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #333;
    `;
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = '🔬 Quantum RTL Demo';
    title.style.cssText = `
        margin: 0 0 15px 0;
        font-size: 18px;
        font-weight: 600;
        color: #2196F3;
        text-align: center;
    `;
    
    // Add description
    const description = document.createElement('p');
    description.textContent = 'Test element-level RTL transformations inspired by quantum mechanics';
    description.style.cssText = `
        margin: 0 0 20px 0;
        font-size: 14px;
        color: #666;
        text-align: center;
    `;
    
    // Create selector input
    const selectorContainer = document.createElement('div');
    selectorContainer.style.marginBottom = '15px';
    
    const selectorLabel = document.createElement('label');
    selectorLabel.textContent = 'Element Selector:';
    selectorLabel.style.display = 'block';
    selectorLabel.style.marginBottom = '5px';
    selectorLabel.style.fontSize = '14px';
    selectorLabel.style.fontWeight = '500';
    
    const selectorInput = document.createElement('input');
    selectorInput.type = 'text';
    selectorInput.placeholder = '.section, #id, tag';
    selectorInput.value = 'main section';
    selectorInput.style.cssText = `
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        box-sizing: border-box;
    `;
    
    selectorContainer.appendChild(selectorLabel);
    selectorContainer.appendChild(selectorInput);
    
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.style.marginBottom = '20px';
    optionsContainer.style.fontSize = '14px';
    
    // Swap margins option
    const swapMarginsContainer = document.createElement('div');
    swapMarginsContainer.style.marginBottom = '8px';
    
    const swapMarginsCheckbox = document.createElement('input');
    swapMarginsCheckbox.type = 'checkbox';
    swapMarginsCheckbox.id = 'swap-margins';
    swapMarginsCheckbox.checked = true;
    
    const swapMarginsLabel = document.createElement('label');
    swapMarginsLabel.textContent = ' Swap Margins';
    swapMarginsLabel.htmlFor = 'swap-margins';
    swapMarginsLabel.style.cursor = 'pointer';
    swapMarginsLabel.style.marginLeft = '5px';
    
    swapMarginsContainer.appendChild(swapMarginsCheckbox);
    swapMarginsContainer.appendChild(swapMarginsLabel);
    
    // Swap padding option
    const swapPaddingContainer = document.createElement('div');
    swapPaddingContainer.style.marginBottom = '8px';
    
    const swapPaddingCheckbox = document.createElement('input');
    swapPaddingCheckbox.type = 'checkbox';
    swapPaddingCheckbox.id = 'swap-padding';
    swapPaddingCheckbox.checked = true;
    
    const swapPaddingLabel = document.createElement('label');
    swapPaddingLabel.textContent = ' Swap Padding';
    swapPaddingLabel.htmlFor = 'swap-padding';
    swapPaddingLabel.style.cursor = 'pointer';
    swapPaddingLabel.style.marginLeft = '5px';
    
    swapPaddingContainer.appendChild(swapPaddingCheckbox);
    swapPaddingContainer.appendChild(swapPaddingLabel);
    
    // Transform flex option
    const transformFlexContainer = document.createElement('div');
    transformFlexContainer.style.marginBottom = '8px';
    
    const transformFlexCheckbox = document.createElement('input');
    transformFlexCheckbox.type = 'checkbox';
    transformFlexCheckbox.id = 'transform-flex';
    transformFlexCheckbox.checked = true;
    
    const transformFlexLabel = document.createElement('label');
    transformFlexLabel.textContent = ' Transform Flexbox';
    transformFlexLabel.htmlFor = 'transform-flex';
    transformFlexLabel.style.cursor = 'pointer';
    transformFlexLabel.style.marginLeft = '5px';
    
    transformFlexContainer.appendChild(transformFlexCheckbox);
    transformFlexContainer.appendChild(transformFlexLabel);
    
    // Add options to container
    optionsContainer.appendChild(swapMarginsContainer);
    optionsContainer.appendChild(swapPaddingContainer);
    optionsContainer.appendChild(transformFlexContainer);
    
    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = '1fr 1fr';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.marginBottom = '15px';
    
    // Transform button
    const transformButton = document.createElement('button');
    transformButton.textContent = '✨ Transform';
    transformButton.style.cssText = `
        padding: 10px 15px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
    `;
    
    transformButton.addEventListener('mouseover', function() {
        this.style.background = '#45a049';
    });
    
    transformButton.addEventListener('mouseout', function() {
        this.style.background = '#4CAF50';
    });
    
    transformButton.addEventListener('click', function() {
        applyTransformation();
    });
    
    // Revert button
    const revertButton = document.createElement('button');
    revertButton.textContent = '↩️ Revert All';
    revertButton.style.cssText = `
        padding: 10px 15px;
        background: #f44336;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
    `;
    
    revertButton.addEventListener('mouseover', function() {
        this.style.background = '#d32f2f';
    });
    
    revertButton.addEventListener('mouseout', function() {
        this.style.background = '#f44336';
    });
    
    revertButton.addEventListener('click', function() {
        if (window.quantumElementRTL) {
            window.quantumElementRTL.revertElement();
            window.rtl.revertAll();
            showFeedback('All elements reverted to original state!', 'info');
        }
    });
    
    // Add buttons to container
    buttonContainer.appendChild(transformButton);
    buttonContainer.appendChild(revertButton);
    
    // Create feedback container
    const feedbackContainer = document.createElement('div');
    feedbackContainer.id = 'rtl-feedback';
    feedbackContainer.style.cssText = `
        padding: 10px;
        border-radius: 6px;
        font-size: 13px;
        margin-top: 10px;
        text-align: center;
        display: none;
    `;
    
    // Create presets container
    const presetsContainer = document.createElement('div');
    presetsContainer.style.marginTop = '15px';
    presetsContainer.style.fontSize = '13px';
    
    const presetsLabel = document.createElement('div');
    presetsLabel.textContent = 'Quick Presets:';
    presetsLabel.style.marginBottom = '8px';
    presetsLabel.style.fontWeight = '500';
    
    const presetsGrid = document.createElement('div');
    presetsGrid.style.display = 'grid';
    presetsGrid.style.gridTemplateColumns = '1fr 1fr';
    presetsGrid.style.gap = '5px';
    
    // Create preset buttons
    const navPreset = createPresetButton('Navigation', '.Header_navLinkItem__l2xbK');
    const contentPreset = createPresetButton('Content', 'main section');
    const headersPreset = createPresetButton('Headers', 'h1, h2, h3, h4');
    const allPreset = createPresetButton('All Text', 'p, li, span');
    
    presetsGrid.appendChild(navPreset);
    presetsGrid.appendChild(contentPreset);
    presetsGrid.appendChild(headersPreset);
    presetsGrid.appendChild(allPreset);
    
    presetsContainer.appendChild(presetsLabel);
    presetsContainer.appendChild(presetsGrid);
    
    // Add all elements to demo container
    demoContainer.appendChild(title);
    demoContainer.appendChild(description);
    demoContainer.appendChild(selectorContainer);
    demoContainer.appendChild(optionsContainer);
    demoContainer.appendChild(buttonContainer);
    demoContainer.appendChild(feedbackContainer);
    demoContainer.appendChild(presetsContainer);
    
    // Add to document body
    document.body.appendChild(demoContainer);
    
    // Add shortcut to open/close demo panel
    window.addEventListener('keydown', function(e) {
        // Ctrl+Shift+R to toggle demo panel
        if (e.ctrlKey && e.shiftKey && e.key === 'R') {
            e.preventDefault();
            const container = document.getElementById('rtl-demo-container');
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        }
    });
    
    // Show initialization message
    showFeedback('🚀 RTL demo interface initialized!', 'success');
    
    /**
     * Apply RTL transformation based on user input
     */
    function applyTransformation() {
        const selector = selectorInput.value.trim();
        
        if (!selector) {
            showFeedback('Please enter a valid CSS selector', 'error');
            return;
        }
        
        try {
            // Get transformation options
            const options = {
                swapMargins: swapMarginsCheckbox.checked,
                swapPadding: swapPaddingCheckbox.checked,
                transformFlex: transformFlexCheckbox.checked
            };
            
            // Apply transformation
            window.rtl.transform(selector, options);
            
            // Count elements transformed
            const elements = document.querySelectorAll(selector);
            showFeedback(`Transformed ${elements.length} element(s) matching "${selector}"`, 'success');
            
        } catch (error) {
            showFeedback(`Error: ${error.message}`, 'error');
            console.error('RTL transformation error:', error);
        }
    }
    
    /**
     * Show feedback message
     */
    function showFeedback(message, type = 'info') {
        const feedback = document.getElementById('rtl-feedback');
        
        // Set style based on type
        switch (type) {
            case 'success':
                feedback.style.background = 'rgba(76, 175, 80, 0.1)';
                feedback.style.color = '#2e7d32';
                feedback.style.border = '1px solid #c8e6c9';
                break;
            case 'error':
                feedback.style.background = 'rgba(244, 67, 54, 0.1)';
                feedback.style.color = '#c62828';
                feedback.style.border = '1px solid #ffcdd2';
                break;
            case 'info':
            default:
                feedback.style.background = 'rgba(33, 150, 243, 0.1)';
                feedback.style.color = '#1565c0';
                feedback.style.border = '1px solid #bbdefb';
                break;
        }
        
        feedback.textContent = message;
        feedback.style.display = 'block';
        
        // Hide after 3 seconds
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 3000);
    }
    
    /**
     * Create preset button
     */
    function createPresetButton(text, selector) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.cssText = `
            padding: 6px 10px;
            background: #e3f2fd;
            color: #1976d2;
            border: 1px solid #90caf9;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        `;
        
        button.addEventListener('mouseover', function() {
            this.style.background = '#bbdefb';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.background = '#e3f2fd';
        });
        
        button.addEventListener('click', function() {
            selectorInput.value = selector;
            showFeedback(`Selected: ${text} (${selector})`, 'info');
        });
        
        return button;
    }
}