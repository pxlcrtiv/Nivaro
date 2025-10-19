// Nivaro Hebrew Website - Quantum RTL Test Tools for Services Page

/**
 * quantum-rtl-test-services.js
 * Tools to test and visualize quantum-level RTL transformations on services.html
 * Press Ctrl+Shift+T to activate the test interface
 */

(function() {
    'use strict';
    
    // Test interface state
    let isTestInterfaceActive = false;
    let testContainer = null;
    let statsInterval = null;
    let debugMode = false;
    
    // Keyboard shortcut to activate test interface (Ctrl+Shift+T)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'T') {
            event.preventDefault();
            toggleTestInterface();
        }
    });
    
    /**
     * Toggle the quantum RTL test interface
     */
    function toggleTestInterface() {
        if (!isTestInterfaceActive) {
            createTestInterface();
            startMonitoringStats();
            isTestInterfaceActive = true;
            console.log('%c🔬 Quantum RTL Test Interface Activated', 'font-size: 14px; color: #00d4ff; font-weight: bold');
        } else {
            destroyTestInterface();
            stopMonitoringStats();
            isTestInterfaceActive = false;
            console.log('%c🔬 Quantum RTL Test Interface Deactivated', 'font-size: 14px; color: #ff6b6b; font-weight: bold');
        }
    }
    
    /**
     * Create the test interface UI
     */
    function createTestInterface() {
        // Create container for test interface
        testContainer = document.createElement('div');
        testContainer.id = 'quantum-rtl-test-interface';
        testContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 380px;
            max-height: 80vh;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            border-radius: 12px;
            padding: 20px;
            z-index: 10000;
            font-family: 'Rubik', Arial, sans-serif;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        `;
        
        // Header
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 212, 255, 0.3);
        `;
        
        const title = document.createElement('h3');
        title.textContent = '🔬 Quantum RTL Test Interface';
        title.style.margin = '0';
        title.style.color = '#00d4ff';
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
            transition: background-color 0.2s;
        `;
        closeBtn.onmouseover = function() { this.style.backgroundColor = 'rgba(255, 107, 107, 0.3);' };
        closeBtn.onmouseout = function() { this.style.backgroundColor = 'transparent;' };
        closeBtn.onclick = toggleTestInterface;
        
        header.appendChild(title);
        header.appendChild(closeBtn);
        
        // Stats section
        const statsSection = document.createElement('div');
        statsSection.id = 'quantum-rtl-stats';
        statsSection.style.cssText = `
            margin-bottom: 20px;
            padding: 15px;
            background: rgba(0, 212, 255, 0.1);
            border-radius: 8px;
        `;
        
        const statsTitle = document.createElement('h4');
        statsTitle.textContent = '📊 Quantum Statistics';
        statsTitle.style.margin = '0 0 10px 0';
        statsTitle.style.color = '#00d4ff';
        
        statsSection.appendChild(statsTitle);
        
        // Create stats grid
        const statsGrid = document.createElement('div');
        statsGrid.style.display = 'grid';
        statsGrid.style.gridTemplateColumns = '1fr 1fr';
        statsGrid.style.gap = '10px';
        
        // Stats items
        const statsItems = [
            { id: 'transformed-count', label: 'Transformed Elements', initialValue: '0' },
            { id: 'hebrew-count', label: 'Hebrew Elements', initialValue: '0' },
            { id: 'service-cards', label: 'Service Cards', initialValue: '0' },
            { id: 'quantum-events', label: 'Quantum Events', initialValue: '0' }
        ];
        
        statsItems.forEach(item => {
            const statItem = document.createElement('div');
            statItem.style.cssText = `
                padding: 8px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
                text-align: center;
            `;
            
            const statLabel = document.createElement('div');
            statLabel.textContent = item.label;
            statLabel.style.fontSize = '12px';
            statLabel.style.opacity = '0.8';
            statLabel.style.marginBottom = '4px';
            
            const statValue = document.createElement('div');
            statValue.id = item.id;
            statValue.textContent = item.initialValue;
            statValue.style.fontSize = '18px';
            statValue.style.fontWeight = 'bold';
            statValue.style.color = '#00d4ff';
            
            statItem.appendChild(statLabel);
            statItem.appendChild(statValue);
            statsGrid.appendChild(statItem);
        });
        
        statsSection.appendChild(statsGrid);
        
        // Performance stats
        const performanceStat = document.createElement('div');
        performanceStat.style.cssText = `
            margin-top: 10px;
            padding: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
            text-align: center;
        `;
        
        const performanceLabel = document.createElement('div');
        performanceLabel.textContent = 'Performance';
        performanceLabel.style.fontSize = '12px';
        performanceLabel.style.opacity = '0.8';
        performanceLabel.style.marginBottom = '4px';
        
        const performanceValue = document.createElement('div');
        performanceValue.id = 'performance-value';
        performanceValue.textContent = 'Optimal';
        performanceValue.style.fontSize = '16px';
        performanceValue.style.fontWeight = 'bold';
        performanceValue.style.color = '#4CAF50';
        
        performanceStat.appendChild(performanceLabel);
        performanceStat.appendChild(performanceValue);
        statsSection.appendChild(performanceStat);
        
        // Controls section
        const controlsSection = document.createElement('div');
        controlsSection.style.cssText = `
            margin-bottom: 20px;
        `;
        
        const controlsTitle = document.createElement('h4');
        controlsTitle.textContent = '🎛️ Controls';
        controlsTitle.style.margin = '0 0 10px 0';
        controlsTitle.style.color = '#00d4ff';
        
        controlsSection.appendChild(controlsTitle);
        
        // Create controls grid
        const controlsGrid = document.createElement('div');
        controlsGrid.style.display = 'grid';
        controlsGrid.style.gridTemplateColumns = '1fr 1fr';
        controlsGrid.style.gap = '8px';
        
        // Control buttons
        const controlButtons = [
            { id: 'refresh-stats', label: '🔄 Refresh Stats', action: refreshStats },
            { id: 'run-diagnostics', label: '🔍 Run Diagnostics', action: runDiagnostics },
            { id: 'toggle-transformations', label: '🔄 Toggle RTL', action: toggleTransformations },
            { id: 'visualize-quantum', label: '✨ Visualize', action: toggleQuantumVisualization }
        ];
        
        controlButtons.forEach(button => {
            const btn = document.createElement('button');
            btn.id = button.id;
            btn.textContent = button.label;
            btn.style.cssText = `
                padding: 8px 12px;
                background: linear-gradient(135deg, #00d4ff 0%, #0072ff 100%);
                border: none;
                border-radius: 6px;
                color: white;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.2s;
            `;
            btn.onmouseover = function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.4)';
            };
            btn.onmouseout = function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            };
            btn.onclick = button.action;
            
            controlsGrid.appendChild(btn);
        });
        
        controlsSection.appendChild(controlsGrid);
        
        // Status section
        const statusSection = document.createElement('div');
        statusSection.id = 'quantum-rtl-status';
        statusSection.style.cssText = `
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            font-size: 13px;
            max-height: 150px;
            overflow-y: auto;
        `;
        
        const statusTitle = document.createElement('h4');
        statusTitle.textContent = '📝 Status Log';
        statusTitle.style.margin = '0 0 10px 0';
        statusTitle.style.color = '#00d4ff';
        
        const statusDiv = document.createElement('div');
        statusDiv.id = 'status-messages';
        statusDiv.style.lineHeight = '1.4';
        
        statusSection.appendChild(statusTitle);
        statusSection.appendChild(statusDiv);
        
        // Append all sections to container
        testContainer.appendChild(header);
        testContainer.appendChild(statsSection);
        testContainer.appendChild(controlsSection);
        testContainer.appendChild(statusSection);
        
        // Add container to body
        document.body.appendChild(testContainer);
        
        // Add initial status message
        addStatusMessage('✅ Quantum RTL Test Interface initialized');
    }
    
    /**
     * Destroy the test interface
     */
    function destroyTestInterface() {
        if (testContainer && testContainer.parentNode) {
            testContainer.parentNode.removeChild(testContainer);
            testContainer = null;
        }
    }
    
    /**
     * Start monitoring and updating statistics
     */
    function startMonitoringStats() {
        // Update stats immediately
        refreshStats();
        
        // Set interval to update stats every second
        statsInterval = setInterval(refreshStats, 1000);
    }
    
    /**
     * Stop monitoring statistics
     */
    function stopMonitoringStats() {
        if (statsInterval) {
            clearInterval(statsInterval);
            statsInterval = null;
        }
    }
    
    /**
     * Refresh quantum statistics
     */
    function refreshStats() {
        // Get current stats
        const stats = getServicesRTLStats();
        
        // Update UI with new stats
        document.getElementById('transformed-count').textContent = stats.transformedElements;
        document.getElementById('hebrew-count').textContent = stats.hebrewElements;
        document.getElementById('service-cards').textContent = stats.serviceCards;
        document.getElementById('quantum-events').textContent = stats.quantumEvents;
        
        // Update performance status
        updatePerformanceStatus(stats);
    }
    
    /**
     * Get RTL statistics for services page
     * @returns {Object} Statistics object
     */
    function getServicesRTLStats() {
        const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]').length;
        const hebrewElements = document.querySelectorAll('.hebrew-content').length;
        const serviceCards = document.querySelectorAll('.service-card, [class*="service-card"]').length;
        
        // Calculate quantum events (simplified count of transformations)
        let quantumEvents = parseInt(localStorage.getItem('quantum-rtl-events') || '0');
        
        return {
            transformedElements: transformedElements,
            hebrewElements: hebrewElements,
            serviceCards: serviceCards,
            quantumEvents: quantumEvents,
            timestamp: Date.now()
        };
    }
    
    /**
     * Update performance status display
     * @param {Object} stats - Current statistics
     */
    function updatePerformanceStatus(stats) {
        const performanceElement = document.getElementById('performance-value');
        
        // Simple performance evaluation
        let performanceStatus = 'Optimal';
        let statusColor = '#4CAF50';
        
        // Check if any elements are not transformed
        const totalElements = document.querySelectorAll('*').length;
        const transformationRatio = stats.transformedElements / totalElements;
        
        if (transformationRatio < 0.6) {
            performanceStatus = 'Needs Attention';
            statusColor = '#FF9800';
        } else if (transformationRatio < 0.8) {
            performanceStatus = 'Good';
            statusColor = '#2196F3';
        }
        
        performanceElement.textContent = performanceStatus;
        performanceElement.style.color = statusColor;
    }
    
    /**
     * Run diagnostics on quantum RTL implementation
     */
    function runDiagnostics() {
        addStatusMessage('🔍 Running diagnostics...');
        
        // Clear previous diagnostic styles
        document.querySelectorAll('.quantum-diagnostic-error').forEach(el => {
            el.classList.remove('quantum-diagnostic-error');
        });
        
        let hasErrors = false;
        
        // Check document settings
        const html = document.documentElement;
        const lang = html.lang;
        const dir = html.getAttribute('dir');
        
        if (lang !== 'he' || dir !== 'rtl') {
            addStatusMessage('⚠️ Document language/direction issue: lang="' + lang + '", dir="' + dir + '"');
            hasErrors = true;
        } else {
            addStatusMessage('✅ Document language and direction are correct');
        }
        
        // Check if QuantumRTLTransformer is available
        if (typeof QuantumRTLTransformer === 'undefined') {
            addStatusMessage('❌ QuantumRTLTransformer is not available');
            hasErrors = true;
        } else {
            addStatusMessage('✅ QuantumRTLTransformer is available');
        }
        
        // Check if servicesQuantumRTL is initialized
        if (!window.servicesQuantumRTL) {
            addStatusMessage('❌ servicesQuantumRTL is not initialized');
            hasErrors = true;
        } else {
            addStatusMessage('✅ servicesQuantumRTL is initialized');
        }
        
        // Check service cards transformation
        const serviceCards = document.querySelectorAll('.service-card, [class*="service-card"]');
        let untransformedCards = 0;
        
        serviceCards.forEach(card => {
            if (!card.hasAttribute('data-quantum-rtl')) {
                card.classList.add('quantum-diagnostic-error');
                untransformedCards++;
            }
        });
        
        if (untransformedCards > 0) {
            addStatusMessage('⚠️ ' + untransformedCards + ' service cards are not transformed');
            hasErrors = true;
        } else {
            addStatusMessage('✅ All service cards are transformed');
        }
        
        // Check feature lists transformation
        const featureLists = document.querySelectorAll('.service-features, [class*="features"] ul, ol');
        let untransformedLists = 0;
        
        featureLists.forEach(list => {
            if (!list.hasAttribute('data-quantum-rtl')) {
                list.classList.add('quantum-diagnostic-error');
                untransformedLists++;
            }
        });
        
        if (untransformedLists > 0) {
            addStatusMessage('⚠️ ' + untransformedLists + ' feature lists are not transformed');
            hasErrors = true;
        } else {
            addStatusMessage('✅ All feature lists are transformed');
        }
        
        // Final diagnostic result
        if (hasErrors) {
            addStatusMessage('❌ Diagnostics completed with issues', true);
        } else {
            addStatusMessage('✅ Diagnostics completed successfully', true);
        }
        
        // Add diagnostic styles
        addDiagnosticStyles();
    }
    
    /**
     * Add diagnostic styles
     */
    function addDiagnosticStyles() {
        let styleSheet = document.getElementById('quantum-diagnostic-styles');
        
        if (!styleSheet) {
            styleSheet = document.createElement('style');
            styleSheet.id = 'quantum-diagnostic-styles';
            document.head.appendChild(styleSheet);
        }
        
        styleSheet.textContent = `
            .quantum-diagnostic-error {
                outline: 2px solid #ff6b6b !important;
                box-shadow: 0 0 10px rgba(255, 107, 107, 0.5) !important;
            }
        `;
    }
    
    /**
     * Toggle RTL transformations on/off
     */
    function toggleTransformations() {
        const elements = document.querySelectorAll('[data-quantum-rtl="true"]');
        
        if (elements.length > 0) {
            // Remove transformations
            elements.forEach(el => el.removeAttribute('data-quantum-rtl'));
            addStatusMessage('🔄 Transformations disabled');
        } else {
            // Re-apply transformations
            if (window.servicesRTLControls && window.servicesRTLControls.reinitialize) {
                window.servicesRTLControls.reinitialize();
                addStatusMessage('🔄 Transformations re-enabled');
            }
        }
        
        // Refresh stats
        refreshStats();
    }
    
    /**
     * Toggle quantum visualization mode
     */
    function toggleQuantumVisualization() {
        const body = document.body;
        
        if (body.classList.contains('quantum-debug')) {
            body.classList.remove('quantum-debug');
            addStatusMessage('✨ Visualization mode disabled');
        } else {
            body.classList.add('quantum-debug');
            addStatusMessage('✨ Visualization mode enabled');
        }
        
        // Add visualization styles
        addVisualizationStyles();
    }
    
    /**
     * Add quantum visualization styles
     */
    function addVisualizationStyles() {
        let styleSheet = document.getElementById('quantum-visualization-styles');
        
        if (!styleSheet) {
            styleSheet = document.createElement('style');
            styleSheet.id = 'quantum-visualization-styles';
            document.head.appendChild(styleSheet);
        }
        
        styleSheet.textContent = `
            .quantum-debug [data-quantum-rtl="true"] {
                background: rgba(0, 212, 255, 0.1) !important;
                transition: all 0.3s ease !important;
            }
            
            .quantum-debug [data-quantum-rtl="true"]::after {
                content: '⚛️';
                display: inline-block;
                margin-left: 5px;
                color: #00d4ff;
                font-size: 14px;
            }
            
            .quantum-debug .hebrew-content {
                border-left: 3px solid #ff9800 !important;
            }
        `;
    }
    
    /**
     * Add status message to the log
     * @param {string} message - The message to add
     * @param {boolean} isImportant - Whether the message is important
     */
    function addStatusMessage(message, isImportant = false) {
        const statusDiv = document.getElementById('status-messages');
        if (!statusDiv) return;
        
        const timestamp = new Date().toLocaleTimeString();
        const messageEl = document.createElement('div');
        messageEl.style.cssText = `
            margin-bottom: 5px;
            padding: 5px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 4px;
            font-size: 12px;
        `;
        
        if (isImportant) {
            messageEl.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
            messageEl.style.fontWeight = 'bold';
        }
        
        messageEl.innerHTML = `<span style="color: #00d4ff;">${timestamp}</span>: ${message}`;
        
        // Add to the top of the log
        if (statusDiv.firstChild) {
            statusDiv.insertBefore(messageEl, statusDiv.firstChild);
        } else {
            statusDiv.appendChild(messageEl);
        }
        
        // Limit the number of messages
        if (statusDiv.children.length > 20) {
            statusDiv.removeChild(statusDiv.lastChild);
        }
    }
    
    /**
     * Export quantum RTL test results
     * @returns {Object} Test results data
     */
    function exportTestResults() {
        const stats = getServicesRTLStats();
        
        return {
            page: 'services.html',
            timestamp: new Date().toISOString(),
            stats: stats,
            documentSettings: {
                lang: document.documentElement.lang,
                dir: document.documentElement.getAttribute('dir')
            },
            hasQuantumRTL: typeof window.QuantumRTLTransformer !== 'undefined',
            hasServicesQuantumRTL: !!window.servicesQuantumRTL
        };
    }
    
    // Expose public API for testing and debugging
    window.quantumRTLTest = {
        activateTestInterface: toggleTestInterface,
        getStats: getServicesRTLStats,
        runDiagnostics: runDiagnostics,
        toggleTransformations: toggleTransformations,
        toggleVisualization: toggleQuantumVisualization,
        exportResults: exportTestResults,
        isActive: function() { return isTestInterfaceActive; }
    };
    
    // Add console helper message
    console.log('%c🔬 Quantum RTL Test Tools for Services Page', 'color: #00d4ff');
    console.log('%cPress Ctrl+Shift+T to activate the test interface', 'color: #00d4ff');
})();