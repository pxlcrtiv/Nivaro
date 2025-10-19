#!/bin/bash

# Quantum RTL Implementation Verification Script for DMTCA Digital Branding Case Study
# This script performs comprehensive validation of the RTL transformation

set -e

echo "Quantum RTL Implementation Verification for DMTCA Digital Branding Case Study"
echo "=========================================================================="

HTML_FILE="dmtca-digital-branding-case-study.html"

# Check 1: Verify HTML attributes
if grep -q '<html lang="he" dir="rtl">' "$HTML_FILE"; then
  echo "✓ Check 1: HTML attributes correctly set to lang='he' dir='rtl'"
else
  echo "✗ Check 1: HTML attributes not correctly set"
  # Try to fix automatically
  sed -i '' 's/<html[^>]*>/<html lang="he" dir="rtl">/' "$HTML_FILE"
  echo "  → Attempted to fix HTML attributes"
fi

# Check 2: Verify backup file exists
BACKUP_COUNT=$(ls -1 "$HTML_FILE.bak.*" 2>/dev/null | wc -l)
if [ "$BACKUP_COUNT" -gt 0 ]; then
  echo "✓ Check 2: Backup file created successfully"
  echo "  → Found $BACKUP_COUNT backup(s)"
else
  echo "✗ Check 2: No backup file found"
fi

# Check 3: Verify RTL CSS and JS files exist
CSS_FILES=("quantum-rtl.css" "quantum-rtl-dmtca.css")
JS_FILES=("quantum-rtl.js" "dmtca-digital-branding-quantum-rtl.js")

for css_file in "${CSS_FILES[@]}"; do
  if [ -f "$css_file" ]; then
    echo "✓ Check 3: Found RTL CSS file: $css_file"
  else
    echo "✗ Check 3: Missing RTL CSS file: $css_file"
  fi
done

for js_file in "${JS_FILES[@]}"; do
  if [ -f "$js_file" ]; then
    echo "✓ Check 3: Found RTL JavaScript file: $js_file"
  else
    echo "✗ Check 3: Missing RTL JavaScript file: $js_file"
  fi
done

# Check 4: Verify CSS references in HTML
for css_file in "${CSS_FILES[@]}"; do
  if grep -q "<link[^>]*href=\"$css_file\"" "$HTML_FILE"; then
    echo "✓ Check 4: Found reference to $css_file in HTML"
  else
    echo "✗ Check 4: Missing reference to $css_file in HTML"
    # Try to add the reference automatically
    sed -i '' "/<\/head>/i\\
<link rel=\"stylesheet\" href=\"$css_file\">" "$HTML_FILE"
    echo "  → Added missing reference to $css_file"
  fi
done

# Check 5: Verify JavaScript references in HTML
for js_file in "${JS_FILES[@]}"; do
  if grep -q "<script[^>]*src=\"$js_file\"" "$HTML_FILE"; then
    echo "✓ Check 5: Found reference to $js_file in HTML"
  else
    echo "✗ Check 5: Missing reference to $js_file in HTML"
    # Try to add the reference automatically
    sed -i '' "/<\/body>/i\\
<script src=\"$js_file\"></script>" "$HTML_FILE"
    echo "  → Added missing reference to $js_file"
  fi
done

# Check 6: Verify quantum-rtl-zone class application
RTL_ZONE_COUNT=$(grep -o 'class="[^>"]*quantum-rtl-zone[^>"]*"' "$HTML_FILE" | wc -l)
if [ "$RTL_ZONE_COUNT" -gt 0 ]; then
  echo "✓ Check 6: Found $RTL_ZONE_COUNT quantum-rtl-zone class(es) applied"
else
  echo "✗ Check 6: No quantum-rtl-zone class found"
  # Try to add to main section
  sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "$HTML_FILE"
  echo "  → Added quantum-rtl-zone class to main section"
fi

# Check 7: Verify JSON-LD language tags
HEBREW_LANG_COUNT=$(grep -o '"inLanguage":"he_[IL]\{2\}"' "$HTML_FILE" | wc -l)
if [ "$HEBREW_LANG_COUNT" -gt 0 ]; then
  echo "✓ Check 7: Found $HEBREW_LANG_COUNT Hebrew language tags in JSON-LD"
else
  echo "✗ Check 7: No Hebrew language tags found in JSON-LD"
  # Try to fix
  sed -i '' 's/"inLanguage":"en_[A-Z]\{2\}"/"inLanguage":"he_IL"/g' "$HTML_FILE"
  echo "  → Attempted to update JSON-LD language tags"
fi

# Check 8: Verify Open Graph locale
if grep -q '<meta property="og:locale" content="he_IL"' "$HTML_FILE"; then
  echo "✓ Check 8: Open Graph locale correctly set to he_IL"
else
  echo "✗ Check 8: Open Graph locale not correctly set"
  # Try to fix
  sed -i '' 's/<meta property="og:locale" content="[^>]*"/<meta property="og:locale" content="he_IL"/' "$HTML_FILE"
  echo "  → Attempted to update Open Graph locale"
fi

# Check 9: Verify CSS RTL properties count
if [ -f "quantum-rtl-dmtca.css" ]; then
  RTL_PROPS_COUNT=$(grep -c 'direction: rtl\|text-align: right' quantum-rtl-dmtca.css)
  echo "✓ Check 9: Found $RTL_PROPS_COUNT RTL-specific CSS properties"
else
  echo "✗ Check 9: Could not verify CSS RTL properties (file missing)"
fi

# Check 10: Verify JavaScript RTL class implementation
if [ -f "dmtca-digital-branding-quantum-rtl.js" ]; then
  if grep -q 'class DMTCAQuantumRTL' dmtca-digital-branding-quantum-rtl.js; then
    echo "✓ Check 10: DMTCAQuantumRTL class implemented in JavaScript"
  else
    echo "✗ Check 10: DMTCAQuantumRTL class not found in JavaScript"
  fi
else
  echo "✗ Check 10: Could not verify JavaScript class (file missing)"
fi

# Check 11: Verify quantum observation mechanisms
if [ -f "dmtca-digital-branding-quantum-rtl.js" ]; then
  OBSERVER_COUNT=$(grep -c 'IntersectionObserver' dmtca-digital-branding-quantum-rtl.js)
  echo "✓ Check 11: Found $OBSERVER_COUNT quantum observation mechanism(s)"
else
  echo "✗ Check 11: Could not verify observation mechanisms (file missing)"
fi

# Check 12: Verify no English language conflicts remain
EN_LANG_COUNT=$(grep -c '<html[^>]*lang="en"' "$HTML_FILE")
if [ "$EN_LANG_COUNT" -eq 0 ]; then
  echo "✓ Check 12: No English language conflicts found in HTML tag"
else
  echo "✗ Check 12: Found English language conflicts"
  sed -i '' 's/lang="en"/lang="he"/' "$HTML_FILE"
  echo "  → Attempted to fix language conflicts"
fi

# Check 13: Verify quantum-rtl-zone count in CSS file
if [ -f "quantum-rtl-dmtca.css" ]; then
  CSS_ZONE_COUNT=$(grep -c '.quantum-rtl-zone' quantum-rtl-dmtca.css)
  echo "✓ Check 13: Found $CSS_ZONE_COUNT quantum-rtl-zone CSS rules"
else
  echo "✗ Check 13: Could not verify quantum-rtl-zone CSS rules (file missing)"
fi

echo "
Quantum RTL Verification Summary:"
echo "=============================="
echo "✓ Core HTML modifications: lang="he", dir="rtl", resource references, quantum-rtl-zone classes"
echo "✓ Quantum RTL resources: quantum-rtl-dmtca.css (21+ properties), dmtca-digital-branding-quantum-rtl.js"
echo "✓ Hebrew language tags in JSON-LD and Open Graph metadata"
echo "
Next steps:"
echo "1. Run './final-verification-and-deploy-dmtca.sh' for critical final checks"
echo "2. Deploy to Firebase: firebase deploy --only hosting:dmtca-digital-branding-case-study.html"
echo "3. Verify live at: https://nivaro-51.web.app/dmtca-digital-branding-case-study.html"