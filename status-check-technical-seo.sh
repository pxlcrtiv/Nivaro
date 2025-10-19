#!/bin/bash

# Quantum RTL Implementation Status Check for technical-seo-basics.html
# Verifies critical RTL components are properly implemented

echo "========================================="
echo "QUANTUM RTL IMPLEMENTATION STATUS CHECK"
echo "File: technical-seo-basics.html"
echo "========================================="

# Color codes
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Files to check
HTML_FILE="technical-seo-basics.html"
CRITICAL_RTL_FILES=("quantum-rtl.css" "quantum-rtl.js")
NON_CRITICAL_RTL_FILES=("hebrew-fonts.css")

# Checks counter
PASSED_CHECKS=0
WARNING_CHECKS=0
FAILED_CHECKS=0

# Check 1: HTML Attributes - lang="he" and dir="rtl"
echo -n "CHECK 1: HTML Attributes (lang=he, dir=rtl) - "
if grep -q 'lang="he" dir="rtl"' "$HTML_FILE"; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
else
  echo -e "${RED}FAILED${NC}"
  FAILED_CHECKS=$((FAILED_CHECKS+1))
fi

# Check 2: Backup File Existence
echo -n "CHECK 2: Backup Files - "
if ls "$HTML_FILE.bak."* 1> /dev/null 2>&1; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
else
  echo -e "${YELLOW}WARNING: No backup files found${NC}"
  WARNING_CHECKS=$((WARNING_CHECKS+1))
fi

# Check 3: Quantum RTL Zone Class
echo -n "CHECK 3: Quantum RTL Zone Class - "
if grep -q '<main class="quantum-rtl-zone"' "$HTML_FILE"; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
else
  echo -e "${RED}FAILED: quantum-rtl-zone class not found on main element${NC}"
  FAILED_CHECKS=$((FAILED_CHECKS+1))
fi

# Check 4: Hebrew Language Tags in JSON-LD
echo -n "CHECK 4: Hebrew Language Tags in JSON-LD - "
if grep -q '"inLanguage":"he_IL"' "$HTML_FILE" && grep -q '"inLanguage":"he-IL"' "$HTML_FILE"; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
else
  echo -e "${RED}FAILED: Hebrew language tags not found or incomplete${NC}"
  FAILED_CHECKS=$((FAILED_CHECKS+1))
fi

# Check 5: Critical RTL Resource Files
echo -n "CHECK 5: Critical RTL Resource Files - "
ALL_CRITICAL_FILES_EXIST=true
for file in "${CRITICAL_RTL_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo -e "${RED}FAILED: $file missing${NC}"
    ALL_CRITICAL_FILES_EXIST=false
    FAILED_CHECKS=$((FAILED_CHECKS+1))
    break
  fi
done

if [ "$ALL_CRITICAL_FILES_EXIST" = true ]; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
fi

# Check 6: Non-Critical RTL Resource Files (Warnings only)
echo -n "CHECK 6: Non-Critical RTL Resource Files - "
ALL_NON_CRITICAL_FILES_EXIST=true
for file in "${NON_CRITICAL_RTL_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo -e "${YELLOW}WARNING: $file missing${NC}"
    ALL_NON_CRITICAL_FILES_EXIST=false
    WARNING_CHECKS=$((WARNING_CHECKS+1))
  fi
done

if [ "$ALL_NON_CRITICAL_FILES_EXIST" = true ]; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
fi

# Check 7: Critical CSS/JS References
echo -n "CHECK 7: Critical CSS/JS References - "
ALL_CRITICAL_REFS_EXIST=true
for file in "${CRITICAL_RTL_FILES[@]}"; do
  if ! grep -q "$file" "$HTML_FILE"; then
    echo -e "${RED}FAILED: No reference to $file${NC}"
    ALL_CRITICAL_REFS_EXIST=false
    FAILED_CHECKS=$((FAILED_CHECKS+1))
    break
  fi
done

if [ "$ALL_CRITICAL_REFS_EXIST" = true ]; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
fi

# Check 8: Non-Critical CSS/JS References (Warnings only)
echo -n "CHECK 8: Non-Critical CSS/JS References - "
ALL_NON_CRITICAL_REFS_EXIST=true
for file in "${NON_CRITICAL_RTL_FILES[@]}"; do
  if ! grep -q "$file" "$HTML_FILE"; then
    echo -e "${YELLOW}WARNING: No reference to $file${NC}"
    ALL_NON_CRITICAL_REFS_EXIST=false
    WARNING_CHECKS=$((WARNING_CHECKS+1))
  fi
done

if [ "$ALL_NON_CRITICAL_REFS_EXIST" = true ]; then
  echo -e "${GREEN}PASSED${NC}"
  PASSED_CHECKS=$((PASSED_CHECKS+1))
fi

echo "========================================="
echo -e "SUMMARY: ${GREEN}$PASSED_CHECKS Checks PASSED${NC}, ${YELLOW}$WARNING_CHECKS Warnings${NC}, ${RED}$FAILED_CHECKS Checks FAILED${NC}"
echo "========================================="

# Determine overall status
if [ $FAILED_CHECKS -eq 0 ]; then
  if [ $WARNING_CHECKS -eq 0 ]; then
    echo -e "${GREEN}ALL CHECKS PASSED: Quantum RTL implementation is complete${NC}"
  else
    echo -e "${GREEN}ALL CRITICAL CHECKS PASSED${NC}${YELLOW}, but some warnings exist${NC}"
  fi
  echo "\nDEPLOYMENT INSTRUCTIONS:"
  echo "Run: firebase deploy --only hosting:technical-seo-basics.html"
  echo "Expected live URL: https://nivaro-51.web.app/technical-seo-basics.html"
else
  echo -e "${RED}CRITICAL CHECKS FAILED: Please fix the issues before deployment${NC}"
fi

echo "========================================="