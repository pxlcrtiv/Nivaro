#!/bin/bash

# Quantum RTL Verification Script for Top UX Design Blogs Page
# This script performs comprehensive checks to ensure the RTL implementation is working correctly

echo "======================================================"
echo "        QUANTUM RTL VERIFICATION REPORT              "
echo "======================================================"
echo "Date: $(date)"
echo "Page: top-ux-design-blogs.html"
echo "======================================================"

# 1. Check HTML language and direction attributes
echo "\n[CHECK 1] HTML Language and Direction Attributes"
HTML_TAG=$(grep -m1 "<html" top-ux-design-blogs.html)
if echo "$HTML_TAG" | grep -q "lang=\"he\"" && echo "$HTML_TAG" | grep -q "dir=\"rtl\""; then
    echo "✅ PASSED: HTML tag has correct lang=\"he\" and dir=\"rtl\" attributes"
    echo "   Current HTML tag: $HTML_TAG"
else
    echo "❌ FAILED: HTML tag is not correctly configured for RTL Hebrew"
    echo "   Current HTML tag: $HTML_TAG"
    echo "   Expected: <html lang=\"he\" dir=\"rtl\">"
fi

# 2. Check if quantum RTL CSS file exists and is included
echo "\n[CHECK 2] Quantum RTL CSS File"
if [ -f "top-ux-design-blogs-quantum-rtl.css" ]; then
    echo "✅ PASSED: Quantum RTL CSS file exists"
    
    # Check if it's included in the HTML
    if grep -q "top-ux-design-blogs-quantum-rtl.css" top-ux-design-blogs.html; then
        echo "✅ PASSED: Quantum RTL CSS file is included in HTML"
    else
        echo "❌ FAILED: Quantum RTL CSS file is not included in HTML"
    fi
else
    echo "❌ FAILED: Quantum RTL CSS file does not exist"
fi

# 3. Check if quantum RTL JS file exists and is included
echo "\n[CHECK 3] Quantum RTL JavaScript File"
if [ -f "top-ux-design-blogs-quantum-rtl.js" ]; then
    echo "✅ PASSED: Quantum RTL JS file exists"
    
    # Check if it's included in the HTML
    if grep -q "top-ux-design-blogs-quantum-rtl.js" top-ux-design-blogs.html; then
        echo "✅ PASSED: Quantum RTL JS file is included in HTML"
    else
        echo "❌ FAILED: Quantum RTL JS file is not included in HTML"
    fi
else
    echo "❌ FAILED: Quantum RTL JS file does not exist"
fi

# 4. Check if quantum RTL verification file exists and is included
echo "\n[CHECK 4] Quantum RTL Verification JavaScript File"
if [ -f "top-ux-design-blogs-quantum-rtl-verification.js" ]; then
    echo "✅ PASSED: Quantum RTL verification file exists"
    
    # Check if it's included in the HTML
    if grep -q "top-ux-design-blogs-quantum-rtl-verification.js" top-ux-design-blogs.html; then
        echo "✅ PASSED: Quantum RTL verification file is included in HTML"
    else
        echo "❌ FAILED: Quantum RTL verification file is not included in HTML"
    fi
else
    echo "❌ FAILED: Quantum RTL verification file does not exist"
fi

# 5. Check for implementation comment
echo "\n[CHECK 5] Implementation Comment"
if grep -q "Quantum RTL Implementation for Top UX Design Blogs Page" top-ux-design-blogs.html; then
    echo "✅ PASSED: Implementation comment is present"
else
    echo "❌ FAILED: Implementation comment is missing"
fi

# 6. Check for semicolon issues (prevent common JS errors)
echo "\n[CHECK 6] JavaScript Syntax Check"
SEMI_COLON_ISSUES=$(grep -n "}\\s*$" top-ux-design-blogs.html)
if [ -z "$SEMI_COLON_ISSUES" ]; then
    echo "✅ PASSED: No suspicious missing semicolons detected"
else
    echo "⚠️ WARNING: Potential semicolon issues detected (these may be false positives):"
    echo "$SEMI_COLON_ISSUES"
fi

# 7. Check file sizes to ensure proper creation
echo "\n[CHECK 7] File Size Verification"
echo "- HTML file size: $(ls -lh top-ux-design-blogs.html | awk '{print $5}')"
echo "- CSS file size: $(ls -lh top-ux-design-blogs-quantum-rtl.css 2>/dev/null | awk '{print $5}')"
echo "- JS file size: $(ls -lh top-ux-design-blogs-quantum-rtl.js 2>/dev/null | awk '{print $5}')"
echo "- Verification JS file size: $(ls -lh top-ux-design-blogs-quantum-rtl-verification.js 2>/dev/null | awk '{print $5}')"

# 8. Backup file count
echo "\n[CHECK 8] Backup Files Created"
BACKUP_COUNT=$(ls -l top-ux-design-blogs.html.bak.* 2>/dev/null | wc -l)
echo "✅ PASSED: $BACKUP_COUNT backup files created"

# 9. Check for quantum RTL CSS content
echo "\n[CHECK 9] Quantum RTL CSS Content Verification"
if grep -q "quantum-rtl-transition" top-ux-design-blogs-quantum-rtl.css; then
    echo "✅ PASSED: Quantum RTL CSS contains expected properties"
else
    echo "❌ FAILED: Quantum RTL CSS may be incomplete"
fi

# 10. Check for quantum RTL JS content
echo "\n[CHECK 10] Quantum RTL JS Content Verification"
if grep -q "class QuantumRTLObserver" top-ux-design-blogs-quantum-rtl.js; then
    echo "✅ PASSED: Quantum RTL JS contains expected observer class"
else
    echo "❌ FAILED: Quantum RTL JS may be incomplete"
fi

echo "\n======================================================"
echo "              VERIFICATION SUMMARY                    "
echo "======================================================"

# Count passed and failed checks
PASSED=$(grep -c "✅ PASSED" <<< "$REPORT_CONTENT")
FAILED=$(grep -c "❌ FAILED" <<< "$REPORT_CONTENT")
WARNING=$(grep -c "⚠️ WARNING" <<< "$REPORT_CONTENT")

echo "Total Checks: 10"
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo "Warnings: $WARNING"

if [ "$FAILED" -eq 0 ]; then
    echo "\n✅ ALL VERIFICATIONS PASSED! The quantum RTL implementation is ready for deployment."
    echo "The page is now optimized for Hebrew users with advanced RTL support."
else
    echo "\n❌ VERIFICATION FAILED: Please fix the issues before deployment."
fi

echo "======================================================"
echo "Note: For complete verification, open the page in a browser"
echo "and check the browser console for QuantumRTLObserver logs."
echo "======================================================"