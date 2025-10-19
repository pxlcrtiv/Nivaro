#!/bin/bash

# Bash script to insert quantum RTL scripts before closing head tag

FILE="ux-design-glossary-guide.html"

# Use awk to insert the scripts before </head>
awk '/<\/head>/ {
    print "    <!-- Quantum RTL Implementation for UX Design Glossary -->"
    print "    <script src=\"quantum-rtl-config.js\"></script>"
    print "    <script src=\"quantum-rtl.js\"></script>"
    print "    <script src=\"custom-element-rtl.js\"></script>"
    print "    <script src=\"rtl-console-helper.js\"></script>"
    print "    <script src=\"rtl-test-demo.js\"></script>"
    print "    <script src=\"glossary-quantum-rtl.js\"></script>"
    print "    <script src=\"glossary-quantum-rtl-verification.js\"></script>"
    print
}
{ print }' "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"

# Check if the operation was successful
if [ $? -eq 0 ]; then
    echo "Quantum RTL scripts successfully inserted into $FILE"
else
    echo "Failed to insert Quantum RTL scripts into $FILE"
    exit 1
fi