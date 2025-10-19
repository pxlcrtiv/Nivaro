#!/bin/bash

# Script to fix duplicate CSS references in power-remote-designers-india.html

HTML_FILE="power-remote-designers-india.html"
BKP_FILE="$HTML_FILE.bak.fix"
TEMP_FILE="$HTML_FILE.tmp"

# Function to display messages
function msg() {
    echo "[FIX] $1"
}

# Create a backup of the current state
msg "Creating backup: $BKP_FILE"
cp "$HTML_FILE" "$BKP_FILE"

# Remove duplicate CSS references
msg "Removing duplicate CSS references..."

# Use awk to keep only the first occurrence of the CSS reference
awk '{
    if ($0 ~ /power-remote-designers-india-quantum-rtl\.css/) {
        if (!cssFound) {
            print $0
            cssFound = 1
        }
    } else {
        print $0
    }
}' "$HTML_FILE" > "$TEMP_FILE"

# Replace the original file with the fixed version
mv "$TEMP_FILE" "$HTML_FILE"

# Verify the fix
msg "Verifying the fix..."
CSS_COUNT=$(grep -c 'power-remote-designers-india-quantum-rtl\.css' "$HTML_FILE")

if [ $CSS_COUNT -eq 1 ]; then
    msg "✅ Fixed duplicate CSS reference. Now there is $CSS_COUNT occurrence."
else
    msg "❌ Fix incomplete. There are still $CSS_COUNT occurrences."
    exit 1
fi

msg "Duplicate CSS fix completed successfully!"
exit 0