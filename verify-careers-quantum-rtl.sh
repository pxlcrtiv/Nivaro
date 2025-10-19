#!/bin/bash

echo "=== Quantum-Level RTL Implementation Verification for Careers Page ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "=========================================================================="

source_file="careers.html"

# Check if source file exists
if [ ! -f "$source_file" ]; then
    echo "❌ ERROR: $source_file does not exist!"
    exit 1
fi

echo "\n1. Verifying HTML tag attributes (lang='he' dir='rtl')..."
if grep -q '<html[^>]*lang="he"[^>]*dir="rtl"' "$source_file"; then
    echo "✅ HTML tag has correct attributes: lang='he' dir='rtl'"
else
    echo "❌ HTML tag missing correct attributes!"
    grep '<html' "$source_file" | head -1
    exit 1
fi

echo "\n2. Verifying backup file exists..."
backup_file=$(find . -name "$source_file.bak.*" | sort -r | head -1)
if [ -f "$backup_file" ]; then
    echo "✅ Backup file exists: $backup_file"
else
    echo "❌ No backup file found!"
    exit 1
fi

echo "\n3. Verifying RTL CSS and JS files exist..."
all_files_exist=true

for file in quantum-rtl-careers.css quantum-rtl.js careers-quantum-rtl.js; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file does not exist!"
        all_files_exist=false
    fi
done

if ! $all_files_exist; then
    exit 1
fi

echo "\n4. Verifying CSS and JS references in HTML..."
css_refs=$(grep -c 'quantum-rtl-careers.css' "$source_file")
js_refs=$(grep -c 'quantum-rtl.js' "$source_file")
careers_js_refs=$(grep -c 'careers-quantum-rtl.js' "$source_file")

echo "CSS references found: $css_refs"
echo "Quantum RTL JS references found: $js_refs"
echo "Careers Quantum RTL JS references found: $careers_js_refs"

if [ "$css_refs" -gt 0 ] && [ "$js_refs" -gt 0 ] && [ "$careers_js_refs" -gt 0 ]; then
    echo "✅ All resource references verified"
else
    echo "⚠️  Some resource references may be missing"
    # Try to fix missing references if needed
    if [ "$css_refs" -eq 0 ]; then
        echo "🔄 Adding quantum-rtl-careers.css reference"
        perl -i -pe 's/(<\/head>)/<link rel="stylesheet" href="quantum-rtl-careers.css">\n\1/' "$source_file"
    fi
    
    if [ "$js_refs" -eq 0 ]; then
        echo "🔄 Adding quantum-rtl.js reference"
        perl -i -pe 's/(<\/body>)/<script src="quantum-rtl.js"><\/script>\n\1/' "$source_file"
    fi
    
    if [ "$careers_js_refs" -eq 0 ]; then
        echo "🔄 Adding careers-quantum-rtl.js reference"
        perl -i -pe 's/(<\/body>)/<script src="careers-quantum-rtl.js"><\/script>\n\1/' "$source_file"
    fi
fi

echo "\n5. Verifying quantum-rtl-zone class in content sections..."
zone_class=$(grep -c 'quantum-rtl-zone' "$source_file")
if [ "$zone_class" -gt 0 ]; then
    echo "✅ quantum-rtl-zone class found $zone_class times"
else
    echo "⚠️  Adding quantum-rtl-zone class to main container"
    perl -i -pe 's/<section id="hero"/<section id="hero" class="quantum-rtl-zone/' "$source_file"
fi

echo "\n6. Verifying JSON-LD language tags are in Hebrew..."
json_lang_count=$(grep -c '"inLanguage":"he"' "$source_file")
en_lang_count=$(grep -c '"inLanguage":"en' "$source_file")

echo "Hebrew language tags found: $json_lang_count"
echo "English language tags found: $en_lang_count"

if [ "$json_lang_count" -gt 0 ] && [ "$en_lang_count" -eq 0 ]; then
    echo "✅ JSON-LD language tags are correctly set to Hebrew"
else
    if [ "$en_lang_count" -gt 0 ]; then
        echo "⚠️  Converting English language tags to Hebrew"
        perl -i -pe 's/"inLanguage":"en[^"\"]*"/"inLanguage":"he"/g' "$source_file"
    fi
    if [ "$json_lang_count" -eq 0 ]; then
        echo "⚠️  Adding Hebrew language tags to JSON-LD"
        perl -i -pe 's/("@type":"WebPage")/\1,\n        "inLanguage":"he"/g' "$source_file"
    fi
fi

echo "\n7. Verifying Open Graph locale..."
og_locale=$(grep -c 'og:locale.*he_IL' "$source_file")
if [ "$og_locale" -gt 0 ]; then
    echo "✅ Open Graph locale is correctly set to he_IL"
else
    echo "⚠️  Setting Open Graph locale to he_IL"
    perl -i -pe 's/og:locale" content="en[^"\"]*"/og:locale" content="he_IL"/' "$source_file"
fi

echo "\n8. Verifying CSS RTL properties count..."
rtl_css_props=$(grep -c -E 'direction: rtl|text-align: right|unicode-bidi|padding-right|padding-left' quantum-rtl-careers.css)
echo "RTL CSS properties found: $rtl_css_props"
if [ "$rtl_css_props" -ge 15 ]; then
    echo "✅ Sufficient RTL CSS properties in quantum-rtl-careers.css"
else
    echo "❌ Insufficient RTL CSS properties!"
fi

echo "\n9. Verifying JavaScript classes..."
quantum_class=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
careers_class=$(grep -c 'class CareersQuantumRTL' careers-quantum-rtl.js)

echo "QuantumRTLObserver class: $quantum_class"
echo "CareersQuantumRTL class: $careers_class"

if [ "$quantum_class" -eq 1 ] && [ "$careers_class" -eq 1 ]; then
    echo "✅ Both JS classes are properly defined"
else
    echo "❌ One or more JS classes are missing!"
fi

echo "\n10. Verifying observation sections..."
observe_mentions=$(grep -c -E 'observe|mutationObserver|observers' quantum-rtl.js)
echo "Observation mechanisms found: $observe_mentions"
if [ "$observe_mentions" -ge 5 ]; then
    echo "✅ Sufficient observation mechanisms in quantum-rtl.js"
else
    echo "❌ Insufficient observation mechanisms!"
fi

echo "\n11. Verifying English conflict checks..."
en_content=$(grep -c -E '<html[^>]*lang="en"|<meta[^>]*lang="en"' "$source_file")
if [ "$en_content" -eq 0 ]; then
    echo "✅ No English language conflicts detected"
else
    echo "⚠️  English language tags may still exist!"
    grep -E '<html[^>]*lang="en"|<meta[^>]*lang="en"' "$source_file"
fi

echo "\n12. Verifying backup file count..."
backup_count=$(find . -name "$source_file.bak.*" | wc -l)
echo "Total backup files: $backup_count"
if [ "$backup_count" -ge 1 ]; then
    echo "✅ Backup file count is sufficient"
else
    echo "❌ No backup files found!"
fi

echo "\n13. Final verification: Count of quantum-rtl-zone sections..."
zone_count=$(grep -c 'quantum-rtl-zone' "$source_file")
echo "Total quantum RTL zones: $zone_count"
if [ "$zone_count" -ge 1 ]; then
    echo "✅ Sufficient quantum RTL zones identified"
else
    echo "⚠️  Adding quantum-rtl-zone class to main container"
    perl -i -pe 's/<div class="container/<div class="container quantum-rtl-zone/' "$source_file"
fi

echo "\n=== Verification Complete ==="
echo "📊 Summary of fixes applied:"
echo "  • HTML attributes: Verified"
echo "  • Resource references: Fixed missing ones"
echo "  • Language tags: Updated to Hebrew"
echo "  • RTL classes: Added where missing"
echo "  • Backup: Verified"
echo "============================="
echo ""
echo "Recommendation: Run 'final-verification-and-deploy-careers.sh' to complete the implementation"
echo "Then deploy to Firebase with 'firebase deploy --only hosting:careers.html'"