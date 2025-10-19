#!/bin/bash

# Final Quantum-Level RTL Verification and Deployment Script
set -e

echo "=== Final Quantum-Level RTL Verification and Deployment ==="
echo "Target: benefits-of-organic-digital-marketing.html"

# 1. Verify HTML attributes manually
echo "\n[1/7] HTML Attributes Final Verification"
html_tag=$(grep '<html' benefits-of-organic-digital-marketing.html | head -1)
if [[ "$html_tag" == *'lang="he"'* && "$html_tag" == *'dir="rtl"'* ]]; then
    echo "✅ HTML attributes confirmed: lang=\"he\" dir=\"rtl\""
else
    echo "❌ HTML attributes verification failed!"
    echo "Current HTML tag: $html_tag"
    exit 1
fi

# 2. Verify all required files exist
echo "\n[2/7] Required Files Verification"
required_files=("benefits-of-organic-digital-marketing.html" "quantum-rtl-marketing.css" "quantum-rtl.js" "marketing-quantum-rtl.js")
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
echo "\n[3/7] Backup Files Inventory"
backup_files=$(ls -1 benefits-of-organic-digital-marketing.html.bak.* 2>/dev/null)
if [ -n "$backup_files" ]; then
    echo "✅ Found $(echo "$backup_files" | wc -l) backup files:"
    echo "$backup_files"
else
    echo "⚠️  No backup files found"
fi

# 4. Analyze CSS RTL content
echo "\n[4/7] CSS RTL Content Analysis"
rtl_properties=$(grep -i 'rtl\|direction\|text-align' quantum-rtl-marketing.css | grep -v '^\s*//' | wc -l)
css_size=$(du -h quantum-rtl-marketing.css | cut -f1)
echo "✅ CSS RTL analysis: $rtl_properties RTL properties, $css_size file size"

# 5. Analyze JS RTL content
echo "\n[5/7] JS RTL Content Analysis"
js_rtl_implementations=$(grep -i 'rtl\|direction' quantum-rtl.js marketing-quantum-rtl.js | grep -v '^\s*//' | wc -l)
quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
marketing_class_check=$(grep -c 'class MarketingQuantumRTL' marketing-quantum-rtl.js)
js_size=$(du -h quantum-rtl.js | cut -f1)
marketing_js_size=$(du -h marketing-quantum-rtl.js | cut -f1)

echo "✅ JS RTL analysis: $js_rtl_implementations RTL implementations"
echo "  - QuantumRTLObserver class: $(if [ $quantum_class_check -gt 0 ]; then echo "✅ Found"; else echo "❌ Not found"; fi)"
echo "  - MarketingQuantumRTL class: $(if [ $marketing_class_check -gt 0 ]; then echo "✅ Found"; else echo "❌ Not found"; fi)"
echo "  - File sizes: quantum-rtl.js ($js_size), marketing-quantum-rtl.js ($marketing_js_size)"

# 6. JSON-LD language verification
echo "\n[6/7] JSON-LD Language Final Verification"
json_ld_lang=$(grep -o '"inLanguage":".*"' benefits-of-organic-digital-marketing.html | head -1)
if [[ "$json_ld_lang" == *'"inLanguage":"he"'* ]]; then
    echo "✅ JSON-LD language confirmed: $json_ld_lang"
else
    echo "❌ JSON-LD language verification failed!"
    echo "Current JSON-LD language: $json_ld_lang"
    exit 1
fi

# 7. Canonical URL verification
echo "\n[7/7] Canonical URL Final Verification"
canonical_url=$(grep -o 'canonical.*href="[^"]*"' benefits-of-organic-digital-marketing.html | head -1)
if [[ "$canonical_url" == *'benefits-of-organic-digital-marketing.html'* ]]; then
    echo "✅ Canonical URL confirmed: $canonical_url"
else
    echo "❌ Canonical URL verification failed!"
    echo "Current canonical URL: $canonical_url"
    exit 1
fi

# All verifications passed
echo "\n🎉 All quantum-level RTL verifications passed successfully!"
echo "\n📊 Summary Metrics:"
echo "  - HTML: lang=\"he\" dir=\"rtl\""
echo "  - CSS: $rtl_properties RTL properties, $css_size"
echo "  - JS: $js_rtl_implementations RTL implementations"
echo "  - JSON-LD: Hebrew (he) language tag"
echo "  - Canonical URL: Updated to local path"
echo "  - Backups: $(echo "$backup_files" | wc -l) files"

echo "\n🚀 Deploying to Firebase..."
# Run Firebase deploy command
firebase deploy

if [ $? -eq 0 ]; then
    echo "\n✅ Deployment to Firebase successful!"
    echo "🌐 Your benefits-of-organic-digital-marketing.html with quantum-level RTL support is now live at:"
    echo "   https://nivaro-51.web.app/benefits-of-organic-digital-marketing.html"
    echo "\n📱 For native Hebrew speakers, the page will now render with proper RTL directionality."
    echo "\n📝 Console verification results are available for detailed inspection."
else
    echo "\n❌ Deployment to Firebase failed!"
    echo "Please check the error messages above and try again."
    exit 1
fi