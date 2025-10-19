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
