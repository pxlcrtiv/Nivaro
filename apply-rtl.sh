#!/bin/bash

# Apply RTL support to all HTML files
# This script adds RTL CSS and sets lang="he" dir="rtl"

echo "Applying RTL support to all HTML files..."

# Counter for processed files
processed=0

# Find all HTML files and apply RTL changes
find . -name "*.html" -type f | while read file; do
    # Skip files that already have RTL
    if grep -q 'dir="rtl"' "$file"; then
        echo "✓ $file already has RTL support"
        continue
    fi
    
    # Check if file has <html> tag
    if grep -q '<html' "$file"; then
        # Create backup
        cp "$file" "$file.bak"
        
        # Add RTL CSS link and set language/direction
        sed -i '' 's/<html lang="en" dir="rtl">/<html lang="he" dir="rtl">/g' "$file"
        sed -i '' 's/<html>/<html lang="he" dir="rtl">/g' "$file"
        
        # Add RTL CSS after existing stylesheets
        sed -i '' '/\.css.*data-precedence="next"/a\    <link rel="stylesheet" href="rtl.css" data-precedence="next" />' "$file"
        
        # Also add to head section if no precedence attribute found
        if ! grep -q 'rtl.css' "$file"; then
            sed -i '' '/<\/head>/i\    <link rel="stylesheet" href="rtl.css" />' "$file"
        fi
        
        ((processed++))
        echo "✓ Applied RTL to $file"
    fi
done

echo "RTL support applied to $processed files"
echo "You can test at: http://localhost:8000/index-rtl.html"
echo "To revert changes, use: find . -name '*.html.bak' -exec sh -c 'mv "$0" "${0%.bak}"' {} \;"