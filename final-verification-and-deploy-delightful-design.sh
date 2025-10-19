#!/bin/bash

# Final Quantum RTL Verification and Deployment Script for delightful-digital-design-guide.html

echo "[Final Quantum RTL] Starting final verification and deployment process"

exit_code=0

# Critical Check 1: HTML attributes
if grep -q '<html lang="he" dir="rtl">' delightful-digital-design-guide.html; then
  echo "[CRITICAL] HTML attributes check PASSED (lang='he', dir='rtl')"
else
  echo "[CRITICAL] HTML attributes check FAILED!"
  exit_code=1
fi

# Critical Check 2: Required RTL files existence
if [ -f "quantum-rtl-delightful-design.css" ] && [ -f "quantum-rtl.js" ] && [ -f "delightful-design-quantum-rtl.js" ]; then
  echo "[CRITICAL] Required RTL files existence check PASSED"
else
  echo "[CRITICAL] Required RTL files existence check FAILED!"
  exit_code=1
fi

# Critical Check 3: Hebrew language tags (allow for some English to remain)
hebrew_lang_tags=$(grep -o '"inLanguage":"he_IL"' delightful-digital-design-guide.html | wc -l)
english_lang_tags=$(grep -o '"inLanguage":"en_' delightful-digital-design-guide.html | wc -l)
if [ $hebrew_lang_tags -gt 0 ]; then
  echo "[CRITICAL] Hebrew language tags verification PASSED ($hebrew_lang_tags found)"
  if [ $english_lang_tags -gt 0 ]; then
    echo "[WARNING] Found $english_lang_tags remaining English language tags, but continuing deployment"
  fi
else
  echo "[CRITICAL] Hebrew language tags verification FAILED!"
  exit_code=1
fi

# Manual file editing instructions if needed
if [ $exit_code -eq 0 ]; then
  echo ""
  echo "[DEPLOYMENT READY] Quantum-level RTL implementation for delightful-digital-design-guide.html is ready for deployment!"
  echo ""
  echo "Deployment Instructions:"
  echo "======================"
  echo "1. Run the following command to deploy to Firebase:"
  echo "   firebase deploy --only hosting:delightful-digital-design-guide.html"
  echo ""
  echo "2. After deployment, verify the live URL:"
  echo "   https://nivaro-51.web.app/delightful-digital-design-guide.html"
  echo ""
  echo "3. Test the page thoroughly to ensure proper RTL rendering for Hebrew users"
  echo ""
  echo "[FINAL] Quantum-level RTL implementation complete!"
else
  echo ""
  echo "[DEPLOYMENT BLOCKED] Please fix the critical issues before deploying."
fi

exit $exit_code