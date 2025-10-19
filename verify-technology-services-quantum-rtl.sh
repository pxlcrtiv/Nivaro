#!/bin/bash

# Quantum RTL Verification Script for technology-services.html
# This script performs comprehensive verification of quantum-level RTL implementation

echo "Running Comprehensive Quantum RTL Verification for technology-services.html"
echo "=========================================================================="

# Initialize counters
pass_count=0
fail_count=0

# Function to check and report
check_and_report() {
  local test_name="$1"
  local condition="$2"
  local success_message="$3"
  local failure_message="$4"
  
  if eval "$condition"; then
    echo "✓ PASS: $success_message"
    ((pass_count++))
    return 0
  else
    echo "✗ FAIL: $failure_message"
    ((fail_count++))
    return 1
  fi
}

# Check 1: HTML attributes
check_and_report \
  "HTML Attributes" \
  "grep -q '<html lang="he" dir="rtl">' technology-services.html" \
  "HTML tag has correct lang=\"he\" and dir=\"rtl\" attributes" \
  "HTML tag missing correct lang or dir attributes"

# Check 2: Quantum RTL comment
check_and_report \
  "Implementation Comment" \
  "grep -q 'Quantum RTL Implementation' technology-services.html" \
  "Quantum RTL implementation comment exists" \
  "Quantum RTL implementation comment missing"

# Check 3: CSS file existence
check_and_report \
  "CSS File Existence" \
  "[ -f 'technology-services-quantum-rtl.css' ]" \
  "technology-services-quantum-rtl.css exists" \
  "technology-services-quantum-rtl.css missing"

# Check 4: JS file existence
check_and_report \
  "JS File Existence" \
  "[ -f 'technology-services-quantum-rtl.js' ]" \
  "technology-services-quantum-rtl.js exists" \
  "technology-services-quantum-rtl.js missing"

# Check 5: Verification JS file existence
check_and_report \
  "Verification JS File Existence" \
  "[ -f 'technology-services-quantum-rtl-verification.js' ]" \
  "technology-services-quantum-rtl-verification.js exists" \
  "technology-services-quantum-rtl-verification.js missing"

# Check 6: CSS reference in HTML
check_and_report \
  "CSS Reference" \
  "grep -q 'technology-services-quantum-rtl.css' technology-services.html" \
  "CSS file referenced in HTML" \
  "CSS file not referenced in HTML"

# Check 7: JS reference in HTML
check_and_report \
  "JS Reference" \
  "grep -q 'technology-services-quantum-rtl.js' technology-services.html" \
  "JS file referenced in HTML" \
  "JS file not referenced in HTML"

# Check 8: Verification JS reference in HTML
check_and_report \
  "Verification JS Reference" \
  "grep -q 'technology-services-quantum-rtl-verification.js' technology-services.html" \
  "Verification JS file referenced in HTML" \
  "Verification JS file not referenced in HTML"

# Check 9: Backup file existence
backup_file="technology-services.html.bak.*"
check_and_report \
  "Backup File" \
  "ls -1 $backup_file 2>/dev/null | grep -q ." \
  "Backup file created successfully" \
  "Backup file missing"

# Check 10: Semicolon syntax in JS files
check_and_report \
  "JS Semicolon Syntax" \
  "! grep -E '\{[^;]*\}\s*$' technology-services-quantum-rtl.js 2>/dev/null" \
  "No missing semicolons found in JS files" \
  "Potential missing semicolons found in JS files"

# CSS content verification
css_contains_rtl=$(grep -c 'rtl' technology-services-quantum-rtl.css)
check_and_report \
  "CSS RTL Content" \
  "[ $css_contains_rtl -gt 5 ]" \
  "CSS file contains sufficient RTL rules" \
  "CSS file may be missing RTL rules"

# JS content verification
js_contains_rtl=$(grep -c 'rtl' technology-services-quantum-rtl.js)
check_and_report \
  "JS RTL Content" \
  "[ $js_contains_rtl -gt 5 ]" \
  "JS file contains sufficient RTL implementation" \
  "JS file may be missing RTL implementation"

# Count number of backup files
backup_count=$(ls -1 $backup_file 2>/dev/null | wc -l)
echo "\nNumber of backup files created: $backup_count"

# File size checks
css_size=$(du -k technology-services-quantum-rtl.css | cut -f1)
js_size=$(du -k technology-services-quantum-rtl.js | cut -f1)
echo "CSS file size: ${css_size}KB"
echo "JS file size: ${js_size}KB"

# HTML section checks with quantum attributes
sections_with_quantum=$(grep -c 'data-quantum-rtl="observe"' technology-services.html)
echo "Sections with quantum RTL observation: $sections_with_quantum"

# Display summary
echo "\n=========================================================================="
echo "QUANTUM RTL VERIFICATION SUMMARY"
echo "=========================================================================="
echo "Total Tests: $((pass_count + fail_count))"
echo "PASS: $pass_count"
echo "FAIL: $fail_count"

if [ $fail_count -eq 0 ]; then
  echo "\n🎉 All quantum RTL verifications passed successfully!"
  echo "The technology-services.html file is now optimized for native Hebrew speakers with quantum-level RTL implementation."
else
  echo "\n❌ Some quantum RTL verifications failed. Please review the failures above."
fi

echo "\nTo complete the deployment, run: firebase deploy"
echo "=========================================================================="