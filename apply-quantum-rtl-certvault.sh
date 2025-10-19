#!/bin/bash

echo "=== Quantum-Level RTL Implementation for Certvault Case Study ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "=========================================================="

source_file="certvault-case-study.html"

# Create backup with timestamp
backup_timestamp=$(date +"%Y%m%d%H%M%S")
backup_file="${source_file}.bak.${backup_timestamp}"

echo "\n📁 Creating backup of original file..."
if cp "$source_file" "$backup_file"; then
    echo "✅ Backup created: $backup_file"
else
    echo "❌ Failed to create backup!"
    exit 1
fi

# Generate quantum RTL CSS for certvault page
echo "\n🎨 Generating quantum RTL CSS for certvault page..."
cat > quantum-rtl-certvault.css << 'EOL'
/* Quantum-Level RTL Implementation for Certvault Case Study */
/* Optimized for Hebrew native speakers */

/* Global RTL Reset */
.quantum-rtl-zone {
    direction: rtl;
    text-align: right;
    unicode-bidi: embed;
}

/* Layout adjustments for RTL */
.quantum-rtl-zone .flex.justify-between {
    flex-direction: row-reverse;
}

.quantum-rtl-zone .flex.justify-start {
    justify-content: flex-end;
}

.quantum-rtl-zone .flex.justify-end {
    justify-content: flex-start;
}

/* Margin and padding adjustments */
.quantum-rtl-zone .ml-auto {
    margin-right: auto;
    margin-left: 0 !important;
}

.quantum-rtl-zone .mr-auto {
    margin-left: auto;
    margin-right: 0 !important;
}

.quantum-rtl-zone .pl-4, .quantum-rtl-zone .px-4 {
    padding-right: 1rem;
    padding-left: 0;
}

.quantum-rtl-zone .pr-4, .quantum-rtl-zone .px-4 {
    padding-left: 1rem;
    padding-right: 0;
}

/* Typography adjustments for Hebrew */
.quantum-rtl-zone h1,
.quantum-rtl-zone h2,
.quantum-rtl-zone h3,
.quantum-rtl-zone h4,
.quantum-rtl-zone h5,
.quantum-rtl-zone h6 {
    font-family: 'David CLM', 'Helvetica Neue', Arial, sans-serif;
    text-align: right;
}

.quantum-rtl-zone p {
    text-align: right;
    font-family: 'David CLM', 'Helvetica Neue', Arial, sans-serif;
}

/* List adjustments for RTL */
.quantum-rtl-zone ul,
.quantum-rtl-zone ol {
    padding-right: 1.5rem;
    padding-left: 0;
}

.quantum-rtl-zone li {
    text-align: right;
}

/* Navigation adjustments */
.quantum-rtl-zone .Header_navLinkItem__l2xbK {
    flex-direction: row-reverse;
    text-align: right;
}

/* Form adjustments */
.quantum-rtl-zone input,
.quantum-rtl-zone textarea {
    text-align: right;
}

/* Button adjustments */
.quantum-rtl-zone button {
    direction: rtl;
}

/* Card adjustments */
.quantum-rtl-zone .card {
    text-align: right;
}

/* Icon adjustments */
.quantum-rtl-zone .icon {
    transform: scaleX(-1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .quantum-rtl-zone {
        text-align: right;
    }
}

/* Custom animations for RTL */
@keyframes quantumSlideInRTL {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.quantum-slide-in {
    animation: quantumSlideInRTL 0.6s ease-out forwards;
}

/* Quantum-level focus states */
.quantum-rtl-zone a:focus,
.quantum-rtl-zone button:focus {
    outline: 2px solid #5d5ad6;
    outline-offset: 3px;
}

/* Quantum typography enhancements */
.quantum-rtl-zone .quantum-text {
    letter-spacing: 0.02em;
    line-height: 1.6;
}

/* Quantum spacing */
.quantum-rtl-zone .quantum-container {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;
}

/* Quantum bidirectional handling */
.quantum-rtl-zone [lang="en"] {
    direction: ltr;
    unicode-bidi: embed;
    text-align: left;
    display: inline-block;
}
EOL

echo "✅ quantum-rtl-certvault.css created with Hebrew-optimized RTL properties"

# Create quantum-rtl.js if it doesn't exist
if [ ! -f "quantum-rtl.js" ]; then
    cat > quantum-rtl.js << 'EOL'
/**
 * QuantumRTLObserver - Observer for dynamic RTL content handling
 * Optimized for Hebrew language rendering
 */
class QuantumRTLObserver {
    constructor() {
        this.observers = [];
        this.init();
    }

    /**
     * Initialize the quantum RTL observer
     */
    init() {
        // Apply RTL transformations to existing content
        this.applyRTLTransformations();
        
        // Set up mutation observer for dynamic content
        this.setupMutationObserver();
        
        // Handle resize events for responsive RTL adjustments
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Handle orientation change for mobile devices
        window.addEventListener('orientationchange', this.handleOrientationChange.bind(this));
    }

    /**
     * Apply RTL transformations to the DOM
     */
    applyRTLTransformations() {
        const rtlZones = document.querySelectorAll('.quantum-rtl-zone');
        
        rtlZones.forEach(zone => {
            // Ensure proper direction and text alignment
            zone.style.direction = 'rtl';
            zone.style.textAlign = 'right';
            
            // Add RTL-specific attributes
            zone.setAttribute('data-rtl-applied', 'true');
        });
    }

    /**
     * Set up mutation observer to monitor DOM changes
     */
    setupMutationObserver() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    // Check if any new nodes need RTL processing
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Process the node if it's a quantum RTL zone
                            if (node.classList.contains('quantum-rtl-zone')) {
                                this.applyRTLTransformationsToNode(node);
                            }
                            
                            // Also check all children
                            const childZones = node.querySelectorAll('.quantum-rtl-zone');
                            childZones.forEach(childZone => {
                                this.applyRTLTransformationsToNode(childZone);
                            });
                        }
                    });
                }
            });
        });

        // Observe the entire document
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Store the observer for cleanup
        this.observers.push(observer);
    }

    /**
     * Apply RTL transformations to a specific node
     * @param {HTMLElement} node - The node to apply RTL transformations to
     */
    applyRTLTransformationsToNode(node) {
        node.style.direction = 'rtl';
        node.style.textAlign = 'right';
        node.setAttribute('data-rtl-applied', 'true');
    }

    /**
     * Handle window resize for responsive RTL adjustments
     */
    handleResize() {
        // Reapply RTL transformations on resize
        this.applyRTLTransformations();
    }

    /**
     * Handle orientation change for mobile devices
     */
    handleOrientationChange() {
        // Reapply RTL transformations on orientation change
        this.applyRTLTransformations();
    }

    /**
     * Clean up observers and event listeners
     */
    destroy() {
        // Disconnect all mutation observers
        this.observers.forEach(observer => observer.disconnect());
        
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize.bind(this));
        window.removeEventListener('orientationchange', this.handleOrientationChange.bind(this));
    }
}

// Initialize QuantumRTLObserver when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quantumRTLObserver = new QuantumRTLObserver();
});
EOL
    echo "✅ quantum-rtl.js created with QuantumRTLObserver"
else
    echo "✅ quantum-rtl.js already exists"
fi

# Create certvault-specific quantum RTL JS
echo "\n🔗 Generating Certvault specific quantum RTL JS..."
cat > certvault-quantum-rtl.js << 'EOL'
/**
 * CertvaultQuantumRTL - Specialized RTL implementation for Certvault case study
 * Optimized for Hebrew native speakers with case study specific components
 */
class CertvaultQuantumRTL {
    constructor() {
        this.init();
    }

    /**
     * Initialize Certvault-specific RTL functionality
     */
    init() {
        // Apply Certvault-specific RTL transformations
        this.applyCertvaultRTL();
        
        // Add animation classes for RTL transitions
        this.addRTLAnimations();
    }

    /**
     * Apply Certvault-specific RTL transformations
     */
    applyCertvaultRTL() {
        // Case study hero section RTL adjustments
        this.applyHeroRTL();
        
        // Case study content RTL adjustments
        this.applyContentRTL();
        
        // Case study images and media RTL adjustments
        this.applyMediaRTL();
        
        // Case study results and metrics RTL adjustments
        this.applyResultsRTL();
    }

    /**
     * Apply RTL transformations to hero section
     */
    applyHeroRTL() {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.classList.add('quantum-rtl-zone');
        }
    }

    /**
     * Apply RTL transformations to content sections
     */
    applyContentRTL() {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.classList.add('quantum-rtl-zone');
        });
    }

    /**
     * Apply RTL transformations to media elements
     */
    applyMediaRTL() {
        const mediaContainers = document.querySelectorAll('.media-container, .image-container');
        mediaContainers.forEach(container => {
            container.classList.add('quantum-rtl-zone');
        });
    }

    /**
     * Apply RTL transformations to results and metrics
     */
    applyResultsRTL() {
        const metricsContainers = document.querySelectorAll('.metrics-container, .results-container');
        metricsContainers.forEach(container => {
            container.classList.add('quantum-rtl-zone');
        });
    }

    /**
     * Add RTL-specific animations
     */
    addRTLAnimations() {
        // Add animation classes to fade-in content
        const fadeElements = document.querySelectorAll('h2, h3, .fade-in-element');
        fadeElements.forEach(element => {
            element.classList.add('quantum-slide-in');
        });
    }
}

// Initialize CertvaultQuantumRTL when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.certvaultQuantumRTL = new CertvaultQuantumRTL();
});
EOL

echo "✅ certvault-quantum-rtl.js created with CertvaultQuantumRTL class"

# Update HTML attributes and add quantum RTL resources
echo "\n🔄 Updating HTML attributes and adding quantum RTL resources..."

# Update HTML tag to Hebrew RTL
perl -i -pe 's/<html lang="en" dir="rtl"/<html lang="he" dir="rtl"/' "$source_file"

# Add quantum RTL CSS reference
if ! grep -q 'quantum-rtl-certvault.css' "$source_file"; then
    perl -i -pe 's/(<\/head>)/<link rel="stylesheet" href="quantum-rtl-certvault.css">\n\1/' "$source_file"
fi

# Add quantum RTL JS reference
if ! grep -q 'quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

# Add certvault-specific quantum RTL JS reference
if ! grep -q 'certvault-quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="certvault-quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

# Update JSON-LD language tags to Hebrew
echo "\n🌐 Updating JSON-LD language tags to Hebrew..."
perl -i -pe 's/"inLanguage":"en_US"/"inLanguage":"he"/g' "$source_file"
perl -i -pe 's/"inLanguage":"en-US"/"inLanguage":"he"/g' "$source_file"

# Update Open Graph locale to Hebrew
perl -i -pe 's/og:locale" content="en_US"/og:locale" content="he_IL"/' "$source_file"

# Add quantum-rtl-zone class to content sections
echo "\n🎯 Adding quantum-rtl-zone class to content sections..."
perl -i -pe 's/<main/<main class="quantum-rtl-zone/' "$source_file"
perl -i -pe 's/<section id="hero"/<section id="hero" class="quantum-rtl-zone/' "$source_file"

# Simplified approach: add quantum-rtl-zone to main content sections
perl -i -pe 's/<main/<main class="quantum-rtl-zone"/' "$source_file"

# Add quantum-rtl-zone class to sections with a simpler approach
perl -i -pe 's/<section/<section class="quantum-rtl-zone"/' "$source_file"

# Fix any duplicate classes that might have been created
perl -i -pe 's/class="quantum-rtl-zone" class="/class="/' "$source_file"
perl -i -pe 's/class="quantum-rtl-zone" class=/class="/' "$source_file"

echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "✅ $source_file now optimized for Hebrew native speakers"
echo "🔄 Created quantum RTL CSS and JS resources"
echo "📁 Original file backed up to: $backup_file"
echo "🌐 Language tags updated to Hebrew"
echo "=================================================="
echo ""
echo "Recommendation: Run 'verify-certvault-quantum-rtl.sh' to validate the implementation"
echo "Then deploy to Firebase with 'firebase deploy'"