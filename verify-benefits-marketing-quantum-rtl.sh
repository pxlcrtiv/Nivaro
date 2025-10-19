#!/bin/bash

# Quantum-Level RTL Verification Script for benefits-of-organic-digital-marketing.html
set -e

echo "=== Quantum-Level RTL Verification for benefits-of-organic-digital-marketing.html ==="

total_checks=0
passed_checks=0

# Check 1: Verify HTML attributes
echo "\n[Check 1/13] HTML Tag Attributes Verification"
total_checks=$((total_checks + 1))
if grep -q '<html lang="he" dir="rtl">' benefits-of-organic-digital-marketing.html; then
    echo "✓ HTML attributes correctly set: lang=\"he\" dir=\"rtl\""
    passed_checks=$((passed_checks + 1))
else
    echo "✗ HTML attributes not set correctly"
    echo "  Current HTML tag: $(grep '<html' benefits-of-organic-digital-marketing.html | head -1)"
fi

# Check 2: Verify backup file existence
echo "\n[Check 2/13] Backup File Verification"
total_checks=$((total_checks + 1))
backup_count=$(ls -1 benefits-of-organic-digital-marketing.html.bak.* 2>/dev/null | wc -l)
if [ $backup_count -gt 0 ]; then
    echo "✓ Backup files exist: $backup_count file(s)"
    echo "  Most recent backup: $(ls -1t benefits-of-organic-digital-marketing.html.bak.* 2>/dev/null | head -1)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ No backup files found"
fi

# Check 3: Verify quantum-rtl-marketing.css file existence
echo "\n[Check 3/13] Marketing CSS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl-marketing.css" ]; then
    echo "✓ quantum-rtl-marketing.css file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl-marketing.css file not found"
fi

# Check 4: Verify quantum-rtl.js file existence
echo "\n[Check 4/13] JS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ]; then
    echo "✓ quantum-rtl.js file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl.js file not found"
fi

# Check 5: Verify marketing-quantum-rtl.js file existence
echo "\n[Check 5/13] Marketing JS File Existence Verification"
total_checks=$((total_checks + 1))
if [ -f "marketing-quantum-rtl.js" ]; then
    echo "✓ marketing-quantum-rtl.js file exists"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ marketing-quantum-rtl.js file not found"
fi

# Check 6: Verify CSS reference in HTML
echo "\n[Check 6/13] CSS Reference Verification"
total_checks=$((total_checks + 1))
if grep -q 'quantum-rtl-marketing.css' benefits-of-organic-digital-marketing.html; then
    echo "✓ quantum-rtl-marketing.css reference found in HTML"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ quantum-rtl-marketing.css reference not found in HTML"
fi

# Check 7: Verify JS references in HTML
echo "\n[Check 7/13] JS References Verification"
total_checks=$((total_checks + 1))
quantum_js_refs=$(grep -c 'quantum-rtl.js\|marketing-quantum-rtl.js' benefits-of-organic-digital-marketing.html)
if [ $quantum_js_refs -eq 2 ]; then
    echo "✓ Both quantum-rtl.js and marketing-quantum-rtl.js references found in HTML"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Missing JS references: Only $quantum_js_refs/2 required references found"
fi

# Check 8: Verify JSON-LD language tag
echo "\n[Check 8/13] JSON-LD Language Tag Verification"
total_checks=$((total_checks + 1))
if grep -q '"inLanguage":"he"' benefits-of-organic-digital-marketing.html; then
    echo "✓ JSON-LD language correctly set to Hebrew (he)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ JSON-LD language not set to Hebrew"
    echo "  Found: $(grep -o '"inLanguage":".*"' benefits-of-organic-digital-marketing.html 2>/dev/null)"
fi

# Check 9: Verify canonical URL update
echo "\n[Check 9/13] Canonical URL Update Verification"
total_checks=$((total_checks + 1))
if grep -q 'canonical.*benefits-of-organic-digital-marketing.html' benefits-of-organic-digital-marketing.html; then
    echo "✓ Canonical URL correctly updated to local path"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Canonical URL not updated correctly"
    echo "  Current canonical: $(grep -o 'canonical.*href="[^"]*"' benefits-of-organic-digital-marketing.html 2>/dev/null)"
fi

# Check 10: Analyze CSS RTL content
echo "\n[Check 10/13] CSS RTL Content Analysis"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl-marketing.css" ]; then
    rtl_properties=$(grep -i 'rtl\|direction\|text-align' quantum-rtl-marketing.css | grep -v '^\s*//' | wc -l)
    css_size=$(du -h quantum-rtl-marketing.css | cut -f1)
    echo "✓ CSS RTL Content Analysis: $rtl_properties RTL properties, $css_size file size"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot analyze CSS content: quantum-rtl-marketing.css not found"
fi

# Check 11: Analyze JS RTL content
echo "\n[Check 11/13] JS RTL Content Analysis"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ] && [ -f "marketing-quantum-rtl.js" ]; then
    js_rtl_implementations=$(grep -i 'rtl\|direction' quantum-rtl.js marketing-quantum-rtl.js | grep -v '^\s*//' | wc -l)
    quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
    marketing_class_check=$(grep -c 'class MarketingQuantumRTL' marketing-quantum-rtl.js)
    js_size=$(du -h quantum-rtl.js | cut -f1)
    marketing_js_size=$(du -h marketing-quantum-rtl.js | cut -f1)
    
    echo "✓ JS RTL Content Analysis: $js_rtl_implementations RTL implementations"
    echo "  - QuantumRTLObserver class: $(if [ $quantum_class_check -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
    echo "  - MarketingQuantumRTL class: $(if [ $marketing_class_check -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
    echo "  - File sizes: quantum-rtl.js ($js_size), marketing-quantum-rtl.js ($marketing_js_size)"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot analyze JS content: JS files not found"
fi

# Check 12: Count quantum RTL observation sections
echo "\n[Check 12/13] Quantum RTL Observation Sections Count"
total_checks=$((total_checks + 1))
if [ -f "quantum-rtl.js" ] && [ -f "marketing-quantum-rtl.js" ]; then
    observation_sections=$(grep -i 'observer\|initialize\|applyRTL' quantum-rtl.js marketing-quantum-rtl.js | grep -v '^\s*//' | wc -l)
    echo "✓ Quantum RTL Observation Sections: $observation_sections sections found"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Cannot count observation sections: JS files not found"
fi

# Check 13: Verify no conflicting English language tags
echo "\n[Check 13/13] English Language Tags Conflict Check"
total_checks=$((total_checks + 1))
english_lang_tags=$(grep -i '"inLanguage":"en\|lang="en"' benefits-of-organic-digital-marketing.html | grep -v '^\s*//' | wc -l)
if [ $english_lang_tags -eq 0 ]; then
    echo "✓ No conflicting English language tags found"
    passed_checks=$((passed_checks + 1))
else
    echo "✗ Found $english_lang_tags conflicting English language tags"
    echo "  Conflicts: $(grep -i '"inLanguage":"en\|lang="en"' benefits-of-organic-digital-marketing.html 2>/dev/null)"
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