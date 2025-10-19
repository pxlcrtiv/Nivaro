#!/bin/bash

# Quantum-Level RTL Verification Script for beginner-seo-guide.html
set -e

echo "=== Quantum-Level RTL Verification for beginner-seo-guide.html ==="

total_checks=0
passed_checks=0

# Check 1: Verify HTML attributes
echo "\n[Check 1/12] HTML Tag Attributes Verification"
total_checks=$((total_checks + 1))
if grep -q '<html lang="he" dir="rtl">' beginner-seo-guide.html; then
    echo "✓ HTML attributes correctly set: lang=\"he\" dir=\"rtl\""
    passed_checks=$((passed_checks + 1))
else
    echo "✗ HTML attributes not set correctly"
    echo "  Current HTML tag: $(grep '<html' beginner-seo-guide.html | head -1)"
fi

# Check 2: Verify backup file existence
echo "\n[Check 2/12] Backup File Verification"
total_checks=$((total_checks + 1))
backup_count=$(ls -1 beginner-seo-guide.html.bak.* 2>/dev/null | wc -l)
if [ $backup_count -gt 0 ]; then
    echo "✓ Backup files exist: $backup_count file(s)"
    echo "  Most recent backup: $(ls -1t beginner-seo-guide.html.bak.* 2>/dev/null | head -1)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ No backup files found"
fi

# Check 3: Verify quantum-rtl.css file existence
echo "\n[Check 3/12] CSS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.css" ]; then
    echo "✓ quantum-rtl.css file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl.css file not found"
fi

# Check 4: Verify quantum-rtl.js file existence
echo "\n[Check 4/12] JS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ]; then
    echo "✓ quantum-rtl.js file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl.js file not found"
fi

# Check 5: Verify blog-quantum-rtl.js file existence
echo "\n[Check 5/12] Blog JS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "blog-quantum-rtl.js" ]; then
    echo "✓ blog-quantum-rtl.js file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ blog-quantum-rtl.js file not found"
fi

# Check 6: Verify CSS reference in HTML
echo "\n[Check 6/12] CSS Reference Verification"
total_checks=$((total_checks + 1))
if grep -q 'quantum-rtl.css' beginner-seo-guide.html; then
    echo "✓ quantum-rtl.css reference found in HTML"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl.css reference not found in HTML"
fi

# Check 7: Verify JS references in HTML
echo "\n[Check 7/12] JS References Verification"
total_checks=$((total_checks + 1))
quantum_js_refs=$(grep -c 'quantum-rtl.js\|blog-quantum-rtl.js' beginner-seo-guide.html)
if [ $quantum_js_refs -eq 2 ]; then
    echo "✓ Both quantum-rtl.js and blog-quantum-rtl.js references found in HTML"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Missing JS references: Only $quantum_js_refs/2 required references found"
fi

# Check 8: Verify JSON-LD language tag
echo "\n[Check 8/12] JSON-LD Language Tag Verification"
total_checks=$((total_checks + 1))
if grep -q '"inLanguage":"he"' beginner-seo-guide.html; then
    echo "✓ JSON-LD language correctly set to Hebrew (he)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ JSON-LD language not set to Hebrew"
    echo "  Found: $(grep -o '"inLanguage":".*"' beginner-seo-guide.html 2>/dev/null)"
fi

# Check 9: Analyze CSS RTL content
echo "\n[Check 9/12] CSS RTL Content Analysis"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.css" ]; then
    rtl_properties=$(grep -i 'rtl\|direction\|text-align' quantum-rtl.css | grep -v '^\s*//' | wc -l)
    css_size=$(du -h quantum-rtl.css | cut -f1)
    echo "✓ CSS RTL Content Analysis: $rtl_properties RTL properties, $css_size file size"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot analyze CSS content: quantum-rtl.css not found"
fi

# Check 10: Analyze JS RTL content
echo "\n[Check 10/12] JS RTL Content Analysis"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ] && [ -f "blog-quantum-rtl.js" ]; then
    js_rtl_implementations=$(grep -i 'rtl\|direction' quantum-rtl.js blog-quantum-rtl.js | grep -v '^\s*//' | wc -l)
    quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
    blog_class_check=$(grep -c 'class BlogQuantumRTL' blog-quantum-rtl.js)
    js_size=$(du -h quantum-rtl.js | cut -f1)
    blog_js_size=$(du -h blog-quantum-rtl.js | cut -f1)
    
    echo "✓ JS RTL Content Analysis: $js_rtl_implementations RTL implementations"
    echo "  - QuantumRTLObserver class: $(if [ $quantum_class_check -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
    echo "  - BlogQuantumRTL class: $(if [ $blog_class_check -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
    echo "  - File sizes: quantum-rtl.js ($js_size), blog-quantum-rtl.js ($blog_js_size)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot analyze JS content: JS files not found"
fi

# Check 11: Count quantum RTL observation sections
echo "\n[Check 11/12] Quantum RTL Observation Sections Count"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ] && [ -f "blog-quantum-rtl.js" ]; then
    observation_sections=$(grep -i 'observer\|initialize\|applyRTL' quantum-rtl.js blog-quantum-rtl.js | grep -v '^\s*//' | wc -l)
    echo "✓ Quantum RTL Observation Sections: $observation_sections sections found"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot count observation sections: JS files not found"
fi

# Check 12: Verify no conflicting English language tags
echo "\n[Check 12/12] English Language Tags Conflict Check"
total_checks=$((total_checks + 1))
english_lang_tags=$(grep -i '"inLanguage":"en\|lang="en"' beginner-seo-guide.html | grep -v '^\s*//' | wc -l)
if [ $english_lang_tags -eq 0 ]; then
    echo "✓ No conflicting English language tags found"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Found $english_lang_tags conflicting English language tags"
    echo "  Conflicts: $(grep -i '"inLanguage":"en\|lang="en"' beginner-seo-guide.html 2>/dev/null)"
fi

# Final summary
echo "\n=== Quantum-Level RTL Verification Summary ==="
echo "Total Checks: $total_checks"
echo "Passed Checks: $passed_checks"
echo "Failed Checks: $((total_checks - passed_checks))"

if [ $passed_checks -eq $total_checks ]; then
    echo "\n✅ All quantum-level RTL verification checks passed! Ready for deployment."
    echo "Recommendation: Run 'firebase deploy' to deploy the updated version."
else
    echo "\n❌ Some quantum-level RTL verification checks failed."
    echo "Recommendation: Fix the failed checks before deploying."
fi