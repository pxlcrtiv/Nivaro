#!/bin/bash

# Script to apply quantum-level RTL changes to power-remote-designers-india.html
# Using a more reliable approach for macOS

# Set the file paths
HTML_FILE="power-remote-designers-india.html"
BKP_FILE="$HTML_FILE.bak.quantum-rtl"
TEMP_FILE="$HTML_FILE.tmp"

# Function to display messages
function msg() {
    echo "[QUANTUM RTL] $1"
}

# Function to error out
function error() {
    msg "ERROR: $1"
    # Clean up temporary file if it exists
    if [ -f "$TEMP_FILE" ]; then
        rm "$TEMP_FILE"
    fi
    exit 1
}

# Check if the HTML file exists
if [ ! -f "$HTML_FILE" ]; then
    error "File $HTML_FILE not found!"
fi

# Create a backup
msg "Creating backup: $BKP_FILE"
cp "$HTML_FILE" "$BKP_FILE"
if [ $? -ne 0 ]; then
    error "Failed to create backup!"
fi

# Update HTML lang attribute to Hebrew
msg "Updating HTML language attribute to Hebrew (he)"
awk '{gsub(/lang="en"/, "lang=\"he\""); print}' "$HTML_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$HTML_FILE"
if [ $? -ne 0 ]; then
    error "Failed to update language attribute!"
fi

# Ensure dir="rtl" attribute is set correctly (remove duplicates if any)
msg "Ensuring proper dir=\"rtl\" attribute"
awk '{gsub(/dir="rtl" dir="rtl"/, "dir=\"rtl\""); gsub(/dir="ltr"/, "dir=\"rtl\""); print}' "$HTML_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$HTML_FILE"
if [ $? -ne 0 ]; then
    error "Failed to update direction attribute!"
fi

# Add quantum RTL implementation comment
msg "Adding implementation comment"
awk '/<head>/ {print; print "<!-- Quantum RTL Implementation for Power Remote Designers Page -->"; next} 1' "$HTML_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$HTML_FILE"
if [ $? -ne 0 ]; then
    error "Failed to add implementation comment!"
fi

# Add quantum RTL CSS file before closing </head> tag
msg "Adding quantum RTL CSS file"
awk '/<\/head>/ {print "<link rel=\"stylesheet\" href=\"power-remote-designers-india-quantum-rtl.css\" data-precedence=\"next\" />"; print; next} 1' "$HTML_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$HTML_FILE"
if [ $? -ne 0 ]; then
    error "Failed to add CSS file!"
fi

# Add quantum RTL JS files before closing </body> tag
msg "Adding quantum RTL JS files"
awk '/<\/body>/ {print "<script src=\"power-remote-designers-india-quantum-rtl.js\"></script>"; print "<script src=\"power-remote-designers-india-quantum-rtl-verification.js\"></script>"; print; next} 1' "$HTML_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$HTML_FILE"
if [ $? -ne 0 ]; then
    error "Failed to add JS files!"
fi

# Verify changes
msg "Verifying changes..."

# Check language attribute
LANG_CHECK=$(grep -c 'lang="he"' "$HTML_FILE")
if [ $LANG_CHECK -eq 0 ]; then
    error "Language attribute not updated correctly!"
fi

# Check direction attribute
DIR_CHECK=$(grep -c 'dir="rtl"' "$HTML_FILE")
if [ $DIR_CHECK -eq 0 ]; then
    error "Direction attribute not updated correctly!"
fi

# Check CSS file inclusion
CSS_CHECK=$(grep -c 'power-remote-designers-india-quantum-rtl.css' "$HTML_FILE")
if [ $CSS_CHECK -eq 0 ]; then
    error "CSS file not included correctly!"
fi

# Check JS file inclusion
JS1_CHECK=$(grep -c 'power-remote-designers-india-quantum-rtl.js' "$HTML_FILE")
JS2_CHECK=$(grep -c 'power-remote-designers-india-quantum-rtl-verification.js' "$HTML_FILE")
if [ $JS1_CHECK -eq 0 ] || [ $JS2_CHECK -eq 0 ]; then
    error "JS files not included correctly!"
fi

# Success message
msg "✅ Quantum RTL implementation for Power Remote Designers page is complete!"
msg "Backup created at: $BKP_FILE"
msg "Please open the page in a browser to verify the RTL functionality."
msg "Check the browser console for quantum RTL verification results."

exit 0