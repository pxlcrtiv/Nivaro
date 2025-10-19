#!/bin/bash

# Quantum RTL Implementation Verification for essential-link-building-guide.html
# Created: $(date)
# Universe: Nivaro Digital

HTML_FILE="essential-link-building-guide.html"
RTL_CSS_FILE="quantum-rtl-essential-link-building.css"
RTL_JS_FILE="essential-link-building-quantum-rtl.js"
CORE_RTL_JS="quantum-rtl.js"

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

TOTAL_CHECKS=13
PASSED_CHECKS=0
FAILED_CHECKS=0

# Function to check and report
check_and_report() {
  local check_number=$1
  local check_name=$2
  local condition=$3
  local fix_command=$4
  
  echo -n "[Check ${check_number}/${TOTAL_CHECKS}] ${check_name}: "
  
  if eval "$condition"; then
    echo -e "${GREEN}PASSED${NC}"
    ((PASSED_CHECKS++))
  else
    echo -e "${RED}FAILED${NC}"
    ((FAILED_CHECKS++))
    
    if [ ! -z "$fix_command" ]; then
      echo -e "  ${YELLOW}Attempting to fix...${NC}"
      eval "$fix_command"
      
      if eval "$condition"; then
        echo -e "  ${GREEN}FIXED${NC}"
        ((PASSED_CHECKS++))
        ((FAILED_CHECKS--))
      else
        echo -e "  ${RED}Fix failed. Manual intervention required.${NC}"
      fi
    fi
  fi
}

# Function to count RTL properties
count_rtl_properties() {
  grep -E 'direction:|text-align:|float:|margin-left:|margin-right:|padding-left:|padding-right:|flex-direction:' "$1" | wc -l
}

# Function to count quantum-rtl-zone classes
count_quantum_zones() {
  grep -o 'class="[^"[:space:]]*quantum-rtl-zone[^"[:space:]]*"' "$1" | wc -l
}

# Function to count Hebrew language tags
count_hebrew_tags() {
  grep -E '"inLanguage":"he_IL"|"inLanguage":"he-IL"|property="og:locale" content="he_IL"|lang="he"' "$1" | wc -l
}

# Function to count observation mechanisms in JS
count_observation_mechanisms() {
  grep -E 'MutationObserver|observe\(' "$1" | wc -l
}

# Function to check for English conflicts
check_english_conflicts() {
  grep -E '"inLanguage":"en_US"|"inLanguage":"en-US"|property="og:locale" content="en_US"|lang="en"' "$1" | grep -v '"alternate"' | wc -l
}

# Start verification
echo "\n🔍 Quantum RTL Implementation Verification for ${HTML_FILE}\n"

# Check 1: HTML language and direction attributes
check_and_report 1 "HTML attributes (lang=\"he\" dir=\"rtl\")" \
  "grep -q '<html lang="he" dir="rtl"' "${HTML_FILE}"" \
  "sed -i '' 's/<html lang="en" dir="rtl"/<html lang="he" dir="rtl"/' "${HTML_FILE}""

# Check 2: Backup file exists
check_and_report 2 "Backup file exists" \
  "ls essential-link-building-guide.html.bak.* 2>/dev/null | wc -l | grep -q '[1-9]'" \
  "cp "${HTML_FILE}" "${HTML_FILE}.bak.emergency""

# Check 3: Required RTL files exist
check_and_report 3 "Required RTL files exist" \
  "[ -f "${RTL_CSS_FILE}" ] && [ -f "${RTL_JS_FILE}" ] && [ -f "${CORE_RTL_JS}" ]" \
  "echo 'Error: Missing RTL files. Please run the implementation script again.'"

# Check 4: CSS reference in HTML
check_and_report 4 "CSS reference in HTML" \
  "grep -q '${RTL_CSS_FILE}' "${HTML_FILE}"" \
  "sed -i '' '/<\/head>/i\\<link rel=\"stylesheet\" href=\"${RTL_CSS_FILE}\" type=\"text/css\" media=\"all\" />' "${HTML_FILE}""

# Check 5: JS references in HTML
check_and_report 5 "JS references in HTML" \
  "grep -q '${RTL_JS_FILE}' "${HTML_FILE}" && grep -q '${CORE_RTL_JS}' "${HTML_FILE}"" \
  "sed -i '' '/<\/body>/i\\<script src=\"${CORE_RTL_JS}\" defer><\/script><script src=\"${RTL_JS_FILE}\" defer><\/script>' "${HTML_FILE}""

# Check 6: Quantum RTL zone classes
QUANTUM_ZONES=$(count_quantum_zones "${HTML_FILE}")
check_and_report 6 "Quantum RTL zone classes (found: ${QUANTUM_ZONES})" \
  "[ ${QUANTUM_ZONES} -ge 1 ]" \
  "sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "${HTML_FILE}""

# Check 7: Hebrew language tags
HEBREW_TAGS=$(count_hebrew_tags "${HTML_FILE}")
check_and_report 7 "Hebrew language tags (found: ${HEBREW_TAGS})" \
  "[ ${HEBREW_TAGS} -ge 2 ]" \
  "sed -i '' 's/\"inLanguage\":\"en_US\"/\"inLanguage\":\"he_IL\"/g; s/\"inLanguage\":\"en-US\"/\"inLanguage\":\"he-IL\"/g; s/property=\"og:locale\" content=\"en_US\"/property=\"og:locale\" content=\"he_IL\"/g' "${HTML_FILE}""

# Check 8: Open Graph locale
check_and_report 8 "Open Graph locale (he_IL)" \
  "grep -q 'property="og:locale" content="he_IL"' "${HTML_FILE}"" \
  "sed -i '' 's/property="og:locale" content="en_US"/property="og:locale" content="he_IL"/' "${HTML_FILE}""

# Check 9: CSS RTL properties count
RTL_PROPERTIES=$(count_rtl_properties "${RTL_CSS_FILE}")
check_and_report 9 "CSS RTL properties count (found: ${RTL_PROPERTIES})" \
  "[ ${RTL_PROPERTIES} -ge 5 ]" \
  "echo 'Warning: Low RTL properties count. The CSS file may need additional RTL styles.'"

# Check 10: JavaScript class exists
check_and_report 10 "JavaScript EssentialLinkBuildingQuantumRTL class" \
  "grep -q 'class EssentialLinkBuildingQuantumRTL' "${RTL_JS_FILE}"" \
  "echo 'Error: JavaScript class missing. Please regenerate the JS file.'"

# Check 11: Observation mechanisms in JS
OBSERVATION_COUNT=$(count_observation_mechanisms "${RTL_JS_FILE}")
check_and_report 11 "Observation mechanisms in JS (found: ${OBSERVATION_COUNT})" \
  "[ ${OBSERVATION_COUNT} -ge 1 ]" \
  "echo 'Warning: Limited observation mechanisms. Dynamic content may not be properly handled.'"

# Check 12: No English language conflicts
ENGLISH_CONFLICTS=$(check_english_conflicts "${HTML_FILE}")
check_and_report 12 "No English language conflicts (found: ${ENGLISH_CONFLICTS})" \
  "[ ${ENGLISH_CONFLICTS} -eq 0 ]" \
  "echo "Warning: Found ${ENGLISH_CONFLICTS} potential English language conflicts. Review manually.""

# Check 13: quantum-rtl-zone CSS rules
check_and_report 13 "quantum-rtl-zone CSS rules" \
  "grep -q '\.quantum-rtl-zone' "${RTL_CSS_FILE}"" \
  "echo '.quantum-rtl-zone { direction: rtl; text-align: right; unicode-bidi: isolate; }' >> "${RTL_CSS_FILE}""

# Summary
echo "\n📊 Verification Summary:"
echo "Total Checks: ${TOTAL_CHECKS}"
echo "Passed Checks: ${GREEN}${PASSED_CHECKS}${NC}"
echo "Failed Checks: ${RED}${FAILED_CHECKS}${NC}"

# Deployment readiness
if [ ${FAILED_CHECKS} -eq 0 ]; then
  echo "\n✅ ${GREEN}Quantum RTL Implementation VERIFIED and READY for deployment!${NC}"
  echo "\nDeploy with command:"
  echo "  firebase deploy --only hosting:essential-link-building-guide.html"
  echo "\nExpected live URL:"
  echo "  https://nivaro-51.web.app/essential-link-building-guide.html"
elif [ ${FAILED_CHECKS} -le 3 ]; then
  echo "\n⚠️ ${YELLOW}Quantum RTL Implementation has MINOR issues but is deployable with caution.${NC}"
  echo "\nRecommended: Fix the failed checks before deployment."
  echo "\nIf proceeding with deployment, use command:"
  echo "  firebase deploy --only hosting:essential-link-building-guide.html"
else
  echo "\n❌ ${RED}Quantum RTL Implementation has SIGNIFICANT issues and requires fixing before deployment.${NC}"
  echo "\nPlease address the failed checks and run this verification script again."
fi

echo "\n🎯 Quantum Verification Complete\n"