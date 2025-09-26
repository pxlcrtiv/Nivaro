/**
 * Quantum Hebrew Translator - Nano-level Language Transformation Engine
 * 
 * This quantum-powered translator applies Ant-Man universe principles to transform
 * user-facing English content to Hebrew at the sub-atomic level while preserving
 * all code functionality and structure.
 * 
 * Quantum Principles Applied:
 * - Quantum Entanglement: Links English phrases to their Hebrew equivalents
 * - Superposition: Maintains both languages simultaneously until observed
 * - Quantum Tunneling: Instant translation across language barriers
 * - Observer Effect: Transforms content when user interaction is detected
 * - Pym Particle Technology: Shrinks translation overhead to nano-scale
 */

class QuantumHebrewTranslator {
    constructor() {
        this.quantumDictionary = this.initializeQuantumDictionary();
        this.translationCache = new Map(); // Quantum cache for faster transformations
        this.observerMode = false;
        this.nanoPrecision = true;
        this.pymParticleOptimizer = true;
        
        // Initialize quantum field
        this.initializeQuantumField();
    }

    /**
     * Initialize the quantum dictionary with English-Hebrew entanglements
     * Each entry creates a quantum pair that maintains superposition
     */
    initializeQuantumDictionary() {
        return {
            // Navigation & Header
            "showreel'23": "הצגת-2023",
            "About": "אודות",
            "Expertise": "מומחיות",
            "Works": "עבודות",
            "Insights": "תובנות",
            "Careers": "קריירה",
            "Contact": "צור-קשר",
            "let's be friends": "בואו נהיה חברים",
            "for new business": "לעסקים חדשים",
            "Facebook": "פייסבוק",
            "Instagram": "אינסטגרם",
            "Twitter": "טוויטר",
            "LinkedIn": "לינקדאין",
            "Behance": "בihance",
            "Youtube": "יוטיוב",
            
            // Hero Section
            "Digital": "דיגיטלי",
            "Experience": "חוויה",
            "Design": "עיצוב",
            "Agency": "סוכנות",
            "As a leading UI UX and web design agency, we harness the power of": "כסוכנות מובילה לעיצוב UI UX ואינטרנט, אנו מנצלים את הכוח של",
            "Emotion, Design, Technology, and Neuromarketing": "רגש, עיצוב, טכנולוגיה, ונוירומרקטינג",
            "to craft digital brand experiences that drive real results.": "כדי ליצור חוויות מותג דיגיטליות שמניעות תוצאות אמיתיות.",
            "timezone": "אזור-זמן",
            "location": "מיקום",
            "+5:30 GMT": "+5:30 GMT",
            "Noida - India": "נוידה - הודו",
            
            // About Section
            "From Concept To Conversion": "מקונספט להמרה",
            "We're Changing The Face of Web": "אנחנו משנים את פני האינטרנט",
            "Empowered by neuromarketing principles, our UI UX and web design services open endless opportunities for each brand we partner with.": "מחוזקים על ידי עקרונות נוירומרקטינג, שירותי ה-UI UX והעיצוב שלנו פותחים הזדמנויות בלתי מוגבלות לכל מותג שאנו שותפים איתו.",
            "Let's amplify your potential!": "בואו נגדיל את הפוטנציאל שלכם!",
            "Say, Hello!": "גם אתם, שלום!",
            
            // Services Section
            "Strategy": "אסטרטגיה",
            "we make cool things that do great business": "אנחנו יוצרים דברים מגניבים שעושים עסקים גדולים",
            
            // Service Categories
            "UI UX Design": "עיצוב UI UX",
            "Web Design": "עיצוב אתרים",
            "Mobile App Design": "עיצוב אפליקציות נייד",
            "Frontend Development": "פיתוח חזית",
            "Digital Marketing": "שיווק דיגיטלי",
            "Branding": "מיתוג",
            "E-commerce": "מסחר אלקטרוני",
            "Consulting": "ייעוץ",
            
            // Portfolio/Works
            "Our Work": "העבודות שלנו",
            "Featured Projects": "פרויקטים מובחרים",
            "View All Projects": "צפה בכל הפרויקטים",
            "Case Study": "מקרה בוחן",
            
            // Testimonials
            "What Our Clients Say": "מה הלקוחות שלנו אומרים",
            "Client Reviews": "ביקורות לקוחות",
            "Testimonials": "המלצות",
            
            // Team/Careers
            "Join Our Team": "הצטרף לצוות שלנו",
            "We're Hiring": "אנחנו מגייסים",
            "Current Openings": "משרות פתוחות",
            "Apply Now": "הגש מועמדות עכשיו",
            
            // Contact
            "Get In Touch": "צור קשר",
            "Let's Talk": "בואו נדבר",
            "Send Message": "שלח הודעה",
            "Your Name": "השם שלך",
            "Your Email": "האימייל שלך",
            "Your Message": "ההודעה שלך",
            "Phone Number": "מספר טלפון",
            "Subject": "נושא",
            
            // Footer
            "All Rights Reserved": "כל הזכויות שמורות",
            "Privacy Policy": "מדיניות פרטיות",
            "Terms of Service": "תנאי שירות",
            "Cookie Policy": "מדיניות עוגיות",
            
            // Common UI Elements
            "Loading": "טוען",
            "Read More": "קרא עוד",
            "Learn More": "למד עוד",
            "Click Here": "לחץ כאן",
            "Download": "הורד",
            "Play": "נגן",
            "Pause": "השהה",
            "Close": "סגור",
            "Open": "פתח",
            "Next": "הבא",
            "Previous": "הקודם",
            "Back": "חזור",
            "Continue": "המשך",
            "Submit": "שלח",
            "Cancel": "בטל",
            "Save": "שמור",
            "Edit": "ערוך",
            "Delete": "מחק",
            "Search": "חיפוש",
            "Filter": "סנן",
            "Sort": "מיין",
            
            // Error Messages
            "Error": "שגיאה",
            "Success": "הצלחה",
            "Warning": "אזהרה",
            "Info": "מידע",
            "Something went wrong": "משהו השתבש",
            "Please try again": "אנא נסה שוב",
            "Page not found": "הדף לא נמצא",
            "Connection error": "שגיאת חיבור",
            
            // Time & Date
            "Today": "היום",
            "Yesterday": "אתמול",
            "Tomorrow": "מחר",
            "Week": "שבוע",
            "Month": "חודש",
            "Year": "שנה",
            "Hour": "שעה",
            "Minute": "דקה",
            "Second": "שנייה",
            
            // Numbers & Quantities
            "One": "אחד",
            "Two": "שניים",
            "Three": "שלוש",
            "Four": "ארבע",
            "Five": "חמש",
            "First": "ראשון",
            "Second": "שני",
            "Third": "שלישי",
            "Last": "אחרון",
            "New": "חדש",
            "Old": "ישן",
            
            // Descriptive Terms
            "Best": "הטוב ביותר",
            "Better": "טוב יותר",
            "Good": "טוב",
            "Great": "נפלא",
            "Amazing": "מדהים",
            "Excellent": "מצוין",
            "Perfect": "מושלם",
            "Beautiful": "יפה",
            "Awesome": "מדהים",
            "Fantastic": "פנטסטי",
            "Wonderful": "נפלא",
            "Incredible": "לא ייאמן",
            "Innovative": "חדשני",
            "Creative": "יצירתי",
            "Professional": "מקצועי",
            "Reliable": "אמין",
            "Fast": "מהיר",
            "Easy": "קל",
            "Simple": "פשוט",
            "Advanced": "מתקדם",
            "Modern": "מודרני",
            "Unique": "ייחודי",
            "Special": "מיוחד",
            
            // Business Terms
            "Business": "עסק",
            "Company": "חברה",
            "Brand": "מותג",
            "Product": "מוצר",
            "Service": "שירות",
            "Customer": "לקוח",
            "Client": "לקוח",
            "Partner": "שותף",
            "Project": "פרויקט",
            "Solution": "פתרון",
            "Result": "תוצאה",
            "Success": "הצלחה",
            "Growth": "צמיחה",
            "Development": "פיתוח",
            "Design": "עיצוב",
            "Marketing": "שיווק",
            "Sales": "מכירות",
            "Revenue": "הכנסה",
            "Profit": "רווח",
            "Investment": "השקעה",
            "ROI": "תשואה על השקעה",
            
            // Technical Terms
            "Technology": "טכנולוגיה",
            "Software": "תוכנה",
            "Hardware": "חומרה",
            "Digital": "דיגיטלי",
            "Online": "מקוון",
            "Internet": "אינטרנט",
            "Website": "אתר אינטרנט",
            "Application": "יישום",
            "Platform": "פלטפורמה",
            "System": "מערכת",
            "Database": "מסד נתונים",
            "API": "ממשק תכנות",
            "Cloud": "ענן",
            "Mobile": "נייד",
            "Responsive": "רספונסיבי",
            "User Interface": "ממשק משתמש",
            "User Experience": "חוויית משתמש",
            "Frontend": "חזית",
            "Backend": "צד שרת",
            "Full Stack": "מלאה מלא",
            
            // Quantum Terms (Special)
            "Quantum": "קוונטי",
            "Nano": "ננו",
            "Micro": "מיקרו",
            "Macro": "מאקרו",
            "Particle": "חלקיק",
            "Wave": "גל",
            "Energy": "אנרגיה",
            "Frequency": "תדר",
            "Vibration": "רטט",
            "Dimension": "מימד",
            "Reality": "מציאות",
            "Universe": "יקום",
            "Multiverse": "מולטי-יקום",
            "Entanglement": "שזירה",
            "Superposition": "מצב-על",
            "Tunneling": "מעבר-מנהרה",
            "Coherence": "קוהרנטיות",
            "Decoherence": "דה-קוהרנטיות",
            "Measurement": "מדידה",
            "Observation": "תצפית",
            "Collapse": "קריסה",
            "Transformation": "שינוי",
            "Transmutation": "העתקה",
            "Metamorphosis": "מטמורפוזה"
        };
    }

    /**
     * Initialize the quantum field for translation operations
     * Creates a nano-scale environment for precise language transformations
     */
    initializeQuantumField() {
        // Create quantum observer for real-time translation
        this.quantumObserver = new MutationObserver((mutations) => {
            if (this.observerMode) {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        this.quantumTranslateElement(mutation.target);
                    }
                });
            }
        });

        // Configure observer with quantum precision
        this.quantumObserver.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: false
        });

        console.log("🌌 Quantum Hebrew Translation Field Initialized");
        console.log("⚛️ Nano-scale precision: ACTIVE");
        console.log("🔬 Pym Particle Optimizer: ENABLED");
        console.log("📡 Quantum Observer: STANDBY");
    }

    /**
     * Apply quantum translation to an element using nano-level precision
     * @param {Element} element - The element to translate
     * @returns {boolean} - Translation success status
     */
    quantumTranslateElement(element) {
        try {
            // Skip if element is not valid or is a script/style element
            if (!element || element.tagName === 'SCRIPT' || element.tagName === 'STYLE' || 
                element.tagName === 'CODE' || element.tagName === 'PRE') {
                return false;
            }

            // Check cache first (quantum speed optimization)
            const elementKey = this.generateQuantumKey(element);
            if (this.translationCache.has(elementKey)) {
                return this.translationCache.get(elementKey);
            }

            // Apply Pym Particle optimization for nano-scale translation
            if (this.pymParticleOptimizer) {
                return this.pymParticleTranslation(element);
            } else {
                return this.standardQuantumTranslation(element);
            }
        } catch (error) {
            console.warn("⚠️ Quantum translation error:", error);
            return false;
        }
    }

    /**
     * Generate a unique quantum key for caching
     * @param {Element} element - The element to generate key for
     * @returns {string} - Quantum key
     */
    generateQuantumKey(element) {
        const textContent = element.textContent || '';
        const tagName = element.tagName || '';
        const className = element.className || '';
        return `${tagName}_${className}_${this.hashCode(textContent)}`;
    }

    /**
     * Simple hash function for quantum keys
     * @param {string} str - String to hash
     * @returns {number} - Hash code
     */
    hashCode(str) {
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    /**
     * Apply Pym Particle optimized translation (nano-scale precision)
     * @param {Element} element - The element to translate
     * @returns {boolean} - Translation success status
     */
    pymParticleTranslation(element) {
        let translationOccurred = false;
        
        // Handle text nodes with quantum precision
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        // Apply quantum translation to each text node
        textNodes.forEach(textNode => {
            const originalText = textNode.textContent.trim();
            if (originalText && this.shouldTranslateText(originalText)) {
                const translatedText = this.translateTextWithQuantumPrecision(originalText);
                if (translatedText !== originalText) {
                    textNode.textContent = translatedText;
                    translationOccurred = true;
                    
                    // Apply quantum entanglement for future transformations
                    this.entangleTranslation(textNode, originalText, translatedText);
                }
            }
        });

        // Handle attributes with quantum precision
        if (element.attributes) {
            Array.from(element.attributes).forEach(attr => {
                if (this.shouldTranslateAttribute(attr.name, attr.value)) {
                    const translatedValue = this.translateTextWithQuantumPrecision(attr.value);
                    if (translatedValue !== attr.value) {
                        attr.value = translatedValue;
                        translationOccurred = true;
                    }
                }
            });
        }

        // Cache the result for quantum speed
        const elementKey = this.generateQuantumKey(element);
        this.translationCache.set(elementKey, translationOccurred);

        return translationOccurred;
    }

    /**
     * Apply standard quantum translation (fallback method)
     * @param {Element} element - The element to translate
     * @returns {boolean} - Translation success status
     */
    standardQuantumTranslation(element) {
        // Fallback translation method
        return this.pymParticleTranslation(element);
    }

    /**
     * Determine if text should be translated based on quantum criteria
     * @param {string} text - Text to evaluate
     * @returns {boolean} - Should translate
     */
    shouldTranslateText(text) {
        if (!text || text.length < 2) return false;
        
        // Skip if contains only numbers, symbols, or is too short
        if (/^[\d\s\W]+$/.test(text)) return false;
        
        // Skip if it's a known code/technical term
        const skipTerms = ['http', 'www', '.com', '@', 'tel:', 'mailto:', 'GTM-', 'UA-', 'GA-', 'fb-', 'tw-'];
        if (skipTerms.some(term => text.toLowerCase().includes(term))) return false;
        
        // Check if text contains translatable content
        const hasLetters = /[a-zA-Z]/.test(text);
        return hasLetters;
    }

    /**
     * Determine if attribute should be translated
     * @param {string} attrName - Attribute name
     * @param {string} attrValue - Attribute value
     * @returns {boolean} - Should translate
     */
    shouldTranslateAttribute(attrName, attrValue) {
        const translatableAttrs = ['title', 'alt', 'placeholder', 'aria-label', 'data-text'];
        return translatableAttrs.includes(attrName.toLowerCase()) && this.shouldTranslateText(attrValue);
    }

    /**
     * Translate text with quantum precision using the quantum dictionary
     * @param {string} text - Text to translate
     * @returns {string} - Translated text
     */
    translateTextWithQuantumPrecision(text) {
        if (!text || typeof text !== 'string') return text;
        
        let translatedText = text;
        
        // Apply quantum transformations with nano-level precision
        Object.keys(this.quantumDictionary).forEach(englishPhrase => {
            const hebrewTranslation = this.quantumDictionary[englishPhrase];
            const regex = new RegExp(this.escapeRegExp(englishPhrase), 'gi');
            translatedText = translatedText.replace(regex, hebrewTranslation);
        });
        
        return translatedText;
    }

    /**
     * Escape special regex characters
     * @param {string} string - String to escape
     * @returns {string} - Escaped string
     */
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Create quantum entanglement between original and translated text
     * @param {Node} node - The text node
     * @param {string} originalText - Original English text
     * @param {string} translatedText - Translated Hebrew text
     */
    entangleTranslation(node, originalText, translatedText) {
        // Store quantum entanglement data
        node.quantumEntanglement = {
            original: originalText,
            translated: translatedText,
            timestamp: Date.now(),
            entanglementId: this.generateEntanglementId()
        };
        
        // Apply quantum marker for future transformations
        node.parentElement?.setAttribute('data-quantum-translated', 'true');
    }

    /**
     * Generate unique entanglement ID
     * @returns {string} - Entanglement ID
     */
    generateEntanglementId() {
        return `entanglement_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Enable quantum translation mode
     */
    enableQuantumTranslation() {
        this.observerMode = true;
        console.log("🔬 Quantum Translation Mode: ENABLED");
        console.log("⚛️ Applying Hebrew transformations at nano-scale...");
        
        // Apply immediate translation to all visible content
        this.applyQuantumTranslationToDocument();
        
        // Trigger quantum measurer if available
        if (window.quantumMeasurer) {
            window.quantumMeasurer.startMeasurement();
        }
    }

    /**
     * Disable quantum translation mode
     */
    disableQuantumTranslation() {
        this.observerMode = false;
        console.log("🔬 Quantum Translation Mode: DISABLED");
    }

    /**
     * Apply quantum translation to entire document
     */
    applyQuantumTranslationToDocument() {
        console.log("🌌 Initiating document-wide quantum translation...");
        
        const startTime = performance.now();
        let translationCount = 0;
        
        // Apply translation to body and all its children
        const translationSuccess = this.quantumTranslateElement(document.body);
        
        if (translationSuccess) {
            translationCount++;
        }
        
        // Recursively translate all child elements
        const allElements = document.body.getElementsByTagName('*');
        Array.from(allElements).forEach(element => {
            if (this.quantumTranslateElement(element)) {
                translationCount++;
            }
        });
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(`✅ Quantum translation complete!`);
        console.log(`📊 Elements translated: ${translationCount}`);
        console.log(`⏱️ Translation time: ${duration.toFixed(2)}ms`);
        console.log(`🚀 Performance: ${(translationCount / duration * 1000).toFixed(2)} elements/second`);
        
        // Update page language attributes
        document.documentElement.setAttribute('lang', 'he');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('data-quantum-translated', 'true');
        
        return {
            elementsTranslated: translationCount,
            translationTime: duration,
            performance: translationCount / duration * 1000
        };
    }

    /**
     * Get translation statistics
     * @returns {Object} - Translation statistics
     */
    getTranslationStats() {
        return {
            dictionarySize: Object.keys(this.quantumDictionary).length,
            cacheSize: this.translationCache.size,
            observerMode: this.observerMode,
            nanoPrecision: this.nanoPrecision,
            pymParticleOptimizer: this.pymParticleOptimizer
        };
    }

    /**
     * Add custom translation to quantum dictionary
     * @param {string} english - English text
     * @param {string} hebrew - Hebrew translation
     */
    addQuantumTranslation(english, hebrew) {
        this.quantumDictionary[english] = hebrew;
        console.log(`⚛️ Added quantum translation: "${english}" → "${hebrew}"`);
    }

    /**
     * Remove translation from quantum dictionary
     * @param {string} english - English text to remove
     */
    removeQuantumTranslation(english) {
        if (this.quantumDictionary[english]) {
            delete this.quantumDictionary[english];
            console.log(`⚛️ Removed quantum translation for: "${english}"`);
        }
    }

    /**
     * Clear translation cache (quantum reset)
     */
    clearQuantumCache() {
        this.translationCache.clear();
        console.log("🔄 Quantum translation cache cleared");
    }

    /**
     * Destroy quantum translator and cleanup
     */
    destroy() {
        if (this.quantumObserver) {
            this.quantumObserver.disconnect();
        }
        this.clearQuantumCache();
        console.log("☄️ Quantum Hebrew Translator destroyed");
    }
}

// Initialize quantum Hebrew translator when DOM is ready
let quantumHebrewTranslator;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuantumHebrewTranslator);
} else {
    initializeQuantumHebrewTranslator();
}

function initializeQuantumHebrewTranslator() {
    try {
        quantumHebrewTranslator = new QuantumHebrewTranslator();
        
        // Make it globally accessible
        window.quantumHebrewTranslator = quantumHebrewTranslator;
        
        console.log("🌌 Quantum Hebrew Translator Initialized");
        console.log("⚛️ Ready for nano-level Hebrew transformations");
        console.log("🔬 Pym Particle Technology: ACTIVE");
        console.log("📡 Quantum Field: STABILIZED");
        
        // Auto-enable translation for Hebrew-optimized experience
        setTimeout(() => {
            quantumHebrewTranslator.enableQuantumTranslation();
        }, 1000);
        
    } catch (error) {
        console.error("💥 Failed to initialize Quantum Hebrew Translator:", error);
    }
}

// Export for use in other quantum modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumHebrewTranslator;
}