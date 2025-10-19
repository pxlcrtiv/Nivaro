#!/bin/bash

# Fix HTML RTL Attributes for technology-services.html
# This script ensures the HTML tag has correct lang="he" and dir="rtl" attributes

echo "Fixing HTML RTL attributes for technology-services.html..."

# Create another backup with specific attributes tag
timestamp=$(date +%Y%m%d%H%M%S)
cp technology-services.html "technology-services.html.bak.$timestamp.attributes"
echo "Created backup: technology-services.html.bak.$timestamp.attributes"

# Use perl to fix the HTML tag with proper lang and dir attributes
# This will ensure we handle the tag correctly even if it's on one line without spaces
perl -i -pe 's/<\!DOCTYPE html><html[^>]*>/<!DOCTYPE html><html lang="he" dir="rtl">/' technology-services.html

# Verify the fix
if grep -q '<html lang="he" dir="rtl">' technology-services.html; then
  echo "✓ Successfully fixed HTML attributes"
  echo "HTML tag now has: lang=\"he\" and dir=\"rtl\""
  exit 0
else
  echo "✗ Failed to fix HTML attributes"
  echo "Current HTML tag:" 
  grep '<html' technology-services.html
  exit 1
fi