#!/bin/bash

# Precise script to fix semicolon syntax errors in power-remote-designers-india.html

# Create backup
BACKUP_FILE="power-remote-designers-india.html.bak"
cp power-remote-designers-india.html "$BACKUP_FILE"
echo "[FIXER] Created backup: $BACKUP_FILE"

# Function to safely add missing semicolons in JavaScript code
fix_javascript_semicolons() {
    echo "[FIXER] Starting precise semicolon fixing process..."
    
    # Read the original file
    original_file="power-remote-designers-india.html"
    temp_file="fixed.html"
    
    # This approach will:
    # 1. Find JavaScript code blocks
    # 2. Add semicolons after statements that need them
    # 3. Preserve all other content
    
    # Use awk to process the file and fix semicolons in JS code
    awk '{
        # Check if the line contains script tags or is within a script block
        if (/<script/ || in_script) {
            in_script = 1
            
            # Process this line to add missing semicolons
            # This regex adds semicolons after:}
            # Don't add semicolons before closing script tags or where they already exist
            gsub(/(\})([ 	]*)([^;\/])/, "\\1;\\2\\3")
            
            # Add semicolons after ) if they're missing
            gsub(/(\))([ 	]*)([^;\/])/, "\\1;\\2\\3")
            
            # Add semicolons after ] if they're missing
            gsub(/(\])([ 	]*)([^;\/])/, "\\1;\\2\\3")
            
            # Add semicolons after numbers, strings, and identifiers
            gsub(/([0-9])\s*(\}|\)|\]|$)/, "\\1; \\\2")
            gsub(/("[^"]*")\s*(\}|\)|\]|$)/, "\\1; \\\2")
            gsub(/([a-zA-Z_][a-zA-Z0-9_]*)\s*(\}|\)|\]|$)/, "\\1; \\\2")
            
            # Don't add semicolons before existing ones or in comments
            gsub(/;;/, ";")
            gsub(/;\/\//, "//")
            
            # Check if we're leaving a script block
            if (/<\/script/) {
                in_script = 0
            }
        }
        print $0
    }' "$original_file" > "$temp_file"
    
    # Verify the fixed file
    if [ -s "$temp_file" ]; then
        echo "[FIXER] Successfully created fixed file"
        # Replace the original file with the fixed version
        mv "$temp_file" "$original_file"
        echo "[FIXER] Fixed file has been applied"
        echo "[FIXER] All semicolon syntax errors should be resolved"
    else
        echo "[FIXER] Error: Fixed file is empty"
        echo "[FIXER] Restoring from backup"
        cp "$BACKUP_FILE" "$original_file"
        exit 1
    fi
}

# Execute the fix
fix_javascript_semicolons

# Clean up
if [ -f "fixed.html" ]; then
    rm "fixed.html"
fi

echo "[FIXER] Process completed. Please verify the HTML file now."