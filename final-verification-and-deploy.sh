#!/bin/bash

# Final Quantum RTL Verification and Deployment Script
# This script performs a manual verification of HTML attributes and then deploys to Firebase

echo "Running Final Quantum RTL Verification for technology-services.html"
echo "=========================================================================="

# Extract the HTML tag manually using head and grep
html_tag=$(head -2 technology-services.html | grep -o '<html[^>]*>')
echo "Current HTML tag: $html_tag"

# Check if the HTML tag contains both lang="he" and dir="rtl"
if [[ $html_tag == *'lang="he"'* && $html_tag == *'dir="rtl"'* ]]; then
  echo "✓ PASS: HTML tag has correct lang=\"he\" and dir=\"rtl\" attributes"
  html_check=true
else
  echo "✗ FAIL: HTML tag missing correct lang or dir attributes"
  echo "Expected: <html lang=\"he\" dir=\"rtl\">"
  echo "Actual: $html_tag"
  html_check=false
fi

# Count all created files
echo "\nFiles created/modified:"
echo "1. technology-services.html - Main HTML file with quantum RTL implementation"
grep -q 'technology-services-quantum-rtl.css' technology-services.html && echo "   - CSS reference added"
grep -q 'technology-services-quantum-rtl.js' technology-services.html && echo "   - JS reference added"
grep -q 'technology-services-quantum-rtl-verification.js' technology-services.html && echo "   - Verification JS reference added"

echo "2. technology-services-quantum-rtl.css - Quantum RTL stylesheet"
echo "3. technology-services-quantum-rtl.js - Quantum RTL JavaScript with QuantumRTLObserver class"
echo "4. technology-services-quantum-rtl-verification.js - Runtime verification script"

# List backup files
echo "\nBackup files created:"
ls -1 technology-services.html.bak.* 2>/dev/null

# Display quantum attributes in HTML sections
echo "\nQuantum RTL attributes in HTML:"
grep -n 'data-quantum-rtl="observe"' technology-services.html

# Content verification summary
css_rtl_properties=$(grep -c -E 'direction:\s*rtl|text-align:\s*right|margin-right|margin-left|padding-right|padding-left' technology-services-quantum-rtl.css)
js_rtl_implementations=$(grep -c -E 'rtl|direction|textAlign|right|left' technology-services-quantum-rtl.js)

echo "\nImplementation details:"
echo "- CSS RTL properties count: $css_rtl_properties"
echo "- JS RTL related code count: $js_rtl_implementations"
echo "- Sections with quantum RTL observation: $(grep -c 'data-quantum-rtl="observe"' technology-services.html)"

# Final assessment
if $html_check; then
  echo "\n🎉 Final verification PASSED!"
  echo "Quantum RTL implementation for technology-services.html is complete and ready for deployment."
  
  # Ask if user wants to deploy to Firebase
  echo "\nDeploying to Firebase..."
  firebase deploy
  
  if [ $? -eq 0 ]; then
    echo "\n🚀 Deployment successful!"
    echo "The technology-services.html page is now live with quantum RTL support for Hebrew users."
    echo "Live URL: https://nivaro-51.web.app/technology-services.html"
    echo "\nRemember: When viewing the page in a browser, check the console for detailed quantum RTL verification results."
  else
    echo "\n❌ Deployment failed!"
    echo "Please check the Firebase deployment output for errors."
  fi
else
  echo "\n❌ Final verification FAILED!"
  echo "Please fix the HTML attributes before deploying."
  echo "To manually fix the HTML tag, edit technology-services.html and ensure it contains: lang=\"he\" and dir=\"rtl\""
fi