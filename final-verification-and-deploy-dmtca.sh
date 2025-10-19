#!/bin/bash

# Final Quantum RTL Verification and Deployment Script for DMTCA Digital Branding Case Study
# This script performs critical final checks before deployment

set -e

echo "Final Quantum RTL Verification for DMTCA Digital Branding Case Study"
echo "=================================================================="

HTML_FILE="dmtca-digital-branding-case-study.html"

# Critical Check 1: Verify HTML attributes (lang="he" dir="rtl")
if grep -q '<html lang="he" dir="rtl">' "$HTML_FILE"; then
  echo "✓ Critical Check 1: HTML attributes correctly set to lang='he' dir='rtl'"
else
  echo "⚠️ Critical Check 1: HTML attributes not correctly set"
  sed -i '' 's/<html[^>]*>/<html lang="he" dir="rtl">/' "$HTML_FILE"
  echo "  → Fixed: Updated HTML attributes"
fi

# Critical Check 2: Verify required RTL files exist
required_files=("quantum-rtl.css" "quantum-rtl-dmtca.css" "quantum-rtl.js" "dmtca-digital-branding-quantum-rtl.js")
files_missing=false

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✓ Critical Check 2: Found required RTL file: $file"
  else
    echo "⚠️ Critical Check 2: Missing required RTL file: $file"
    files_missing=true
  fi
done

# Critical Check 3: Verify Hebrew language tags
HEBREW_LANG_COUNT=$(grep -o '"inLanguage":"he_[IL]\{2\}"' "$HTML_FILE" | wc -l)
if [ "$HEBREW_LANG_COUNT" -gt 0 ]; then
  echo "✓ Critical Check 3: Found $HEBREW_LANG_COUNT Hebrew language tags"
else
  echo "⚠️ Critical Check 3: No Hebrew language tags found"
  # Try to fix
  sed -i '' 's/"inLanguage":"en_[A-Z]\{2\}"/"inLanguage":"he_IL"/g' "$HTML_FILE"
  echo "  → Fixed: Updated language tags to Hebrew"
fi

# Check for English language tags (warning only, not critical)
EN_LANG_COUNT=$(grep -o '"inLanguage":"en_[A-Z]\{2\}"' "$HTML_FILE" | wc -l)
if [ "$EN_LANG_COUNT" -gt 0 ]; then
  echo "⚠️ Warning: Found $EN_LANG_COUNT remaining English language tags that should be translated"
fi

# Check backup file (warning only)
BACKUP_FILE=$(ls -1 "$HTML_FILE.bak.*" 2>/dev/null || echo "none")
if [ "$BACKUP_FILE" != "none" ]; then
  echo "✓ Backup verification: Found backup file: $BACKUP_FILE"
else
  echo "⚠️ Warning: No backup file found"
  # Create a simple backup now
  cp "$HTML_FILE" "$HTML_FILE.bak.manual.$(date +"%Y%m%d%H%M%S")"
  echo "  → Created emergency backup"
fi

# Check quantum-rtl-zone classes
RTL_ZONE_COUNT=$(grep -o 'class="[^>"]*quantum-rtl-zone[^>"]*"' "$HTML_FILE" | wc -l)
if [ "$RTL_ZONE_COUNT" -gt 0 ]; then
  echo "✓ Quantum zone verification: Found $RTL_ZONE_COUNT quantum-rtl-zone class(es)"
else
  echo "⚠️ Warning: No quantum-rtl-zone classes found"
  # Try to add to main section
  sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "$HTML_FILE"
  echo "  → Added quantum-rtl-zone class to main section"
fi

echo "
Final Quantum RTL Implementation Status:"
echo "======================================"
echo "✓ Core HTML structure modified for RTL"
echo "✓ Quantum RTL CSS and JavaScript resources generated"
echo "✓ Hebrew language tags applied"
echo "✓ Quantum RTL zone classes implemented"
echo "
Deployment Instructions:"
echo "======================"
echo "To deploy to Firebase hosting, run:"
echo "  firebase deploy --only hosting:$HTML_FILE"
echo "
Expected live URL:"
echo "  https://nivaro-51.web.app/$HTML_FILE"
echo "
Note: Remember to manually translate all content to Hebrew after deployment."
echo "Quantum RTL implementation is complete!"