#!/bin/bash

# Comprehensive Quantum RTL Verification Script for basics-of-seo.html

echo "===== Quantum RTL Comprehensive Verification for basics-of-seo.html ====="

# Initialize counters
PASS=0
FAIL=0
TOTAL=0

# Function to run a check
run_check() {
  local description=$1
  local command=$2
  local expected=$3
  
  ((TOTAL++))
  echo "\nChecking: $description"
  
  if eval "$command" | grep -q "$expected"; then
    echo "✓ PASS"
    ((PASS++))
    return 0
  else
    echo "✗ FAIL"
    ((FAIL++))
    return 1
  fi
}

# Function to check file existence
check_file_exists() {
  local file=$1
  local description=$2
  
  ((TOTAL++))
  echo "\nChecking: $description"
  
  if [ -f "$file" ]; then
    echo "✓ PASS - $file exists"
    ((PASS++))
    return 0
  else
    echo "✗ FAIL - $file does not exist"
    ((FAIL++))
    return 1
  fi
}

# Function to check file content
check_file_content() {
  local file=$1
  local pattern=$2
  local description=$3
  
  ((TOTAL++))
  echo "\nChecking: $description"
  
  if grep -q "$pattern" "$file"; then
    echo "✓ PASS - $pattern found in $file"
    ((PASS++))
    return 0
  else
    echo "✗ FAIL - $pattern not found in $file"
    ((FAIL++))
    return 1
  fi
}

# Check 1: HTML tag has correct lang and dir attributes
check_file_content "basics-of-seo.html" '<html lang="he" dir="rtl">' "HTML tag has correct lang='he' and dir='rtl' attributes"

# Check 2: Quantum RTL CSS link exists
check_file_content "basics-of-seo.html" '<link rel="stylesheet" href="basics-of-seo-quantum-rtl.css">' "Quantum RTL CSS link exists"

# Check 3: Quantum RTL JS link exists
check_file_content "basics-of-seo.html" '<script src="basics-of-seo-quantum-rtl.js"></script>' "Quantum RTL JS link exists"

# Check 4: Verification script link exists
check_file_content "basics-of-seo.html" '<script src="basics-of-seo-quantum-rtl-verification.js"></script>' "Verification script link exists"

# Check 5: Backup file exists
BACKUP_FILE=$(ls -1 basics-of-seo.html.bak.* 2>/dev/null | sort -r | head -1)
if [ -n "$BACKUP_FILE" ]; then
  echo "\nChecking: Backup file exists"
  echo "✓ PASS - Backup file $BACKUP_FILE exists"
  ((PASS++))
else
  echo "\nChecking: Backup file exists"
  echo "✗ FAIL - No backup file found"
  ((FAIL++))
fi
((TOTAL++))

# Check 6: Quantum RTL CSS file exists
check_file_exists "basics-of-seo-quantum-rtl.css" "Quantum RTL CSS file exists"

# Check 7: Quantum RTL JS file exists
check_file_exists "basics-of-seo-quantum-rtl.js" "Quantum RTL JS file exists"

# Check 8: Verification JS file exists
check_file_exists "basics-of-seo-quantum-rtl-verification.js" "Verification JS file exists"

# Check 9: CSS contains RTL rules
check_file_content "basics-of-seo-quantum-rtl.css" "html\\[dir=\"rtl\"\\]" "CSS contains RTL rules"

# Check 10: JS contains QuantumRTLObserver class
check_file_content "basics-of-seo-quantum-rtl.js" "class QuantumRTLObserver" "JS contains QuantumRTLObserver class"

# Check 11: JS contains verification function
check_file_content "basics-of-seo-quantum-rtl-verification.js" "verifyQuantumRTL" "Verification JS contains verifyQuantumRTL function"

# Check 12: JSON-LD structured data has correct language
check_file_content "basics-of-seo.html" "\"inLanguage\":\"he\"" "JSON-LD structured data has Hebrew language"

# Additional CSS content checks
if [ -f "basics-of-seo-quantum-rtl.css" ]; then
  echo "\n===== CSS Content Analysis ====="
  RTL_PROPERTY_COUNT=$(grep -c "rtl\|direction" "basics-of-seo-quantum-rtl.css")
  echo "Number of RTL-related CSS properties: $RTL_PROPERTY_COUNT"
  CSS_SIZE=$(du -h "basics-of-seo-quantum-rtl.css" | cut -f1)
  echo "CSS file size: $CSS_SIZE"
fi

# Additional JS content checks
if [ -f "basics-of-seo-quantum-rtl.js" ]; then
  echo "\n===== JS Content Analysis ====="
  RTL_IMPLEMENTATION_COUNT=$(grep -c "rtl\|direction\|mirror" "basics-of-seo-quantum-rtl.js")
  echo "Number of RTL-related JavaScript implementations: $RTL_IMPLEMENTATION_COUNT"
  JS_SIZE=$(du -h "basics-of-seo-quantum-rtl.js" | cut -f1)
  echo "JS file size: $JS_SIZE"
fi

# Count quantum RTL observation sections
if [ -f "basics-of-seo-quantum-rtl.js" ]; then
  QUANTUM_SECTION_COUNT=$(grep -c "QuantumRTLObserver" "basics-of-seo-quantum-rtl.js")
  echo "Number of quantum RTL observation sections: $QUANTUM_SECTION_COUNT"
fi

# Summary
TOTAL_BACKUPS=$(ls -1 basics-of-seo.html.bak.* 2>/dev/null | wc -l)
echo "\n===== Verification Summary ====="
echo "Total Checks: $TOTAL"
echo "Passed Checks: $PASS"
echo "Failed Checks: $FAIL"
echo "Number of Backup Files: $TOTAL_BACKUPS"
echo "CSS File Size: $CSS_SIZE"
echo "JS File Size: $JS_SIZE"
echo "Quantum RTL Observation Sections: $QUANTUM_SECTION_COUNT"

if [ $FAIL -eq 0 ]; then
  echo "\n🎉 All verification checks passed! Quantum RTL implementation is ready for deployment."
  echo "To deploy changes, run: firebase deploy"
else
  echo "\n❌ Some verification checks failed. Please review the implementation."
fi