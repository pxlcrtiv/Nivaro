#!/bin/bash

# Quantum-level RTL Implementation for DMTCA Digital Branding Case Study
# This script transforms the page to Right-to-Left layout optimized for Hebrew

set -e

echo "Initiating quantum RTL transformation for DMTCA case study page..."

# Create timestamped backup
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
cp dmtca-digital-branding-case-study.html "dmtca-digital-branding-case-study.html.bak.$TIMESTAMP"
echo "✓ Created backup: dmtca-digital-branding-case-study.html.bak.$TIMESTAMP"

# Generate quantum RTL CSS specific to DMTCA case study
cat > quantum-rtl-dmtca.css << 'EOL'
/* Quantum RTL Styles for DMTCA Digital Branding Case Study */
/* Optimized for Hebrew language and right-to-left reading patterns */

/* Core quantum-rtl-zone styling */
.quantum-rtl-zone {
  direction: rtl;
  text-align: right;
}

/* Typography adjustments */
.quantum-rtl-zone h1,
.quantum-rtl-zone h2,
.quantum-rtl-zone h3,
.quantum-rtl-zone h4,
.quantum-rtl-zone h5,
.quantum-rtl-zone h6 {
  direction: rtl;
  text-align: right;
}

/* Navigation adjustments */
.quantum-rtl-zone .Header_wrapper__1yY2x {
  flex-direction: row-reverse;
}

/* Layout adjustments */
.quantum-rtl-zone .flex {
  flex-direction: row-reverse;
}

/* Text alignment */
.quantum-rtl-zone p,
.quantum-rtl-zone a,
.quantum-rtl-zone span {
  text-align: right;
  direction: rtl;
}

/* Margin and padding corrections */
.quantum-rtl-zone .ml-4,
.quantum-rtl-zone .ml-8 {
  margin-right: inherit;
  margin-left: 0;
}

.quantum-rtl-zone .mr-4,
.quantum-rtl-zone .mr-8 {
  margin-left: inherit;
  margin-right: 0;
}

.quantum-rtl-zone .pl-4,
.quantum-rtl-zone .pl-8 {
  padding-right: inherit;
  padding-left: 0;
}

.quantum-rtl-zone .pr-4,
.quantum-rtl-zone .pr-8 {
  padding-left: inherit;
  padding-right: 0;
}

/* Arrow and directional icon adjustments */
.quantum-rtl-zone img[src*="arrow-right"] {
  transform: rotate(180deg);
}

/* Client section adjustments */
#client-section .flex {
  flex-direction: row-reverse;
}

/* Hero section adjustments */
#hero .flex {
  flex-direction: row-reverse;
}

/* Ensure proper text flow */
.quantum-rtl-zone blockquote {
  border-left: none;
  border-right: 4px solid #5d5ad6;
  padding-right: 1rem;
  padding-left: 0;
}

/* Adjust lists for RTL */
.quantum-rtl-zone ul,
.quantum-rtl-zone ol {
  padding-right: 1.5rem;
  padding-left: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .quantum-rtl-zone .flex {
    flex-direction: column;
  }
}

/* Quantum-level RTL animations and transitions */
@keyframes quantum-rtl-fadeIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.quantum-rtl-zone {
  animation: quantum-rtl-fadeIn 0.6s ease-out;
}
EOL

echo "✓ Generated quantum-rtl-dmtca.css with 21+ Hebrew-optimized RTL properties"

# Generate page-specific JavaScript for quantum RTL functionality
cat > dmtca-digital-branding-quantum-rtl.js << 'EOL'
/**
 * DMTCA Digital Branding Case Study Quantum RTL Implementation
 * Optimized for Hebrew language and right-to-left reading patterns
 */

class DMTCAQuantumRTL {
  constructor() {
    this.quantumObserver = null;
    this.rtlZones = [];
    this.initializeQuantumRTL();
  }

  /**
   * Initialize quantum RTL functionality
   */
  initializeQuantumRTL() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.identifyRTLZones();
      this.applyQuantumObservations();
      this.enhanceElementInteractions();
      console.log('Quantum RTL initialized for DMTCA case study page');
    });
  }

  /**
   * Identify and collect all quantum RTL zones on the page
   */
  identifyRTLZones() {
    this.rtlZones = document.querySelectorAll('.quantum-rtl-zone');
    console.log(`Identified ${this.rtlZones.length} quantum RTL zones`);
  }

  /**
   * Apply quantum-level observations to RTL zones
   */
  applyQuantumObservations() {
    // Create Intersection Observer for quantum-level element observation
    this.quantumObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activateQuantumRTLZone(entry.target);
        } else {
          this.deactivateQuantumRTLZone(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all RTL zones
    this.rtlZones.forEach(zone => {
      this.quantumObserver.observe(zone);
    });
  }

  /**
   * Activate quantum RTL properties for a zone when it enters viewport
   */
  activateQuantumRTLZone(zone) {
    zone.style.transition = 'all 0.5s ease';
    zone.style.opacity = '1';
    zone.style.transform = 'translateX(0)';
  }

  /**
   * Deactivate quantum RTL properties for a zone when it leaves viewport
   */
  deactivateQuantumRTLZone(zone) {
    zone.style.transition = 'all 0.3s ease';
    zone.style.opacity = '0.8';
  }

  /**
   * Enhance element interactions for RTL experience
   */
  enhanceElementInteractions() {
    // Enhance links for RTL
    const links = document.querySelectorAll('.quantum-rtl-zone a');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.2s ease';
        link.style.transform = 'translateX(-3px)';
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
      });
    });

    // Adjust navigation for RTL
    this.adjustNavigationForRTL();
  }

  /**
   * Adjust navigation components for RTL layout
   */
  adjustNavigationForRTL() {
    // Ensure menu items open in RTL direction
    const menuButton = document.querySelector('#menuButton');
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        const menuLayer = document.querySelector('.Header_menuLayer__sDzNa');
        if (menuLayer) {
          menuLayer.style.transformOrigin = 'top right';
        }
      });
    }
  }

  /**
   * Clean up quantum RTL resources
   */
  destroy() {
    if (this.quantumObserver) {
      this.quantumObserver.disconnect();
    }
    console.log('Quantum RTL resources cleaned up');
  }
}

// Initialize DMTCA Quantum RTL when the page loads
const dmtcaQuantumRTL = new DMTCAQuantumRTL();

// Expose to window for debugging if needed
window.DMTCAQuantumRTL = dmtcaQuantumRTL;
EOL

echo "✓ Generated dmtca-digital-branding-quantum-rtl.js with DMTCAQuantumRTL class"

# Update HTML file with RTL attributes, resource references, and quantum RTL zones
# Update HTML tag attributes
perl -i -pe 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/' dmtca-digital-branding-case-study.html
echo "✓ Updated HTML attributes to lang='he' dir='rtl'"

# Add CSS and JavaScript references
# Find the head closing tag and insert before it
# Use sed with proper escaping
# Add CSS reference
cp dmtca-digital-branding-case-study.html dmtca-temp.html
sed -i '' '/<\/head>/i\
<link rel="stylesheet" href="quantum-rtl.css">\
<link rel="stylesheet" href="quantum-rtl-dmtca.css">' dmtca-temp.html
cp dmtca-temp.html dmtca-digital-branding-case-study.html
rm dmtca-temp.html
echo "✓ Added quantum RTL CSS references"

# Add JavaScript reference before closing body tag
cp dmtca-digital-branding-case-study.html dmtca-temp.html
sed -i '' '/<\/body>/i\
<script src="quantum-rtl.js"></script>\
<script src="dmtca-digital-branding-quantum-rtl.js"></script>' dmtca-temp.html
cp dmtca-temp.html dmtca-digital-branding-case-study.html
rm dmtca-temp.html
echo "✓ Added quantum RTL JavaScript references"

# Update JSON-LD language tags
perl -i -pe 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' dmtca-digital-branding-case-study.html
perl -i -pe 's/"inLanguage":"en-US"/"inLanguage":"he-IL"/g' dmtca-digital-branding-case-study.html
echo "✓ Updated JSON-LD language tags to Hebrew (he_IL, he-IL)"

# Update Open Graph locale
perl -i -pe 's/<meta property="og:locale" content="en_US"/<meta property="og:locale" content="he_IL"/' dmtca-digital-branding-case-study.html
echo "✓ Updated Open Graph locale to he_IL"

# Apply quantum-rtl-zone class to main content sections
# Find main content section and add quantum-rtl-zone class
cp dmtca-digital-branding-case-study.html dmtca-temp.html
sed -i '' 's/<main style="cursor:none">/<main style="cursor:none" class="quantum-rtl-zone">/' dmtca-temp.html
cp dmtca-temp.html dmtca-digital-branding-case-study.html
rm dmtca-temp.html

echo "✓ Applied quantum-rtl-zone class to main content section"

echo "Quantum RTL transformation complete for DMTCA case study page!"
echo "Next steps:"
echo "1. Run './verify-dmtca-digital-branding-quantum-rtl.sh' to validate the implementation"
echo "2. Deploy to Firebase: firebase deploy --only hosting:dmtca-digital-branding-case-study.html"
echo "3. Verify live at: https://nivaro-51.web.app/dmtca-digital-branding-case-study.html"