/**
 * careers-quantum-rtl.js
 * 🌌 Quantum-Level RTL Transformation Engine for careers.html
 * Specialized implementation with career-specific RTL optimizations
 */

class CareersQuantumRTL extends QuantumRTLObserver {
    constructor() {
        super();
        this.careerElements = [];
        this.state = new Map();
    }

    /**
     * Initialize careers-specific RTL transformation
     * @override
     */
    init() {
        // Call parent initialization
        super.init();
        
        console.log('🔬 Careers Quantum RTL initialization in progress...');
        
        // Register careers-specific elements for transformation
        this.registerCareerElements();
        
        // Apply specialized RTL transformations
        this.applyCareersRTLTransformations();
        
        // Set up responsive RTL handling
        this.setupResponsiveRTL();
        
        // Initialize RTL state management
        this.initializeRTLState();
        
        console.log('🚀 Careers Quantum RTL initialization complete!');
    }

    /**
     * Register career-specific elements that require RTL transformation
     */
    registerCareerElements() {
        // Job listing containers
        const jobListings = document.querySelectorAll('.Careers_jobCard__*');
        
        // Career sections
        const careerSections = document.querySelectorAll('#job-listings, #culture, #benefits');
        
        // Form elements (if any)
        const formElements = document.querySelectorAll('form.careers-form');
        
        // Combine all elements
        this.careerElements = [...jobListings, ...careerSections, ...formElements];
        
        console.log(`📋 Registered ${this.careerElements.length} career-specific elements for RTL`);
    }

    /**
     * Apply specialized RTL transformations for careers page
     */
    applyCareersRTLTransformations() {
        // Apply RTL to all registered elements
        this.careerElements.forEach(element => {
            // Apply dir="rtl" attribute
            element.setAttribute('dir', 'rtl');
            
            // Add data attribute for quantum RTL state tracking
            element.setAttribute('data-quantum-rtl', 'active');
            
            // Store original state for potential reversal
            this.saveElementState(element);
            
            // Apply specific transformations based on element type
            if (element.classList.contains('Careers_jobCard__')) {
                this.transformJobCard(element);
            } else if (element.tagName === 'FORM') {
                this.transformFormElement(element);
            }
        });
    }

    /**
     * Transform job card elements for RTL
     * @param {HTMLElement} card - Job card element
     */
    transformJobCard(card) {
        // Get elements within the card
        const title = card.querySelector('.Careers_jobTitle__*');
        const description = card.querySelector('.Careers_jobDescription__*');
        const applyButton = card.querySelector('.Careers_applyButton__*');
        
        // Apply RTL text alignment
        if (title) title.style.textAlign = 'right';
        if (description) description.style.textAlign = 'right';
        
        // Adjust button positioning for RTL
        if (applyButton) {
            applyButton.style.marginRight = 'auto';
            applyButton.style.marginLeft = '0';
            applyButton.style.textAlign = 'center';
        }
        
        // Add RTL class for custom styling
        card.classList.add('quantum-rtl-job-card');
    }

    /**
     * Transform form elements for RTL
     * @param {HTMLFormElement} form - Form element
     */
    transformFormElement(form) {
        // Get all inputs and labels
        const inputs = form.querySelectorAll('input, select, textarea');
        const labels = form.querySelectorAll('label');
        
        // Adjust labels and inputs for RTL
        labels.forEach(label => {
            label.style.textAlign = 'right';
            label.style.marginRight = '0';
            label.style.marginLeft = '10px';
        });
        
        // Adjust form layout for RTL
        inputs.forEach(input => {
            input.style.direction = 'rtl';
            
            // Handle placeholder text direction
            if (input.getAttribute('placeholder')) {
                input.style.textAlign = 'right';
            }
        });
        
        // Add RTL class for custom styling
        form.classList.add('quantum-rtl-form');
    }

    /**
     * Set up responsive RTL handling for different screen sizes
     */
    setupResponsiveRTL() {
        // Initial check
        this.checkScreenSize();
        
        // Listen for resize events
        window.addEventListener('resize', () => {
            this.checkScreenSize();
        });
    }

    /**
     * Check screen size and apply responsive RTL adjustments
     */
    checkScreenSize() {
        const width = window.innerWidth;
        
        if (width < 768) { // Mobile
            this.applyMobileRTLAdjustments();
        } else if (width < 1024) { // Tablet
            this.applyTabletRTLAdjustments();
        } else { // Desktop
            this.applyDesktopRTLAdjustments();
        }
    }

    /**
     * Apply RTL adjustments for mobile view
     */
    applyMobileRTLAdjustments() {
        console.log('📱 Applying mobile RTL adjustments');
        
        // Adjust job listings for mobile RTL
        const jobCards = document.querySelectorAll('.quantum-rtl-job-card');
        jobCards.forEach(card => {
            // Additional mobile-specific RTL adjustments can be added here
        });
    }

    /**
     * Apply RTL adjustments for tablet view
     */
    applyTabletRTLAdjustments() {
        console.log('📱 Applying tablet RTL adjustments');
        // Tablet-specific RTL adjustments
    }

    /**
     * Apply RTL adjustments for desktop view
     */
    applyDesktopRTLAdjustments() {
        console.log('🖥️ Applying desktop RTL adjustments');
        // Desktop-specific RTL adjustments
    }

    /**
     * Save element state before transformation
     * @param {HTMLElement} element - Element to save state for
     */
    saveElementState(element) {
        const state = {
            dir: element.getAttribute('dir'),
            className: element.className,
            style: element.getAttribute('style')
        };
        
        // Store state using element's unique identifier or position
        const id = element.id || `element-${Array.from(document.body.children).indexOf(element)}`;
        this.state.set(id, state);
    }

    /**
     * Initialize RTL state management
     */
    initializeRTLState() {
        // Set initial RTL state in session storage
        sessionStorage.setItem('careers-rtl-state', 'active');
        
        // Log state initialization
        console.log('💾 RTL state management initialized');
    }

    /**
     * Revert elements to original state (if needed)
     */
    revertElements() {
        // Iterate through saved states and revert elements
        this.state.forEach((state, id) => {
            const element = document.getElementById(id) || 
                           document.querySelector(`[data-quantum-rtl-id="${id}"]`);
            
            if (element) {
                // Restore original state
                if (state.dir) element.setAttribute('dir', state.dir);
                else element.removeAttribute('dir');
                
                element.className = state.className;
                
                if (state.style) element.setAttribute('style', state.style);
                else element.removeAttribute('style');
                
                // Remove quantum RTL attributes
                element.removeAttribute('data-quantum-rtl');
            }
        });
        
        // Update state in session storage
        sessionStorage.setItem('careers-rtl-state', 'inactive');
        
        console.log('↩️ Elements reverted to original state');
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize careers-specific quantum RTL
    const careersRTL = new CareersQuantumRTL();
    careersRTL.init();
    
    // Expose to window for debugging/testing if needed
    window.careersRTL = careersRTL;
});
