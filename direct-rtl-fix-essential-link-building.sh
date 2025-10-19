#!/bin/bash

# Direct RTL Fix for essential-link-building-guide.html
# Simplified approach using basic commands

HTML_FILE="essential-link-building-guide.html"

# Create another backup
BACKUP_FILE="${HTML_FILE}.bak.directfix.$(date +"%Y%m%d%H%M%S")"
cp "${HTML_FILE}" "${BACKUP_FILE}"
echo "Created additional backup: ${BACKUP_FILE}"

# Fix HTML attributes using simple sed commands
echo "Fixing HTML language and direction attributes..."
sed -i '' 's/lang="en"/lang="he"/' "${HTML_FILE}"
sed -i '' '/<html /s/>/ dir="rtl">/' "${HTML_FILE}"

# Apply quantum-rtl-zone classes using simple sed
echo "Applying quantum RTL zone classes..."
sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "${HTML_FILE}"
sed -i '' 's/<article /<article class="quantum-rtl-zone" /' "${HTML_FILE}"

# Add references using echo and cat (more reliable than complex sed/awk)
echo "Adding CSS reference..."
# Create a temporary file with the CSS reference
echo '<link rel="stylesheet" href="quantum-rtl-essential-link-building.css" type="text/css" media="all" />' > css_ref.tmp
# Use cat to insert before </head>
cat css_ref.tmp "${HTML_FILE}" | grep -v '</head>' > temp_head.tmp
echo '</head>' >> temp_head.tmp
# Get everything after </head>
tail -n +$(grep -n '</head>' "${HTML_FILE}" | cut -d: -f1) "${HTML_FILE}" | grep -v '</head>' > temp_body.tmp
# Combine everything
cat temp_head.tmp temp_body.tmp > "${HTML_FILE}"

# Clean up temp files
rm css_ref.tmp temp_head.tmp temp_body.tmp

echo "Adding JS references..."
# Create a temporary file with the JS references
echo '<script src="quantum-rtl.js" defer></script>' > js_ref1.tmp
echo '<script src="essential-link-building-quantum-rtl.js" defer></script>' > js_ref2.tmp
# Use cat to insert before </body>
cat "${HTML_FILE}" | grep -v '</body>' > temp_head.tmp
cat js_ref1.tmp js_ref2.tmp >> temp_head.tmp
echo '</body>' >> temp_head.tmp
# Get everything after </body>
tail -n +$(grep -n '</body>' "${HTML_FILE}" | cut -d: -f1) "${HTML_FILE}" | grep -v '</body>' >> temp_head.tmp
# Replace the file
mv temp_head.tmp "${HTML_FILE}"

# Clean up temp files
rm js_ref1.tmp js_ref2.tmp

echo "Fixing language tags..."
# Simple string replacements
sed -i '' 's/"inLanguage":"en_US"/"inLanguage":"he_IL"/g' "${HTML_FILE}"
sed -i '' 's/"inLanguage":"en-US"/"inLanguage":"he-IL"/g' "${HTML_FILE}"

# Final status check
echo "\nFinal RTL Implementation Status:"
echo "1. HTML attributes: $(grep -q 'lang="he"' "${HTML_FILE}" && grep -q 'dir="rtl"' "${HTML_FILE}" && echo "✅ Fixed" || echo "❌ Not fixed")"
echo "2. Quantum RTL zones: $(grep -q 'quantum-rtl-zone' "${HTML_FILE}" && echo "✅ Applied" || echo "❌ Not applied")"
echo "3. CSS reference: $(grep -q 'quantum-rtl-essential-link-building.css' "${HTML_FILE}" && echo "✅ Added" || echo "❌ Not added")"
echo "4. JS references: $(grep -q 'quantum-rtl.js' "${HTML_FILE}" && grep -q 'essential-link-building-quantum-rtl.js' "${HTML_FILE}" && echo "✅ Added" || echo "❌ Not added")"
echo "5. Hebrew language tags: $(grep -q '"inLanguage":"he_' "${HTML_FILE}" && echo "✅ Fixed" || echo "❌ Not fixed")"

echo "\nDeployment Instructions:"
echo "Run: firebase deploy --only hosting:essential-link-building-guide.html"
echo "Expected URL: https://nivaro-51.web.app/essential-link-building-guide.html"