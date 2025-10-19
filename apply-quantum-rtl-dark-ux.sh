#!/bin/bash

echo "=== Quantum-Level RTL Implementation for Dark UX Deceptive Design Practices ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "=========================================================================="

source_file="dark-ux-deceptive-design-practices.html"

# Create backup with timestamp
current_time=$(date +"%Y%m%d%H%M%S")
backup_file="${source_file}.bak.${current_time}"

echo "\n📁 Creating backup of original file..."
cp "$source_file" "$backup_file"
if [ $? -eq 0 ]; then
    echo "✅ Backup created: $backup_file"
else
    echo "❌ Failed to create backup!"
    exit 1
fi

# Generate quantum RTL CSS file for dark-ux page
echo "\n🎨 Generating quantum RTL CSS for dark-ux page..."
cat > quantum-rtl-dark-ux.css << 'EOF'
/* Quantum-Level RTL Implementation for Dark UX Deceptive Design Practices */
/* Optimized for Hebrew native speakers with Nivaro brand styling */

/* Root RTL configuration */
.quantum-rtl-zone {
    direction: rtl;
    text-align: right;
    unicode-bidi: embed;
}

/* Blog article container */
.prose.quantum-rtl-zone {
    padding-right: 0;
    padding-left: 0;
}

/* Heading styles */
.quantum-rtl-zone h1,
.quantum-rtl-zone h2,
.quantum-rtl-zone h3,
.quantum-rtl-zone h4 {
    text-align: right;
    margin-right: 0;
    margin-left: auto;
}

/* Paragraph styling */
.quantum-rtl-zone p {
    text-align: right;
    margin-right: 0;
    margin-left: auto;
}

/* Left sidebar adjustments for RTL */
.left-section-blog {
    text-align: right;
    padding-right: 0;
    padding-left: 2rem;
}

/* Image container adjustments */
.quantum-rtl-zone img {
    margin-right: auto;
    margin-left: 0;
}

/* Table of contents or navigation */
.quantum-rtl-zone ul,
.quantum-rtl-zone ol {
    text-align: right;
    padding-right: 1.5rem;
    padding-left: 0;
}

/* Blockquote adjustments */
.quantum-rtl-zone blockquote {
    border-right: 4px solid #5d5ad6;
    border-left: none;
    padding-right: 1rem;
    padding-left: 0;
    margin-right: 0;
    margin-left: auto;
}

/* Code block adjustments */
.quantum-rtl-zone pre {
    text-align: left;
    direction: ltr;
}

/* Social sharing buttons */
.quantum-rtl-zone .flex.items-center.justify-start {
    justify-content: flex-end;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .left-section-blog {
        padding-left: 0;
        margin-right: 0;
        margin-left: auto;
    }
    
    .quantum-rtl-zone .flex.justify-between {
        flex-direction: column-reverse;
        gap: 2rem;
    }
}

/* Quantum state management for dynamic content */
.quantum-rtl-zone [data-observed="true"] {
    transition: all 0.3s ease-in-out;
}

/* Footer adjustments */
.quantum-rtl-zone .footer {
    text-align: right;
}

/* Form elements for RTL */
.quantum-rtl-zone input,
.quantum-rtl-zone textarea,
.quantum-rtl-zone select {
    text-align: right;
}

/* Meta information */
.quantum-rtl-zone .article-meta {
    margin-right: 0;
    margin-left: auto;
}

/* Print styles for RTL */
@media print {
    .quantum-rtl-zone {
        direction: rtl;
        text-align: right;
    }
}
EOF

echo "✅ quantum-rtl-dark-ux.css created with Hebrew-optimized RTL properties"

# Generate quantum-rtl.js if it doesn't exist
if [ ! -f "quantum-rtl.js" ]; then
    echo "🎯 Creating quantum-rtl.js with QuantumRTLObserver..."
    cat > quantum-rtl.js << 'EOF'
/**
 * QuantumRTLObserver - Core quantum-level RTL implementation
 * Manages the dual-state existence of DOM elements in RTL context
 */

class QuantumRTLObserver {
    constructor() {
        this.observers = [];
        this.quantumZones = [];
        this.isInitialized = false;
    }

    /**
     * Initialize the quantum RTL observer
     */
    init() {
        if (this.isInitialized) return;
        
        // Register all quantum RTL zones
        this.registerQuantumZones();
        
        // Setup mutation observers for dynamic content
        this.setupMutationObservers();
        
        // Apply initial RTL state
        this.applyRTLState();
        
        this.isInitialized = true;
        console.log('QuantumRTLObserver initialized');
    }

    /**
     * Register all elements with quantum-rtl-zone class
     */
    registerQuantumZones() {
        this.quantumZones = document.querySelectorAll('.quantum-rtl-zone');
        
        this.quantumZones.forEach(zone => {
            zone.setAttribute('data-observed', 'true');
        });
        
        console.log(`Registered ${this.quantumZones.length} quantum RTL zones`);
    }

    /**
     * Setup mutation observers to detect dynamic changes
     */
    setupMutationObservers() {
        const observerConfig = {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        };

        const observerCallback = (mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    this.handleChildListMutation(mutation);
                } else if (mutation.type === 'attributes') {
                    this.handleAttributeMutation(mutation);
                }
            });
        };

        // Create observer for document body
        const bodyObserver = new MutationObserver(observerCallback);
        bodyObserver.observe(document.body, observerConfig);
        this.observers.push(bodyObserver);
    }

    /**
     * Handle child list mutations
     */
    handleChildListMutation(mutation) {
        // Check for new quantum zones
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
                if (node.classList && node.classList.contains('quantum-rtl-zone')) {
                    this.processNewQuantumZone(node);
                }
                
                // Check child elements
                const childZones = node.querySelectorAll('.quantum-rtl-zone');
                childZones.forEach(zone => {
                    this.processNewQuantumZone(zone);
                });
            }
        });
    }

    /**
     * Handle attribute mutations
     */
    handleAttributeMutation(mutation) {
        const target = mutation.target;
        
        // Check if element became a quantum zone
        if (mutation.attributeName === 'class' && 
            target.classList && 
            target.classList.contains('quantum-rtl-zone')) {
            this.processNewQuantumZone(target);
        }
    }

    /**
     * Process a newly discovered quantum zone
     */
    processNewQuantumZone(zone) {
        zone.setAttribute('data-observed', 'true');
        this.applyRTLStyles(zone);
        
        console.log('New quantum RTL zone processed');
    }

    /**
     * Apply RTL state to all zones
     */
    applyRTLState() {
        this.quantumZones.forEach(zone => {
            this.applyRTLStyles(zone);
        });
    }

    /**
     * Apply specific RTL styles to a zone
     */
    applyRTLStyles(zone) {
        // Ensure direction is set
        zone.style.direction = 'rtl';
        
        // Process internal elements
        this.processInternalElements(zone);
    }

    /**
     * Process internal elements within a quantum zone
     */
    processInternalElements(zone) {
        // Handle text nodes for proper bidi
        const walker = document.createTreeWalker(
            zone,
            NodeFilter.SHOW_TEXT,
            null
        );
        
        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.trim().length > 0) {
                node.parentElement.style.unicodeBidi = 'embed';
            }
        }
    }

    /**
     * Cleanup observers when no longer needed
     */
    cleanup() {
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        this.observers = [];
        this.isInitialized = false;
    }
}

// Create and export singleton instance
const quantumRTLObserver = new QuantumRTLObserver();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    quantumRTLObserver.init();
});

// Expose to window for external access
window.quantumRTLObserver = quantumRTLObserver;
EOF
    echo "✅ quantum-rtl.js created with QuantumRTLObserver"
else
    echo "✅ quantum-rtl.js already exists"
fi

# Generate dark-ux specific quantum RTL JS
echo "🔗 Generating Dark UX specific quantum RTL JS..."
cat > dark-ux-quantum-rtl.js << 'EOF'
/**
 * DarkUxQuantumRTL - Specialized quantum-level RTL implementation for Dark UX article
 * Extends core QuantumRTLObserver with Dark UX specific behaviors
 */

class DarkUxQuantumRTL {
    constructor() {
        this.coreObserver = null;
        this.specificZones = [];
    }

    /**
     * Initialize Dark UX specific quantum RTL
     */
    init() {
        // Wait for core observer to be available
        if (!window.quantumRTLObserver) {
            setTimeout(() => this.init(), 100);
            return;
        }

        this.coreObserver = window.quantumRTLObserver;
        
        // Register specific Dark UX zones
        this.registerSpecificZones();
        
        // Apply Dark UX specific RTL optimizations
        this.applyDarkUxRTLOptimizations();
        
        console.log('DarkUxQuantumRTL initialized');
    }

    /**
     * Register Dark UX specific quantum zones
     */
    registerSpecificZones() {
        // Find blog-specific containers
        this.specificZones = [
            ...document.querySelectorAll('article.prose'),
            ...document.querySelectorAll('.left-section-blog'),
            ...document.querySelectorAll('.blog-title-anim')
        ];
        
        // Add quantum-rtl-zone class if not already present
        this.specificZones.forEach(zone => {
            if (!zone.classList.contains('quantum-rtl-zone')) {
                zone.classList.add('quantum-rtl-zone');
            }
        });
        
        console.log(`Registered ${this.specificZones.length} Dark UX specific zones`);
    }

    /**
     * Apply Dark UX specific RTL optimizations
     */
    applyDarkUxRTLOptimizations() {
        // Optimize layout for RTL reading of blog content
        this.optimizeBlogLayout();
        
        // Enhance readability for Hebrew
        this.enhanceReadability();
        
        // Handle interactive elements
        this.processInteractiveElements();
    }

    /**
     * Optimize blog layout for RTL
     */
    optimizeBlogLayout() {
        // Adjust sidebar positioning
        const sidebar = document.querySelector('.left-section-blog');
        if (sidebar) {
            sidebar.style.textAlign = 'right';
        }
        
        // Adjust main content
        const mainContent = document.querySelector('article.prose');
        if (mainContent) {
            mainContent.style.marginRight = '0';
            mainContent.style.marginLeft = 'auto';
        }
    }

    /**
     * Enhance readability for Hebrew language
     */
    enhanceReadability() {
        // Adjust heading spacing for Hebrew reading flow
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.marginRight = '0';
            heading.style.marginLeft = 'auto';
        });
        
        // Adjust paragraph spacing and alignment
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.style.textAlign = 'right';
            paragraph.style.marginRight = '0';
            paragraph.style.marginLeft = 'auto';
        });
    }

    /**
     * Process interactive elements for RTL
     */
    processInteractiveElements() {
        // Adjust social sharing buttons
        const shareButtons = document.querySelectorAll('.flex.items-center.justify-start');
        shareButtons.forEach(container => {
            container.style.justifyContent = 'flex-end';
        });
        
        // Ensure proper cursor behavior in RTL mode
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(element => {
            element.style.direction = 'rtl';
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const darkUxQuantumRTL = new DarkUxQuantumRTL();
    darkUxQuantumRTL.init();
    
    // Expose to window for debugging
    window.darkUxQuantumRTL = darkUxQuantumRTL;
});
EOF

echo "✅ dark-ux-quantum-rtl.js created with DarkUxQuantumRTL class"

# Update HTML attributes and add quantum RTL resources
echo "\n🔄 Updating HTML attributes and adding quantum RTL resources..."

# Update HTML tag attributes
perl -i -pe 's/<html lang="en" dir="rtl"/<html lang="he" dir="rtl"/' "$source_file"

# Add quantum RTL CSS reference before closing head tag
if ! grep -q 'quantum-rtl-dark-ux.css' "$source_file"; then
    perl -i -pe 's/(<\/head>)/<link rel="stylesheet" href="quantum-rtl-dark-ux.css">\n\1/' "$source_file"
fi

# Add quantum RTL JS references before closing body tag
if ! grep -q 'quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

if ! grep -q 'dark-ux-quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="dark-ux-quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

# Update JSON-LD language tags to Hebrew
echo "\n🌐 Updating JSON-LD language tags to Hebrew..."
perl -i -pe 's/"inLanguage":"en_[^"]*"/"inLanguage":"he"/g' "$source_file"
perl -i -pe 's/"inLanguage":"en-US"/"inLanguage":"he"/g' "$source_file"

# Update Open Graph locale to he_IL
perl -i -pe 's/og:locale" content="en[^"]*"/og:locale" content="he_IL"/' "$source_file"

# Add quantum-rtl-zone class to content sections
echo "\n🎯 Adding quantum-rtl-zone class to content sections..."

# Add to main container
perl -i -pe 's/<main/<main class="quantum-rtl-zone/' "$source_file"

# Add to article container
perl -i -pe 's/<article/<article class="quantum-rtl-zone/' "$source_file"

# Add to hero section
perl -i -pe 's/class="prose/class="prose quantum-rtl-zone/' "$source_file"

# Add to all section elements
perl -i -pe 's/<section/<section class="quantum-rtl-zone/' "$source_file"

# Add to left sidebar
perl -i -pe 's/class="left-section-blog/class="left-section-blog quantum-rtl-zone/' "$source_file"

# Remove duplicate classes if any
perl -i -pe 's/class="(.*?)"\s+class="(.*?)"/class="$1 $2"/g' "$source_file"
perl -i -pe 's/class="(.*?) (\1)"/class="$1"/g' "$source_file"

echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "✅ $source_file now optimized for Hebrew native speakers"
echo "🔄 Created quantum RTL CSS and JS resources"
echo "📁 Original file backed up to: $backup_file"
echo "🌐 Language tags updated to Hebrew"
echo "=================================================="
echo ""
echo "Recommendation: Run 'verify-dark-ux-quantum-rtl.sh' to validate the implementation"
echo "Then deploy to Firebase with 'firebase deploy --only hosting:$source_file'"