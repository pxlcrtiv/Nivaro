/**
 * Quantum RTL JavaScript for Dharan E-commerce Case Study
 * Implements advanced RTL behaviors with quantum principles
 */

class DharanEcommerceQuantumRTL {
    constructor() {
        this.observers = [];
        this.quantumState = {
            isObserved: false,
            measurementCount: 0,
            probabilityWave: 1
        };
        
        // Initialize quantum RTL
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeQuantumRTL();
            this.setupQuantumObservers();
        });
    }
    
    /**
     * Initialize quantum RTL transformations
     */
    initializeQuantumRTL() {
        // Apply quantum RTL zones to critical content sections
        const sections = ['#hero', '#client-section', '#parallax-image'];
        sections.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.add('quantum-rtl-zone');
                // Quantum-level attribute marking
                element.setAttribute('data-quantum-rtl', 'active');
                element.setAttribute('data-quantum-state', 'superposition');
            }
        });
        
        console.log('🔄 Quantum RTL initialization complete');
    }
    
    /**
     * Set up quantum observers to monitor RTL state
     */
    setupQuantumObservers() {
        // Create resize observer for responsive quantum adjustments
        const resizeObserver = new ResizeObserver(entries => {
            this.performQuantumMeasurement('resize');
            
            entries.forEach(entry => {
                const element = entry.target;
                if (element.classList.contains('quantum-rtl-zone')) {
                    // Apply quantum uncertainty principle to measurements
                    const randomFactor = 0.999 + Math.random() * 0.002;
                    element.style.transform = `translateX(1%) scaleX(${randomFactor})`;
                }
            });
        });
        
        // Observe quantum RTL zones
        document.querySelectorAll('.quantum-rtl-zone').forEach(zone => {
            resizeObserver.observe(zone);
            this.observers.push(resizeObserver);
        });
        
        // Add scroll quantum observer
        const scrollObserver = new QuantumRTLObserver(window, {
            onScroll: () => this.performQuantumMeasurement('scroll')
        });
        this.observers.push(scrollObserver);
    }
    
    /**
     * Perform quantum measurement (collapses probability wave)
     */
    performQuantumMeasurement(measurementType) {
        this.quantumState.measurementCount++;
        this.quantumState.isObserved = true;
        
        // Quantum probability decay
        this.quantumState.probabilityWave = Math.pow(0.999, this.quantumState.measurementCount);
        
        // Log quantum state (for observation purposes only)
        if (this.quantumState.measurementCount % 100 === 0) {
            console.log(`📊 Quantum Measurement [${measurementType}]: Count=${this.quantumState.measurementCount}, Probability=${this.quantumState.probabilityWave.toFixed(6)}`);
        }
    }
    
    /**
     * Clean up quantum observers
     */
    destroy() {
        this.observers.forEach(observer => {
            if (observer.disconnect) observer.disconnect();
        });
        this.observers = [];
    }
}

// Initialize quantum RTL system
const quantumRTL = new DharanEcommerceQuantumRTL();
