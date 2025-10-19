#!/bin/bash

# Quantum RTL Implementation Status Check
# For: strategy-and-planning-services.html
# This script verifies all quantum-level RTL components are properly implemented

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

FILE="strategy-and-planning-services.html"
ALL_PASSED=true

echo -e "\n${GREEN}=== Quantum RTL Implementation Status Check ===${NC}\n"
echo -e "Target file: ${FILE}\n"

# Check 1: HTML language and direction attributes
echo -e "${GREEN}1. HTML Language & Direction Attributes:${NC}"
if grep -q 'lang="he" dir="rtl"' "$FILE"; then
  echo -e "   ${GREEN}✓ PASS${NC}: HTML attributes properly set to lang=\"he\" dir=\"rtl\""
else
  echo -e "   ${RED}✗ FAIL${NC}: HTML attributes not properly configured"
  ALL_PASSED=false
fi

# Check 2: Backup files existence
echo -e "\n${GREEN}2. Backup Files:${NC}"
BACKUP_COUNT=$(ls -1 "${FILE}.bak."* 2>/dev/null | wc -l)
if [ "$BACKUP_COUNT" -gt 0 ]; then
  echo -e "   ${GREEN}✓ PASS${NC}: Found $BACKUP_COUNT backup file(s)"
else
  echo -e "   ${YELLOW}! WARNING${NC}: No backup files found"
  ALL_PASSED=false
fi

# Check 3: Critical RTL resource files existence
echo -e "\n${GREEN}3. RTL Resource Files:${NC}"
CRITICAL_RTL_FILES=("quantum-rtl.css" "quantum-rtl.js")
CRITICAL_FILES_EXIST=true

for rtl_file in "${CRITICAL_RTL_FILES[@]}"; do
  if [ -f "$rtl_file" ]; then
    echo -e "   ${GREEN}✓ PASS${NC}: $rtl_file exists"
  else
    echo -e "   ${RED}✗ FAIL${NC}: $rtl_file does not exist"
    CRITICAL_FILES_EXIST=false
  fi
done

# Check non-critical files with warning only
if [ ! -f "hebrew-fonts.css" ]; then
  echo -e "   ${YELLOW}! WARNING${NC}: hebrew-fonts.css does not exist (non-critical)"
fi

if [ "$CRITICAL_FILES_EXIST" = true ]; then
  echo -e "   ${GREEN}✓ PASS${NC}: All critical RTL resource files exist"
else
  echo -e "   ${RED}✗ FAIL${NC}: Missing critical RTL resource files"
  ALL_PASSED=false
fi

# Check 4: CSS/JS references in HTML
echo -e "\n${GREEN}4. CSS/JS References:${NC}"
CRITICAL_REF_COUNT=0

for rtl_file in "${CRITICAL_RTL_FILES[@]}"; do
  if grep -q "$rtl_file" "$FILE"; then
    echo -e "   ${GREEN}✓ PASS${NC}: Found reference to $rtl_file"
    CRITICAL_REF_COUNT=$((CRITICAL_REF_COUNT+1))
  else
    echo -e "   ${RED}✗ FAIL${NC}: No reference to critical file $rtl_file"
  fi
done

# Check non-critical file references with warning only
if ! grep -q "hebrew-fonts.css" "$FILE"; then
  echo -e "   ${YELLOW}! WARNING${NC}: No reference to hebrew-fonts.css (non-critical)"
fi

if [ "$CRITICAL_REF_COUNT" -eq "${#CRITICAL_RTL_FILES[@]}" ]; then
  echo -e "   ${GREEN}✓ PASS${NC}: All critical RTL resource references present"
else
  echo -e "   ${RED}✗ FAIL${NC}: Missing critical RTL resource references"
  ALL_PASSED=false
fi

# Check 5: Quantum RTL Zone class
echo -e "\n${GREEN}5. Quantum RTL Zone Class:${NC}"
if grep -q 'class="quantum-rtl-zone"' "$FILE"; then
  echo -e "   ${GREEN}✓ PASS${NC}: Found quantum-rtl-zone class"
else
  echo -e "   ${RED}✗ FAIL${NC}: quantum-rtl-zone class not found"
  ALL_PASSED=false
fi

# Check 6: Hebrew language tags in JSON-LD
echo -e "\n${GREEN}6. Hebrew Language Tags in JSON-LD:${NC}"
if grep -q '"inLanguage":"he_IL"' "$FILE" || grep -q '"inLanguage":"he-IL"' "$FILE"; then
  echo -e "   ${GREEN}✓ PASS${NC}: Found Hebrew language tags in JSON-LD"
else
  echo -e "   ${RED}✗ FAIL${NC}: Hebrew language tags not found in JSON-LD"
  ALL_PASSED=false
fi

# Summary
echo -e "\n${GREEN}=== Summary ===${NC}"
if [ "$ALL_PASSED" = true ]; then
  echo -e "${GREEN}✓ ALL CHECKS PASSED${NC}: Quantum RTL implementation is complete"
else
  echo -e "${RED}✗ SOME CHECKS FAILED${NC}: Please address the issues above"
fi

echo -e "\n${GREEN}=== Deployment Instructions ===${NC}"
echo -e "Run: ${YELLOW}firebase deploy --only hosting:strategy-and-planning-services.html${NC}"
echo -e "Expected live URL: ${YELLOW}https://nivaro-51.web.app/strategy-and-planning-services.html${NC}\n"