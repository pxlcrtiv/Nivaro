/**
 * Quantum RTL Test Script for who-we-are.html
 * This script provides tools to test and visualize quantum-level RTL transformations
 * Press Ctrl+Shift+T to activate the test interface
 */

(function() {
    'use strict';
    
    // Quantum test interface state
    const testState = {
        isActive: false,
        container: null,
        stats: {
            transformedElements: 0,
            hebrewElements: 0,
            quantumEvents: 0,
            performance: 0
        }
    };
    
    // Initialize test system when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Set up keyboard shortcut to activate test interface
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                toggleTestInterface();
            }
        });
        
        // Add test button to console for easy access
        if (typeof console !== 'undefined') {
            console.log('%c🔮 Quantum RTL Test System Active on who-we-are.html', 'font-size: 16px; color: #00d4ff; font-weight: bold');
            console.log('%cPress Ctrl+Shift+T to activate the test interface', 'color: #00d4ff');
            
            // Expose test functions to console
            window.quantumRTLTest = {
                activate: toggleTestInterface,
                getStats: getQuantumStats,
                runDiagnostics: runQuantumDiagnostics,
                toggleTransformations: toggleTransformations
            };
        }
    });
    
    /**
     * Toggle the quantum RTL test interface
     */
    function toggleTestInterface() {
        if (testState.isActive) {
            // Hide interface
            if (testState.container) {
                document.body.removeChild(testState.container);
                testState.container = null;
            }
            testState.isActive = false;
            console.log('🔴 Quantum RTL test interface hidden');
        } else {
            // Show interface
            createTestInterface();
            testState.isActive = true;
            console.log('🟢 Quantum RTL test interface active');
            updateTestStats();
        }
    }
    
    /**
     * Create the quantum RTL test interface
     */
    function createTestInterface() {
        // Create container
        const container = document.createElement('div');
        container.id = 'quantum-rtl-test-interface';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 320px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            border: 1px solid #00d4ff;
            border-radius: 12px;
            padding: 20px;
            z-index: 9999;
            font-family: 'Rubik', Arial, sans-serif;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        `;
        
        // Header
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 212, 255, 0.5);
        `;
        
        const title = document.createElement('h3');
        title.textContent = '🔮 Quantum RTL Test';
        title.style.margin = 0;
        title.style.color = '#00d4ff';
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        closeBtn.addEventListener('click', toggleTestInterface);
        
        header.appendChild(title);
        header.appendChild(closeBtn);
        container.appendChild(header);
        
        // Stats section
        const statsSection = document.createElement('div');
        statsSection.id = 'quantum-rtl-stats';
        statsSection.style.cssText = `
            margin-bottom: 15px;
            font-size: 14px;
        `;
        
        statsSection.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>🎯 Transformed Elements:</span>
                <span id="transformed-count" style="color: #00d4ff;">0</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>🇮🇱 Hebrew Elements:</span>
                <span id="hebrew-count" style="color: #00d4ff;">0</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>⚡ Quantum Events:</span>
                <span id="events-count" style="color: #00d4ff;">0</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span>🚀 Performance:</span>
                <span id="performance-score" style="color: #00d4ff;">0ms</span>
            </div>
        `;
        
        container.appendChild(statsSection);
        
        // Control buttons
        const controlsSection = document.createElement('div');
        controlsSection.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 15px;
        `;
        
        const refreshBtn = createControlButton('🔄 Refresh Stats', refreshStats);
        const diagnoseBtn = createControlButton('🔍 Run Diagnostics', runQuantumDiagnostics);
        const toggleBtn = createControlButton('🔀 Toggle Transformations', toggleTransformations);
        const visualizeBtn = createControlButton('🌈 Visualize Quantum States', visualizeQuantumStates);
        
        controlsSection.appendChild(refreshBtn);
        controlsSection.appendChild(diagnoseBtn);
        controlsSection.appendChild(toggleBtn);
        controlsSection.appendChild(visualizeBtn);
        
        container.appendChild(controlsSection);
        
        // Status message
        const statusDiv = document.createElement('div');
        statusDiv.id = 'quantum-rtl-status';
        statusDiv.style.cssText = `
            font-size: 12px;
            color: #888;
            text-align: center;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        `;
        statusDiv.textContent = 'Ready - Press Ctrl+Shift+T to hide';
        
        container.appendChild(statusDiv);
        
        // Add to body
        document.body.appendChild(container);
        testState.container = container;
    }
    
    /**
     * Create a standardized control button
     */
    function createControlButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.cssText = `
            padding: 8px 12px;
            background: rgba(0, 212, 255, 0.2);
            border: 1px solid #00d4ff;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('mouseover', function() {
            this.style.background = 'rgba(0, 212, 255, 0.3)';
            this.style.transform = 'translateX(-2px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.background = 'rgba(0, 212, 255, 0.2)';
            this.style.transform = 'translateX(0)';
        });
        
        button.addEventListener('click', onClick);
        
        return button;
    }
    
    /**
     * Update test statistics
     */
    function updateTestStats() {
        if (!testState.isActive || !testState.container) return;
        
        const stats = getQuantumStats();
        
        document.getElementById('transformed-count').textContent = stats.transformedElements;
        document.getElementById('hebrew-count').textContent = stats.hebrewElements;
        document.getElementById('events-count').textContent = stats.quantumEvents;
        document.getElementById('performance-score').textContent = stats.performance + 'ms';
    }
    
    /**
     * Get current quantum RTL statistics
     */
    function getQuantumStats() {
        const transformedElements = document.querySelectorAll('[data-quantum-rtl="true"]').length;
        const hebrewElements = document.querySelectorAll('[data-hebrew-optimized="true"]').length;
        
        // Increment event count
        testState.stats.quantumEvents++;
        
        // Update stats
        testState.stats.transformedElements = transformedElements;
        testState.stats.hebrewElements = hebrewElements;
        
        // Measure performance (basic)
        const startTime = performance.now();
        // Simple performance test
        const testElements = document.querySelectorAll('section')[0];
        if (testElements) {
            testElements.offsetHeight; // Force reflow
        }
        testState.stats.performance = Math.round(performance.now() - startTime);
        
        return testState.stats;
    }
    
    /**
     * Run quantum RTL diagnostics
     */
    function runQuantumDiagnostics() {
        console.log('%c🔍 Running Quantum RTL Diagnostics...', 'color: #00d4ff');
        
        const diagnostics = {
            documentLang: document.documentElement.lang,
            documentDir: document.documentElement.getAttribute('dir'),
            quantumRTLExists: !!window.quantumRTL,
            quantumConfigExists: !!window.QuantumRTLConfig,
            quantumPageControlsExists: !!window.quantumPageControls,
            scriptsLoaded: [],
            elementsWithRTL: document.querySelectorAll('[data-quantum-rtl="true"]').length,
            hebrewContent: !!document.querySelector('[lang="he"]')
        };
        
        // Check loaded scripts
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            if (script.src.includes('quantum') || script.src.includes('rtl')) {
                diagnostics.scriptsLoaded.push(script.src.split('/').pop());
            }
        });
        
        // Log diagnostics
        console.table(diagnostics);
        
        // Show status message
        if (testState.container) {
            const statusDiv = document.getElementById('quantum-rtl-status');
            statusDiv.textContent = 'Diagnostics completed - check console';
            statusDiv.style.color = '#00d4ff';
            
            setTimeout(() => {
                statusDiv.textContent = 'Ready - Press Ctrl+Shift+T to hide';
                statusDiv.style.color = '#888';
            }, 3000);
        }
        
        return diagnostics;
    }
    
    /**
     * Toggle quantum transformations on/off
     */
    function toggleTransformations() {
        const hasRTL = document.documentElement.getAttribute('dir') === 'rtl';
        
        if (hasRTL) {
            // Temporarily disable RTL
            document.documentElement.setAttribute('dir', 'ltr');
            
            if (window.quantumRTL && window.quantumRTL.reinitialize) {
                window.quantumRTL.reinitialize();
            }
            
            console.log('🔄 Quantum RTL temporarily disabled');
        } else {
            // Re-enable RTL
            document.documentElement.setAttribute('dir', 'rtl');
            
            if (window.quantumRTL && window.quantumRTL.reinitialize) {
                window.quantumRTL.reinitialize();
            }
            console.log('🔄 Quantum RTL re-enabled');
        }
        
        // Update status message
        if (testState.container) {
            const statusDiv = document.getElementById('quantum-rtl-status');
            statusDiv.textContent = hasRTL ? 'RTL temporarily disabled' : 'RTL re-enabled';
            statusDiv.style.color = '#00d4ff';
            
            setTimeout(() => {
                statusDiv.textContent = 'Ready - Press Ctrl+Shift+T to hide';
                statusDiv.style.color = '#888';
            }, 2000);
        }
        
        // Update stats after a short delay
        setTimeout(updateTestStats, 500);
    }
    
    /**
     * Visualize quantum states with temporary highlights
     */
    function visualizeQuantumStates() {
        console.log('%c🌈 Visualizing Quantum RTL States...', 'color: #00d4ff');
        
        // Remove existing visualizations
        document.querySelectorAll('.quantum-visualization').forEach(el => {
            el.classList.remove('quantum-visualization');
        });
        
        // Add visualization classes
        const quantumElements = document.querySelectorAll('[data-quantum-rtl="true"]');
        quantumElements.forEach(el => {
            el.classList.add('quantum-visualization');
            
            // Add temporary style
            const style = document.createElement('style');
            style.textContent = `
                .quantum-visualization {
                    animation: quantumPulse 2s ease-in-out;
                    border: 1px solid rgba(0, 212, 255, 0.5) !important;
                }
                
                @keyframes quantumPulse {
                    0% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7); }
                    50% { box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); }
                }
            `;
            document.head.appendChild(style);
            
            // Remove style after animation completes
            setTimeout(() => {
                if (style.parentNode) style.parentNode.removeChild(style);
                el.classList.remove('quantum-visualization');
            }, 2000);
        });
        
        // Show status message
        if (testState.container) {
            const statusDiv = document.getElementById('quantum-rtl-status');
            statusDiv.textContent = 'Visualizing ' + quantumElements.length + ' quantum elements';
            statusDiv.style.color = '#00d4ff';
            
            setTimeout(() => {
                statusDiv.textContent = 'Ready - Press Ctrl+Shift+T to hide';
                statusDiv.style.color = '#888';
            }, 2000);
        }
    }
    
    /**
     * Refresh statistics
     */
    function refreshStats() {
        updateTestStats();
        
        // Show status message
        if (testState.container) {
            const statusDiv = document.getElementById('quantum-rtl-status');
            statusDiv.textContent = 'Stats refreshed';
            statusDiv.style.color = '#00d4ff';
            
            setTimeout(() => {
                statusDiv.textContent = 'Ready - Press Ctrl+Shift+T to hide';
                statusDiv.style.color = '#888';
            }, 1000);
        }
    }
})();