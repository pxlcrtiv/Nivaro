#!/bin/bash

# Quantum RTL Implementation Status Checker for careers.html
# 🚀 Quantum-Level Element RTL Transformation System Verification

echo "🔍 QUANTUM RTL IMPLEMENTATION STATUS CHECK: careers.html"
echo "======================================="

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for status tracking
PASSED=0
WARNINGS=0
FAILED=0

# Function to check for a pattern in the file
check_pattern() {
    local pattern="$1"
    local description="$2"
    local is_critical=$3
    
    if grep -q "$pattern" careers.html; then
        echo -e "${GREEN}✅ PASSED:${NC} $description"
        ((PASSED++))
        return 0
    else
        if [ "$is_critical" = true ]; then
            echo -e "${RED}❌ FAILED:${NC} $description"
            ((FAILED++))
        else
            echo -e "${YELLOW}⚠️ WARNING:${NC} $description"
            ((WARNINGS++))
        fi
        return 1
    fi
}

# Check 1: HTML lang and dir attributes
check_pattern '<html lang="he" dir="rtl"' "HTML attributes (lang=\"he\" dir=\"rtl\")" true

# Check 2: Backup file exists
backup_files=(careers.html.bak.*)
if [ -f "${backup_files[0]}" ]; then
    echo -e "${GREEN}✅ PASSED:${NC} Backup file exists: ${backup_files[0]}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED:${NC} Backup files missing"
    ((FAILED++))
fi

# Check 3: quantum-rtl-zone class on main element
check_pattern '<main.*class=.*quantum-rtl-zone' "quantum-rtl-zone class on main element" true

# Check 4: Hebrew language tags in JSON-LD
  # Using check_pattern function to verify Hebrew language tags in various formats
  check_pattern '@language":"he-IL' "Hebrew language tags in JSON-LD (@language)" true
  check_pattern 'inLanguage":"he_IL' "Hebrew language tags in JSON-LD (inLanguage)" true

# Check 5: Critical RTL resource files existence
if [ -f "quantum-rtl.css" ]; then
    echo -e "${GREEN}✅ PASSED:${NC} Critical RTL resource file exists (quantum-rtl.css)"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED:${NC} Critical RTL resource file missing (quantum-rtl.css)"
    ((FAILED++))
fi

if [ -f "quantum-rtl.js" ]; then
    echo -e "${GREEN}✅ PASSED:${NC} Critical RTL resource file exists (quantum-rtl.js)"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED:${NC} Critical RTL resource file missing (quantum-rtl.js)"
    ((FAILED++))
fi

# Check 6: Non-critical RTL resource files existence
if [ -f "hebrew-fonts.css" ]; then
    echo -e "${GREEN}✅ PASSED:${NC} Non-critical RTL resource file exists (hebrew-fonts.css)"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️ WARNING:${NC} Non-critical RTL resource file missing (hebrew-fonts.css)"
    ((WARNINGS++))
fi

# Check 7: Critical CSS/JS references in HTML
check_pattern '<link.*href="quantum-rtl\.css"' "Critical CSS reference (quantum-rtl.css)" true
check_pattern '<script.*src="quantum-rtl\.js"' "Critical JS reference (quantum-rtl.js)" true

# Check 8: Non-critical CSS references in HTML
if grep -q '<link.*href="hebrew-fonts\.css"' careers.html; then
    echo -e "${GREEN}✅ PASSED:${NC} Non-critical CSS reference (hebrew-fonts.css)"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️ WARNING:${NC} Non-critical CSS reference missing (hebrew-fonts.css)"
    ((WARNINGS++))
fi

echo "======================================="
echo -e "SUMMARY: ${GREEN}$PASSED Checks PASSED${NC}, ${YELLOW}$WARNINGS Warnings${NC}, ${RED}$FAILED Checks FAILED${NC}"
echo "======================================="

# Final status message
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL CRITICAL CHECKS PASSED${NC}"
    echo -e "Note: ${YELLOW}$WARNINGS warnings exist${NC} but are not blocking deployment"
    echo ""
    echo -e "🚀 DEPLOYMENT READY"
    echo -e "Deploy command: ${YELLOW}firebase deploy --only hosting:careers.html${NC}"
    echo -e "Expected live URL: ${YELLOW}https://nivaro-51.web.app/careers.html${NC}"
else
    echo -e "${RED}❌ CRITICAL CHECKS FAILED${NC}"
    echo -e "Please fix the ${RED}$FAILED issues${NC} before deployment"
    echo ""
    echo "📋 To revert changes, use:"
    echo -e "${YELLOW}cp careers.html.bak.* careers.html${NC}"
fi