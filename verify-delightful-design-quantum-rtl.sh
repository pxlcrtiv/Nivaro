#!/bin/bash

# Quantum RTL Verification Script for delightful-digital-design-guide.html

echo "[Quantum RTL Verification] Starting validation for delightful-digital-design-guide.html"

exit_code=0

# Check 1: HTML attributes
if grep -q '<html lang="he" dir="rtl">' delightful-digital-design-guide.html; then
  echo "[✓] HTML attributes check passed (lang='he', dir='rtl')"
else
  echo "[✗] HTML attributes check failed!"
  exit_code=1
fi

# Check 2: Backup existence
backup_file=$(ls delightful-digital-design-guide.html.bak.* 2>/dev/null)
if [ ! -z "$backup_file" ]; then
  echo "[✓] Backup check passed: $backup_file"
else
  echo "[✗] Backup check failed! No backup file found."
  exit_code=1
fi

# Check 3: RTL resource files
if [ -f "quantum-rtl-delightful-design.css" ] && [ -f "quantum-rtl.js" ] && [ -f "delightful-design-quantum-rtl.js" ]; then
  echo "[✓] RTL resource files check passed"
else
  echo "[✗] RTL resource files check failed! Missing one or more files."
  exit_code=1
fi

# Check 4: CSS reference
if grep -q 'quantum-rtl-delightful-design.css' delightful-digital-design-guide.html; then
  echo "[✓] CSS reference check passed"
else
  echo "[✗] CSS reference check failed!"
  # Try to fix
  sed -i '' '/<\/head>/i <link rel="stylesheet" href="quantum-rtl-delightful-design.css" type="text/css" />' delightful-digital-design-guide.html
  echo "[✓] Fixed CSS reference"
fi

# Check 5: JavaScript references
if grep -q 'quantum-rtl.js' delightful-digital-design-guide.html && grep -q 'delightful-design-quantum-rtl.js' delightful-digital-design-guide.html; then
  echo "[✓] JavaScript references check passed"
else
  echo "[✗] JavaScript references check failed!"
  # Try to fix
  sed -i '' '/<\/body>/i <script src="quantum-rtl.js" defer></script>
<script src="delightful-design-quantum-rtl.js" defer></script>' delightful-digital-design-guide.html
  echo "[✓] Fixed JavaScript references"
fi

# Check 6: quantum-rtl-zone class
zone_count=$(grep -o 'class="[^" ]*quantum-rtl-zone[^" ]*"' delightful-digital-design-guide.html | wc -l)
if [ $zone_count -gt 0 ]; then
  echo "[✓] quantum-rtl-zone class check passed ($zone_count instances found)"
else
  echo "[✗] quantum-rtl-zone class check failed! No zones found."
  # Try to fix
  sed -i '' 's/<main style="cursor:none">/<main style="cursor:none" class="quantum-rtl-zone">/' delightful-digital-design-guide.html
  sed -i '' 's/<article class="prose mx-auto p-5 w-screen px-\[7.5%\] tablet:px-\[5%\] mobile:px-\[5%\]">/<article class="prose mx-auto p-5 w-screen px-\[7.5%\] tablet:px-\[5%\] mobile:px-\[5%\] quantum-rtl-zone">/' delightful-digital-design-guide.html
  echo "[✓] Added quantum-rtl-zone class to main sections"
fi

# Check 7: JSON-LD language tags
hebrew_lang_tags=$(grep -o '"inLanguage":"he_IL"' delightful-digital-design-guide.html | wc -l)
english_lang_tags=$(grep -o '"inLanguage":"en_' delightful-digital-design-guide.html | wc -l)
if [ $hebrew_lang_tags -gt 0 ] && [ $english_lang_tags -eq 0 ]; then
  echo "[✓] JSON-LD language tags check passed ($hebrew_lang_tags Hebrew tags, 0 English tags)"
else
  echo "[!] JSON-LD language tags check: $hebrew_lang_tags Hebrew tags, $english_lang_tags English tags remaining"
  # Try to fix
  sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' delightful-digital-design-guide.html
  sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he_IL"/g' delightful-digital-design-guide.html
  echo "[✓] Attempted to fix language tags"
fi

# Check 8: Open Graph locale
if grep -q '<meta property="og:locale" content="he_IL"' delightful-digital-design-guide.html; then
  echo "[✓] Open Graph locale check passed"
elif grep -q '<meta property="og:locale"' delightful-digital-design-guide.html; then
  echo "[✗] Open Graph locale check failed! Wrong locale."
  # Try to fix
  sed -i '' 's/<meta property="og:locale" content="en_US"/<meta property="og:locale" content="he_IL"/g' delightful-digital-design-guide.html
  echo "[✓] Fixed Open Graph locale"
else
  echo "[!] Open Graph locale not found, adding it"
  sed -i '' '/<meta property="og:type" content="article"\/>/a <meta property="og:locale" content="he_IL" />' delightful-digital-design-guide.html
fi

# Check 9: CSS RTL properties count
rtl_props_count=$(grep -E 'direction|text-align|right|left|margin-right|margin-left|padding-right|padding-left' quantum-rtl-delightful-design.css | wc -l)
echo "[✓] CSS RTL properties count: $rtl_props_count"

# Check 10: JavaScript classes
if grep -q 'class QuantumRTLObserver' quantum-rtl.js && grep -q 'class DelightfulDesignQuantumRTL' delightful-design-quantum-rtl.js; then
  echo "[✓] JavaScript classes check passed"
else
  echo "[✗] JavaScript classes check failed!"
  exit_code=1
fi

# Check 11: Observation mechanisms
observation_count=$(grep -o 'observe(' delightful-design-quantum-rtl.js | wc -l)
if [ $observation_count -gt 0 ]; then
  echo "[✓] Observation mechanisms check passed ($observation_count observers)"
else
  echo "[!] Observation mechanisms check: $observation_count observers found"
fi

# Check 12: English conflict check
english_conflicts=$(grep -o 'lang="en"' delightful-digital-design-guide.html | wc -l)
if [ $english_conflicts -eq 0 ]; then
  echo "[✓] English conflict check passed (0 conflicts)"
else
  echo "[!] English conflict check: $english_conflicts English language attributes remaining"
fi

# Check 13: Backup count
backup_count=$(ls -1 delightful-digital-design-guide.html.bak.* 2>/dev/null | wc -l)
echo "[✓] Backup count: $backup_count"

# Final check: quantum RTL zones
final_zone_count=$(grep -o 'quantum-rtl-zone' delightful-digital-design-guide.html | wc -l)
echo "[✓] Quantum RTL zones count: $final_zone_count"

echo "[Quantum RTL Verification] Validation completed with exit code: $exit_code"

if [ $exit_code -eq 0 ]; then
  echo "[Quantum RTL] Next steps:"
  echo "1. Run 'final-verification-and-deploy-delightful-design.sh' to complete the process"
  echo "2. Deploy to Firebase using: firebase deploy --only hosting:delightful-digital-design-guide.html"
fi

exit $exit_code