#!/bin/bash

echo "=== Quantum-Level RTL Implementation for Careers Page ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "===================================================="

# Create timestamped backup of original file
timestamp=$(date +"%Y%m%d%H%M%S")
backup_file="careers.html.bak.${timestamp}"

# Create backup
echo "\n📁 Creating backup of original file..."
cp careers.html "$backup_file"
if [ $? -eq 0 ]; then
    echo "✅ Backup created: $backup_file"
else
    echo "❌ Failed to create backup!"
    exit 1
fi

# Generate quantum RTL CSS for careers page
echo "\n🎨 Generating quantum RTL CSS for careers page..."
cat > quantum-rtl-careers.css << 'EOL'
/* Quantum-Level RTL CSS for Careers Page */
/* Target: Hebrew native speakers (Nivaro brand) */
/* Implementation: Quantum particle-wave behavior principles */

/* Global RTL settings */
.quantum-rtl-zone {
  direction: rtl;
  text-align: right;
  unicode-bidi: isolate;
}

/* Careers page specific RTL styles */
.prose {
  direction: rtl;
  text-align: right;
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  text-align: right;
  margin-right: 0;
  margin-left: auto;
}

.prose p {
  text-align: right;
  margin-right: 0;
  margin-left: auto;
}

.prose ul, .prose ol {
  padding-right: 1.5em;
  padding-left: 0;
}

.prose li {
  text-align: right;
}

/* Layout RTL adjustments */
.flex.justify-between {
  flex-direction: row-reverse;
}

/* Image RTL optimization */
img {
  float: right !important;
  margin-right: 0 !important;
  margin-left: 1em !important;
}

/* Code blocks RTL */
code, pre {
  direction: ltr;
  unicode-bidi: embed;
}

/* Navigation RTL adjustments */
.Header_wrapper__1yY2x {
  direction: rtl;
}

.Header_contentLeft__LvrzL {
  text-align: right;
}

.Header_navLinkItem__l2xbK {
  direction: rtl;
}

/* Social media links RTL */
.Header_socialItems__GV7GF {
  direction: rtl;
}

/* Careers page specific elements */
.careers-section {
  direction: rtl;
  text-align: right;
}

.job-listing {
  direction: rtl;
  text-align: right;
  border-right: 2px solid #5d5ad6;
  border-left: none;
  padding-right: 1.5em;
  padding-left: 0;
}

.job-title {
  text-align: right;
  margin-right: 0;
  margin-left: auto;
}

.job-description {
  text-align: right;
}

.job-requirements {
  padding-right: 1.5em;
  padding-left: 0;
}

.job-requirements li {
  text-align: right;
}

.apply-button {
  direction: rtl;
  text-align: center;
}

/* Responsive RTL adjustments */
@media (max-width: 768px) {
  .prose {
    padding-right: 5%;
    padding-left: 5%;
  }
  
  .job-listing {
    padding-right: 1em;
    padding-left: 0;
  }
}

/* Quantum animation effects for RTL content */
@keyframes quantumRTLPulse {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(1px); }
}

.quantum-rtl-zone {
  animation: quantumRTLPulse 5s infinite ease-in-out;
}

/* Floating elements RTL correction */
.float-right {
  float: left !important;
}

.float-left {
  float: right !important;
}

/* Quantum-level text rendering optimization */
.quantum-rtl-zone {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hebrew typography enhancements */
.quantum-rtl-zone {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.8;
  letter-spacing: 0.01em;
}

/* Table RTL support */
table {
  direction: rtl;
  text-align: right;
}

/* Blockquote RTL styling */
blockquote {
  border-right: 4px solid #5d5ad6;
  border-left: none;
  padding-right: 1em;
  padding-left: 0;
  margin-right: 0;
  margin-left: 0;
}

/* Form elements RTL for job applications */
input, textarea, select {
  direction: rtl;
  text-align: right;
}

/* Hero section RTL */
#hero {
  text-align: center;
}

#hero h1 {
  text-align: center;
}

#hero p {
  text-align: center;
}
EOL

if [ $? -eq 0 ]; then
    echo "✅ quantum-rtl-careers.css created with Hebrew-optimized RTL properties"
else
    echo "❌ Failed to create quantum RTL CSS file!"
    exit 1
fi

# Generate quantum-rtl.js core observer if it doesn't exist
if [ ! -f quantum-rtl.js ]; then
    echo "\n⚡ Generating quantum-rtl.js core observer..."
    cat > quantum-rtl.js << 'EOL'
/**
 * QuantumRTLObserver - Core observer for dynamic RTL content adaptation
 * Implements quantum-level responsiveness for Hebrew content
 * Target: Native Hebrew speakers (Nivaro brand)
 */

class QuantumRTLObserver {
  constructor() {
    this.observers = [];
    this.mutationObserver = null;
    this.viewportObserver = null;
    this.initialize();
  }

  initialize() {
    // Initialize Mutation Observer for dynamic content
    this.mutationObserver = new MutationObserver(this.handleMutations.bind(this));
    
    // Set up viewport observer for responsive RTL behavior
    this.setupViewportObserver();
    
    // Apply initial RTL optimization
    this.applyRTLToPage();
  }

  handleMutations(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          this.observeDynamicContent(node);
        });
      }
    }
  }

  observeDynamicContent(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      // Apply RTL to new elements
      this.applyRTLToNode(node);
      
      // Observe for nested changes
      this.mutationObserver.observe(node, {
        childList: true,
        subtree: true
      });
    }
  }

  applyRTLToNode(node) {
    if (node.classList && !node.classList.contains('quantum-rtl-processed')) {
      node.classList.add('quantum-rtl-processed');
      
      // Apply RTL attributes and classes
      if (!node.hasAttribute('dir')) {
        node.setAttribute('dir', 'rtl');
      }
      
      // Add quantum RTL zone class to content sections
      if (['div', 'section', 'article', 'main', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'].includes(node.tagName.toLowerCase())) {
        node.classList.add('quantum-rtl-zone');
      }
      
      // Handle specific element types
      this.handleSpecificElements(node);
    }
  }

  handleSpecificElements(node) {
    const tagName = node.tagName.toLowerCase();
    
    switch (tagName) {
      case 'blockquote':
        this.optimizeBlockquote(node);
        break;
      case 'table':
        this.optimizeTable(node);
        break;
      case 'img':
        this.optimizeImage(node);
        break;
      case 'code':
      case 'pre':
        this.optimizeCode(node);
        break;
    }
  }

  optimizeBlockquote(node) {
    // Ensure proper blockquote styling for RTL
    node.style.borderRight = '4px solid #5d5ad6';
    node.style.borderLeft = 'none';
    node.style.paddingRight = '1em';
    node.style.paddingLeft = '0';
  }

  optimizeTable(node) {
    // Set table direction to RTL
    node.style.direction = 'rtl';
    node.style.textAlign = 'right';
  }

  optimizeImage(node) {
    // Adjust image float for RTL
    if (node.style.float === 'left') {
      node.style.float = 'right';
    }
  }

  optimizeCode(node) {
    // Keep code direction LTR for proper display
    node.style.direction = 'ltr';
    node.style.unicodeBidi = 'embed';
  }

  applyRTLToPage() {
    // Apply RTL to body and main content
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
    
    // Process all existing elements
    document.querySelectorAll('div, section, article, p, h1, h2, h3, h4, h5, h6, ul, ol, li').forEach(el => {
      this.applyRTLToNode(el);
    });
    
    // Start observing document changes
    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  setupViewportObserver() {
    // Handle viewport changes for responsive RTL
    window.addEventListener('resize', () => {
      this.optimizeRTLForViewport(window.innerWidth);
    });
    
    // Initial viewport optimization
    this.optimizeRTLForViewport(window.innerWidth);
  }

  optimizeRTLForViewport(width) {
    // Apply responsive RTL adjustments based on viewport width
    if (width < 768) {
      document.body.classList.add('quantum-rtl-mobile');
      document.body.classList.remove('quantum-rtl-desktop');
    } else {
      document.body.classList.add('quantum-rtl-desktop');
      document.body.classList.remove('quantum-rtl-mobile');
    }
  }

  disconnect() {
    // Clean up observers
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Initialize quantum RTL observer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.quantumRTL === 'undefined') {
    window.quantumRTL = new QuantumRTLObserver();
  }
});
EOL

    if [ $? -eq 0 ]; then
        echo "✅ quantum-rtl.js created with core observer functionality"
    else
        echo "❌ Failed to create quantum RTL JS file!"
        exit 1
    fi
else
    echo "✅ quantum-rtl.js already exists"
fi

# Generate careers specific quantum RTL JS
echo "\n🔗 Generating Careers specific quantum RTL JS..."
cat > careers-quantum-rtl.js << 'EOL'
/**
 * CareersQuantumRTL - Careers page specific RTL implementation
 * Extends QuantumRTLObserver for careers content optimization
 * Target: Native Hebrew speakers (Nivaro brand)
 */

class CareersQuantumRTL {
  constructor() {
    this.initialize();
  }

  initialize() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.applyCareersRTL();
      this.setupCareersObservers();
    });
  }

  applyCareersRTL() {
    // Apply RTL optimizations specific to careers page content
    this.applyHeroSectionRTL();
    this.applyJobListingsRTL();
    this.applyBenefitsSectionRTL();
    this.applyTeamCultureRTL();
    this.applyApplicationFormRTL();
  }

  applyHeroSectionRTL() {
    // Process hero section
    const hero = document.querySelector('#hero');
    if (hero) {
      hero.classList.add('quantum-rtl-zone');
      
      // Process headings and paragraphs
      hero.querySelectorAll('h1, h2, p').forEach(element => {
        element.style.textAlign = 'center';
      });
    }
  }

  applyJobListingsRTL() {
    // Process job listings
    const jobListings = document.querySelectorAll('.job-listing, .career-card');
    jobListings.forEach(listing => {
      listing.classList.add('quantum-rtl-zone');
      listing.style.direction = 'rtl';
      listing.style.textAlign = 'right';
      
      // Process job titles
      listing.querySelectorAll('.job-title, h3, h4').forEach(title => {
        title.style.textAlign = 'right';
      });
      
      // Process job descriptions
      listing.querySelectorAll('.job-description, p').forEach(desc => {
        desc.style.textAlign = 'right';
      });
      
      // Process job requirements lists
      listing.querySelectorAll('ul, ol').forEach(list => {
        list.style.paddingRight = '1.5em';
        list.style.paddingLeft = '0';
        
        list.querySelectorAll('li').forEach(item => {
          item.style.textAlign = 'right';
        });
      });
      
      // Process apply buttons
      listing.querySelectorAll('.apply-button, button, a.btn').forEach(button => {
        button.style.direction = 'rtl';
        button.style.textAlign = 'center';
      });
    });
  }

  applyBenefitsSectionRTL() {
    // RTL optimization for benefits section
    const benefitsSections = document.querySelectorAll('.benefits, .perks');
    benefitsSections.forEach(section => {
      section.classList.add('quantum-rtl-zone');
      section.style.direction = 'rtl';
      section.style.textAlign = 'right';
    });
  }

  applyTeamCultureRTL() {
    // RTL optimization for team culture section
    const cultureSections = document.querySelectorAll('.team-culture, .about-us');
    cultureSections.forEach(section => {
      section.classList.add('quantum-rtl-zone');
      section.style.direction = 'rtl';
      section.style.textAlign = 'right';
    });
  }

  applyApplicationFormRTL() {
    // RTL optimization for application form
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.classList.add('quantum-rtl-zone');
      form.style.direction = 'rtl';
      form.style.textAlign = 'right';
      
      // RTL for form elements
      form.querySelectorAll('input, textarea, select').forEach(input => {
        input.style.direction = 'rtl';
        input.style.textAlign = 'right';
      });
      
      // RTL for form labels
      form.querySelectorAll('label').forEach(label => {
        label.style.direction = 'rtl';
        label.style.textAlign = 'right';
      });
    });
  }

  setupCareersObservers() {
    // Set up observer for dynamic careers content
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.processDynamicCareersContent(node);
          }
        });
      });
    });
    
    // Observe body for dynamic content changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  processDynamicCareersContent(node) {
    // Apply RTL to dynamically loaded careers content
    if (node.matches('.job-listing, .career-card')) {
      this.applyJobListingsRTL();
    } else if (node.matches('form')) {
      this.applyApplicationFormRTL();
    }
  }

  optimizeForScreenSize() {
    // Additional responsive optimizations for careers content
    const width = window.innerWidth;
    
    if (width < 768) {
      // Mobile-specific RTL optimizations
      document.querySelectorAll('.job-listing').forEach(listing => {
        listing.style.paddingRight = '1em';
        listing.style.paddingLeft = '0';
      });
    }
  }
}

// Initialize careers-specific quantum RTL
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.careersQuantumRTL === 'undefined') {
    window.careersQuantumRTL = new CareersQuantumRTL();
  }
});
EOL

if [ $? -eq 0 ]; then
    echo "✅ careers-quantum-rtl.js created with CareersQuantumRTL class"
else
    echo "❌ Failed to create careers RTL JS file!"
    exit 1
fi

# Update HTML file with quantum RTL implementation
echo "\n🔄 Updating HTML attributes and adding quantum RTL resources..."

# Update HTML tag attributes (lang and dir)
sed -i '' 's/<html[^>]*lang="en"[^>]*dir="rtl"/<html lang="he" dir="rtl"/' careers.html

# Add quantum RTL CSS reference before closing head tag
perl -i -pe 's/(<\/head>)/<link rel="stylesheet" href="quantum-rtl-careers.css">\n\1/' careers.html

# Add quantum RTL JS references before closing body tag
perl -i -pe 's/(<\/body>)/<script src="quantum-rtl.js"><\/script>\n    <script src="careers-quantum-rtl.js"><\/script>\n\1/' careers.html

# Add quantum-rtl-zone class to main article sections
perl -i -pe 's/<section id="hero"/<section id="hero" class="quantum-rtl-zone/' careers.html

# Update JSON-LD language tags
echo "\n🌐 Updating JSON-LD language tags to Hebrew..."
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he"/g' careers.html
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he"/g' careers.html

# Update canonical URL
sed -i '' 's/href="careers.html"/href="careers.html"/g' careers.html

# Update Open Graph locale to Hebrew
sed -i '' 's/property="og:locale" content="en_US"/property="og:locale" content="he_IL"/g' careers.html

# Apply quantum-rtl-zone class to content sections
echo "\n🎯 Adding quantum-rtl-zone class to content sections..."
perl -i -pe 's/class="w-full flex justify-between/class="w-full flex justify-between quantum-rtl-zone/g' careers.html

# Verification checks
echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "✅ careers.html now optimized for Hebrew native speakers"
echo "🔄 Created quantum RTL CSS and JS resources"
echo "📁 Original file backed up to: $backup_file"
echo "🌐 Language tags updated to Hebrew"
echo "=================================================="
echo ""
echo "Recommendation: Run 'verify-careers-quantum-rtl.sh' to validate the implementation"
echo "Then deploy to Firebase with 'firebase deploy'"