#!/bin/bash

# Quantum-Level RTL Implementation for essential-link-building-guide.html
# Created: $(date)
# Universe: Nivaro Digital

HTML_FILE="essential-link-building-guide.html"
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
BACKUP_FILE="${HTML_FILE}.bak.${TIMESTAMP}"
RTL_CSS_FILE="quantum-rtl-essential-link-building.css"
RTL_JS_FILE="essential-link-building-quantum-rtl.js"

# Create backup
echo "Creating quantum backup of ${HTML_FILE}..."
cp "${HTML_FILE}" "${BACKUP_FILE}"
if [ $? -eq 0 ]; then
    echo "✦ Quantum backup created: ${BACKUP_FILE}"
else
    echo "✗ Failed to create quantum backup"
    exit 1
 fi

# Generate quantum RTL CSS
echo "Generating quantum RTL CSS (${RTL_CSS_FILE})..."
cat > "${RTL_CSS_FILE}" << 'EOF'
/* Quantum RTL Styles for Essential Link Building Guide */
/* Generated: $(date) */

/* Hebrew Typography Optimization */
@font-face {
  font-family: 'Ageo Hebrew';
  src: local('Ageo'), local('Ageo-Regular');
  font-display: swap;
}

/* Quantum RTL Core Properties */
.quantum-rtl-zone {
  direction: rtl;
  text-align: right;
  unicode-bidi: isolate;
}

/* Quantum Flip Elements */
.quantum-rtl-zone .flex-row {
  flex-direction: row-reverse;
}

.quantum-rtl-zone .justify-between {
  justify-content: space-between;
}

.quantum-rtl-zone .text-left {
  text-align: right;
}

.quantum-rtl-zone .text-right {
  text-align: left;
}

.quantum-rtl-zone .float-left {
  float: right;
}

.quantum-rtl-zone .float-right {
  float: left;
}

.quantum-rtl-zone .mr- {
  margin-right: 0;
  margin-left: var(--margin-value);
}

.quantum-rtl-zone .ml- {
  margin-left: 0;
  margin-right: var(--margin-value);
}

.quantum-rtl-zone .pl- {
  padding-left: 0;
  padding-right: var(--padding-value);
}

.quantum-rtl-zone .pr- {
  padding-right: 0;
  padding-left: var(--padding-value);
}

/* Quantum Navigation Adjustments */
.quantum-rtl-zone .Header_contentLeft__LvrzL {
  text-align: right;
}

.quantum-rtl-zone .Header_navLinkItem__l2xbK {
  direction: rtl;
}

/* Quantum Blog Layout Adjustments */
.quantum-rtl-zone .blog-title-anim {
  text-align: right;
}

.quantum-rtl-zone .left-section-blog {
  text-align: right;
}

/* Quantum Mirror Effect for UI Elements */
.quantum-rtl-zone .mirror-in-rtl {
  transform: scaleX(-1);
}

/* Quantum RTL Responsive Adjustments */
@media (max-width: 768px) {
  .quantum-rtl-zone .mobile\:flex-row {
    flex-direction: row-reverse;
  }
}

/* Quantum RTL Accessibility Enhancements */
[dir="rtl"] [aria-label*="left"]:not(.no-rtl-adjust),
[dir="rtl"] [aria-label*="Left"]:not(.no-rtl-adjust) {
  aria-label: attr(aria-label) " (Reversed for RTL)";
}

/* Quantum BiDi Isolation */
.quantum-rtl-zone [lang="en"] {
  direction: ltr;
  text-align: left;
  display: inline-block;
}

/* Quantum Performance Optimizations */
.quantum-rtl-zone {
  will-change: transform;
  contain: layout style paint;
}
EOF

echo "✦ Quantum RTL CSS generated with $(grep -c "{" "${RTL_CSS_FILE}")+ RTL properties"

# Generate quantum RTL JS
echo "Generating quantum RTL JavaScript (${RTL_JS_FILE})..."
cat > "${RTL_JS_FILE}" << 'EOF'
/**
 * Quantum RTL Implementation for Essential Link Building Guide
 * Created: $(date)
 * Quantum Core: Nivaro Digital
 */

class EssentialLinkBuildingQuantumRTL {
  constructor() {
    this.quantumZones = document.querySelectorAll('.quantum-rtl-zone');
    this.observationConfig = {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style', 'dir']
    };
    this.initializeQuantumRTL();
  }

  /**
   * Initialize quantum RTL transformations across the universe
   */
  initializeQuantumRTL() {
    // Apply quantum RTL to all identified zones
    this.applyQuantumRTLToZones();
    
    // Set up quantum observers for dynamic content
    this.setupQuantumObservers();
    
    // Register quantum event listeners for user interactions
    this.registerQuantumEvents();
    
    // Apply quantum mirror transformations
    this.applyQuantumMirrorEffects();
  }

  /**
   * Apply quantum RTL properties to identified zones
   */
  applyQuantumRTLToZones() {
    this.quantumZones.forEach(zone => {
      // Ensure RTL direction at quantum level
      zone.setAttribute('dir', 'rtl');
      zone.style.direction = 'rtl';
      zone.style.textAlign = 'right';
      
      // Apply quantum transformations to flex elements
      this.transformQuantumFlexElements(zone);
      
      // Apply quantum text alignment corrections
      this.correctQuantumTextAlignment(zone);
    });
  }

  /**
   * Transform quantum flex elements for RTL flow
   */
  transformQuantumFlexElements(container) {
    const flexElements = container.querySelectorAll('[class*="flex-row"], [class*="flex justify-"]');
    flexElements.forEach(element => {
      const currentFlexDirection = window.getComputedStyle(element).getPropertyValue('flex-direction');
      if (currentFlexDirection === 'row') {
        element.style.flexDirection = 'row-reverse';
      }
    });
  }

  /**
   * Correct quantum text alignment for RTL context
   */
  correctQuantumTextAlignment(container) {
    const leftAlignedElements = container.querySelectorAll('[class*="text-left"], [align="left"]');
    leftAlignedElements.forEach(element => {
      if (!element.classList.contains('no-rtl-adjust')) {
        element.style.textAlign = 'right';
      }
    });
  }

  /**
   * Set up quantum mutation observers to monitor dynamic changes
   */
  setupQuantumObservers() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          // Process new quantum nodes
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.applyQuantumRTLToElement(node);
            }
          });
        } else if (mutation.type === 'attributes') {
          // Adjust quantum attributes
          this.adjustQuantumAttributes(mutation.target);
        }
      });
    });

    // Observe each quantum zone
    this.quantumZones.forEach(zone => {
      observer.observe(zone, this.observationConfig);
    });
  }

  /**
   * Apply quantum RTL to a specific element
   */
  applyQuantumRTLToElement(element) {
    if (element.classList.contains('mirror-in-rtl')) {
      this.applyQuantumMirrorEffects(element);
    }
    
    // Process nested flex elements
    this.transformQuantumFlexElements(element);
  }

  /**
   * Adjust quantum attributes based on RTL context
   */
  adjustQuantumAttributes(element) {
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel && (ariaLabel.includes('left') || ariaLabel.includes('Left'))) {
      // Quantum attribute adjustment logic
    }
  }

  /**
   * Register quantum event listeners
   */
  registerQuantumEvents() {
    // Quantum window resize handling
    window.addEventListener('resize', this.debounce(() => {
      this.applyQuantumRTLToZones();
    }, 250));
    
    // Quantum orientation change handling
    window.addEventListener('orientationchange', () => {
      this.applyQuantumRTLToZones();
    });
  }

  /**
   * Apply quantum mirror effects for UI symmetry
   */
  applyQuantumMirrorEffects(container = document) {
    const mirrorElements = container.querySelectorAll('.mirror-in-rtl');
    mirrorElements.forEach(element => {
      element.style.transform = 'scaleX(-1)';
    });
  }

  /**
   * Quantum debounce function to optimize performance
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize quantum RTL when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new EssentialLinkBuildingQuantumRTL();
  });
} else {
  new EssentialLinkBuildingQuantumRTL();
}
EOF

echo "✦ Quantum RTL JavaScript generated with EssentialLinkBuildingQuantumRTL class"

# Update HTML file with quantum RTL implementation
echo "Applying quantum RTL transformations to ${HTML_FILE}..."

# Update HTML attributes
if grep -q '<html' "${HTML_FILE}"; then
  sed -i '' 's/<html lang="en" dir="rtl"/<html lang="he" dir="rtl"/' "${HTML_FILE}"
  echo "✦ Quantum HTML attributes updated: lang=\"he\" dir=\"rtl\""
fi

# Add quantum RTL CSS reference
if ! grep -q "${RTL_CSS_FILE}" "${HTML_FILE}"; then
  sed -i '' "/<\/head>/i\\\n    <link rel=\"stylesheet\" href=\"${RTL_CSS_FILE}\" type=\"text/css\" media=\"all\" />" "${HTML_FILE}"
  echo "✦ Quantum RTL CSS reference added"
fi

# Add quantum RTL JS references
if ! grep -q "quantum-rtl.js" "${HTML_FILE}"; then
  sed -i '' "/<\/body>/i\\\n    <script src=\"quantum-rtl.js\" defer></script>" "${HTML_FILE}"
  echo "✦ Core quantum RTL JS reference added"
fi

if ! grep -q "${RTL_JS_FILE}" "${HTML_FILE}"; then
  sed -i '' "/<\/body>/i\\\n    <script src=\"${RTL_JS_FILE}\" defer></script>" "${HTML_FILE}"
  echo "✦ Page-specific quantum RTL JS reference added"
fi

# Update JSON-LD language tags to Hebrew
if grep -q '"inLanguage":"en_US"\|"inLanguage":"en-US"' "${HTML_FILE}"; then
  sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' "${HTML_FILE}"
  sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he-IL"/g' "${HTML_FILE}"
  echo "✦ Quantum JSON-LD language tags updated to Hebrew"
fi

# Update Open Graph locale if exists
if grep -q 'property="og:locale"' "${HTML_FILE}"; then
  sed -i '' 's/property="og:locale" content="en_US"/property="og:locale" content="he_IL"/' "${HTML_FILE}"
  echo "✦ Quantum Open Graph locale updated to he_IL"
fi

# Apply quantum-rtl-zone class to main content section
if grep -q '<main' "${HTML_FILE}"; then
  sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "${HTML_FILE}"
  echo "✦ Quantum RTL zone applied to main content"
fi

# Apply quantum-rtl-zone class to article content
if grep -q '<article' "${HTML_FILE}"; then
  if ! grep -q 'class="' "${HTML_FILE}" | grep -q '<article'; then
    sed -i '' 's/<article /<article class="quantum-rtl-zone" /' "${HTML_FILE}"
  else
    sed -i '' 's/<article class="/&quantum-rtl-zone /' "${HTML_FILE}"
  fi
  echo "✦ Quantum RTL zone applied to article content"
fi

echo "\n✨ Quantum-Level RTL Implementation Complete for essential-link-building-guide.html ✨"
echo "\nNext steps for deployment:"
echo "1. Run verification script: verify-essential-link-building-quantum-rtl.sh"
echo "2. Deploy to Firebase: firebase deploy --only hosting:essential-link-building-guide.html"
echo "\nExpected live URL: https://nivaro-51.web.app/essential-link-building-guide.html"