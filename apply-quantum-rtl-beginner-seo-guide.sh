#!/bin/bash

# Quantum-Level RTL Implementation Script for beginner-seo-guide.html
set -e

echo "=== Quantum-Level RTL Implementation for beginner-seo-guide.html ==="

# Create timestamp for backups
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Create backup of the original file
echo "Creating backup..."
cp beginner-seo-guide.html beginner-seo-guide.html.bak.$TIMESTAMP

# Generate quantum RTL CSS file
echo "Generating quantum-rtl.css with Hebrew-optimized rules..."
cat > quantum-rtl.css << 'EOF'
/* Quantum-Level RTL CSS for Hebrew Interface */
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

# Generate blog-specific quantum RTL JS file
echo "Generating blog-quantum-rtl.js..."
cat > blog-quantum-rtl.js << 'EOF'
// Blog-Specific Quantum RTL JavaScript
class BlogQuantumRTL extends QuantumRTLObserver {
    constructor() {
        super();
    }

    applyRTL() {
        super.applyRTL();
        // Blog-specific RTL optimizations
        const authorSection = document.querySelector('.left-section-blog');
        if (authorSection) {
            authorSection.style.textAlign = 'right';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BlogQuantumRTL();
});
EOF

# Update HTML attributes to Hebrew RTL
echo "Updating HTML attributes for Hebrew RTL..."
sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/g' beginner-seo-guide.html

# Add quantum RTL CSS and JS references to the head section
echo "Adding quantum RTL CSS and JS references..."
sed -i '' '/<\/head>/i\
    <link rel="stylesheet" href="quantum-rtl.css">
' beginner-seo-guide.html
sed -i '' '/<\/head>/i\
    <script src="quantum-rtl.js"></script>
' beginner-seo-guide.html
sed -i '' '/<\/head>/i\
    <script src="blog-quantum-rtl.js"></script>
' beginner-seo-guide.html

# Update JSON-LD language tags to Hebrew
echo "Updating JSON-LD language tags to Hebrew..."
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he"/g' beginner-seo-guide.html
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he"/g' beginner-seo-guide.html

# Verification
echo "\n=== Verification ==="

# Verify HTML attributes
HTML_ATTR_CHECK=$(grep -c '<html lang="he" dir="rtl">' beginner-seo-guide.html)
if [ $HTML_ATTR_CHECK -gt 0 ]; then
    echo "✓ HTML attributes set correctly: lang=\"he\" dir=\"rtl\""
else
    echo "✗ HTML attributes not set correctly"
fi

# Verify CSS reference
CSS_REF_CHECK=$(grep -c 'quantum-rtl.css' beginner-seo-guide.html)
if [ $CSS_REF_CHECK -gt 0 ]; then
    echo "✓ quantum-rtl.css reference added"
else
    echo "✗ quantum-rtl.css reference not added"
fi

# Verify JS references
JS_REF_CHECK=$(grep -c 'quantum-rtl.js' beginner-seo-guide.html)
if [ $JS_REF_CHECK -gt 0 ]; then
    echo "✓ quantum-rtl.js reference added"
else
    echo "✗ quantum-rtl.js reference not added"
fi

BLOG_JS_REF_CHECK=$(grep -c 'blog-quantum-rtl.js' beginner-seo-guide.html)
if [ $BLOG_JS_REF_CHECK -gt 0 ]; then
    echo "✓ blog-quantum-rtl.js reference added"
else
    echo "✗ blog-quantum-rtl.js reference not added"
fi

# Verify JSON-LD language
JSON_LD_CHECK=$(grep -c '"inLanguage":"he"' beginner-seo-guide.html)
if [ $JSON_LD_CHECK -gt 0 ]; then
    echo "✓ JSON-LD language set to Hebrew (he)"
else
    echo "✗ JSON-LD language not set to Hebrew"
fi

echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "Backup file: beginner-seo-guide.html.bak.$TIMESTAMP"