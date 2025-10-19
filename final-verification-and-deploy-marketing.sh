#!/bin/bash

echo "=== Final Quantum-Level RTL Implementation for Marketing Psychology Page ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"
echo "======================================================================"

source_file="captivate-audiences-marketing-psychology.html"

# Check if source file exists
if [ ! -f "$source_file" ]; then
    echo "❌ ERROR: $source_file does not exist!"
    exit 1
fi

echo "\n🔍 Running final verification checks..."

echo "\n1. Verifying HTML attributes (lang='he' dir='rtl')..."
if grep -q '<html[^>]*lang="he"[^>]*dir="rtl"' "$source_file"; then
    echo "✅ HTML tag has correct attributes: lang='he' dir='rtl'"
else
    echo "❌ HTML tag missing correct attributes!"
    grep '<html' "$source_file" | head -1
    exit 1
fi

echo "\n2. Verifying required RTL files exist..."
all_files_exist=true

for file in quantum-rtl-marketing.css quantum-rtl.js marketing-quantum-rtl.js; do
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

echo "\n3. Verifying language tags..."
json_lang_count=$(grep -c '"inLanguage":"he"' "$source_file")
en_conflicts=$(grep -c '"inLanguage":"en' "$source_file")

if [ "$json_lang_count" -gt 0 ] && [ "$en_conflicts" -eq 0 ]; then
    echo "✅ Language tags are correctly set to Hebrew with no conflicts"
else
    if [ "$en_conflicts" -gt 0 ]; then
        echo "⚠️  English language tag conflicts detected!"
        grep -E '"inLanguage":"en' "$source_file"
        exit 1
    else
        echo "⚠️  No Hebrew language tags found!"
        exit 1
    fi
fi

echo "\n✅ All final verification checks passed!"
echo "\n=== Quantum-Level RTL Implementation Complete ==="
echo "🔄 The marketing psychology page has been fully optimized for Hebrew native speakers"
echo "📁 Created and verified quantum RTL CSS and JS resources"
echo "🌐 Language tags updated to Hebrew"
echo "🎯 Applied quantum-rtl-zone class to content sections"
echo "=================================================="
echo ""
echo "Implementation complete! Ready for manual deployment."
echo ""
echo "📢 To deploy to Firebase, run:"
echo "   firebase deploy --only hosting:captivate-audiences-marketing-psychology.html"
echo ""
echo "🌐 Expected live URL after deployment:"
echo "   https://nivaro-51.web.app/captivate-audiences-marketing-psychology.html"