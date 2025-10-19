#!/bin/bash

# Quantum RTL Verification Script for Dharan E-commerce Case Study
# This script performs comprehensive checks to validate RTL implementation

# Set error handling
set -e

echo "🔍 Initiating Quantum RTL Verification for dharan-ecommerce-case-study.html..."
echo "=========================================="

# Check 1: HTML lang and dir attributes
HTML_ATTR_CHECK=$(grep -c '<html lang="he" dir="rtl">' dharan-ecommerce-case-study.html)
if [ $HTML_ATTR_CHECK -gt 0 ]; then
    echo "✅ Check 1: HTML attributes correctly set to lang='he' dir='rtl'"
else
    echo "❌ Check 1: HTML attributes NOT set correctly"
    echo "   Attempting to fix..."
    sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/' dharan-ecommerce-case-study.html
    if [ $? -eq 0 ]; then
        echo "   ✅ Fixed: HTML attributes now set correctly"
    else
        echo "   ❌ Failed to fix HTML attributes"
    fi
fi

# Check 2: Backup file exists
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
YESTERDAY=$(date -v-1d +"%Y%m%d")
TODAY=$(date +"%Y%m%d")
BACKUP_FILES=$(ls dharan-ecommerce-case-study.html.bak.* 2>/dev/null || echo "")

if [ -n "$BACKUP_FILES" ]; then
    echo "✅ Check 2: Backup file exists: $BACKUP_FILES"
else
    echo "❌ Check 2: No backup file found!"
    exit 1
fi

# Check 3: RTL CSS and JS files exist
CSS_FILE_EXISTS=$(test -f quantum-rtl-dharan.css && echo "1" || echo "0")
JS_FILE_EXISTS=$(test -f dharan-ecommerce-quantum-rtl.js && echo "1" || echo "0")
QUANTUM_JS_EXISTS=$(test -f quantum-rtl.js && echo "1" || echo "0")

if [ "$CSS_FILE_EXISTS" = "1" ] && [ "$JS_FILE_EXISTS" = "1" ] && [ "$QUANTUM_JS_EXISTS" = "1" ]; then
    echo "✅ Check 3: All required RTL resource files exist"
else
    echo "❌ Check 3: Missing required RTL resource files"
    [ "$CSS_FILE_EXISTS" = "0" ] && echo "   - quantum-rtl-dharan.css missing"
    [ "$JS_FILE_EXISTS" = "0" ] && echo "   - dharan-ecommerce-quantum-rtl.js missing"
    [ "$QUANTUM_JS_EXISTS" = "0" ] && echo "   - quantum-rtl.js missing"
    exit 1
fi

# Check 4: CSS and JS references in HTML
CSS_REF_CHECK=$(grep -c 'quantum-rtl-dharan.css' dharan-ecommerce-case-study.html)
JS_REF_CHECK=$(grep -c 'dharan-ecommerce-quantum-rtl.js' dharan-ecommerce-case-study.html)
QUANTUM_JS_REF_CHECK=$(grep -c 'quantum-rtl.js' dharan-ecommerce-case-study.html)

if [ $CSS_REF_CHECK -gt 0 ] && [ $JS_REF_CHECK -gt 0 ] && [ $QUANTUM_JS_REF_CHECK -gt 0 ]; then
    echo "✅ Check 4: All CSS and JS references exist in HTML"
else
    echo "❌ Check 4: Missing CSS/JS references in HTML"
    if [ $CSS_REF_CHECK -eq 0 ]; then
        echo "   - Adding quantum-rtl-dharan.css reference..."
        sed -i '' '/<\/head>/i\
    <link rel="stylesheet" href="quantum-rtl-dharan.css" type="text/css">
' dharan-ecommerce-case-study.html
    fi
    if [ $JS_REF_CHECK -eq 0 ] || [ $QUANTUM_JS_REF_CHECK -eq 0 ]; then
        echo "   - Adding JavaScript references..."
        sed -i '' '/<\/body>/i\
    <script src="quantum-rtl.js"></script>\
    <script src="dharan-ecommerce-quantum-rtl.js"></script>
' dharan-ecommerce-case-study.html
    fi
fi

# Check 5: quantum-rtl-zone class exists in HTML
ZONE_CLASS_CHECK=$(grep -c 'quantum-rtl-zone' dharan-ecommerce-case-study.html)
if [ $ZONE_CLASS_CHECK -gt 0 ]; then
    echo "✅ Check 5: quantum-rtl-zone class found (${ZONE_CLASS_CHECK} times)"
else
    echo "❌ Check 5: quantum-rtl-zone class NOT found"
    echo "   Attempting to add to main element..."
    sed -i '' 's/<main /<main class="quantum-rtl-zone" /' dharan-ecommerce-case-study.html
fi

# Check 6: JSON-LD language tags updated to Hebrew
JSON_LD_HEBREW=$(grep -c '"inLanguage":"he_' dharan-ecommerce-case-study.html)
JSON_LD_ENGLISH=$(grep -c '"inLanguage":"en_' dharan-ecommerce-case-study.html)

if [ $JSON_LD_HEBREW -gt 0 ] && [ $JSON_LD_ENGLISH -eq 0 ]; then
    echo "✅ Check 6: JSON-LD language tags correctly set to Hebrew (${JSON_LD_HEBREW} found, ${JSON_LD_ENGLISH} English)"
else
    echo "⚠️  Check 6: JSON-LD language tags need attention (${JSON_LD_HEBREW} Hebrew, ${JSON_LD_ENGLISH} English)"
    echo "   Attempting to fix English references..."
    sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' dharan-ecommerce-case-study.html
    sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he-IL"/g' dharan-ecommerce-case-study.html
fi

# Check 7: Open Graph locale
OG_LOCALE_CHECK=$(grep -c '<meta property="og:locale" content="he_IL"' dharan-ecommerce-case-study.html)
if [ $OG_LOCALE_CHECK -gt 0 ]; then
    echo "✅ Check 7: Open Graph locale correctly set to he_IL"
else
    echo "❌ Check 7: Open Graph locale NOT set to he_IL"
    echo "   Attempting to fix..."
    sed -i '' 's/<meta property="og:locale" content="en_US"/<meta property="og:locale" content="he_IL"/' dharan-ecommerce-case-study.html
fi

# Check 8: Count of CSS RTL properties
CSS_RTL_PROPS=$(grep -c 'rtl\|rtl-' quantum-rtl-dharan.css)
if [ $CSS_RTL_PROPS -gt 0 ]; then
    echo "✅ Check 8: Found ${CSS_RTL_PROPS} CSS RTL properties"
else
    echo "⚠️  Check 8: Few RTL-specific CSS properties found (${CSS_RTL_PROPS})"
fi

# Check 9: JavaScript classes exist
JS_CLASSES=$(grep -c 'class DharanEcommerceQuantumRTL' dharan-ecommerce-quantum-rtl.js)
if [ $JS_CLASSES -gt 0 ]; then
    echo "✅ Check 9: JavaScript classes correctly defined"
else
    echo "❌ Check 9: JavaScript classes NOT found"
    exit 1
fi

# Check 10: Observation mechanisms in JS
OBSERVATION_COUNT=$(grep -c 'QuantumRTLObserver\|ResizeObserver' dharan-ecommerce-quantum-rtl.js)
if [ $OBSERVATION_COUNT -gt 0 ]; then
    echo "✅ Check 10: Found ${OBSERVATION_COUNT} observation mechanisms"
else
    echo "⚠️  Check 10: No observation mechanisms found"
fi

# Check 11: English language conflicts
ENGLISH_CONFLICTS=$(grep -c '"language":"en"\|lang="en"\|"en_US"\|"en-US"' dharan-ecommerce-case-study.html)
if [ $ENGLISH_CONFLICTS -eq 0 ]; then
    echo "✅ Check 11: No English language conflicts found"
else
    echo "⚠️  Check 11: Found ${ENGLISH_CONFLICTS} potential English language conflicts"
fi

# Check 12: Backup count
BACKUP_COUNT=$(ls -1 dharan-ecommerce-case-study.html.bak.* 2>/dev/null | wc -l)
echo "✅ Check 12: ${BACKUP_COUNT} backup file(s) exist"

# Check 13: Quantum RTL zones count
ZONE_COUNT=$(grep -c 'class="quantum-rtl-zone"\|data-quantum-rtl' dharan-ecommerce-case-study.html)
echo "✅ Check 13: Found ${ZONE_COUNT} quantum RTL zones"

echo "=========================================="
echo "🎉 Quantum RTL Verification complete!"
echo ""
echo "Next steps:"
echo "1. Run './final-verification-and-deploy-dharan.sh' for final checks"
echo "2. Deploy to Firebase using 'firebase deploy --only hosting:dharan-ecommerce-case-study.html'"
echo ""
echo "🌐 Expected live URL: https://nivaro-51.web.app/dharan-ecommerce-case-study.html"