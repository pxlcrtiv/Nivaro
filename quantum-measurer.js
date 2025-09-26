/**
 * Quantum RTL Measurement Tool
 * Like the quantum measurement devices in Ant-Man that let you see the quantum realm
 * This tool visualizes and measures RTL transformations at the elemental level
 */

class QuantumRTLMeasurer {
    constructor() {
        this.measurements = new Map();
        this.isActive = false;
        this.overlayElement = null;
        this.quantumElements = [];
    }

    /**
     * Activate quantum measurement mode
     * Like turning on the quantum realm visualization
     */
    activate() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.createQuantumOverlay();
        this.scanQuantumElements();
        this.startMeasurementLoop();
        
        console.log('🔬 Quantum RTL Measurement activated');
        console.log('Use quantumMeasurer.getReport() for detailed analysis');
        console.log('Use quantumMeasurer.exportData() to export measurements');
    }

    /**
     * Create the quantum visualization overlay
     * Like the heads-up display in the Ant-Man suit
     */
    createQuantumOverlay() {
        this.overlayElement = document.createElement('div');
        this.overlayElement.id = 'quantum-rtl-overlay';
        this.overlayElement.innerHTML = `
            <div class="quantum-hud">
                <div class="quantum-stats">
                    <div class="quantum-stat">
                        <span class="quantum-label">Elements:</span>
                        <span class="quantum-value" id="quantum-element-count">0</span>
                    </div>
                    <div class="quantum-stat">
                        <span class="quantum-label">RTL States:</span>
                        <span class="quantum-value" id="quantum-rtl-count">0</span>
                    </div>
                    <div class="quantum-stat">
                        <span class="quantum-label">Transformations:</span>
                        <span class="quantum-value" id="quantum-transform-count">0</span>
                    </div>
                </div>
                <div class="quantum-controls">
                    <button onclick="quantumMeasurer.exportData()" class="quantum-btn">Export</button>
                    <button onclick="quantumMeasurer.deactivate()" class="quantum-btn quantum-btn-danger">Close</button>
                </div>
            </div>
        `;

        const styles = `
            #quantum-rtl-overlay {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 999999;
                background: rgba(0, 0, 0, 0.9);
                color: #00ff00;
                padding: 15px;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-size: 12px;
                backdrop-filter: blur(10px);
                border: 1px solid #00ff00;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            }
            
            .quantum-hud {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .quantum-stats {
                display: flex;
                gap: 20px;
            }
            
            .quantum-stat {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .quantum-label {
                color: #888;
                font-size: 10px;
                margin-bottom: 2px;
            }
            
            .quantum-value {
                color: #00ff00;
                font-size: 16px;
                font-weight: bold;
            }
            
            .quantum-controls {
                display: flex;
                gap: 10px;
                margin-top: 10px;
            }
            
            .quantum-btn {
                background: rgba(0, 255, 0, 0.2);
                color: #00ff00;
                border: 1px solid #00ff00;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 10px;
                transition: all 0.2s ease;
            }
            
            .quantum-btn:hover {
                background: rgba(0, 255, 0, 0.4);
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
            }
            
            .quantum-btn-danger {
                background: rgba(255, 0, 0, 0.2);
                color: #ff0000;
                border-color: #ff0000;
            }
            
            .quantum-btn-danger:hover {
                background: rgba(255, 0, 0, 0.4);
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
            }
            
            .quantum-element-highlight {
                outline: 2px solid #00ff00 !important;
                outline-offset: 2px !important;
                position: relative !important;
                animation: quantum-pulse 2s infinite;
            }
            
            @keyframes quantum-pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            .quantum-measurement-label {
                position: absolute !important;
                background: rgba(0, 255, 0, 0.9) !important;
                color: black !important;
                padding: 2px 4px !important;
                font-size: 10px !important;
                border-radius: 2px !important;
                z-index: 999998 !important;
                pointer-events: none !important;
                font-family: 'Courier New', monospace !important;
                white-space: nowrap !important;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        document.body.appendChild(this.overlayElement);
    }

    /**
     * Scan all elements for quantum RTL properties
     * Like scanning the quantum realm for particles
     */
    scanQuantumElements() {
        this.quantumElements = [];
        
        // Find all elements with quantum RTL attributes
        const quantumElements = document.querySelectorAll('[data-quantum-rtl="true"]');
        
        quantumElements.forEach((element, index) => {
            const measurement = this.measureElement(element, index);
            this.quantumElements.push(measurement);
            this.measurements.set(element, measurement);
        });

        // Also measure regular RTL elements
        const rtlElements = document.querySelectorAll('[dir="rtl"], html[dir="rtl"] *');
        rtlElements.forEach((element, index) => {
            if (!this.measurements.has(element)) {
                const measurement = this.measureElement(element, index + quantumElements.length, 'rtl');
                this.quantumElements.push(measurement);
                this.measurements.set(element, measurement);
            }
        });

        this.highlightQuantumElements();
    }

    /**
     * Measure individual element's quantum RTL properties
     * Like measuring the spin of a quantum particle
     */
    measureElement(element, id, type = 'quantum') {
        const computedStyle = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        
        const measurement = {
            id: id,
            type: type,
            tagName: element.tagName.toLowerCase(),
            className: element.className,
            quantumId: element.getAttribute('data-quantum-id') || null,
            
            // Quantum RTL properties
            direction: computedStyle.direction,
            textAlign: computedStyle.textAlign,
            unicodeBidi: computedStyle.unicodeBidi,
            
            // Layout properties
            marginLeft: computedStyle.marginLeft,
            marginRight: computedStyle.marginRight,
            paddingLeft: computedStyle.paddingLeft,
            paddingRight: computedStyle.paddingRight,
            float: computedStyle.float,
            clear: computedStyle.clear,
            
            // Transform properties
            transform: computedStyle.transform,
            transformOrigin: computedStyle.transformOrigin,
            
            // Position properties
            left: computedStyle.left,
            right: computedStyle.right,
            top: computedStyle.top,
            bottom: computedStyle.bottom,
            
            // Visual properties
            borderRadius: computedStyle.borderRadius,
            borderLeftWidth: computedStyle.borderLeftWidth,
            borderRightWidth: computedStyle.borderRightWidth,
            
            // Content properties
            textContent: element.textContent.trim().substring(0, 50),
            hasHebrew: /[\u0590-\u05FF]/.test(element.textContent),
            childElementCount: element.children.length,
            
            // Quantum properties
            isTransformed: element.hasAttribute('data-quantum-rtl'),
            hasRTLAttributes: element.hasAttribute('dir') || element.closest('[dir="rtl"]') !== null,
            
            // Geometric properties
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y,
            
            // Timestamp
            measuredAt: new Date().toISOString()
        };

        return measurement;
    }

    /**
     * Highlight quantum elements visually
     * Like making quantum particles visible in the quantum realm
     */
    highlightQuantumElements() {
        // Remove existing highlights
        document.querySelectorAll('.quantum-element-highlight').forEach(el => {
            el.classList.remove('quantum-element-highlight');
        });
        
        document.querySelectorAll('.quantum-measurement-label').forEach(el => {
            el.remove();
        });

        // Highlight quantum elements
        this.quantumElements.forEach(measurement => {
            const element = [...this.measurements.entries()].find(([el, m]) => m.id === measurement.id)?.[0];
            if (element) {
                element.classList.add('quantum-element-highlight');
                
                // Add measurement label
                const label = document.createElement('div');
                label.className = 'quantum-measurement-label';
                label.textContent = `Q${measurement.id}: ${measurement.type}`;
                
                // Position label relative to element
                const rect = element.getBoundingClientRect();
                label.style.top = `${rect.top - 25}px`;
                label.style.right = `${window.innerWidth - rect.right}px`;
                
                document.body.appendChild(label);
            }
        });
    }

    /**
     * Start the measurement update loop
     * Like continuous quantum observation
     */
    startMeasurementLoop() {
        this.updateStats();
        
        if (this.isActive) {
            setTimeout(() => {
                this.startMeasurementLoop();
            }, 1000); // Update every second
        }
    }

    /**
     * Update statistics display
     */
    updateStats() {
        const elementCount = this.quantumElements.length;
        const rtlCount = this.quantumElements.filter(m => m.direction === 'rtl').length;
        const transformCount = this.quantumElements.filter(m => m.isTransformed).length;
        
        document.getElementById('quantum-element-count').textContent = elementCount;
        document.getElementById('quantum-rtl-count').textContent = rtlCount;
        document.getElementById('quantum-transform-count').textContent = transformCount;
    }

    /**
     * Generate comprehensive measurement report
     * Like a quantum physics research paper
     */
    getReport() {
        const totalElements = this.quantumElements.length;
        const rtlElements = this.quantumElements.filter(m => m.direction === 'rtl').length;
        const quantumElements = this.quantumElements.filter(m => m.isTransformed).length;
        const hebrewElements = this.quantumElements.filter(m => m.hasHebrew).length;
        
        const report = {
            summary: {
                totalElementsMeasured: totalElements,
                rtlCompliantElements: rtlElements,
                quantumTransformedElements: quantumElements,
                hebrewContentElements: hebrewElements,
                rtlComplianceRate: (rtlElements / totalElements * 100).toFixed(2) + '%',
                quantumTransformationRate: (quantumElements / totalElements * 100).toFixed(2) + '%'
            },
            
            elementBreakdown: {
                byTagName: this.groupBy(this.quantumElements, 'tagName'),
                byType: this.groupBy(this.quantumElements, 'type'),
                byTextAlign: this.groupBy(this.quantumElements, 'textAlign'),
                byDirection: this.groupBy(this.quantumElements, 'direction')
            },
            
            layoutAnalysis: {
                elementsWithMarginIssues: this.quantumElements.filter(m => 
                    (m.marginLeft !== '0px' && m.marginLeft !== 'auto' && m.direction === 'rtl') ||
                    (m.marginRight !== '0px' && m.marginRight !== 'auto' && m.direction === 'ltr')
                ),
                elementsWithPaddingIssues: this.quantumElements.filter(m => 
                    (m.paddingLeft !== '0px' && m.direction === 'rtl') ||
                    (m.paddingRight !== '0px' && m.direction === 'ltr')
                ),
                elementsWithFloatIssues: this.quantumElements.filter(m => 
                    (m.float === 'left' && m.direction === 'rtl') ||
                    (m.float === 'right' && m.direction === 'ltr')
                )
            },
            
            recommendations: this.generateRecommendations(),
            
            timestamp: new Date().toISOString()
        };

        return report;
    }

    /**
     * Group measurements by property
     */
    groupBy(array, property) {
        return array.reduce((groups, item) => {
            const key = item[property] || 'undefined';
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});
    }

    /**
     * Generate recommendations based on measurements
     * Like quantum physics calculations
     */
    generateRecommendations() {
        const recommendations = [];
        
        const rtlRate = this.quantumElements.filter(m => m.direction === 'rtl').length / this.quantumElements.length;
        if (rtlRate < 0.8) {
            recommendations.push({
                type: 'warning',
                category: 'RTL Compliance',
                message: `Only ${(rtlRate * 100).toFixed(1)}% of elements are RTL compliant. Consider applying quantum transformations to more elements.`,
                priority: 'high'
            });
        }
        
        const marginIssues = this.quantumElements.filter(m => 
            m.direction === 'rtl' && m.marginLeft !== '0px' && m.marginLeft !== 'auto'
        ).length;
        if (marginIssues > 0) {
            recommendations.push({
                type: 'issue',
                category: 'Layout',
                message: `${marginIssues} RTL elements have non-zero left margins that should be swapped to right margins.`,
                priority: 'medium'
            });
        }
        
        const hebrewWithoutQuantum = this.quantumElements.filter(m => 
            m.hasHebrew && !m.isTransformed
        ).length;
        if (hebrewWithoutQuantum > 0) {
            recommendations.push({
                type: 'optimization',
                category: 'Hebrew Support',
                message: `${hebrewWithoutQuantum} elements contain Hebrew text but lack quantum transformations for optimal rendering.`,
                priority: 'low'
            });
        }
        
        return recommendations;
    }

    /**
     * Export measurement data
     * Like exporting quantum research data
     */
    exportData() {
        const report = this.getReport();
        const data = {
            measurements: this.quantumElements,
            report: report,
            exportMetadata: {
                version: '1.0.0',
                exportedAt: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent
            }
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `quantum-rtl-measurement-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('📊 Quantum RTL measurement data exported');
        return data;
    }

    /**
     * Deactivate quantum measurement
     * Like exiting the quantum realm
     */
    deactivate() {
        this.isActive = false;
        
        if (this.overlayElement) {
            this.overlayElement.remove();
        }
        
        // Remove highlights
        document.querySelectorAll('.quantum-element-highlight').forEach(el => {
            el.classList.remove('quantum-element-highlight');
        });
        
        document.querySelectorAll('.quantum-measurement-label').forEach(el => {
            el.remove();
        });
        
        // Remove styles
        const styleSheet = document.querySelector('style');
        if (styleSheet && styleSheet.textContent.includes('quantum-rtl-overlay')) {
            styleSheet.remove();
        }
        
        console.log('🔬 Quantum RTL Measurement deactivated');
    }
}

// Global quantum measurer instance
window.quantumMeasurer = new QuantumRTLMeasurer();

// Auto-activate on RTL pages
document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.getAttribute('dir') === 'rtl') {
        console.log('🔬 Quantum RTL Measurer ready! Use quantumMeasurer.activate() to start measuring.');
    }
});