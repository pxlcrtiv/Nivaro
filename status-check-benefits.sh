#!/bin/bash

# 🌌 Quantum RTL Status Check - Benefits Page
# Created: $(date)
# Purpose: Verify RTL implementation on benefits-of-organic-digital-marketing.html

echo "🔍 Initiating Quantum RTL Implementation Verification for Benefits Page..."
echo "==========================================="

# Configuration
TARGET_FILE="benefits-of-organic-digital-marketing.html"
PASSED=0
WARNINGS=0
FAILED=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Check 1: HTML language and direction attributes
echo -e "\n1. Checking HTML language attributes..."
if grep -q '<html lang="he" dir="rtl">' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: HTML has correct language and direction attributes${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: HTML missing required language/direction attributes${NC}"
    FAILED=$((FAILED+1))
fi

# Check 2: Backup file existence
echo -e "\n2. Checking backup file existence..."
if ls "$TARGET_FILE.bak."* 1> /dev/null 2>&1; then
    echo -e "${GREEN}✅ PASSED: Backup file(s) exist${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${YELLOW}⚠️ WARNING: No backup file found${NC}"
    WARNINGS=$((WARNINGS+1))
fi

# Check 3: quantum-rtl-zone class implementation
echo -e "\n3. Checking quantum-rtl-zone class implementation..."
if grep -q 'class="quantum-rtl-zone' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: quantum-rtl-zone class found${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: quantum-rtl-zone class missing${NC}"
    FAILED=$((FAILED+1))
fi

# Check 4: JSON-LD @language tag
echo -e "\n4. Checking JSON-LD @language tag..."
if grep -q '@language":"he-IL' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: JSON-LD @language tag correct${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: JSON-LD @language tag incorrect or missing${NC}"
    FAILED=$((FAILED+1))
fi

# Check 5: JSON-LD inLanguage tag
echo -e "\n5. Checking JSON-LD inLanguage tag..."
if grep -q 'inLanguage":"he_IL' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: JSON-LD inLanguage tag correct${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: JSON-LD inLanguage tag incorrect or missing${NC}"
    FAILED=$((FAILED+1))
fi

# Check 6: Critical resource files existence
echo -e "\n6. Checking critical resource files..."
if [ -f "quantum-rtl.css" ] && [ -f "quantum-rtl.js" ] && [ -f "marketing-quantum-rtl.js" ]; then
    echo -e "${GREEN}✅ PASSED: All critical RTL resource files exist${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: Missing one or more critical RTL resource files${NC}"
    FAILED=$((FAILED+1))
fi

# Check 7: CSS/JS references in HTML
echo -e "\n7. Checking CSS/JS references in HTML..."
if grep -q 'quantum-rtl.css' "$TARGET_FILE" && grep -q 'quantum-rtl.js' "$TARGET_FILE" && grep -q 'marketing-quantum-rtl.js' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: All RTL CSS/JS references found in HTML${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${RED}❌ FAILED: Missing one or more RTL CSS/JS references in HTML${NC}"
    FAILED=$((FAILED+1))
fi

# Check 8: Hebrew fonts CSS (non-critical)
echo -e "\n8. Checking Hebrew fonts CSS (non-critical)..."
if [ -f "hebrew-fonts.css" ]; then
    echo -e "${GREEN}✅ PASSED: hebrew-fonts.css exists${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${YELLOW}⚠️ WARNING: hebrew-fonts.css missing (non-critical)${NC}"
    WARNINGS=$((WARNINGS+1))
fi

# Check 9: Hebrew fonts reference in HTML (non-critical)
echo -e "\n9. Checking Hebrew fonts reference in HTML (non-critical)..."
if grep -q 'hebrew-fonts.css' "$TARGET_FILE"; then
    echo -e "${GREEN}✅ PASSED: hebrew-fonts.css reference found in HTML${NC}"
    PASSED=$((PASSED+1))
else
    echo -e "${YELLOW}⚠️ WARNING: hebrew-fonts.css reference missing in HTML (non-critical)${NC}"
    WARNINGS=$((WARNINGS+1))
fi

echo -e "\n==========================================="
echo -e "📊 VERIFICATION RESULTS:"
echo -e "✅ PASSED: ${PASSED}"
echo -e "⚠️ WARNINGS: ${WARNINGS}"
echo -e "❌ FAILED: ${FAILED}"
echo -e "==========================================="

# Overall status
echo -e "\n🎯 OVERALL STATUS:"
if [ "$FAILED" -eq 0 ]; then
    echo -e "${GREEN}🎉 DEPLOYMENT READY - Quantum RTL Implementation Complete${NC}"
    echo -e "\n🚀 Deploy command: firebase deploy --only hosting:$TARGET_FILE"
    echo -e "🌐 Expected live URL: https://nivaro-51.web.app/$TARGET_FILE"
    exit 0
else
    echo -e "${RED}🔴 CRITICAL FAILURE - Fix issues before deployment${NC}"
    echo -e "\n📋 Required fixes:"
    if [ "$FAILED" -gt 0 ]; then
        echo -e "   - Fix all $FAILED critical issues marked with ❌"
    fi
    if [ "$WARNINGS" -gt 0 ]; then
        echo -e "   - Address $WARNINGS warnings marked with ⚠️ (recommended but not blocking)"
    fi
    exit 1
fi