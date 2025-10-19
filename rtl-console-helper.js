/**
 * RTL Console Helper - Interactive tools for element-level RTL transformation
 * This script provides a simple interface for users to apply RTL transformations
 * to specific elements directly from the browser console.
 * 
 * Usage examples:
 * - rtl.help() - Show this help message
 * - rtl.transform('header') - Transform all header elements
 * - rtl.transform('.content-section', {swapMargins: true}) - Transform with options
 * - rtl.revertAll() - Revert all transformed elements
 */

// Wait for DOM to be fully loaded and quantumElementRTL to be initialized
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit more to ensure our custom-element-rtl.js has initialized
        setTimeout(() => {
            // Create the rtl helper object
            window.rtl = {
                // Reference to our ElementRTLTransformer instance
                transformer: window.quantumElementRTL || null,
                
                // Flag to track if we're in debug mode
                debug: false,
                
                // Initialize or re-initialize the transformer
                init: function() {
                    if (!this.transformer) {
                        try {
                            this.transformer = new ElementRTLTransformer();
                            console.log('✨ RTL console helper initialized successfully!');
                            this.showTips();
                        } catch (error) {
                            console.error('❌ Failed to initialize ElementRTLTransformer:', error);
                            console.info('💡 Make sure custom-element-rtl.js is properly loaded');
                        }
                    }
                    return this;
                },
                
                // Transform elements by selector with options
                transform: function(selector, options = {}) {
                    if (!this.transformer) {
                        console.error('❌ RTL transformer not initialized. Call rtl.init() first.');
                        return this;
                    }
                    
                    try {
                        const elements = document.querySelectorAll(selector);
                        if (elements.length === 0) {
                            console.warn('⚠️ No elements found matching selector:', selector);
                            return this;
                        }
                        
                        this.transformer.transformElements(elements, options);
                        console.log(`✅ Transformed ${elements.length} element(s) matching "${selector}"`);
                        
                        if (this.debug) {
                            console.log('🔧 Transformation options:', options);
                        }
                    } catch (error) {
                        console.error('❌ Error transforming elements:', error);
                    }
                    
                    return this;
                },
                
                // Transform a single element by ID
                transformById: function(id, options = {}) {
                    try {
                        const element = document.getElementById(id);
                        if (!element) {
                            console.warn('⚠️ No element found with ID:', id);
                            return this;
                        }
                        
                        this.transformer.transformElement(element, options);
                        console.log(`✅ Transformed element with ID "${id}"`);
                    } catch (error) {
                        console.error('❌ Error transforming element by ID:', error);
                    }
                    
                    return this;
                },
                
                // Revert all transformed elements
                revertAll: function() {
                    if (!this.transformer || !this.transformer.transformedElements) {
                        console.error('❌ Cannot revert - transformer not properly initialized');
                        return this;
                    }
                    
                    const elementCount = this.transformer.transformedElements.size;
                    
                    if (elementCount === 0) {
                        console.log('ℹ️ No elements to revert');
                        return this;
                    }
                    
                    // Convert Map to Array to avoid iteration issues during deletion
                    Array.from(this.transformer.transformedElements.keys()).forEach(element => {
                        try {
                            this.transformer.revertElement(element);
                        } catch (error) {
                            console.error('❌ Error reverting element:', error);
                        }
                    });
                    
                    console.log(`✅ Reverted ${elementCount} transformed element(s)`);
                    return this;
                },
                
                // Get information about transformed elements
                info: function() {
                    if (!this.transformer || !this.transformer.transformedElements) {
                        console.error('❌ Transformer not properly initialized');
                        return this;
                    }
                    
                    const elementCount = this.transformer.transformedElements.size;
                    
                    if (elementCount === 0) {
                        console.log('ℹ️ No elements have been transformed yet');
                        return this;
                    }
                    
                    console.log(`📊 Currently transformed elements: ${elementCount}`);
                    
                    if (this.debug) {
                        // Show detailed information about each transformed element
                        let i = 1;
                        this.transformer.transformedElements.forEach((state, element) => {
                            const tagName = element.tagName.toLowerCase();
                            const id = element.id ? `#${element.id}` : '';
                            const classes = element.className ? `.${element.className.split(' ').join('.')}` : '';
                            
                            console.log(`  ${i++}. ${tagName}${id}${classes}`);
                        });
                    }
                    
                    return this;
                },
                
                // Toggle debug mode
                toggleDebug: function() {
                    this.debug = !this.debug;
                    console.log(`🔍 Debug mode ${this.debug ? 'enabled' : 'disabled'}`);
                    return this;
                },
                
                // Show help information
                help: function() {
                    console.log(`%c📚 RTL CONSOLE HELPER DOCUMENTATION`, 'font-weight: bold; font-size: 14px; color: #4CAF50;');
                    console.log(`
Element-level RTL transformation system inspired by quantum mechanics.
Transforms individual elements rather than entire pages.

AVAILABLE COMMANDS:`);
                    
                    console.log(`- rtl.help()                     Show this help message`);
                    console.log(`- rtl.init()                     Initialize the RTL transformer`);
                    console.log(`- rtl.transform(selector, options)  Transform elements by CSS selector`);
                    console.log(`  Example: rtl.transform('.content', {swapMargins: true})`);
                    console.log(`- rtl.transformById(id, options) Transform a single element by ID`);
                    console.log(`- rtl.revertAll()                Revert all transformed elements`);
                    console.log(`- rtl.info()                     Show information about transformed elements`);
                    console.log(`- rtl.toggleDebug()              Toggle debug mode`);
                    console.log(`- rtl.showTips()                 Show helpful usage tips`);
                    
                    console.log(`
TRANSFORMATION OPTIONS:`);
                    console.log(`- swapMargins: true/false        Swap left/right margins (default: true)`);
                    console.log(`- swapPadding: true/false        Swap left/right padding (default: true)`);
                    console.log(`- transformFlex: true/false      Adjust flexbox layouts (default: true)`);
                    console.log(`- textAlign: 'right'/'justify'   Set text alignment (default: 'right')`);
                    console.log(`- preserveDirection: true/false  Preserve original direction (default: false)`);
                    
                    console.log(`
EXAMPLES:`);
                    console.log(`1. Transform all navigation links: rtl.transform('.nav-link')`);
                    console.log(`2. Transform content sections with custom options: rtl.transform('.section', {swapMargins: true, textAlign: 'justify'})`);
                    console.log(`3. Transform specific element: rtl.transformById('hero-section')`);
                    console.log(`4. Get transformation status: rtl.info()`);
                    
                    return this;
                },
                
                // Show helpful usage tips
                showTips: function() {
                    console.log(`%c💡 QUANTUM RTL TIPS`, 'font-weight: bold; font-size: 14px; color: #2196F3;');
                    console.log(`
• Like Ant-Man entering the quantum realm, we affect reality at the smallest element level`);
                    console.log(`• Transform individual elements without affecting the entire page`);
                    console.log(`• Use specific CSS selectors to target exactly what needs to change`);
                    console.log(`• Always test transformations in different viewport sizes`);
                    console.log(`• Remember you can revert all changes with rtl.revertAll()`);
                    console.log(`
Type 'rtl.help()' to see all available commands and options.`);
                    return this;
                }
            };
            
            // If quantumElementRTL is already initialized, show tips
            if (window.quantumElementRTL) {
                window.rtl.showTips();
            } else {
                console.log('ℹ️ RTL console helper loaded. Run rtl.init() to initialize the transformer.');
            }
        }, 1500);
    });
}