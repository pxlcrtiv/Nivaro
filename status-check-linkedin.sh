#!/bin/bash

# Quantum RTL Implementation Status Checker for LinkedIn Page
# Based on QUANTUM-RTL-AUDIT.md and RTL-IMPLEMENTATION-SUMMARY.md

echo "🔍 Starting LinkedIn Page RTL Implementation Status Check..."
echo "=======================================================\n"

HTML_FILE="boost-b2b-linkedin-strategies.html"
PASSED=0
WARNINGS=0
FAILED=0

check_html_attributes() {
  echo "1. Checking HTML Language Attributes (lang=\"he\", dir=\"rtl\")"
  if grep -q '<html lang="he" dir="rtl">' "$HTML_FILE"; then
    echo "✅ PASSED: HTML language and direction attributes correctly set"
    PASSED=$((PASSED+1))
  else
    echo "❌ FAILED: HTML language or direction attributes missing or incorrect"
    FAILED=$((FAILED+1))
  fi
  echo
}

check_backup_file() {
  echo "2. Checking Backup System"
  BACKUP_FILE="${HTML_FILE}.bak.*"
  if ls $BACKUP_FILE 2>/dev/null; then
    echo "✅ PASSED: Backup file exists: $(ls -t $BACKUP_FILE | head -1)"
    PASSED=$((PASSED+1))
  else
    echo "⚠️ WARNING: No backup file found"
    WARNINGS=$((WARNINGS+1))
  fi
  echo
}

check_quantum_rtl_zone() {
  echo "3. Checking quantum-rtl-zone Class Implementation"
  if grep -q 'class="[^" ]*quantum-rtl-zone[^" ]*"' "$HTML_FILE"; then
    echo "✅ PASSED: quantum-rtl-zone class found on main elements"
    PASSED=$((PASSED+1))
  else
    echo "❌ FAILED: quantum-rtl-zone class not found"
    FAILED=$((FAILED+1))
  fi
  echo
}

check_jsonld_language() {
  echo "4. Checking JSON-LD Hebrew Language Tags"
  if grep -q '"inLanguage":"he"' "$HTML_FILE"; then
    echo "✅ PASSED: JSON-LD inLanguage tags correctly set to Hebrew"
    PASSED=$((PASSED+1))
  else
    echo "❌ FAILED: JSON-LD inLanguage tags not correctly set"
    FAILED=$((FAILED+1))
  fi
  echo
}

check_rtl_css() {
  echo "5. Checking RTL CSS References"
  CSS_OK=false
  WARNING_MSG=""
  
  if grep -q 'href="quantum-rtl.css"' "$HTML_FILE"; then
    if grep -q 'href="quantum-rtl.css"' "$HTML_FILE" | grep -q '\\$'; then
      WARNING_MSG="⚠️ WARNING: quantum-rtl.css reference has trailing backslash error"
      WARNINGS=$((WARNINGS+1))
    else
      echo "✅ PASSED: quantum-rtl.css reference found"
    fi
    CSS_OK=true
  else
    echo "❌ FAILED: quantum-rtl.css reference missing"
    FAILED=$((FAILED+1))
  fi
  
  if grep -q 'href="quantum-rtl-linkedin.css"' "$HTML_FILE"; then
    echo "✅ PASSED: quantum-rtl-linkedin.css reference found"
    PASSED=$((PASSED+1))
  else
    echo "❌ FAILED: quantum-rtl-linkedin.css reference missing"
    FAILED=$((FAILED+1))
  fi
  
  if [ ! -z "$WARNING_MSG" ]; then
    echo "$WARNING_MSG"
  fi
  echo
}

check_rtl_js() {
  echo "6. Checking RTL JavaScript References"
  if grep -q 'src="quantum-rtl.js"' "$HTML_FILE"; then
    echo "✅ PASSED: quantum-rtl.js reference found"
    PASSED=$((PASSED+1))
  else
    echo "⚠️ WARNING: quantum-rtl.js reference missing"
    WARNINGS=$((WARNINGS+1))
  fi
  echo
}

check_custom_rtl_js() {
  echo "7. Checking Custom RTL JavaScript"
  if [ -f "linkedin-quantum-rtl.js" ]; then
    echo "✅ PASSED: linkedin-quantum-rtl.js exists"
    PASSED=$((PASSED+1))
  else
    echo "⚠️ WARNING: linkedin-quantum-rtl.js not found"
    WARNINGS=$((WARNINGS+1))
  fi
  echo
}

check_hebrew_fonts() {
  echo "8. Checking Hebrew Fonts Support"
  if grep -q 'hebrew-fonts.css' "$HTML_FILE"; then
    echo "✅ PASSED: hebrew-fonts.css reference found"
    PASSED=$((PASSED+1))
  else
    echo "⚠️ WARNING: hebrew-fonts.css reference missing"
    WARNINGS=$((WARNINGS+1))
  fi
  echo
}

check_html_structure() {
  echo "9. Checking Main Content Structure"
  if grep -q '<main' "$HTML_FILE" && grep -q '<article' "$HTML_FILE"; then
    echo "✅ PASSED: Main content structure with article exists"
    PASSED=$((PASSED+1))
  else
    echo "❌ FAILED: Main content structure not properly implemented"
    FAILED=$((FAILED+1))
  fi
  echo
}

# Run all checks
check_html_attributes
check_backup_file
check_quantum_rtl_zone
check_jsonld_language
check_rtl_css
check_rtl_js
check_custom_rtl_js
check_hebrew_fonts
check_html_structure

# Summary
echo "======================================================="
echo "📊 RTL Implementation Status Summary:"
echo "✅ Passed: $PASSED"
echo "⚠️ Warnings: $WARNINGS"
echo "❌ Failed: $FAILED"
echo "======================================================="

# Deployment readiness
if [ $FAILED -eq 0 ]; then
  echo "🚀 DEPLOYMENT READY: All critical RTL implementation requirements met"
  echo "📋 Deploy command: firebase deploy --only hosting:$HTML_FILE"
  echo "🌐 Expected live URL: https://nivaro-51.web.app/$HTML_FILE"
  exit 0
else
  echo "❌ CRITICAL FAILURE: Fix the failed checks before deployment"
  exit 1
fi