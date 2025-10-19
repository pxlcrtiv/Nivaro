#!/bin/bash

echo "🔍 QUANTUM RTL STATUS CHECK FOR QUICKX-CRYPTO-CASE-STUDY.HTML 🔍"
echo "=========================================================="

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Check 1: HTML Attributes (lang="he" dir="rtl")
echo -n "✅ HTML Attributes Check: "
if grep -q 'lang="he" dir="rtl"' quickx-crypto-case-study.html; then
  echo -e "${GREEN}PASS${NC}"
else
  echo -e "${RED}FAIL${NC} - Expected lang=\"he\" dir=\"rtl\""
fi

# Check 2: Backup Files Count
echo -n "✅ Backup Files Check: "
backup_count=$(ls -la quickx-crypto-case-study.html.bak* 2>/dev/null | wc -l)
if [ $backup_count -ge 1 ]; then
  echo -e "${GREEN}PASS${NC} - Found $backup_count backup files"
else
  echo -e "YELLOW - WARNING: No backup files found${NC}"
fi

# Check 3: RTL Resource Files Existence
echo -n "✅ RTL Files Check: "
if [ -f "quantum-rtl.css" ] && [ -f "quantum-rtl.js" ]; then
  echo -e "${GREEN}PASS${NC} - Required RTL files exist"
else
  echo -e "${YELLOW}WARNING: Missing RTL resource files${NC}"
fi

# Check 4: CSS and JS References
echo -n "✅ CSS/JS References Check: "
if grep -q 'quantum-rtl.css' quickx-crypto-case-study.html && grep -q 'quantum-rtl.js' quickx-crypto-case-study.html; then
  echo -e "${GREEN}PASS${NC}"
else
  echo -e "${YELLOW}WARNING: Missing CSS/JS references${NC}"
fi

# Check 5: Quantum RTL Zone Classes
echo -n "✅ Quantum RTL Zones Check: "
zone_count=$(grep -o 'class="quantum-rtl-zone"' quickx-crypto-case-study.html | wc -l)
if [ $zone_count -ge 1 ]; then
  echo -e "${GREEN}PASS${NC} - Found $zone_count quantum-rtl-zone classes"
else
  echo -e "${RED}FAIL${NC} - No quantum-rtl-zone classes found"
fi

# Check 6: Hebrew Language Tags in JSON-LD
echo -n "✅ Hebrew Language Tags Check: "
if grep -q '"inLanguage":"he_IL"' quickx-crypto-case-study.html && grep -q '"inLanguage":"he-IL"' quickx-crypto-case-study.html; then
  echo -e "${GREEN}PASS${NC}"
else
  echo -e "${RED}FAIL${NC} - Missing Hebrew language tags"
fi

echo "\n=========================================================="
echo "🚀 DEPLOYMENT INSTRUCTIONS:"
echo "Run: firebase deploy --only hosting:quickx-crypto-case-study.html"
echo "Expected Live URL: https://nivaro-51.web.app/quickx-crypto-case-study.html"
echo "=========================================================="