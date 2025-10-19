#!/bin/bash

# Status Check for essential-link-building-guide.html RTL Implementation
HTML_FILE="essential-link-building-guide.html"

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo "\n📊 Quantum RTL Implementation Status Check for ${HTML_FILE}\n"

# Check HTML attributes
if grep -q '<html.*lang="he".*dir="rtl"' "${HTML_FILE}"; then
  echo -e "[1] HTML attributes: ${GREEN}✅ PASS${NC} - lang=\"he\" dir=\"rtl\""
elif grep -q '<html.*dir="rtl"' "${HTML_FILE}"; then
  echo -e "[1] HTML attributes: ${YELLOW}⚠️ PARTIAL${NC} - dir=\"rtl\" but missing lang=\"he\""
elif grep -q '<html.*lang="he"' "${HTML_FILE}"; then
  echo -e "[1] HTML attributes: ${YELLOW}⚠️ PARTIAL${NC} - lang=\"he\" but missing dir=\"rtl\""
else
  echo -e "[1] HTML attributes: ${RED}❌ FAIL${NC} - Missing RTL attributes"
fi

# Check backup files
BACKUP_COUNT=$(ls -1 essential-link-building-guide.html.bak.* 2>/dev/null | wc -l)
echo -e "[2] Backup files: ${GREEN}✅ FOUND${NC} - ${BACKUP_COUNT} backup file(s)"

# Check RTL files existence
echo -n "[3] RTL files: "
if [ -f "quantum-rtl-essential-link-building.css" ] && \
   [ -f "essential-link-building-quantum-rtl.js" ] && \
   [ -f "quantum-rtl.js" ]; then
  echo -e "${GREEN}✅ ALL FOUND${NC}"
else
  echo -e "${RED}❌ MISSING${NC}"
  [ ! -f "quantum-rtl-essential-link-building.css" ] && echo "    - Missing: quantum-rtl-essential-link-building.css"
  [ ! -f "essential-link-building-quantum-rtl.js" ] && echo "    - Missing: essential-link-building-quantum-rtl.js"
  [ ! -f "quantum-rtl.js" ] && echo "    - Missing: quantum-rtl.js"
fi

# Check references in HTML
echo -n "[4] CSS reference: "
grep -q 'quantum-rtl-essential-link-building.css' "${HTML_FILE}" && \
  echo -e "${GREEN}✅ PRESENT${NC}" || echo -e "${RED}❌ MISSING${NC}"

echo -n "[5] JS references: "
if grep -q 'quantum-rtl.js' "${HTML_FILE}" && grep -q 'essential-link-building-quantum-rtl.js' "${HTML_FILE}"; then
  echo -e "${GREEN}✅ BOTH PRESENT${NC}"
else
  echo -e "${RED}❌ MISSING${NC}"
  ! grep -q 'quantum-rtl.js' "${HTML_FILE}" && echo "    - Missing: quantum-rtl.js"
  ! grep -q 'essential-link-building-quantum-rtl.js' "${HTML_FILE}" && echo "    - Missing: essential-link-building-quantum-rtl.js"
fi

# Check quantum-rtl-zone classes
ZONE_COUNT=$(grep -o 'quantum-rtl-zone' "${HTML_FILE}" | wc -l)
echo -e "[6] Quantum RTL zones: ${GREEN}✅ FOUND${NC} - ${ZONE_COUNT} zone(s)"

# Check language tags
HEBREW_TAGS=$(grep -E '"inLanguage":"he_IL"|"inLanguage":"he-IL"|lang="he"' "${HTML_FILE}" | grep -v '"alternate"' | wc -l)
echo -e "[7] Hebrew language tags: ${GREEN}✅ FOUND${NC} - ${HEBREW_TAGS} tag(s)"

echo "\n🎯 Quantum RTL Implementation Status Check Complete\n"
echo "Deployment command: firebase deploy --only hosting:essential-link-building-guide.html"
echo "Expected live URL: https://nivaro-51.web.app/essential-link-building-guide.html"