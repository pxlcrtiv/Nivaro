#!/bin/bash

# Quantum-level RTL implementation for delightful-digital-design-guide.html
# Created for native Hebrew speakers

echo "[Quantum RTL] Starting implementation for delightful-digital-design-guide.html"

# Create backup with timestamp
TIMESTAMP=$(date +%Y%m%d%H%M%S)
cp delightful-digital-design-guide.html delightful-digital-design-guide.html.bak.$TIMESTAMP
echo "[Quantum RTL] Created backup: delightful-digital-design-guide.html.bak.$TIMESTAMP"

# Generate quantum RTL CSS file with Hebrew-optimized styles
echo "[Quantum RTL] Generating quantum-rtl-delightful-design.css"
cat > quantum-rtl-delightful-design.css << 'EOL'
/* Quantum RTL CSS for Delightful Digital Design Guide */
:root {
  --hebrew-font-family: 'Arial Hebrew', 'Times New Roman', serif;
  --rtl-spacing: 1rem;
}

/* Base RTL styles */
[dir="rtl"] {
  font-family: var(--hebrew-font-family);
  text-align: right;
}

/* Fix direction for code blocks and preformatted text */
[dir="rtl"] pre,
[dir="rtl"] code {
  text-align: left;
  direction: ltr;
}

/* Quantum RTL zone styles */
.quantum-rtl-zone {
  transition: all 0.3s ease;
}

/* Header adjustments */
[dir="rtl"] .header-inner-container {
  flex-direction: row-reverse;
}

/* Navigation adjustments */
[dir="rtl"] .Header_contentLeft__LvrzL {
  text-align: right;
}

/* Main content adjustments */
[dir="rtl"] .prose {
  text-align: right;
}

/* Left section adjustments */
[dir="rtl"] .left-section-blog {
  text-align: right;
}

/* Typography adjustments */
[dir="rtl"] h1,
[dir="rtl"] h2,
[dir="rtl"] h3,
[dir="rtl"] h4,
[dir="rtl"] h5,
[dir="rtl"] h6 {
  text-align: right;
}

/* Image alignment */
[dir="rtl"] img {
  margin-right: 0;
  margin-left: auto;
}

/* List styles */
[dir="rtl"] ul,
[dir="rtl"] ol {
  padding-right: 1.5rem;
  padding-left: 0;
}

/* Button alignment */
[dir="rtl"] .flex.items-center.justify-start {
  justify-content: flex-end;
}

/* Social icons alignment */
[dir="rtl"] .Header_socialItems__GV7GF {
  flex-direction: row-reverse;
}

/* Menu button adjustment */
[dir="rtl"] .Header_menuBtn__kYp93 {
  margin-right: 0;
  margin-left: 1rem;
}

/* Logo positioning */
[dir="rtl"] .logo {
  margin-right: 0;
  margin-left: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  [dir="rtl"] .header-inner-container {
    padding-right: var(--rtl-spacing);
    padding-left: var(--rtl-spacing);
  }
}
EOL

# Generate quantum-rtl.js if it doesn't exist
echo "[Quantum RTL] Checking for quantum-rtl.js"
if [ ! -f "quantum-rtl.js" ]; then
  echo "[Quantum RTL] Generating quantum-rtl.js"
  cat > quantum-rtl.js << 'EOL'
// Quantum RTL Observer - Core functionality
class QuantumRTLObserver {
  constructor() {
    this.observers = [];
    this.isRTL = document.documentElement.dir === 'rtl';
  }

  observe(element, callback) {
    if (element && callback) {
      this.observers.push({ element, callback });
      // Initial callback
      callback(this.isRTL);
    }
  }

  unobserve(element) {
    this.observers = this.observers.filter(observer => observer.element !== element);
  }

  disconnect() {
    this.observers = [];
  }

  updateRTLState() {
    const newRTLState = document.documentElement.dir === 'rtl';
    if (newRTLState !== this.isRTL) {
      this.isRTL = newRTLState;
      this.notifyObservers();
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      if (document.contains(observer.element)) {
        observer.callback(this.isRTL);
      }
    });
  }
}

// Initialize QuantumRTLObserver when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.quantumRTL = new QuantumRTLObserver();
  console.log('[Quantum RTL] Initialized observer');
});
EOL
fi

# Generate page-specific JavaScript file
echo "[Quantum RTL] Generating delightful-design-quantum-rtl.js"
cat > delightful-design-quantum-rtl.js << 'EOL'
// Delightful Design Quantum RTL Implementation
class DelightfulDesignQuantumRTL {
  constructor() {
    this.rtlObserver = null;
    this.quantumZones = [];
  }

  initialize() {
    // Wait for QuantumRTLObserver to be available
    if (window.quantumRTL) {
      this.rtlObserver = window.quantumRTL;
      this.registerQuantumZones();
      this.setupObservers();
      console.log('[Quantum RTL] Delightful Design implementation initialized');
    } else {
      setTimeout(() => this.initialize(), 100);
    }
  }

  registerQuantumZones() {
    this.quantumZones = document.querySelectorAll('.quantum-rtl-zone');
  }

  setupObservers() {
    // Observe main content area
    const mainContent = document.querySelector('main');
    if (mainContent) {
      this.rtlObserver.observe(mainContent, this.handleRTLChange.bind(this));
    }

    // Observe article content
    const articleContent = document.querySelector('article');
    if (articleContent) {
      this.rtlObserver.observe(articleContent, this.handleRTLChange.bind(this));
    }
  }

  handleRTLChange(isRTL) {
    // Apply quantum-level RTL transformations
    this.applyDirectionSpecificStyles(isRTL);
    this.updateElementPositions(isRTL);
  }

  applyDirectionSpecificStyles(isRTL) {
    const styleClass = isRTL ? 'quantum-rtl-active' : 'quantum-ltr-active';
    const oppositeClass = isRTL ? 'quantum-ltr-active' : 'quantum-rtl-active';
    
    document.body.classList.remove(oppositeClass);
    document.body.classList.add(styleClass);
  }

  updateElementPositions(isRTL) {
    // Adjust positions of specific elements based on direction
    const leftSection = document.querySelector('.left-section-blog');
    if (leftSection) {
      leftSection.style.textAlign = isRTL ? 'right' : 'left';
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const delightfulDesignRTL = new DelightfulDesignQuantumRTL();
  delightfulDesignRTL.initialize();
});
EOL

# Update HTML file with RTL attributes and resource references
echo "[Quantum RTL] Updating HTML file with RTL attributes and references"
sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/' delightful-digital-design-guide.html

# Add CSS reference before closing head tag
sed -i '' '/<\/head>/i <link rel="stylesheet" href="quantum-rtl-delightful-design.css" type="text/css" />' delightful-digital-design-guide.html

# Add JavaScript references before closing body tag
sed -i '' '/<\/body>/i <script src="quantum-rtl.js" defer></script>
<script src="delightful-design-quantum-rtl.js" defer></script>' delightful-digital-design-guide.html

# Update JSON-LD language tags
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' delightful-digital-design-guide.html
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he_IL"/g' delightful-digital-design-guide.html

# Update Open Graph locale if present
sed -i '' 's/<meta property="og:locale" content="en_US"/<meta property="og:locale" content="he_IL"/g' delightful-digital-design-guide.html

# Add quantum-rtl-zone class to main content sections
sed -i '' 's/<main style="cursor:none">/<main style="cursor:none" class="quantum-rtl-zone">/' delightful-digital-design-guide.html
sed -i '' 's/<article class="prose mx-auto p-5 w-screen px-\[7.5%\] tablet:px-\[5%\] mobile:px-\[5%\]">/<article class="prose mx-auto p-5 w-screen px-\[7.5%\] tablet:px-\[5%\] mobile:px-\[5%\] quantum-rtl-zone">/' delightful-digital-design-guide.html

# Add quantum-rtl-zone to hero section if present
sed -i '' 's/class="text-\[3vw\] tablet:text-\[4.8vw\] font-heading font-medium py-\[2vw\] pt-\[10vw\] w-\[70%\] blog-title-anim tablet:w-full tablet:pt-\[22vw\] mobile:pt-\[30vw\] mobile:text-\[5.8vw\]">/class="text-\[3vw\] tablet:text-\[4.8vw\] font-heading font-medium py-\[2vw\] pt-\[10vw\] w-\[70%\] blog-title-anim tablet:w-full tablet:pt-\[22vw\] mobile:pt-\[30vw\] mobile:text-\[5.8vw\] quantum-rtl-zone">/' delightful-digital-design-guide.html

# Add quantum-rtl-zone to all sections
sed -i '' 's/<section>/<section class="quantum-rtl-zone">/g' delightful-digital-design-guide.html

# Add quantum-rtl-zone to left sidebar
if grep -q '<div class="w-\[30%\] flex h-fit flex-col gap-\[0.7vw\] mt-\[4vw\] sticky top-\[10%\] left-section-blog font-medium font-heading uppercase tablet:space-y-2 tablet:static tablet:w-full">' delightful-digital-design-guide.html; then
  sed -i '' 's/<div class="w-\[30%\] flex h-fit flex-col gap-\[0.7vw\] mt-\[4vw\] sticky top-\[10%\] left-section-blog font-medium font-heading uppercase tablet:space-y-2 tablet:static tablet:w-full">/<div class="w-\[30%\] flex h-fit flex-col gap-\[0.7vw\] mt-\[4vw\] sticky top-\[10%\] left-section-blog font-medium font-heading uppercase tablet:space-y-2 tablet:static tablet:w-full quantum-rtl-zone">/' delightful-digital-design-guide.html
fi

echo "[Quantum RTL] Implementation completed!"
echo "[Quantum RTL] Next steps:"
echo "1. Run 'verify-delightful-design-quantum-rtl.sh' to validate the implementation"
echo "2. Deploy using Firebase after verification"