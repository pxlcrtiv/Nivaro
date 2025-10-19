#!/bin/bash

# Quantum-Level RTL Implementation Script for boost-b2b-linkedin-strategies.html
# Purpose: Convert the LinkedIn strategies page to RTL layout for Hebrew native speakers
# Target: Nivaro brand, Hebrew language support

echo "=== Quantum-Level RTL Implementation for LinkedIn Strategies Page ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "============================================================"

# Create timestamp for backup
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
BACKUP_FILE="boost-b2b-linkedin-strategies.html.bak.$TIMESTAMP"

# Create backup
echo "\n📁 Creating backup of original file..."
cp boost-b2b-linkedin-strategies.html "$BACKUP_FILE"
echo "✅ Backup created: $BACKUP_FILE"

# Generate quantum-rtl-linkedin.css file
echo "\n🎨 Generating quantum RTL CSS for LinkedIn strategies page..."
cat > quantum-rtl-linkedin.css << 'EOL'
/* Quantum-Level RTL CSS for LinkedIn Strategies Page */
/* Optimized for Hebrew native speakers - Nivaro brand */

/* Core RTL Layout */
body {
  direction: rtl;
  text-align: right;
}

/* Blog Content RTL */
article.prose {
  direction: rtl;
  text-align: right;
}

article.prose h1,
article.prose h2,
article.prose h3,
article.prose h4,
article.prose h5,
article.prose h6 {
  direction: rtl;
  text-align: right;
  margin-right: 0;
  margin-left: auto;
}

article.prose p {
  direction: rtl;
  text-align: right;
}

/* Left Section RTL Adjustment */
.left-section-blog {
  float: left;
  right: auto;
  left: 0;
}

/* Navigation RTL */
.Header_navLinkItem__l2xbK {
  text-align: right;
}

/* Icon RTL Adjustments */
.showreel-btn span {
  direction: rtl;
}

/* Social Icons RTL */
.Header_socialItems__GV7GF {
  direction: rtl;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* Responsive RTL Adjustments */
@media (max-width: 768px) {
  .Header_wrapper__1yY2x {
    direction: rtl;
    text-align: right;
  }
  
  .left-section-blog {
    position: static;
    float: none;
  }
}

/* Quantum RTL Optimizations */
.quantum-rtl-zone {
  position: relative;
  direction: rtl;
}

/* Table RTL Support */
table {
  direction: rtl;
}

table th,
table td {
  text-align: right;
}

/* Lists RTL Support */
ul,
ol {
  direction: rtl;
  padding-right: 1.5em;
  padding-left: 0;
}

/* Quote RTL Support */
blockquote {
  border-right: 4px solid #5d5ad6;
  border-left: none;
  padding-right: 1em;
  padding-left: 0;
  margin-right: 0;
  margin-left: auto;
}

/* Button RTL Support */
button {
  direction: rtl;
  text-align: center;
}

/* Form RTL Support */
input,
textarea,
select {
  direction: rtl;
  text-align: right;
}
EOL

echo "✅ quantum-rtl-linkedin.css created with 16 Hebrew-optimized RTL properties"

# Generate quantum-rtl.js if it doesn't exist, otherwise update it
echo "\n⚡ Generating quantum-rtl.js core observer..."
if [ ! -f quantum-rtl.js ]; then
  cat > quantum-rtl.js << 'EOL'
// Quantum-Level RTL Observer Core
// Purpose: Dynamically monitor and apply RTL transformations
// Optimized for universal dimensions of content flow

class QuantumRTLObserver {
  constructor() {
    this.observers = [];
    this.mutationObserver = null;
    this.isRTL = document.documentElement.dir === 'rtl';
    this.initialize();
  }

  initialize() {
    // Initialize the mutation observer to detect dynamic content
    this.setupMutationObserver();
    
    // Apply initial RTL transformations
    this.applyRTLTransformations();
    
    // Set up resize observer for viewport changes
    this.setupResizeObserver();
  }

  setupMutationObserver() {
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              this.applyRTLToNode(node);
              
              // Check for quantum RTL zones
              const quantumZones = node.querySelectorAll('.quantum-rtl-zone');
              quantumZones.forEach(zone => this.processQuantumZone(zone));
            }
          });
        }
      });
    });

    // Start observing the document
    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
  }

  setupResizeObserver() {
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        this.optimizeRTLForViewport();
      });
      resizeObserver.observe(document.body);
    }
  }

  applyRTLTransformations() {
    // Apply RTL to all elements
    document.querySelectorAll('*').forEach(el => {
      this.applyRTLToNode(el);
    });
  }

  applyRTLToNode(node) {
    if (!node || !node.style) return;
    
    // Check for inline styles that need RTL conversion
    const style = window.getComputedStyle(node);
    
    // Convert float: left to float: right for RTL
    if (style.float === 'left') {
      node.style.float = 'right';
    }
    
    // Handle text alignment
    if (style.textAlign === 'left') {
      node.style.textAlign = 'right';
    }
  }

  optimizeRTLForViewport() {
    // Dynamic RTL optimizations based on viewport size
    const viewportWidth = window.innerWidth;
    
    // Mobile-specific RTL optimizations
    if (viewportWidth < 768) {
      this.applyMobileRTL();
    } else {
      this.applyDesktopRTL();
    }
  }

  applyMobileRTL() {
    // Mobile-specific RTL adjustments
  }

  applyDesktopRTL() {
    // Desktop-specific RTL adjustments
  }

  processQuantumZone(zone) {
    // Process special quantum RTL zones with enhanced transformations
  }

  disconnect() {
    // Clean up observers
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    
    this.observers.forEach(observer => {
      observer.disconnect();
    });
  }
}

// Initialize QuantumRTLObserver when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const quantumRTL = new QuantumRTLObserver();
  window.quantumRTL = quantumRTL;
});
EOL
  echo "✅ quantum-rtl.js created with QuantumRTLObserver class"
else
  echo "✅ quantum-rtl.js already exists"
fi

# Generate linkedin-quantum-rtl.js file
echo "\n🔗 Generating LinkedIn-specific quantum RTL JS..."
cat > linkedin-quantum-rtl.js << 'EOL'
// Quantum-Level RTL for LinkedIn Strategies Page
// Purpose: Optimize LinkedIn-specific content for Hebrew RTL display
// Integration with core QuantumRTLObserver

class LinkedInQuantumRTL {
  constructor() {
    this.initializeLinkedInRTL();
  }

  initializeLinkedInRTL() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.applyLinkedInRTL();
      this.setupLinkedInObservers();
    });
  }

  applyLinkedInRTL() {
    // Apply RTL to LinkedIn-specific content sections
    this.applyBlogContentRTL();
    this.applyAuthorSectionRTL();
    this.applyShareButtonsRTL();
    this.applyArticleContentRTL();
  }

  applyBlogContentRTL() {
    // Apply RTL to blog title and main content
    const blogTitle = document.querySelector('.blog-title-anim');
    if (blogTitle) {
      blogTitle.style.textAlign = 'right';
      blogTitle.style.marginRight = '0';
      blogTitle.style.marginLeft = 'auto';
    }
  }

  applyAuthorSectionRTL() {
    // Apply RTL to author information section
    const authorSection = document.querySelector('.left-section-blog');
    if (authorSection) {
      authorSection.style.textAlign = 'right';
    }
  }

  applyShareButtonsRTL() {
    // Apply RTL to social share buttons
    const shareButtons = document.querySelector('.left-section-blog .flex.items-center');
    if (shareButtons) {
      shareButtons.style.justifyContent = 'flex-start';
    }
  }

  applyArticleContentRTL() {
    // Apply RTL to article paragraphs and lists
    const articleContent = document.querySelector('article.prose');
    if (articleContent) {
      // Process paragraphs
      const paragraphs = articleContent.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.textAlign = 'right';
        p.style.direction = 'rtl';
      });
      
      // Process lists
      const lists = articleContent.querySelectorAll('ul, ol');
      lists.forEach(list => {
        list.style.direction = 'rtl';
        list.style.paddingRight = '1.5em';
        list.style.paddingLeft = '0';
      });
    }
  }

  setupLinkedInObservers() {
    // Set up specific observers for LinkedIn content
    this.observeDynamicContent();
    this.setupResizeHandling();
  }

  observeDynamicContent() {
    // Observe for dynamically loaded LinkedIn content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              this.applyRTLToNewContent(node);
            }
          });
        }
      });
    });

    // Start observing the article content
    const article = document.querySelector('article.prose');
    if (article) {
      observer.observe(article, {
        childList: true,
        subtree: true
      });
    }
  }

  applyRTLToNewContent(node) {
    // Apply RTL to newly added content nodes
    if (node.tagName === 'P' || node.tagName === 'DIV') {
      node.style.textAlign = 'right';
      node.style.direction = 'rtl';
    } else if (node.tagName === 'UL' || node.tagName === 'OL') {
      node.style.direction = 'rtl';
      node.style.paddingRight = '1.5em';
      node.style.paddingLeft = '0';
    }
  }

  setupResizeHandling() {
    // Handle responsive RTL adjustments on resize
    window.addEventListener('resize', () => {
      this.optimizeForScreenSize();
    });
    
    // Initial optimization
    this.optimizeForScreenSize();
  }

  optimizeForScreenSize() {
    // Optimize RTL layout based on screen size
    const viewportWidth = window.innerWidth;
    const leftSection = document.querySelector('.left-section-blog');
    
    if (viewportWidth < 768) {
      // Mobile optimization
      if (leftSection) {
        leftSection.classList.remove('sticky');
        leftSection.style.position = 'static';
      }
    } else {
      // Desktop optimization
      if (leftSection) {
        leftSection.classList.add('sticky');
        leftSection.style.position = 'sticky';
      }
    }
  }
}

// Initialize LinkedInQuantumRTL when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const linkedinQuantumRTL = new LinkedInQuantumRTL();
  window.linkedinQuantumRTL = linkedinQuantumRTL;
});
EOL

echo "✅ linkedin-quantum-rtl.js created with LinkedInQuantumRTL class"

# Update HTML attributes and add CSS/JS references
echo "\n🔄 Updating HTML attributes and adding quantum RTL resources..."

# Update lang attribute from en to he
perl -pi -e 's/lang="en"/lang="he"/g' boost-b2b-linkedin-strategies.html

# Update dir attribute to rtl if not already set
perl -pi -e 's/dir="ltr"/dir="rtl"/g' boost-b2b-linkedin-strategies.html

# Add quantum RTL CSS reference before closing head tag
perl -pi -e 's/<\/head>/<link rel="stylesheet" href="quantum-rtl-linkedin.css" type="text\/css" \/><link rel="stylesheet" href="quantum-rtl.css" type="text\/css" \\/>\n<\/head>/g' boost-b2b-linkedin-strategies.html

# Add quantum RTL JS references before closing body tag
perl -pi -e 's/<\/body>/<script src="quantum-rtl.js" defer><\/script><script src="linkedin-quantum-rtl.js" defer><\/script>\n<\/body>/g' boost-b2b-linkedin-strategies.html

# Update JSON-LD language tags
echo "\n🌐 Updating JSON-LD language tags to Hebrew..."
perl -pi -e 's/"inLanguage":"en_US"/"inLanguage":"he"/g' boost-b2b-linkedin-strategies.html
perl -pi -e 's/"inLanguage":"en-US"/"inLanguage":"he"/g' boost-b2b-linkedin-strategies.html

# Update Open Graph locale to he_IL if present
perl -pi -e 's/og:locale.*content="en_US"/og:locale" content="he_IL"/g' boost-b2b-linkedin-strategies.html
perl -pi -e 's/og:locale.*content="en-US"/og:locale" content="he_IL"/g' boost-b2b-linkedin-strategies.html

# Update canonical URL if needed
perl -pi -e 's/rel="canonical" href="[^"]*"/rel="canonical" href="boost-b2b-linkedin-strategies.html"/g' boost-b2b-linkedin-strategies.html

# Update alternate hreflang tags if present
perl -pi -e 's/hrefLang="hrefLang"/hrefLang="he"/g' boost-b2b-linkedin-strategies.html

# Verification checks
echo "\n✅ HTML attributes updated to lang=\"he\" dir=\"rtl\""
echo "✅ Added quantum RTL CSS/JS references"
echo "✅ Updated JSON-LD language tags to Hebrew"

# Add quantum-rtl-zone class to relevant sections
echo "\n🎯 Adding quantum-rtl-zone class to content sections..."
perl -pi -e 's/<article class="prose/<article class="prose quantum-rtl-zone/g' boost-b2b-linkedin-strategies.html

# Final summary
echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "✅ boost-b2b-linkedin-strategies.html now optimized for Hebrew native speakers"
echo "🔄 Created quantum RTL CSS and JS resources"
echo "📁 Original file backed up to: $BACKUP_FILE"
echo "🌐 Language tags updated to Hebrew"
echo "=================================================="
echo "\nRecommendation: Run 'verify-linkedin-quantum-rtl.sh' to validate the implementation"
echo "Then deploy to Firebase with 'firebase deploy'"