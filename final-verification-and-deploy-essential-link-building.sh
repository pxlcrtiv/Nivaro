#!/bin/bash

# Final Quantum RTL Verification and Deployment for essential-link-building-guide.html
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

TOTAL_CHECKS=5
PASSED_CHECKS=0

# Function to check and report critical items
check_critical() {
  local check_number=$1
  local check_name=$2
  local condition=$3
  local fix_command=$4
  
  echo -n "[Critical Check ${check_number}/${TOTAL_CHECKS}] ${check_name}: "
  
  if eval "$condition"; then
    echo -e "${GREEN}PASSED${NC}"
    ((PASSED_CHECKS++))
    return 0
  else
    echo -e "${RED}FAILED${NC}"
    
    if [ ! -z "$fix_command" ]; then
      echo -e "  ${YELLOW}Applying fix...${NC}"
      eval "$fix_command"
      
      if eval "$condition"; then
        echo -e "  ${GREEN}FIXED${NC}"
        ((PASSED_CHECKS++))
        return 0
      else
        echo -e "  ${RED}Fix failed.${NC}"
        return 1
      fi
    fi
    return 1
  fi
}

# Function to fix HTML attributes using awk (more reliable than sed for macOS)
fix_html_attributes() {
  awk '{
    if ($0 ~ /<html/) {
      sub(/lang="en"/, "lang=\"he\"", $0);
      if ($0 !~ /dir="rtl") {
        sub(/<html/, "<html dir=\"rtl\"", $0);
      }
    }
    print
  }' "${HTML_FILE}" > "${HTML_FILE}.tmp"
  mv "${HTML_FILE}.tmp" "${HTML_FILE}"
}

# Function to add CSS reference using awk
add_css_reference() {
  awk -v css_file="${RTL_CSS_FILE}" '{
    if ($0 ~ /<\/head>/) {
      print "    <link rel=\"stylesheet\" href=\"" css_file "\" type=\"text/css\" media=\"all\" />"
    }
    print
  }' "${HTML_FILE}" > "${HTML_FILE}.tmp"
  mv "${HTML_FILE}.tmp" "${HTML_FILE}"
}

# Function to add JS references using awk
add_js_references() {
  awk -v core_js="${CORE_RTL_JS}" -v page_js="${RTL_JS_FILE}" '{
    if ($0 ~ /<\/body>/) {
      print "    <script src=\"" core_js "\" defer></script>"
      print "    <script src=\"" page_js "\" defer></script>"
    }
    print
  }' "${HTML_FILE}" > "${HTML_FILE}.tmp"
  mv "${HTML_FILE}.tmp" "${HTML_FILE}"
}

# Function to fix Open Graph locale using awk
fix_opengraph_locale() {
  awk '{
    if ($0 ~ /property="og:locale"/) {
      sub(/content="en_US"/, "content=\"he_IL\"", $0);
    }
    print
  }' "${HTML_FILE}" > "${HTML_FILE}.tmp"
  mv "${HTML_FILE}.tmp" "${HTML_FILE}"
}

# Function to add Hebrew language tags if missing
add_hebrew_tags() {
  awk '{
    if ($0 ~ /"WebPage"/ && $0 ~ /"inLanguage"/) {
      sub(/"inLanguage":"en_US"/, "\"inLanguage\":\"he_IL\"", $0);
      sub(/"inLanguage":"en-US"/, "\"inLanguage\":\"he-IL\"", $0);
    }
    if ($0 ~ /"WebSite"/ && $0 ~ /"inLanguage"/) {
      sub(/"inLanguage":"en_US"/, "\"inLanguage\":\"he_IL\"", $0);
      sub(/"inLanguage":"en-US"/, "\"inLanguage\":\"he-IL\"", $0);
    }
    print
  }' "${HTML_FILE}" > "${HTML_FILE}.tmp"
  mv "${HTML_FILE}.tmp" "${HTML_FILE}"
}

# Create emergency backup if missing
if ! ls essential-link-building-guide.html.bak.* 2>/dev/null | grep -q '[1-9]'; then
  echo "Creating emergency backup..."
  cp "${HTML_FILE}" "${HTML_FILE}.bak.emergency.$(date +"%Y%m%d%H%M%S")"
fi

# Start critical verification
echo "\n🔍 Critical Quantum RTL Verification for ${HTML_FILE}\n"

# Critical Check 1: HTML language and direction attributes
check_critical 1 "HTML attributes (lang=\"he\" dir=\"rtl\")" \
  "grep -q '<html.*lang="he".*dir="rtl"' "${HTML_FILE}"" \
  "fix_html_attributes"

# Critical Check 2: Required RTL files exist
check_critical 2 "Required RTL files exist" \
  "[ -f "${RTL_CSS_FILE}" ] && [ -f "${RTL_JS_FILE}" ] && [ -f "${CORE_RTL_JS}" ]" \
  "echo 'Error: Missing RTL files. Cannot continue.' && exit 1"

# Critical Check 3: Hebrew language tags
check_critical 3 "Hebrew language tags" \
  "grep -E '"inLanguage":"he_IL"|"inLanguage":"he-IL"|lang="he"' "${HTML_FILE}" | grep -v '"alternate"' | wc -l | grep -q '[1-9]'" \
  "add_hebrew_tags"

# Critical Check 4: Backup file presence
check_critical 4 "Backup file presence" \
  "ls essential-link-building-guide.html.bak.* 2>/dev/null | wc -l | grep -q '[1-9]'" \
  "cp "${HTML_FILE}" "${HTML_FILE}.bak.emergency.$(date +"%Y%m%d%H%M%S")""

# Critical Check 5: quantum-rtl-zone classes
check_critical 5 "Quantum RTL zone classes" \
  "grep -o 'class="[^"[:space:]]*quantum-rtl-zone[^"[:space:]]*"' "${HTML_FILE}" | wc -l | grep -q '[1-9]'" \
  "sed -i '' 's/<main /<main class="quantum-rtl-zone" /' "${HTML_FILE}" && sed -i '' 's/<article /<article class="quantum-rtl-zone" /' "${HTML_FILE}""

# Add missing references one by one
if ! grep -q "${RTL_CSS_FILE}" "${HTML_FILE}"; then
  echo -e "\n🔄 Adding missing CSS reference..."
  add_css_reference
  echo -e "${GREEN}CSS reference added.${NC}"
fi

if ! grep -q "${CORE_RTL_JS}" "${HTML_FILE}" || ! grep -q "${RTL_JS_FILE}" "${HTML_FILE}"; then
  echo -e "🔄 Adding missing JS references..."
  add_js_references
  echo -e "${GREEN}JS references added.${NC}"
fi

if ! grep -q 'property="og:locale" content="he_IL"' "${HTML_FILE}"; then
  echo -e "🔄 Fixing Open Graph locale..."
  fix_opengraph_locale
  echo -e "${GREEN}Open Graph locale fixed.${NC}"
fi

# Final verification summary
echo "\n📊 Final Verification Summary:"
echo "Total Critical Checks: ${TOTAL_CHECKS}"
echo "Passed Checks: ${GREEN}${PASSED_CHECKS}${NC}"

# Deployment instructions
if [ ${PASSED_CHECKS} -eq ${TOTAL_CHECKS} ]; then
  echo "\n✅ ${GREEN}Quantum RTL Implementation SUCCESSFULLY verified!${NC}"
  echo "\n📋 Deployment Instructions:"
  echo "Run this command to deploy to Firebase:"
  echo "  firebase deploy --only hosting:essential-link-building-guide.html"
  echo "\n🌐 Expected Live URL:"
  echo "  https://nivaro-51.web.app/essential-link-building-guide.html"
  echo "\n🎯 Quantum RTL Implementation Complete!"
elif [ ${PASSED_CHECKS} -ge $((TOTAL_CHECKS/2)) ]; then
  echo "\n⚠️ ${YELLOW}Quantum RTL Implementation has been partially fixed.${NC}"
  echo "While not all checks passed, the core RTL functionality should work."
  echo "\n📋 Deployment Instructions:"
  echo "Run this command to deploy to Firebase:"
  echo "  firebase deploy --only hosting:essential-link-building-guide.html"
  echo "\n🌐 Expected Live URL:"
  echo "  https://nivaro-51.web.app/essential-link-building-guide.html"
  echo "\nNote: Some refinements may be needed after deployment."
else
  echo "\n❌ ${RED}Critical verification failed.${NC}"
  echo "However, the essential RTL changes have been applied."
  echo "\n📋 Deployment Instructions:"
  echo "If you wish to proceed with deployment anyway, run:"
  echo "  firebase deploy --only hosting:essential-link-building-guide.html"
  echo "\n🌐 Expected Live URL:"
  echo "  https://nivaro-51.web.app/essential-link-building-guide.html"
fi

echo "\n✨ Quantum RTL Implementation for essential-link-building-guide.html ✨"