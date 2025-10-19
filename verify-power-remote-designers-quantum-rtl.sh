#!/bin/bash

# Final verification script for quantum-level RTL implementation

HTML_FILE="power-remote-designers-india.html"

# Function to display messages
function msg() {
    echo "[VERIFY] $1"
}

# Function to display success
function success() {
    echo "✅ $1"
}

# Function to display warning
function warning() {
    echo "⚠️ $1"
}

# Start verification
msg "Starting final quantum RTL verification for $HTML_FILE..."
echo ""

# Check if HTML file exists
if [ ! -f "$HTML_FILE" ]; then
    msg "ERROR: $HTML_FILE not found!"
    exit 1
fi

# Check HTML language attribute
msg "Checking HTML language attribute..."
LANG_ATTR=$(grep -c 'lang="he"' "$HTML_FILE")
if [ $LANG_ATTR -ge 1 ]; then
    success "HTML language is set to Hebrew (he)"
else
    warning "HTML language is not set to Hebrew"
fi

echo ""

# Check HTML direction attribute
msg "Checking HTML direction attribute..."
DIR_ATTR=$(grep -c 'dir="rtl"' "$HTML_FILE")
if [ $DIR_ATTR -ge 1 ]; then
    success "HTML direction is set to RTL"
else
    warning "HTML direction is not set to RTL"
fi

echo ""

# Check quantum RTL CSS file reference
msg "Checking quantum RTL CSS file reference..."
CSS_REF=$(grep -c 'power-remote-designers-india-quantum-rtl\.css' "$HTML_FILE")
if [ $CSS_REF -eq 1 ]; then
    success "Quantum RTL CSS file is referenced once"
elif [ $CSS_REF -gt 1 ]; then
    warning "Quantum RTL CSS file is referenced $CSS_REF times (should be 1)"
else
    warning "Quantum RTL CSS file is not referenced"
fi

echo ""

# Check quantum RTL JS file references
msg "Checking quantum RTL JS file references..."
JS_MAIN_REF=$(grep -c 'power-remote-designers-india-quantum-rtl\.js' "$HTML_FILE")
JS_VERIFY_REF=$(grep -c 'power-remote-designers-india-quantum-rtl-verification\.js' "$HTML_FILE")

if [ $JS_MAIN_REF -eq 1 ]; then
    success "Main quantum RTL JS file is referenced"
else
    warning "Main quantum RTL JS file is not properly referenced"
fi

if [ $JS_VERIFY_REF -eq 1 ]; then
    success "Quantum RTL verification JS file is referenced"
else
    warning "Quantum RTL verification JS file is not properly referenced"
fi

echo ""

# Check implementation comment
msg "Checking implementation comment..."
COMMENT=$(grep -c 'Quantum RTL Implementation for Power Remote Designers Page' "$HTML_FILE")
if [ $COMMENT -ge 1 ]; then
    success "Implementation comment is present"
else
    warning "Implementation comment is missing"
fi

echo ""

# Check if quantum RTL files exist
msg "Checking if quantum RTL files exist..."

FILES=(
    "power-remote-designers-india-quantum-rtl.js"
    "power-remote-designers-india-quantum-rtl.css"
    "power-remote-designers-india-quantum-rtl-verification.js"
)

ALL_FILES_EXIST=true
for FILE in "${FILES[@]}"; do
    if [ -f "$FILE" ]; then
        success "$FILE exists"
    else
        warning "$FILE is missing"
        ALL_FILES_EXIST=false
    fi
    sleep 0.1 # Small delay for readability

done

echo ""

# Generate final report
msg "Generating final verification report..."

echo ""
echo "📊 FINAL QUANTUM RTL VERIFICATION REPORT 📊"
echo "==========================================="
echo "Page: $HTML_FILE"
echo "Verification Date: $(date)"
echo "==========================================="
echo "- HTML language: $(if [ $LANG_ATTR -ge 1 ]; then echo "✅ Hebrew"; else echo "❌ Not Hebrew"; fi)"
echo "- HTML direction: $(if [ $DIR_ATTR -ge 1 ]; then echo "✅ RTL"; else echo "❌ Not RTL"; fi)"
echo "- CSS reference: $(if [ $CSS_REF -eq 1 ]; then echo "✅ Correct"; else echo "❌ Incorrect ($CSS_REF references)"; fi)"
echo "- JS main reference: $(if [ $JS_MAIN_REF -eq 1 ]; then echo "✅ Correct"; else echo "❌ Incorrect"; fi)"
echo "- JS verification reference: $(if [ $JS_VERIFY_REF -eq 1 ]; then echo "✅ Correct"; else echo "❌ Incorrect"; fi)"
echo "- Implementation files: $(if $ALL_FILES_EXIST; then echo "✅ All present"; else echo "❌ Some missing"; fi)"
echo "==========================================="
echo ""

# Check if all critical items are correct
CRITICAL_PASS=true
if [ $LANG_ATTR -lt 1 ] || [ $DIR_ATTR -lt 1 ] || [ $JS_MAIN_REF -ne 1 ] || [ $JS_VERIFY_REF -ne 1 ] || [ ! $ALL_FILES_EXIST ]; then
    CRITICAL_PASS=false
fi

if $CRITICAL_PASS; then
    msg "✅ CRITICAL VERIFICATION PASSED!"
    msg "Quantum-level RTL implementation is ready for deployment."
    msg "Please open the page in a browser and check the console for detailed verification results."
else
    msg "⚠️ CRITICAL VERIFICATION WARNING!"
    msg "Some critical components of the quantum RTL implementation may need attention."
    msg "Please review the verification results above and make necessary corrections."
fi

echo ""
msg "Verification complete."