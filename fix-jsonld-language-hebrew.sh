#!/bin/bash

# Fix JSON-LD Structured Data Language for Hebrew RTL Support

echo "Fixing JSON-LD structured data language in basics-of-seo.html..."

# Create backup of the current file with timestamp
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
BACKUP_FILE="basics-of-seo.html.bak.${TIMESTAMP}.jsonld"
echo "Creating backup: ${BACKUP_FILE}"
cp basics-of-seo.html "${BACKUP_FILE}"

# Update JSON-LD language attributes from en_US or en-US to he
perl -i -pe 's/"inLanguage":"en_US"/"inLanguage":"he"/g' basics-of-seo.html
perl -i -pe 's/"inLanguage":"en-US"/"inLanguage":"he"/g' basics-of-seo.html

# Also update html-lang in schema if present
perl -i -pe 's/"html-lang":"en-US"/"html-lang":"he"/g' basics-of-seo.html

# Verify the changes
echo "\nVerifying JSON-LD language changes..."

# Check for updated Hebrew language tags
HEBREW_LANG_COUNT=$(grep -c '"inLanguage":"he"' basics-of-seo.html)
EN_LANG_COUNT=$(grep -c '"inLanguage":"en-[A-Z]\+"' basics-of-seo.html)

# Display verification results
echo "Number of Hebrew language tags found: $HEBREW_LANG_COUNT"
echo "Number of English language tags remaining: $EN_LANG_COUNT"

if [ $EN_LANG_COUNT -eq 0 ] && [ $HEBREW_LANG_COUNT -gt 0 ]; then
  echo "\n✅ JSON-LD language successfully updated to Hebrew"
else
  echo "\n⚠️ Some English language tags may remain. Please review the file."
fi

# Summary
echo "\n===== Summary ====="
echo "Backup created: ${BACKUP_FILE}"
echo "JSON-LD structured data language updated to Hebrew (he)"
echo "You can now re-run the verification script to confirm all checks pass."
echo "After verification, run 'firebase deploy' to deploy the changes."