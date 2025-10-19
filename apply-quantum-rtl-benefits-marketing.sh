#!/bin/bash

# Quantum-Level RTL Implementation Script for benefits-of-organic-digital-marketing.html
set -e

echo "=== Quantum-Level RTL Implementation for benefits-of-organic-digital-marketing.html ==="

# Create timestamp for backups
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Create backup of the original file
echo "Creating backup..."
cp benefits-of-organic-digital-marketing.html benefits-of-organic-digital-marketing.html.bak.$TIMESTAMP

# Generate quantum RTL CSS file with marketing-specific optimizations
echo "Generating quantum-rtl-marketing.css with Hebrew-optimized rules..."
cat > quantum-rtl-marketing.css << 'EOF'
/* Quantum-Level RTL CSS for Hebrew Marketing Interface */
:root {
    --text-align: right;
    --direction: rtl;
}

body {
    direction: rtl;
    text-align: right;
}

header, nav, main, article, footer {
    direction: rtl;
    text-align: right;
}

.flex-row {
    flex-direction: row-reverse;
}

.left-section-blog {
    text-align: right;
}

.right-section-blog {
    text-align: right;
}

/* Marketing-specific RTL optimizations */
.prose {
    direction: rtl;
    text-align: right;
}

.blog-title-anim {
    text-align: right;
    direction: rtl;
}

/* Quantum-level optimizations */
.quantum-rtl-optimized {
    -webkit-font-smoothing: antialiased;
}
EOF

# Generate quantum RTL JS file
echo "Generating quantum-rtl.js..."
cat > quantum-rtl.js << 'EOF'
// Quantum-Level RTL JavaScript
class QuantumRTLObserver {
    constructor() {
        this.initialize();
    }

    initialize() {
        document.addEventListener('DOMContentLoaded', () => {
            this.applyRTL();
        });
    }

    applyRTL() {
        const elements = document.querySelectorAll('header, nav, main, article, footer');
        elements.forEach(el => {
            el.setAttribute('dir', 'rtl');
        });
    }
}

new QuantumRTLObserver();
EOF

# Generate marketing-specific quantum RTL JS file
echo "Generating marketing-quantum-rtl.js..."
cat > marketing-quantum-rtl.js << 'EOF'
// Marketing-Specific Quantum RTL JavaScript
class MarketingQuantumRTL extends QuantumRTLObserver {
    constructor() {
        super();
    }

    applyRTL() {
        super.applyRTL();
        // Marketing-specific RTL optimizations
        const authorSection = document.querySelector('.left-section-blog');
        if (authorSection) {
            authorSection.style.textAlign = 'right';
        }
        
        // Optimize marketing content for Hebrew reading flow
        const marketingContent = document.querySelector('.prose');
        if (marketingContent) {
            marketingContent.style.direction = 'rtl';
            marketingContent.style.textAlign = 'right';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MarketingQuantumRTL();
});
EOF

# Update HTML attributes to Hebrew RTL
echo "Updating HTML attributes for Hebrew RTL..."
sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/g' benefits-of-organic-digital-marketing.html

# Add quantum RTL CSS and JS references to the head section
echo "Adding quantum RTL CSS and JS references..."
sed -i '' '/<\/head>/i\
    <link rel="stylesheet" href="quantum-rtl-marketing.css">
' benefits-of-organic-digital-marketing.html
sed -i '' '/<\/head>/i\
    <script src="quantum-rtl.js"></script>
' benefits-of-organic-digital-marketing.html
sed -i '' '/<\/head>/i\
    <script src="marketing-quantum-rtl.js"></script>
' benefits-of-organic-digital-marketing.html

# Update JSON-LD language tags to Hebrew
echo "Updating JSON-LD language tags to Hebrew..."
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he"/g' benefits-of-organic-digital-marketing.html
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he"/g' benefits-of-organic-digital-marketing.html

# Update canonical URL to local path
echo "Updating canonical URL to local path..."
sed -i '' 's|https://wearenivaro.com/benefits-of-organic-digital-marketing|benefits-of-organic-digital-marketing.html|g' benefits-of-organic-digital-marketing.html

# Verification
echo "\n=== Verification ==="

# Verify HTML attributes
HTML_ATTR_CHECK=$(grep -c '<html lang="he" dir="rtl">' benefits-of-organic-digital-marketing.html)
if [ $HTML_ATTR_CHECK -gt 0 ]; then
    echo "✓ HTML attributes set correctly: lang=\"he\" dir=\"rtl\""
else
    echo "✗ HTML attributes not set correctly"
fi

# Verify CSS reference
CSS_REF_CHECK=$(grep -c 'quantum-rtl-marketing.css' benefits-of-organic-digital-marketing.html)
if [ $CSS_REF_CHECK -gt 0 ]; then
    echo "✓ quantum-rtl-marketing.css reference added"
else
    echo "✗ quantum-rtl-marketing.css reference not added"
fi

# Verify JS references
JS_REF_CHECK=$(grep -c 'quantum-rtl.js' benefits-of-organic-digital-marketing.html)
if [ $JS_REF_CHECK -gt 0 ]; then
    echo "✓ quantum-rtl.js reference added"
else
    echo "✗ quantum-rtl.js reference not added"
fi

MKTG_JS_REF_CHECK=$(grep -c 'marketing-quantum-rtl.js' benefits-of-organic-digital-marketing.html)
if [ $MKTG_JS_REF_CHECK -gt 0 ]; then
    echo "✓ marketing-quantum-rtl.js reference added"
else
    echo "✗ marketing-quantum-rtl.js reference not added"
fi

# Verify JSON-LD language
JSON_LD_CHECK=$(grep -c '"inLanguage":"he"' benefits-of-organic-digital-marketing.html)
if [ $JSON_LD_CHECK -gt 0 ]; then
    echo "✓ JSON-LD language set to Hebrew (he)"
else
    echo "✗ JSON-LD language not set to Hebrew"
fi

echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "Backup file: benefits-of-organic-digital-marketing.html.bak.$TIMESTAMP"
echo "Recommendation: Run 'firebase deploy' to deploy the updated version."