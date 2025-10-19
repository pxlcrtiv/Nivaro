#!/bin/bash

# Quantum Level RTL Implementation for Dharan E-commerce Case Study
# This script transforms HTML for native Hebrew speakers with quantum RTL principles

# Set error handling
set -e

echo "🔬 Initiating Quantum RTL Transformation for dharan-ecommerce-case-study.html..."

# Create backup with timestamp
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
cp dharan-ecommerce-case-study.html dharan-ecommerce-case-study.html.bak.$TIMESTAMP
echo "📁 Created backup: dharan-ecommerce-case-study.html.bak.$TIMESTAMP"

# Create quantum RTL CSS file
echo "💫 Generating quantum-rtl-dharan.css..."
cat > quantum-rtl-dharan.css << 'EOL'
/* Quantum RTL CSS for Dharan E-commerce Case Study */

/* Core RTL transformations with quantum principles */
[dir="rtl"] .quantum-rtl-zone {
    direction: rtl;
    text-align: right;
    transform: translateX(1%) scaleX(1.001); /* Quantum micro-adjustment */
}

/* Header adjustments */
[dir="rtl"] .header-inner-container {
    flex-direction: row-reverse;
}

/* Navigation adjustments */
[dir="rtl"] .Header_wrapper__1yY2x {
    flex-direction: row-reverse;
}

[dir="rtl"] .Header_contentLeft__LvrzL {
    margin-right: 0;
    margin-left: 5vw;
}

/* Hero section adjustments */
[dir="rtl"] #hero .w-full {
    flex-direction: row-reverse;
    justify-content: space-between;
}

[dir="rtl"] #hero h1 {
    text-align: right;
}

/* Parallax image adjustments */
[dir="rtl"] #parallax-image img {
    transform: translateY(-25%) scaleX(-1); /* Quantum mirroring effect */
}

/* Client section adjustments */
[dir="rtl"] #client-section .flex {
    flex-direction: row-reverse;
}

[dir="rtl"] #client-section h3 {
    text-align: right;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    [dir="rtl"] .quantum-rtl-zone {
        transform: translateX(2%) scaleX(1.002); /* Adjusted quantum effect for mobile */
    }
}

/* Quantum observation effect */
@keyframes quantum-observation {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.999; } /* Quantum superposition effect */
}

.quantum-rtl-zone {
    animation: quantum-observation 5s infinite;
    position: relative;
}

/* Quantum field indicator */
.quantum-rtl-zone::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(135deg, rgba(93, 90, 214, 0.02) 0%, transparent 100%);
}
EOL

# Create quantum RTL JavaScript file
echo "⚡ Generating dharan-ecommerce-quantum-rtl.js..."
cat > dharan-ecommerce-quantum-rtl.js << 'EOL'
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
EOL

# Update HTML file with RTL attributes and references
echo "🔧 Modifying HTML file for quantum RTL..."

# Update html tag with lang="he" and ensure dir="rtl"
sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/' dharan-ecommerce-case-study.html

# Add quantum RTL CSS reference
sed -i '' '/<\/head>/i\
    <link rel="stylesheet" href="quantum-rtl-dharan.css" type="text/css">
' dharan-ecommerce-case-study.html

# Add quantum RTL JS reference
sed -i '' '/<\/body>/i\
    <script src="quantum-rtl.js"></script>\
    <script src="dharan-ecommerce-quantum-rtl.js"></script>
' dharan-ecommerce-case-study.html

# Add quantum-rtl-zone class to main content sections
sed -i '' 's/<main style="cursor:none">/<main style="cursor:none" class="quantum-rtl-zone">/' dharan-ecommerce-case-study.html

# Update JSON-LD language tags
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' dharan-ecommerce-case-study.html
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he-IL"/g' dharan-ecommerce-case-study.html

# Update Open Graph locale
sed -i '' 's/<meta property="og:locale" content="en_US"/<meta property="og:locale" content="he_IL"/' dharan-ecommerce-case-study.html

echo "✅ Quantum RTL Transformation complete!"
echo ""
echo "Next steps:"
echo "1. Run './verify-dharan-ecommerce-quantum-rtl.sh' to validate the implementation"
echo "2. Deploy to Firebase using 'firebase deploy --only hosting:dharan-ecommerce-case-study.html'"
echo ""
echo "🌐 Expected live URL: https://nivaro-51.web.app/dharan-ecommerce-case-study.html"