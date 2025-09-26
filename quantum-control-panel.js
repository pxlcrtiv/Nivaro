/**
 * Quantum RTL Control Panel
 * Like the Ant-Man suit control panel that lets you manipulate the quantum realm
 * This provides real-time control over RTL transformations at the quantum level
 */

class QuantumRTLControlPanel {
    constructor() {
        this.isOpen = false;
        this.panelElement = null;
        this.presets = {
            'gentle': { intensity: 0.3, speed: 'slow', focus: 'text' },
            'balanced': { intensity: 0.6, speed: 'medium', focus: 'layout' },
            'aggressive': { intensity: 1.0, speed: 'fast', focus: 'all' },
            'hebrew-optimized': { intensity: 0.8, speed: 'medium', focus: 'typography' }
        };
        this.currentPreset = 'balanced';
        this.isRealTime = false;
        this.updateInterval = null;
    }

    /**
     * Open the quantum control panel
     * Like activating the Ant-Man suit interface
     */
    open() {
        if (this.isOpen) return;
        
        this.isOpen = true;
        this.createPanel();
        this.bindControls();
        this.loadCurrentSettings();
        
        console.log('🎛️ Quantum RTL Control Panel activated');
        console.log('Available presets:', Object.keys(this.presets));
        console.log('Use quantumPanel.applyPreset("presetName") for quick transformations');
    }

    /**
     * Create the control panel interface
     * Like building the quantum realm interface
     */
    createPanel() {
        const panelHTML = `
            <div id="quantum-control-panel" class="quantum-panel">
                <div class="quantum-panel-header">
                    <h3>🔮 Quantum RTL Control</h3>
                    <button class="quantum-close-btn" onclick="quantumPanel.close()">×</button>
                </div>
                
                <div class="quantum-panel-content">
                    <!-- Preset Controls -->
                    <div class="quantum-section">
                        <h4>Quantum Presets</h4>
                        <div class="quantum-preset-buttons">
                            <button class="quantum-preset-btn" data-preset="gentle">🌊 Gentle</button>
                            <button class="quantum-preset-btn quantum-active" data-preset="balanced">⚖️ Balanced</button>
                            <button class="quantum-preset-btn" data-preset="aggressive">⚡ Aggressive</button>
                            <button class="quantum-preset-btn" data-preset="hebrew-optimized">🇮🇱 Hebrew</button>
                        </div>
                    </div>
                    
                    <!-- Intensity Control -->
                    <div class="quantum-section">
                        <h4>Transformation Intensity</h4>
                        <div class="quantum-slider-container">
                            <input type="range" id="quantum-intensity" min="0" max="100" value="60" class="quantum-slider">
                            <span id="quantum-intensity-value">60%</span>
                        </div>
                    </div>
                    
                    <!-- Speed Control -->
                    <div class="quantum-section">
                        <h4>Transformation Speed</h4>
                        <div class="quantum-speed-controls">
                            <label class="quantum-radio">
                                <input type="radio" name="quantum-speed" value="slow"> Slow
                            </label>
                            <label class="quantum-radio quantum-active">
                                <input type="radio" name="quantum-speed" value="medium" checked> Medium
                            </label>
                            <label class="quantum-radio">
                                <input type="radio" name="quantum-speed" value="fast"> Fast
                            </label>
                        </div>
                    </div>
                    
                    <!-- Focus Areas -->
                    <div class="quantum-section">
                        <h4>Focus Areas</h4>
                        <div class="quantum-checkboxes">
                            <label class="quantum-checkbox quantum-active">
                                <input type="checkbox" id="quantum-focus-text" checked> Text & Typography
                            </label>
                            <label class="quantum-checkbox quantum-active">
                                <input type="checkbox" id="quantum-focus-layout" checked> Layout & Spacing
                            </label>
                            <label class="quantum-checkbox">
                                <input type="checkbox" id="quantum-focus-visual"> Visual Elements
                            </label>
                            <label class="quantum-checkbox quantum-active">
                                <input type="checkbox" id="quantum-focus-interactive" checked> Interactive Elements
                            </label>
                        </div>
                    </div>
                    
                    <!-- Advanced Controls -->
                    <div class="quantum-section">
                        <h4>Advanced Quantum Controls</h4>
                        <div class="quantum-advanced-controls">
                            <button id="quantum-realtime" class="quantum-btn quantum-btn-secondary">
                                🔄 Real-time Mode
                            </button>
                            <button id="quantum-measure" class="quantum-btn quantum-btn-secondary">
                                📏 Measure Now
                            </button>
                            <button id="quantum-reset" class="quantum-btn quantum-btn-danger">
                                🔄 Reset All
                            </button>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="quantum-section">
                        <div class="quantum-action-buttons">
                            <button id="quantum-apply" class="quantum-btn quantum-btn-primary">
                                ✨ Apply Quantum Transformation
                            </button>
                            <button id="quantum-preview" class="quantum-btn quantum-btn-secondary">
                                👁️ Preview Changes
                            </button>
                        </div>
                    </div>
                    
                    <!-- Status Display -->
                    <div class="quantum-section">
                        <div id="quantum-status" class="quantum-status">
                            Ready for quantum transformation
                        </div>
                    </div>
                </div>
            </div>
        `;

        const styles = `
            .quantum-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 400px;
                max-height: 80vh;
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 2px solid #5d5ad6;
                border-radius: 12px;
                box-shadow: 0 0 30px rgba(93, 90, 214, 0.5);
                z-index: 999999;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #ffffff;
                overflow: hidden;
                animation: quantum-panel-enter 0.3s ease-out;
            }
            
            @keyframes quantum-panel-enter {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            
            .quantum-panel-header {
                background: linear-gradient(90deg, #5d5ad6, #7c7ae6);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .quantum-panel-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
            }
            
            .quantum-close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s ease;
            }
            
            .quantum-close-btn:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
            
            .quantum-panel-content {
                padding: 20px;
                max-height: calc(80vh - 60px);
                overflow-y: auto;
            }
            
            .quantum-section {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .quantum-section:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            
            .quantum-section h4 {
                margin: 0 0 10px 0;
                font-size: 14px;
                font-weight: 600;
                color: #b8b5ff;
            }
            
            .quantum-preset-buttons {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            
            .quantum-preset-btn {
                background: rgba(93, 90, 214, 0.2);
                border: 1px solid #5d5ad6;
                color: #b8b5ff;
                padding: 8px 12px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.2s ease;
            }
            
            .quantum-preset-btn:hover {
                background: rgba(93, 90, 214, 0.4);
                color: white;
            }
            
            .quantum-preset-btn.quantum-active {
                background: #5d5ad6;
                color: white;
            }
            
            .quantum-slider-container {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .quantum-slider {
                flex: 1;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                outline: none;
                border-radius: 2px;
                -webkit-appearance: none;
            }
            
            .quantum-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 16px;
                height: 16px;
                background: #5d5ad6;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 5px rgba(93, 90, 214, 0.5);
            }
            
            .quantum-speed-controls,
            .quantum-checkboxes {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .quantum-radio,
            .quantum-checkbox {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 12px;
                color: #b8b5ff;
                transition: color 0.2s ease;
            }
            
            .quantum-radio:hover,
            .quantum-checkbox:hover {
                color: white;
            }
            
            .quantum-radio.quantum-active,
            .quantum-checkbox.quantum-active {
                color: white;
            }
            
            .quantum-advanced-controls {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .quantum-action-buttons {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .quantum-btn {
                background: rgba(93, 90, 214, 0.2);
                border: 1px solid #5d5ad6;
                color: #b8b5ff;
                padding: 10px 16px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                transition: all 0.2s ease;
                text-align: center;
            }
            
            .quantum-btn:hover {
                background: rgba(93, 90, 214, 0.4);
                color: white;
                transform: translateY(-1px);
            }
            
            .quantum-btn-primary {
                background: linear-gradient(90deg, #5d5ad6, #7c7ae6);
                color: white;
                border: none;
            }
            
            .quantum-btn-primary:hover {
                background: linear-gradient(90deg, #7c7ae6, #9b9af6);
            }
            
            .quantum-btn-secondary {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.3);
            }
            
            .quantum-btn-danger {
                background: rgba(255, 0, 0, 0.2);
                border-color: #ff0000;
                color: #ff6666;
            }
            
            .quantum-btn-danger:hover {
                background: rgba(255, 0, 0, 0.4);
                color: white;
            }
            
            .quantum-status {
                background: rgba(0, 255, 0, 0.1);
                border: 1px solid #00ff00;
                color: #00ff66;
                padding: 10px;
                border-radius: 6px;
                font-size: 11px;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .quantum-status.quantum-warning {
                background: rgba(255, 255, 0, 0.1);
                border-color: #ffff00;
                color: #ffff66;
            }
            
            .quantum-status.quantum-error {
                background: rgba(255, 0, 0, 0.1);
                border-color: #ff0000;
                color: #ff6666;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);

        this.panelElement = document.createElement('div');
        this.panelElement.innerHTML = panelHTML;
        document.body.appendChild(this.panelElement);
    }

    /**
     * Bind control events
     */
    bindControls() {
        // Preset buttons
        document.querySelectorAll('.quantum-preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const preset = e.target.dataset.preset;
                this.applyPreset(preset);
            });
        });

        // Intensity slider
        const intensitySlider = document.getElementById('quantum-intensity');
        intensitySlider.addEventListener('input', (e) => {
            document.getElementById('quantum-intensity-value').textContent = e.target.value + '%';
        });

        // Apply button
        document.getElementById('quantum-apply').addEventListener('click', () => {
            this.applyQuantumTransformation();
        });

        // Preview button
        document.getElementById('quantum-preview').addEventListener('click', () => {
            this.previewTransformation();
        });

        // Real-time mode
        document.getElementById('quantum-realtime').addEventListener('click', () => {
            this.toggleRealTimeMode();
        });

        // Measure button
        document.getElementById('quantum-measure').addEventListener('click', () => {
            if (window.quantumMeasurer) {
                window.quantumMeasurer.activate();
            }
        });

        // Reset button
        document.getElementById('quantum-reset').addEventListener('click', () => {
            this.resetAllTransformations();
        });
    }

    /**
     * Load current settings from quantum transformer
     */
    loadCurrentSettings() {
        if (window.quantumRTL) {
            const settings = window.quantumRTL.options;
            // Update UI to reflect current settings
            this.updateStatus('Quantum transformer detected - settings loaded');
        }
    }

    /**
     * Apply a preset transformation
     * Like selecting a quantum realm navigation mode
     */
    applyPreset(presetName) {
        if (!this.presets[presetName]) {
            this.updateStatus(`Preset '${presetName}' not found`, 'error');
            return;
        }

        this.currentPreset = presetName;
        const preset = this.presets[presetName];

        // Update UI
        document.querySelectorAll('.quantum-preset-btn').forEach(btn => {
            btn.classList.remove('quantum-active');
        });
        document.querySelector(`[data-preset="${presetName}"]`).classList.add('quantum-active');

        // Apply preset settings
        document.getElementById('quantum-intensity').value = preset.intensity * 100;
        document.getElementById('quantum-intensity-value').textContent = (preset.intensity * 100) + '%';

        // Update radio buttons for speed
        document.querySelectorAll('input[name="quantum-speed"]').forEach(radio => {
            radio.checked = radio.value === preset.speed;
        });

        // Update checkboxes for focus areas
        const focusMap = {
            'text': 'quantum-focus-text',
            'layout': 'quantum-focus-layout',
            'visual': 'quantum-focus-visual',
            'interactive': 'quantum-focus-interactive',
            'all': null
        };

        document.querySelectorAll('.quantum-checkbox').forEach(checkbox => {
            checkbox.classList.remove('quantum-active');
        });

        if (preset.focus === 'all') {
            document.querySelectorAll('.quantum-checkbox').forEach(checkbox => {
                checkbox.classList.add('quantum-active');
                checkbox.querySelector('input').checked = true;
            });
        } else {
            const focusId = focusMap[preset.focus];
            if (focusId) {
                const checkbox = document.getElementById(focusId).closest('.quantum-checkbox');
                checkbox.classList.add('quantum-active');
                checkbox.querySelector('input').checked = true;
            }
        }

        this.updateStatus(`Preset '${presetName}' loaded - ready to apply`);
    }

    /**
     * Apply quantum transformation with current settings
     * Like entering the quantum realm with specific parameters
     */
    applyQuantumTransformation() {
        const intensity = document.getElementById('quantum-intensity').value / 100;
        const speed = document.querySelector('input[name="quantum-speed"]:checked').value;
        const focusAreas = this.getFocusAreas();

        this.updateStatus('Applying quantum transformation...', 'warning');

        // Create a new quantum transformer with custom settings
        if (window.quantumRTL) {
            window.quantumRTL.destroy();
        }

        // Apply transformation based on intensity and focus
        const options = {
            debug: true,
            autoInit: true,
            mutationObserver: focusAreas.includes('interactive'),
            quantumLevel: this.getQuantumLevel(focusAreas)
        };

        window.quantumRTL = new QuantumRTLTransformer(options);

        // Apply intensity-based transformations
        this.applyIntensityTransformations(intensity, focusAreas);

        // Set transformation speed
        this.setTransformationSpeed(speed);

        this.updateStatus('Quantum transformation applied successfully!', 'success');

        // Log transformation details
        console.log('🔮 Quantum Transformation Applied:');
        console.log(`   Intensity: ${intensity * 100}%`);
        console.log(`   Speed: ${speed}`);
        console.log(`   Focus Areas: ${focusAreas.join(', ')}`);
        console.log(`   Elements Affected: ${document.querySelectorAll('[data-quantum-rtl="true"]').length}`);
    }

    /**
     * Get focus areas from checkboxes
     */
    getFocusAreas() {
        const areas = [];
        if (document.getElementById('quantum-focus-text').checked) areas.push('text');
        if (document.getElementById('quantum-focus-layout').checked) areas.push('layout');
        if (document.getElementById('quantum-focus-visual').checked) areas.push('visual');
        if (document.getElementById('quantum-focus-interactive').checked) areas.push('interactive');
        return areas;
    }

    /**
     * Get quantum level based on focus areas
     */
    getQuantumLevel(focusAreas) {
        if (focusAreas.includes('text') && focusAreas.includes('layout') && focusAreas.includes('visual')) {
            return 'pseudo';
        } else if (focusAreas.includes('text')) {
            return 'text';
        } else if (focusAreas.includes('layout')) {
            return 'element';
        }
        return 'element';
    }

    /**
     * Apply intensity-based transformations
     */
    applyIntensityTransformations(intensity, focusAreas) {
        const elements = document.querySelectorAll('[data-quantum-rtl="true"]');
        
        elements.forEach(element => {
            // Apply intensity-based CSS custom properties
            element.style.setProperty('--quantum-intensity', intensity);
            
            if (focusAreas.includes('text') && intensity > 0.5) {
                // Enhanced text transformations
                element.style.setProperty('font-feature-settings', '"kern" 1, "liga" 1, "calt" 1, "hebr" 1');
                element.style.setProperty('text-rendering', 'optimizeLegibility');
            }
            
            if (focusAreas.includes('layout') && intensity > 0.7) {
                // Aggressive layout transformations
                element.style.setProperty('transition', `all ${0.3 / intensity}s cubic-bezier(0.4, 0, 0.2, 1)`);
            }
            
            if (focusAreas.includes('visual') && intensity > 0.8) {
                // Visual enhancements
                element.style.setProperty('transform-origin', 'right center');
                element.style.setProperty('perspective', '1000px');
            }
        });
    }

    /**
     * Set transformation speed
     */
    setTransformationSpeed(speed) {
        const speedMap = {
            'slow': '0.5s',
            'medium': '0.3s',
            'fast': '0.1s'
        };
        
        const duration = speedMap[speed] || '0.3s';
        
        document.querySelectorAll('[data-quantum-rtl="true"]').forEach(element => {
            element.style.setProperty('--quantum-transition-duration', duration);
            element.style.setProperty('transition-duration', duration);
        });
    }

    /**
     * Preview transformation without applying
     */
    previewTransformation() {
        this.updateStatus('Preview mode activated - hover over elements to see quantum effects', 'info');
        
        // Add preview mode styles
        const previewStyles = `
            .quantum-preview-mode [data-quantum-rtl="true"]:hover {
                outline: 2px dashed #5d5ad6 !important;
                outline-offset: 2px !important;
                background-color: rgba(93, 90, 214, 0.1) !important;
                transform: scale(1.02) !important;
                transition: all 0.2s ease !important;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = previewStyles;
        styleSheet.id = 'quantum-preview-styles';
        document.head.appendChild(styleSheet);
        
        document.body.classList.add('quantum-preview-mode');
        
        // Remove preview after 5 seconds
        setTimeout(() => {
            document.body.classList.remove('quantum-preview-mode');
            const previewStyles = document.getElementById('quantum-preview-styles');
            if (previewStyles) previewStyles.remove();
            this.updateStatus('Preview mode deactivated');
        }, 5000);
    }

    /**
     * Toggle real-time mode
     */
    toggleRealTimeMode() {
        this.isRealTime = !this.isRealTime;
        const btn = document.getElementById('quantum-realtime');
        
        if (this.isRealTime) {
            btn.classList.add('quantum-active');
            btn.textContent = '🔄 Real-time Mode (ON)';
            this.startRealTimeUpdates();
            this.updateStatus('Real-time mode activated - changes applied as you adjust');
        } else {
            btn.classList.remove('quantum-active');
            btn.textContent = '🔄 Real-time Mode';
            this.stopRealTimeUpdates();
            this.updateStatus('Real-time mode deactivated');
        }
    }

    /**
     * Start real-time updates
     */
    startRealTimeUpdates() {
        this.updateInterval = setInterval(() => {
            if (this.isRealTime) {
                this.applyQuantumTransformation();
            }
        }, 1000); // Update every second
    }

    /**
     * Stop real-time updates
     */
    stopRealTimeUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    /**
     * Reset all transformations
     */
    resetAllTransformations() {
        if (window.quantumRTL) {
            window.quantumRTL.destroy();
            window.quantumRTL = null;
        }
        
        // Remove all quantum attributes and styles
        document.querySelectorAll('[data-quantum-rtl="true"]').forEach(element => {
            element.removeAttribute('data-quantum-rtl');
            element.removeAttribute('data-quantum-id');
            element.style.removeProperty('--quantum-intensity');
            element.style.removeProperty('--quantum-transition-duration');
            element.style.removeProperty('transition-duration');
        });
        
        this.updateStatus('All quantum transformations reset', 'warning');
        console.log('🔄 All quantum RTL transformations have been reset');
    }

    /**
     * Update status display
     */
    updateStatus(message, type = 'info') {
        const statusElement = document.getElementById('quantum-status');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = 'quantum-status';
            if (type !== 'info') {
                statusElement.classList.add(`quantum-${type}`);
            }
        }
        
        console.log(`🎛️ Quantum Panel: ${message}`);
    }

    /**
     * Close the control panel
     */
    close() {
        this.isOpen = false;
        this.stopRealTimeUpdates();
        
        if (this.panelElement) {
            this.panelElement.remove();
        }
        
        console.log('🎛️ Quantum RTL Control Panel closed');
    }
}

// Global quantum panel instance
window.quantumPanel = new QuantumRTLControlPanel();

// Auto-open on RTL pages with keyboard shortcut
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Shift + Q to open quantum panel
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Q') {
        e.preventDefault();
        window.quantumPanel.open();
    }
});

console.log('🎛️ Quantum RTL Control Panel ready!');
console.log('Press Ctrl/Cmd + Shift + Q to open the control panel');