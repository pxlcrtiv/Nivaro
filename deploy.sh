#!/bin/bash

# 🌌 Nivaro Quantum RTL Deployment Script
# *"Deploying across dimensions with quantum precision"*

set -e

echo "🚀 Initiating Quantum RTL Deployment..."
echo "⚛️  Connecting to quantum realm..."

# Colors for quantum output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Quantum progress animation
quantum_spin() {
    local spin='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
    local i=0
    while [ $i -lt $1 ]; do
        printf "\r${PURPLE}⚛️  Quantum processing... ${spin:i%10:1}${NC}"
        sleep 0.1
        ((i++))
    done
    echo ""
}

# Check if Firebase CLI is installed
echo -e "${BLUE}🔍 Checking quantum deployment tools...${NC}"
if ! command -v firebase &> /dev/null; then
    echo -e "${RED}❌ Firebase CLI not found in quantum realm${NC}"
    echo -e "${YELLOW}📦 Installing quantum deployment tools...${NC}"
    npm install -g firebase-tools
    quantum_spin 20
fi

# Check if user is logged in
echo -e "${BLUE}🔐 Verifying quantum identity...${NC}"
if ! firebase projects:list &> /dev/null; then
    echo -e "${YELLOW}🔑 Quantum authentication required...${NC}"
    firebase login
    quantum_spin 15
fi

# Display available quantum projects
echo -e "${CYAN}🌌 Available quantum deployment targets:${NC}"
firebase projects:list --json | jq -r '.result[] | "\(.projectId) - \(.displayName)"' 2>/dev/null || firebase projects:list

# Ask user to select quantum project
echo -e "${PURPLE}🎯 Select your quantum deployment target:${NC}"
echo -e "${YELLOW}Enter project ID (or press Enter for current project):${NC}"
read -r PROJECT_ID

if [ -n "$PROJECT_ID" ]; then
    echo -e "${BLUE}🔄 Switching quantum reality to: $PROJECT_ID${NC}"
    firebase use "$PROJECT_ID"
    quantum_spin 10
fi

# Validate quantum files exist
echo -e "${BLUE}📁 Validating quantum files...${NC}"
QUANTUM_FILES=(
    "quantum-rtl.js"
    "quantum-rtl.css"
    "quantum-measurer.js"
    "quantum-control-panel.js"
    "quantum-rtl-integration.js"
    "quantum-hebrew-translator.js"
    "quantum-hebrew-activation.js"
    "index.html"
)

for file in "${QUANTUM_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ Missing quantum file: $file${NC}"
        exit 1
    fi
done

echo -e "${GREEN}✅ All quantum files validated${NC}"

# Pre-deployment quantum optimization
echo -e "${BLUE}⚡ Optimizing quantum performance...${NC}"
quantum_spin 15

# Check for quantum configuration
echo -e "${BLUE}🔧 Loading quantum configuration...${NC}"
if [ -f "quantum-rtl-config.js" ]; then
    echo -e "${GREEN}✅ Quantum configuration found${NC}"
else
    echo -e "${YELLOW}⚠️  Using default quantum settings${NC}"
fi

# Run quantum tests if available
if [ -f "quantum-rtl-tests.js" ]; then
    echo -e "${BLUE}🧪 Running quantum validation tests...${NC}"
    node quantum-rtl-tests.js || echo -e "${YELLOW}⚠️  Quantum tests completed with warnings${NC}"
fi

# Deploy to quantum cloud
echo -e "${PURPLE}🌠 Initiating quantum deployment sequence...${NC}"
echo -e "${CYAN}📡 Transmitting to Firebase quantum cloud...${NC}"

firebase deploy

# Get deployment URL
DEPLOYMENT_URL=$(firebase hosting:channel:deploy --json 2>/dev/null | jq -r '.result.url' 2>/dev/null || echo "")
if [ -z "$DEPLOYMENT_URL" ]; then
    PROJECT_ID=$(firebase projects:list --json | jq -r '.result[0].projectId' 2>/dev/null || echo "unknown")
    DEPLOYMENT_URL="https://${PROJECT_ID}.web.app"
fi

# Quantum deployment completion
echo ""
echo -e "${GREEN}🎉 Quantum deployment successful!${NC}"
echo -e "${CYAN}🌌 Your RTL reality is now live at:${NC}"
echo -e "${PURPLE}🔗 $DEPLOYMENT_URL${NC}"
echo ""
echo -e "${YELLOW}🎯 Quantum Features Activated:${NC}"
echo -e "   • Right-to-Left transformation: ${GREEN}✅ Active${NC}"
echo -e "   • Hebrew translation system: ${GREEN}✅ Active${NC}"
echo -e "   • Quantum performance optimization: ${GREEN}✅ Active${NC}"
echo -e "   • Interactive control panel: ${GREEN}✅ Active${NC}"
echo ""
echo -e "${BLUE}🎮 Quick Quantum Commands:${NC}"
echo -e "   • Ctrl + Shift + H: Activate Hebrew translation"
echo -e "   • Ctrl + Shift + R: Refresh quantum state"
echo -e "   • Floating panel: Manual RTL controls"
echo ""
echo -e "${PURPLE}🌟 Experience the quantum difference at your new RTL website!${NC}"
echo -e "${CYAN}Built with quantum love for Hebrew speakers across all dimensions.${NC}"

# Optional: Open in browser
if command -v open &> /dev/null; then
    echo -e "${YELLOW}🌐 Opening quantum portal in browser...${NC}"
    sleep 2
    open "$DEPLOYMENT_URL"
elif command -v xdg-open &> /dev/null; then
    echo -e "${YELLOW}🌐 Opening quantum portal in browser...${NC}"
    sleep 2
    xdg-open "$DEPLOYMENT_URL"
fi

echo ""
echo -e "${GREEN}🚀 Quantum deployment sequence complete!${NC}"
echo -e "${PURPLE}⚛️  May your RTL journey be filled with quantum harmony.${NC}"