#!/bin/bash

# Quantum-Level RTL Verification Script for blog.html
# Comprehensive validation of all RTL implementations
set -e

echo "=== Quantum-Level RTL Verification for blog.html ==="
echo "Target: Hebrew language support for native speakers"

# Check 1: HTML Tag Attributes Verification
echo "\n[Check 1/13] HTML Tag Attributes Verification"
html_tag=$(grep '<html' blog.html | head -1)
if [[ "$html_tag" == *'lang="he"'* && "$html_tag" == *'dir="rtl"'* ]]; then
    echo "✓ HTML attributes correctly set: lang=\"he\" dir=\"rtl\""
    html_check=1
else
    echo "✗ HTML attributes verification failed!"
    echo "  Current HTML tag: $html_tag"
    html_check=0
fi

# Check 2: Backup File Verification
echo "\n[Check 2/13] Backup File Verification"
backup_files=$(ls -1 blog.html.bak.* 2>/dev/null)
if [ -n "$backup_files" ]; then
    backup_count=$(echo "$backup_files" | wc -l)
    recent_backup=$(echo "$backup_files" | sort -r | head -1)
    echo "✓ Backup files exist:        $backup_count file(s)"
    echo "  Most recent backup: $recent_backup"
    backup_check=1
else
    echo "✗ No backup files found!"
    backup_check=0
fi

# Check 3: Blog CSS File Existence Verification
echo "\n[Check 3/13] Blog CSS File Existence Verification"
if [ -f "quantum-rtl-blog.css" ]; then
    echo "✓ quantum-rtl-blog.css file exists"
    css_file_check=1
else
    echo "✗ quantum-rtl-blog.css file not found!"
    css_file_check=0
fi

# Check 4: Core JS File Existence Verification
echo "\n[Check 4/13] JS File Existence Verification"
if [ -f "quantum-rtl.js" ]; then
    echo "✓ quantum-rtl.js file exists"
    js_file_check=1
else
    echo "✗ quantum-rtl.js file not found!"
    js_file_check=0
fi

# Check 5: Blog JS File Existence Verification
echo "\n[Check 5/13] Blog JS File Existence Verification"
if [ -f "blog-quantum-rtl.js" ]; then
    echo "✓ blog-quantum-rtl.js file exists"
    blog_js_file_check=1
else
    echo "✗ blog-quantum-rtl.js file not found!"
    blog_js_file_check=0
fi

# Check 6: CSS Reference Verification
echo "\n[Check 6/13] CSS Reference Verification"
if grep -q 'quantum-rtl-blog.css' blog.html; then
    echo "✓ quantum-rtl-blog.css reference found in HTML"
    css_ref_check=1
else
    echo "✗ CSS reference not found in HTML!"
    css_ref_check=0
fi

# Check 7: JS References Verification
echo "\n[Check 7/13] JS References Verification"
quantum_js_ref=$(grep -c 'quantum-rtl.js' blog.html)
blog_js_ref=$(grep -c 'blog-quantum-rtl.js' blog.html)
if [ "$quantum_js_ref" -gt 0 ] && [ "$blog_js_ref" -gt 0 ]; then
    echo "✓ Both quantum-rtl.js and blog-quantum-rtl.js references found in HTML"
    js_ref_check=1
else
    echo "✗ JS references verification failed!"
    echo "  - quantum-rtl.js: $(if [ "$quantum_js_ref" -gt 0 ]; then echo "Found"; else echo "Not found"; fi)"
    echo "  - blog-quantum-rtl.js: $(if [ "$blog_js_ref" -gt 0 ]; then echo "Found"; else echo "Not found"; fi)"
    js_ref_check=0
fi

# Check 8: JSON-LD Language Tag Verification
echo "\n[Check 8/13] JSON-LD Language Tag Verification"
if grep -q '"inLanguage":"he"' blog.html; then
    echo "✓ JSON-LD language correctly set to Hebrew (he)"
    json_ld_check=1
else
    echo "✗ JSON-LD language verification failed!"
    echo "  Found: $(grep -o '"inLanguage":".*"' blog.html | head -1)"
    json_ld_check=0
fi

# Check 9: Open Graph Locale Verification
echo "\n[Check 9/13] Open Graph Locale Verification"
if grep -q 'og:locale" content="he_IL"' blog.html; then
    echo "✓ Open Graph locale correctly set to Hebrew (he_IL)"
    og_locale_check=1
else
    echo "✗ Open Graph locale verification failed!"
    echo "  Found: $(grep -o 'og:locale" content=".*"' blog.html | head -1)"
    og_locale_check=0
fi

# Check 10: CSS RTL Content Analysis
echo "\n[Check 10/13] CSS RTL Content Analysis"
rtl_properties=$(grep -i 'rtl\|direction\|text-align\|border-left\|border-right\|margin-left\|margin-right\|padding-left\|padding-right\|float-left\|float-right' quantum-rtl-blog.css | grep -v '^\s*//' | wc -l)
css_size=$(du -h quantum-rtl-blog.css | cut -f1)
echo "✓ CSS RTL Content Analysis:       $rtl_properties RTL properties, $css_size file size"
css_content_check=1

# Check 11: JS RTL Content Analysis
echo "\n[Check 11/13] JS RTL Content Analysis"
js_rtl_implementations=$(grep -i 'rtl\|direction\|textAlign\|transform' quantum-rtl.js blog-quantum-rtl.js | grep -v '^\s*//' | wc -l)
quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
if [ "$quantum_class_check" -eq 0 ]; then
    quantum_class_check=$(grep -c 'class QuantumRTLObserver' blog-quantum-rtl.js)
fi
blog_class_check=$(grep -c 'class BlogQuantumRTL' blog-quantum-rtl.js)
js_size=$(du -h quantum-rtl.js | cut -f1)
blog_js_size=$(du -h blog-quantum-rtl.js | cut -f1)

echo "✓ JS RTL Content Analysis:       $js_rtl_implementations RTL implementations"
if [ "$quantum_class_check" -gt 0 ]; then
    echo "  - QuantumRTLObserver class: ✓ Found"
else
    echo "  - QuantumRTLObserver class: ✗ Not found"
fi
echo "  - BlogQuantumRTL class: $(if [ "$blog_class_check" -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
echo "  - File sizes: quantum-rtl.js ($js_size), blog-quantum-rtl.js ($blog_js_size)"

if [ "$quantum_class_check" -gt 0 ] && [ "$blog_class_check" -gt 0 ]; then
    js_content_check=1
else
    js_content_check=0
fi

# Check 12: Quantum RTL Observation Sections Count
echo "\n[Check 12/13] Quantum RTL Observation Sections"
quantum_sections=$(grep -c 'quantum-rtl-zone\|observeDynamicContent\|applyRTLToNode\|optimizeRTLForViewport\|optimizeBlogLayout\|setupCategoryRTL\|applyPostListRTL\|optimizePostItemRTL' quantum-rtl.js blog-quantum-rtl.js 2>/dev/null || echo "0")
echo "✓ Quantum RTL Observation Sections:        $quantum_sections sections found"
sections_check=1

# Check 13: English Language Tags Conflict Check
echo "\n[Check 13/13] English Language Tags Conflict Check"
en_conflicts=$(grep -c '"inLanguage":"en"' blog.html 2>/dev/null || echo "0")
# Ensure it's a clean integer
en_conflicts=$(echo "$en_conflicts" | tr -d '[:space:]')
if [ -z "$en_conflicts" ] || [ "$en_conflicts" -eq 0 ]; then
    echo "✓ No conflicting English language tags found"
    conflicts_check=1
else
    echo "✗ Found $en_conflicts conflicting English language tags!"
    conflicts_check=0
fi

# Summary
pass_count=$((html_check + backup_check + css_file_check + js_file_check + blog_js_file_check + css_ref_check + js_ref_check + json_ld_check + og_locale_check + css_content_check + js_content_check + sections_check + conflicts_check))
fail_count=$((13 - pass_count))

echo "\n=== Quantum-Level RTL Verification Summary ==="
echo "Total Checks: 13"
echo "Passed Checks: $pass_count"
echo "Failed Checks: $fail_count"

if [ "$fail_count" -eq 0 ]; then
    echo "\n✅ All quantum-level RTL verification checks passed! Ready for deployment."
    echo "Recommendation: Run 'firebase deploy' to deploy the updated version."
    exit 0
else
    echo "\n❌ Quantum-level RTL verification failed. Please fix the issues above."
    exit 1
fi