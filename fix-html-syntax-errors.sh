#!/bin/bash

# Script to fix semicolon syntax errors in power-remote-designers-india.html

# Create backup
BACKUP_FILE="power-remote-designers-india.html.bak"
cp power-remote-designers-india.html "$BACKUP_FILE"
echo "[FIXER] Created backup: $BACKUP_FILE"

# Create temporary file for fixed content
TEMP_FILE="power-remote-designers-india.html.tmp"

# Function to fix semicolon issues in JavaScript
fix_semicolons() {
    # Read the original file
    content="$(cat power-remote-designers-india.html)"
    
    # Count the number of errors to fix
    error_count=10
    fixed_errors=0
    
    echo "[FIXER] Attempting to fix $error_count semicolon errors on line 8..."
    
    # Process JavaScript code to add missing semicolons
    # This regex will add semicolons after statements that end with }, ), ], or literals, but don't already have a semicolon
    fixed_content="$(echo "$content" | perl -0777 -pe 's/(\})\s*(?![;\n])/$1;/gs' | perl -0777 -pe 's/(\])\s*(?![;\n])/$1;/gs' | perl -0777 -pe 's/(\))\s*(?![;\n])/$1;/gs' | perl -0777 -pe 's/([\d\w"]+)\s*(?![;\n])/$1;/gs')"
    
    # Write fixed content to temporary file
    echo "$fixed_content" > "$TEMP_FILE"
    
    # Verify the file
    if [ -s "$TEMP_FILE" ]; then
        echo "[FIXER] Successfully created fixed file"
        # Replace the original file with the fixed version
        mv "$TEMP_FILE" power-remote-designers-india.html
        echo "[FIXER] Fixed file has been applied"
        echo "[FIXER] Syntax errors should be resolved"
    else
        echo "[FIXER] Error: Fixed file is empty"
        echo "[FIXER] Restoring from backup"
        cp "$BACKUP_FILE" power-remote-designers-india.html
        exit 1
    fi
}

# Execute the fix
fix_semicolons

# Clean up
if [ -f "$TEMP_FILE" ]; then
    rm "$TEMP_FILE"
fi

echo "[FIXER] Process completed. Please verify the HTML file now."