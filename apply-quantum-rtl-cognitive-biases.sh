#!/bin/bash

echo "=== Quantum-Level RTL Implementation for Cognitive Biases Ecommerce ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "==================================================================="

source_file="cognitive-biases-ecommerce.html"

# Create backup of the original file with timestamp
backup_file="${source_file}.bak.$(date +%Y%m%d%H%M%S)"
echo "\n📁 Creating backup of original file..."
cp "$source_file" "$backup_file"
if [ $? -eq 0 ]; then
    echo "✅ Backup created: $backup_file"
else
    echo "❌ Failed to create backup!"
    exit 1
fi

# Generate quantum RTL CSS for cognitive biases page
echo "\n🎨 Generating quantum RTL CSS for cognitive biases page..."
cat > quantum-rtl-cognitive-biases.css << 'EOL'
/* Quantum-Level RTL Implementation for Cognitive Biases Ecommerce */
/* Target: Hebrew native speakers */
/* Brand: Nivaro */

/* Universal RTL reset with quantum alignment */
*[dir="rtl"] {
    direction: rtl;
    text-align: right;
    unicode-bidi: embed;
}

/* Quantum RTL zone optimization */
.quantum-rtl-zone {
    direction: rtl;
    text-align: right;
    transform: perspective(1000px) rotateY(0deg);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Header quantum RTL alignment */
header.quantum-rtl-zone .header-inner-container {
    flex-direction: row-reverse;
}

/* Navigation quantum RTL transformation */
.Header_nav__IZBbc {
    direction: rtl;
}

.Header_contentLeft__LvrzL {
    margin-right: 0;
    margin-left: auto;
}

/* Article quantum RTL optimization */
article.prose {
    text-align: right;
    direction: rtl;
}

/* Typography quantum RTL adjustments */
h1, h2, h3, h4, h5, h6 {
    text-align: right !important;
    direction: rtl !important;
}

/* Layout quantum RTL flipping */
.flex.justify-between {
    flex-direction: row-reverse;
}

/* Left section blog quantum RTL transformation */
.left-section-blog {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
}

/* Image quantum RTL handling */
img {
    direction: ltr;
}

/* Button quantum RTL styling */
button {
    direction: rtl;
}

/* Social links quantum RTL alignment */
.Header_socialItems__GV7GF {
    flex-direction: row-reverse;
    justify-content: flex-start;
}

/* Responsive quantum RTL adjustments */
@media (max-width: 768px) {
    .quantum-rtl-zone {
        transform: perspective(800px) rotateY(0deg);
    }
}

@media (max-width: 480px) {
    .quantum-rtl-zone {
        transform: perspective(600px) rotateY(0deg);
    }
}

/* Quantum RTL scroll optimization */
body {
    overflow-x: hidden;
}

/* Quantum RTL focus states */
*:focus {
    outline-offset: -2px;
    outline: 2px solid #5d5ad6;
}

/* Quantum RTL hover effects */
.en-main-link:hover,
.en-link-under:hover {
    transition: all 0.3s ease;
    text-decoration: underline;
}

/* Quantum RTL animation fixes */
@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Quantum RTL accessibility enhancements */
[aria-label] {
    direction: rtl;
}

/* Quantum RTL form elements */
input, textarea, select {
    text-align: right;
    direction: rtl;
}

/* Quantum RTL table styling */
table {
    direction: rtl;
    text-align: right;
}

/* Quantum RTL list styling */
ul, ol {
    padding-right: 1.5em;
    padding-left: 0;
}

/* Quantum RTL code block handling */
code, pre {
    direction: ltr;
    text-align: left;
    unicode-bidi: bidi-override;
}

/* Quantum RTL print styling */
@media print {
    * {
        direction: rtl !important;
        text-align: right !important;
    }
}
EOL

echo "✅ quantum-rtl-cognitive-biases.css created with Hebrew-optimized RTL properties"

# Generate quantum-rtl.js if it doesn't exist
if [ ! -f "quantum-rtl.js" ]; then
    echo "\n🔄 Creating quantum-rtl.js with QuantumRTLObserver..."
    cat > quantum-rtl.js << 'EOL'
/**
 * QuantumRTLObserver - Advanced DOM observation for RTL interfaces
 * Target: Hebrew native speakers
 * Brand: Nivaro
 */

class QuantumRTLObserver {
    constructor() {
        this.observers = new Map();
        this.mutationObserver = null;
        this.init();
    }

    /**
     * Initialize the quantum RTL observation system
     */
    init() {
        // Create mutation observer for dynamic content
        this.mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    this.processNewNodes(mutation.addedNodes);
                }
            });
        });

        // Start observing the document body
        this.observe(document.body);

        // Process existing quantum RTL zones
        this.processExistingZones();
    }

    /**
     * Observe a target node for changes
     */
    observe(targetNode) {
        if (this.mutationObserver && targetNode) {
            this.mutationObserver.observe(targetNode, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class', 'dir', 'lang']
            });
        }
    }

    /**
     * Process newly added nodes for RTL optimization
     */
    processNewNodes(nodes) {
        nodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                // Check if node has quantum RTL zone class
                if (node.classList.contains('quantum-rtl-zone')) {
                    this.optimizeRTLZone(node);
                }

                // Check for nested quantum RTL zones
                const nestedZones = node.querySelectorAll('.quantum-rtl-zone');
                nestedZones.forEach(zone => this.optimizeRTLZone(zone));
            }
        });
    }

    /**
     * Process existing quantum RTL zones in the DOM
     */
    processExistingZones() {
        const zones = document.querySelectorAll('.quantum-rtl-zone');
        zones.forEach(zone => this.optimizeRTLZone(zone));
    }

    /**
     * Optimize a quantum RTL zone for Hebrew content
     */
    optimizeRTLZone(zone) {
        // Set RTL direction if not already set
        if (zone.getAttribute('dir') !== 'rtl') {
            zone.setAttribute('dir', 'rtl');
        }

        // Apply text alignment optimization
        zone.style.textAlign = 'right';

        // Optimize nested elements
        this.optimizeNestedElements(zone);
    }

    /**
     * Optimize nested elements within an RTL zone
     */
    optimizeNestedElements(zone) {
        // Handle form elements
        const formElements = zone.querySelectorAll('input, textarea, select');
        formElements.forEach(el => {
            if (!el.hasAttribute('dir')) {
                el.setAttribute('dir', 'rtl');
            }
            if (el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'submit' && el.type !== 'button') {
                el.style.textAlign = 'right';
            }
        });

        // Handle lists
        const lists = zone.querySelectorAll('ul, ol');
        lists.forEach(list => {
            list.style.paddingRight = '1.5em';
            list.style.paddingLeft = '0';
        });

        // Handle tables
        const tables = zone.querySelectorAll('table');
        tables.forEach(table => {
            table.style.direction = 'rtl';
            table.style.textAlign = 'right';
        });
    }

    /**
     * Clean up observers when needed
     */
    disconnect() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        this.observers.clear();
    }
}

// Initialize quantum RTL observer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quantumRTL = new QuantumRTLObserver();
});
EOL

echo "✅ quantum-rtl.js created with QuantumRTLObserver class"
else
    echo "✅ quantum-rtl.js already exists"
fi

# Generate cognitive biases specific quantum RTL JS
echo "\n🔗 Generating Cognitive Biases specific quantum RTL JS..."
cat > cognitive-biases-quantum-rtl.js << 'EOL'
/**
 * CognitiveBiasesQuantumRTL - Specialized RTL implementation for Cognitive Biases page
 * Target: Hebrew native speakers
 * Brand: Nivaro
 */

class CognitiveBiasesQuantumRTL {
    constructor() {
        this.initialize();
    }

    /**
     * Initialize the cognitive biases specific RTL optimizations
     */
    initialize() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    /**
     * Set up cognitive biases specific RTL optimizations
     */
    setup() {
        this.applyArticleRTLOptimizations();
        this.optimizeBlogLayout();
        this.setupResponsiveAdjustments();
        this.applyCognitiveBiasSpecificStyles();
    }

    /**
     * Apply RTL optimizations to the article content
     */
    applyArticleRTLOptimizations() {
        const article = document.querySelector('article.prose');
        if (article) {
            // Add quantum RTL zone class
            article.classList.add('quantum-rtl-zone');
            
            // Optimize heading levels
            const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                heading.style.textAlign = 'right';
                heading.style.direction = 'rtl';
            });

            // Optimize paragraphs
            const paragraphs = article.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                paragraph.style.textAlign = 'right';
                paragraph.style.direction = 'rtl';
                paragraph.style.textJustify = 'inter-word';
            });
        }
    }

    /**
     * Optimize the blog layout for RTL
     */
    optimizeBlogLayout() {
        const leftSection = document.querySelector('.left-section-blog');
        if (leftSection) {
            leftSection.classList.add('quantum-rtl-zone');
            // Flip the positioning for RTL
            const parentDiv = leftSection.closest('div.flex.justify-between');
            if (parentDiv) {
                parentDiv.style.flexDirection = 'row-reverse';
            }
        }
    }

    /**
     * Set up responsive adjustments for different screen sizes
     */
    setupResponsiveAdjustments() {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                this.applyMobileRTL();
            } else {
                this.applyDesktopRTL();
            }
        };

        // Initial application
        handleResize();
        
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    }

    /**
     * Apply RTL optimizations for mobile devices
     */
    applyMobileRTL() {
        const flexContainers = document.querySelectorAll('.flex.justify-between');
        flexContainers.forEach(container => {
            container.style.flexDirection = 'column';
        });

        // Adjust font sizes and spacing for mobile RTL
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.style.lineHeight = '1.3';
        });
    }

    /**
     * Apply RTL optimizations for desktop devices
     */
    applyDesktopRTL() {
        const flexContainers = document.querySelectorAll('.flex.justify-between');
        flexContainers.forEach(container => {
            if (!container.classList.contains('mobile-only-col')) {
                container.style.flexDirection = 'row-reverse';
            }
        });
    }

    /**
     * Apply specific styles for cognitive bias content sections
     */
    applyCognitiveBiasSpecificStyles() {
        // Optimize list items in cognitive bias explanations
        const listItems = document.querySelectorAll('article.prose li');
        listItems.forEach(item => {
            item.style.textAlign = 'right';
            item.style.direction = 'rtl';
        });

        // Ensure proper spacing between bias sections
        const sections = document.querySelectorAll('article.prose section');
        sections.forEach(section => {
            section.classList.add('quantum-rtl-zone');
            section.style.marginBottom = '2rem';
        });
    }
}

// Initialize cognitive biases quantum RTL when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cognitiveBiasesQuantumRTL = new CognitiveBiasesQuantumRTL();
});
EOL

echo "✅ cognitive-biases-quantum-rtl.js created with CognitiveBiasesQuantumRTL class"

# Update HTML attributes and add quantum RTL resources
echo "\n🔄 Updating HTML attributes and adding quantum RTL resources..."

# Update HTML tag with lang="he" and dir="rtl"
perl -i -pe 's/<html[^>]*>/<html lang="he" dir="rtl">/' "$source_file"

# Add quantum RTL CSS reference
if ! grep -q 'quantum-rtl-cognitive-biases.css' "$source_file"; then
    perl -i -pe 's/(<\/head>)/<link rel="stylesheet" href="quantum-rtl-cognitive-biases.css">\n\1/' "$source_file"
fi

# Add quantum RTL JS reference if not already present
if ! grep -q 'quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

# Add cognitive biases quantum RTL JS reference
if ! grep -q 'cognitive-biases-quantum-rtl.js' "$source_file"; then
    perl -i -pe 's/(<\/body>)/<script src="cognitive-biases-quantum-rtl.js"><\/script>\n\1/' "$source_file"
fi

# Update JSON-LD language tags to Hebrew
echo "\n🌐 Updating JSON-LD language tags to Hebrew..."
perl -i -pe 's/"inLanguage":"en[^"\"]*"/"inLanguage":"he"/g' "$source_file"

# Update Open Graph locale to he_IL
perl -i -pe 's/og:locale" content="en[^"\"]*"/og:locale" content="he_IL"/' "$source_file"

# Add quantum-rtl-zone class to main content sections
echo "\n🎯 Adding quantum-rtl-zone class to content sections..."

# Add to main container
perl -i -pe 's/<main/<main class="quantum-rtl-zone"/' "$source_file"

# Add to article container
perl -i -pe 's/<article/<article class="quantum-rtl-zone"/' "$source_file"

# Add to hero section
perl -i -pe 's/<section id="hero"/<section id="hero" class="quantum-rtl-zone/' "$source_file"

# Add quantum-rtl-zone to all other sections in main
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
echo "Recommendation: Run 'verify-cognitive-biases-quantum-rtl.sh' to validate the implementation"
echo "Then deploy to Firebase with 'firebase deploy'"