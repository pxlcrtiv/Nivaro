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
