// Quantum-Level RTL JavaScript for Nivaro Blog

/**
 * QuantumRTLObserver - Observes and manages dynamic RTL content
 */
class QuantumRTLObserver {
    constructor() {
        this.observeDynamicContent();
        this.applyRTLTransforms();
        this.setupResizeObserver();
    }
    
    /**
     * Observe dynamic content changes and apply RTL transformations
     */
    observeDynamicContent() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        this.applyRTLToNode(node);
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        console.log('QuantumRTLObserver: Dynamic content observation active');
    }
    
    /**
     * Apply RTL transformations to a specific node
     */
    applyRTLToNode(node) {
        // Apply RTL to text nodes
        if (node.textContent && node.textContent.trim() !== '') {
            node.setAttribute('dir', 'rtl');
        }
        
        // Apply special RTL handling to interactive elements
        if (node.tagName === 'BUTTON' || node.tagName === 'A') {
            node.classList.add('quantum-rtl-zone');
        }
        
        // Handle image captions and descriptions
        if (node.tagName === 'IMG') {
            const parent = node.parentNode;
            if (parent.querySelector('figcaption')) {
                parent.querySelector('figcaption').setAttribute('dir', 'rtl');
            }
        }
    }
    
    /**
     * Apply RTL transforms to existing elements
     */
    applyRTLTransforms() {
        // Transform arrow icons and directional indicators
        document.querySelectorAll('img[alt*="arrow"]').forEach(img => {
            if (img.src.includes('arrow-angle.svg')) {
                img.style.transform = 'rotate(-45deg)';
            }
        });
        
        // Set RTL for all paragraphs and headings
        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(el => {
            el.setAttribute('dir', 'rtl');
        });
    }
    
    /**
     * Setup resize observer for responsive RTL adjustments
     */
    setupResizeObserver() {
        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                this.optimizeRTLForViewport(entry.target);
            });
        });
        
        // Observe main layout containers
        document.querySelectorAll('main, section, .container').forEach(container => {
            resizeObserver.observe(container);
        });
    }
    
    /**
     * Optimize RTL for current viewport size
     */
    optimizeRTLForViewport(element) {
        const width = element.clientWidth;
        
        // Apply different RTL optimizations based on viewport
        if (width < 768) {
            element.classList.add('quantum-rtl-mobile');
            element.classList.remove('quantum-rtl-desktop');
        } else {
            element.classList.add('quantum-rtl-desktop');
            element.classList.remove('quantum-rtl-mobile');
        }
    }
}

/**
 * BlogQuantumRTL - Blog-specific quantum RTL implementation
 */
class BlogQuantumRTL extends QuantumRTLObserver {
    constructor() {
        super();
        this.optimizeBlogLayout();
        this.setupCategoryRTL();
        this.applyPostListRTL();
    }
    
    /**
     * Optimize blog layout for RTL reading patterns
     */
    optimizeBlogLayout() {
        // Featured post RTL optimization
        const featuredPost = document.getElementById('featured-post');
        if (featuredPost) {
            // Ensure proper text flow
            featuredPost.querySelectorAll('p, h1').forEach(el => {
                el.style.textAlign = 'right';
            });
            
            // Optimize reading path
            featuredPost.style.direction = 'rtl';
        }
        
        console.log('BlogQuantumRTL: Blog layout optimized for RTL');
    }
    
    /**
     * Setup RTL for category filters
     */
    setupCategoryRTL() {
        // Ensure categories are displayed correctly in RTL
        document.querySelectorAll('.flex-wrap').forEach(wrap => {
            wrap.style.direction = 'rtl';
        });
    }
    
    /**
     * Apply RTL to post listings
     */
    applyPostListRTL() {
        // Target all article containers
        document.querySelectorAll('.fadeup').forEach(container => {
            container.style.direction = 'rtl';
            
            // Apply specific RTL optimizations to each post item
            container.querySelectorAll('div[class*="w-"]').forEach(item => {
                this.optimizePostItemRTL(item);
            });
        });
    }
    
    /**
     * Optimize individual post item for RTL
     */
    optimizePostItemRTL(item) {
        // Ensure proper spacing and alignment
        item.style.textAlign = 'right';
        
        // Handle image and text relationships
        const img = item.querySelector('img');
        const textContainer = item.querySelector('div:not(:has(img))');
        
        if (img && textContainer) {
            // Ensure proper visual hierarchy in RTL
            img.style.marginLeft = img.style.marginRight;
            img.style.marginRight = 0;
        }
    }
}

// Initialize quantum RTL when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core RTL observer
    const quantumObserver = new QuantumRTLObserver();
    
    // Initialize blog-specific RTL enhancements
    const blogRTL = new BlogQuantumRTL();
    
    console.log('✅ Quantum-Level RTL initialized for Nivaro Blog');
});

// Quantum RTL utility functions
function applyQuantumRTLFixes() {
    // Fix any potential bidirectional text issues
    document.querySelectorAll('*[class*="text-"]').forEach(el => {
        if (!el.hasAttribute('dir')) {
            el.setAttribute('dir', 'rtl');
        }
    });
    
    // Ensure proper cursor behavior in RTL
    document.body.style.cursor = 'default';
}

// Apply fixes after window load
window.addEventListener('load', applyQuantumRTLFixes);
