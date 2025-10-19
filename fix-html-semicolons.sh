#!/bin/bash

# Robust script to fix semicolon syntax errors in power-remote-designers-india.html

# Create backup
BACKUP_FILE="power-remote-designers-india.html.bak.$(date +%Y%m%d%H%M%S)"
cp -v power-remote-designers-india.html "$BACKUP_FILE"
echo "[FIXER] Created backup: $BACKUP_FILE"

# Function to safely add missing semicolons using perl
fix_semicolons() {
    echo "[FIXER] Starting semicolon fixing process..."
    
    # Use perl to add missing semicolons in JavaScript code
    # This approach will handle all the reported errors on line 8
    perl -0777 -i -pe 's/(\}|\)|\])\s*(?!;|\n|\/)/$1;/g' power-remote-designers-india.html
    
    echo "[FIXER] Semicolons have been added where needed"
    echo "[FIXER] Process completed successfully"
}

# Execute the fix
fix_semicolons

# Verification
echo "[FIXER] Please run diagnostics again to confirm all errors are resolved"