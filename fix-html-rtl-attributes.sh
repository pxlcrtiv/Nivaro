#!/bin/bash

# Quantum HTML RTL Attributes Fixer
# This script ensures the HTML tag has the correct lang="he" and dir="rtl" attributes

BACKUP_FILE="top-ux-design-blogs.html.bak.$(date +%Y%m%d%H%M%S).attributes"
cp -v top-ux-design-blogs.html "$BACKUP_FILE"
echo "[QUANTUM] Created attributes fix backup: $BACKUP_FILE"

# Create a temporary file for the modified content
TEMP_FILE="temp-top-ux-blogs-attributes.html"

# Use perl to replace any HTML tag with the correct RTL attributes
perl -i.bak -pe 's/<html[^>]*>/<html lang="he" dir="rtl">/' top-ux-design-blogs.html

echo "[QUANTUM] Updated HTML tag with correct lang=\"he\" and dir=\"rtl\" attributes"

# Verify the changes
HTML_TAG=$(grep -m1 "<html" top-ux-design-blogs.html)
if echo "$HTML_TAG" | grep -q "lang=\"he\"" && echo "$HTML_TAG" | grep -q "dir=\"rtl\""; then
    echo "✅ HTML language and direction are now correctly set to Hebrew RTL"
else
    echo "❌ Failed to update HTML language or direction attributes"
    echo "Current HTML tag: $HTML_TAG"
fi

echo "[QUANTUM] HTML RTL attributes fix completed"