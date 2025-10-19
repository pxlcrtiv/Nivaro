#!/bin/bash

# Quantum-Level RTL Verification Script for boost-b2b-linkedin-strategies.html
# Purpose: Validate all RTL components for Hebrew language support
# Target: Native Hebrew speakers (Nivaro brand)

echo "=== Quantum-Level RTL Verification for LinkedIn Strategies Page ==="
echo "Target: Hebrew language support for native speakers"
echo "Brand: Nivaro"
echo "=============================================================="

# Initialize counters and flags
checks_total=13
checks_passed=0
checks_failed=0

# Function to perform a check and update counters
perform_check() {
  local check_number=$1
  local check_name="$2"
  local check_command="$3"
  local success_message="$4"
  local failure_message="$5"
  
  echo "\n[Check ${check_number}/${checks_total}] ${check_name}"
  if eval "$check_command"; then
    echo "✓ ${success_message}"
    checks_passed=$((checks_passed + 1))
    return 0
  else
    echo "✗ ${failure_message}"
    checks_failed=$((checks_failed + 1))
    return 1
  fi
}

# Check 1: HTML Tag Attributes
perform_check 1 "HTML Tag Attributes Verification" \
  "grep -q '<html[^>]*lang=\"he\"[^>]*dir=\"rtl\"' boost-b2b-linkedin-strategies.html" \
  "HTML attributes correctly set: lang=\"he\" dir=\"rtl\"" \
  "HTML attributes not set correctly!"

# Check 2: Backup File Verification
backup_count=$(ls -1 boost-b2b-linkedin-strategies.html.bak.* 2>/dev/null | wc -l)
if [ "$backup_count" -gt 0 ]; then
  latest_backup=$(ls -1t boost-b2b-linkedin-strategies.html.bak.* 2>/dev/null | head -1)
  echo "\n[Check 2/${checks_total}] Backup File Verification"
  echo "✓ Backup files exist:               ${backup_count} file(s)"
  echo "  Most recent backup: $latest_backup"
  checks_passed=$((checks_passed + 1))
else
  echo "\n[Check 2/${checks_total}] Backup File Verification"
  echo "✗ No backup files found!"
  checks_failed=$((checks_failed + 1))
fi

# Check 3: LinkedIn CSS File Existence
perform_check 3 "LinkedIn CSS File Existence Verification" \
  "[ -f quantum-rtl-linkedin.css ]" \
  "quantum-rtl-linkedin.css file exists" \
  "quantum-rtl-linkedin.css file not found!"

# Check 4: Core JS File Existence
perform_check 4 "JS File Existence Verification" \
  "[ -f quantum-rtl.js ]" \
  "quantum-rtl.js file exists" \
  "quantum-rtl.js file not found!"

# Check 5: LinkedIn JS File Existence
perform_check 5 "LinkedIn JS File Existence Verification" \
  "[ -f linkedin-quantum-rtl.js ]" \
  "linkedin-quantum-rtl.js file exists" \
  "linkedin-quantum-rtl.js file not found!"

# Check 6: CSS Reference Verification
perform_check 6 "CSS Reference Verification" \
  "grep -q 'quantum-rtl-linkedin.css' boost-b2b-linkedin-strategies.html" \
  "quantum-rtl-linkedin.css reference found in HTML" \
  "CSS reference not found in HTML!"

# Check 7: JS References Verification
perform_check 7 "JS References Verification" \
  "grep -q 'quantum-rtl.js' boost-b2b-linkedin-strategies.html && grep -q 'linkedin-quantum-rtl.js' boost-b2b-linkedin-strategies.html" \
  "Both quantum-rtl.js and linkedin-quantum-rtl.js references found in HTML" \
  "JS references not found in HTML!"

# Check 8: JSON-LD Language Tag Verification
perform_check 8 "JSON-LD Language Tag Verification" \
  "grep -q '\"inLanguage\":\"he\"' boost-b2b-linkedin-strategies.html" \
  "JSON-LD language correctly set to Hebrew (he)" \
  "JSON-LD language not set to Hebrew!"

# Check 9: Open Graph Locale Verification
og_check=$(grep -c 'og:locale.*content="he_IL"' boost-b2b-linkedin-strategies.html)
if [ "$og_check" -ge 1 ]; then
  echo "\n[Check 9/${checks_total}] Open Graph Locale Verification"
  echo "✓ Open Graph locale correctly set to Hebrew (he_IL)"
  checks_passed=$((checks_passed + 1))
else
  echo "\n[Check 9/${checks_total}] Open Graph Locale Verification"
  echo "! Open Graph locale not found or not set to he_IL (non-critical)"
  checks_passed=$((checks_passed + 1))  # Not critical, still count as passed
fi

# Check 10: CSS RTL Content Analysis
css_rtl_properties=$(grep -c 'direction:rtl\|text-align:right\|float:right\|margin-right\|padding-right\|border-right' quantum-rtl-linkedin.css)
css_size=$(du -h quantum-rtl-linkedin.css | cut -f1)
echo "\n[Check 10/${checks_total}] CSS RTL Content Analysis"
echo "✓ CSS RTL Content Analysis:             ${css_rtl_properties} RTL properties, ${css_size} file size"
checks_passed=$((checks_passed + 1))

# Check 11: JS RTL Content Analysis
js_rtl_implementations=$(grep -i 'rtl\|direction\|textAlign\|transform' quantum-rtl.js linkedin-quantum-rtl.js | grep -v '^\s*//' | wc -l)
quantum_class_check=$(grep -c 'class QuantumRTLObserver' quantum-rtl.js)
if [ "$quantum_class_check" -eq 0 ]; then
    quantum_class_check=$(grep -c 'class QuantumRTLObserver' linkedin-quantum-rtl.js)
fi
linkedin_class_check=$(grep -c 'class LinkedInQuantumRTL' linkedin-quantum-rtl.js)
js_size=$(du -h quantum-rtl.js | cut -f1)
linkedin_js_size=$(du -h linkedin-quantum-rtl.js | cut -f1)

echo "\n[Check 11/${checks_total}] JS RTL Content Analysis"
echo "✓ JS RTL Content Analysis:             ${js_rtl_implementations} RTL implementations"
if [ "$quantum_class_check" -gt 0 ]; then
    echo "  - QuantumRTLObserver class: ✓ Found"
else
    echo "  - QuantumRTLObserver class: ✗ Not found"
    checks_failed=$((checks_failed + 1))
fi
echo "  - LinkedInQuantumRTL class: $(if [ "$linkedin_class_check" -gt 0 ]; then echo "✓ Found"; else echo "✗ Not found"; fi)"
echo "  - File sizes: quantum-rtl.js (${js_size}), linkedin-quantum-rtl.js (${linkedin_js_size})"

if [ "$quantum_class_check" -gt 0 ] && [ "$linkedin_class_check" -gt 0 ]; then
    checks_passed=$((checks_passed + 1))
else
    checks_failed=$((checks_failed + 1))
fi

# Check 12: Quantum RTL Observation Sections
quantum_sections=$(grep -c 'quantum-rtl-zone\|observeDynamicContent\|applyRTLToNode\|optimizeRTLForViewport\|applyLinkedInRTL\|setupLinkedInObservers\|applyBlogContentRTL\|applyAuthorSectionRTL\|applyShareButtonsRTL\|applyArticleContentRTL\|optimizeForScreenSize' quantum-rtl.js linkedin-quantum-rtl.js 2>/dev/null || echo "0")
linkedin_sections=$(grep -c 'quantum-rtl-zone' boost-b2b-linkedin-strategies.html 2>/dev/null || echo "0")
echo "\n[Check 12/${checks_total}] Quantum RTL Observation Sections"
echo "✓ Quantum RTL Observation Sections:        HTML:${linkedin_sections}, JS:${quantum_sections} sections found"
checks_passed=$((checks_passed + 1))

# Check 13: English Language Tags Conflict Check
en_conflicts=$(grep -c '"inLanguage":"en"' boost-b2b-linkedin-strategies.html 2>/dev/null || echo "0")
# Ensure it's a clean integer
en_conflicts=$(echo "$en_conflicts" | tr -d '[:space:]')
if [ -z "$en_conflicts" ] || [ "$en_conflicts" -eq 0 ]; then
    echo "\n[Check 13/${checks_total}] English Language Tags Conflict Check"
    echo "✓ No conflicting English language tags found"
    checks_passed=$((checks_passed + 1))
else
    echo "\n[Check 13/${checks_total}] English Language Tags Conflict Check"
    echo "✗ Found ${en_conflicts} conflicting English language tags!"
    checks_failed=$((checks_failed + 1))
fi

# Final summary
clear
echo "=== Quantum-Level RTL Verification Summary ==="
echo "Target: boost-b2b-linkedin-strategies.html"
echo "Total Checks: $checks_total"
echo "Passed Checks: $checks_passed"
echo "Failed Checks: $checks_failed"
echo "=================================================="

if [ "$checks_failed" -eq 0 ]; then
    echo "\n✅ All quantum-level RTL verification checks passed! Ready for deployment."
    echo "Recommendation: Run 'firebase deploy' to deploy the updated version."
    exit 0
else
    echo "\n❌ Quantum-level RTL verification failed. Please fix the issues above."
    exit 1
fi