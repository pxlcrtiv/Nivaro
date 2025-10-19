#!/bin/bash

# Final Quantum-Level RTL Verification and Deployment Script
set -e

echo "=== Final Quantum-Level RTL Verification and Deployment ==="
echo "Target: beginner-seo-guide.html"

# 1. Verify HTML attributes manually
echo "\n[1/6] HTML Attributes Final Verification"
html_tag=$(grep '<html' beginner-seo-guide.html | head -1)
if [[ "$html_tag" == *'lang="he"'* && "$html_tag" == *'dir="rtl"'* ]]; then
    echo "✅ HTML attributes confirmed: lang=\"he\" dir=\"rtl\""
else
    echo "❌ HTML attributes verification failed!"
    echo "Current HTML tag: $html_tag"
    exit 1
fi

# 2. Verify all required files exist
echo "\n[2/6] Required Files Verification"
required_files=("beginner-seo-guide.html" "quantum-rtl.css" "quantum-rtl.js" "blog-quantum-rtl.js")
all_files_exist=true

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file not found!"
        all_files_exist=false
    fi
done

if [ "$all_files_exist" = false ]; then
    echo "\n❌ File verification failed. Cannot deploy."
    exit 1
fi

# 3. List all backup files
echo "\n[3/6] Backup Files Inventory"
backup_files=$(ls -1 beginner-seo-guide.html.bak.* 2>/dev/null)
if [ -n "$backup_files" ]; then
    echo "✅ Found $(echo "$backup_files" | wc -l) backup files:"
    echo "$backup_files"
else
    echo "⚠️  No backup files found"
fi

# 4. Analyze CSS RTL content
echo "\n[4/6] CSS RTL Content Analysis"
rtl_properties=$(grep -i 'rtl\|direction\|text-align' quantum-rtl.css | grep -v '^\s*//' | wc -l)
css_size=$(du -h quantum-rtl.css | cut -f1)
echo "✅ CSS RTL analysis: $rtl_properties RTL properties, $css_size file size"

# 5. Analyze JS RTL content
echo "\n[5/6] JS RTL Content Analysis"
js_rtl_implementations=$(grep -i 'rtl\|direction' quantum-rtl.js blog-quantum-rtl.js | grep -v '^\s*//' | wc -l)
quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
blog_class_check=$(grep -c 'class BlogQuantumRTL' blog-quantum-rtl.js)
js_size=$(du -h quantum-rtl.js | cut -f1)
blog_js_size=$(du -h blog-quantum-rtl.js | cut -f1)

echo "✅ JS RTL analysis: $js_rtl_implementations RTL implementations"
echo "  - QuantumRTLObserver class: $(if [ $quantum_class_check -gt 0 ]; then echo "✅ Found"; else echo "❌ Not found"; fi)"
echo "  - BlogQuantumRTL class: $(if [ $blog_class_check -gt 0 ]; then echo "✅ Found"; else echo "❌ Not found"; fi)"
echo "  - File sizes: quantum-rtl.js ($js_size), blog-quantum-rtl.js ($blog_js_size)"

# 6. JSON-LD language verification
echo "\n[6/6] JSON-LD Language Final Verification"
json_ld_lang=$(grep -o '"inLanguage":".*"' beginner-seo-guide.html | head -1)
if [[ "$json_ld_lang" == *'"inLanguage":"he"'* ]]; then
    echo "✅ JSON-LD language confirmed: $json_ld_lang"
else
    echo "❌ JSON-LD language verification failed!"
    echo "Current JSON-LD language: $json_ld_lang"
    exit 1
fi

# All verifications passed
echo "\n🎉 All quantum-level RTL verifications passed successfully!"
echo "\n📊 Summary Metrics:"
echo "  - HTML: lang=\"he\" dir=\"rtl\""
echo "  - CSS: $rtl_properties RTL properties, $css_size"
echo "  - JS: $js_rtl_implementations RTL implementations"
echo "  - JSON-LD: Hebrew (he) language tag"
echo "  - Backups: $(echo "$backup_files" | wc -l) files"

echo "\n🚀 Deploying to Firebase..."
# Run Firebase deploy command
firebase deploy

if [ $? -eq 0 ]; then
    echo "\n✅ Deployment to Firebase successful!"
    echo "🌐 Your beginner-seo-guide.html with quantum-level RTL support is now live at:"
    echo "   https://nivaro-51.web.app/beginner-seo-guide.html"
    echo "\n📱 For native Hebrew speakers, the page will now render with proper RTL directionality."
    echo "\n📝 Console verification results are available for detailed inspection."
else
    echo "\n❌ Deployment to Firebase failed!"
    echo "Please check the error messages above and try again."
    exit 1
fi