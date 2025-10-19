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
