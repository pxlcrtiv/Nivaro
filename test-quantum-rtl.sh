#!/bin/bash

# Test Quantum RTL Implementation on who-we-are.html
# This script serves the website locally and provides instructions for testing

# Make the script executable
chmod +x "$0"

# Function to display colored messages
echo_color() {
    COLOR="$1"
    TEXT="$2"
    NC="\033[0m" # No Color
    
    case $COLOR in
        "green") echo -e "\033[32m$TEXT$NC" ;;
        "blue") echo -e "\033[34m$TEXT$NC" ;;
        "yellow") echo -e "\033[33m$TEXT$NC" ;;
        "red") echo -e "\033[31m$TEXT$NC" ;;
        *) echo -e "$TEXT" ;;
    esac
}

# Clear the terminal
clear

# Display header
echo_color "blue" "🌌 Quantum RTL Implementation Test for who-we-are.html 🌌"
echo ""

# Check if the required files exist
echo_color "yellow" "🔍 Checking required files..."

REQUIRED_FILES=("who-we-are.html" "quantum-rtl.js" "quantum-rtl-config.js" "who-we-are-rtl-init.js")
MISSING_FILES=()

for FILE in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$FILE" ]; then
        MISSING_FILES+=($FILE)
    fi

done

if [ ${#MISSING_FILES[@]} -ne 0 ]; then
    echo_color "red" "❌ Error: Missing required files:"
    for FILE in "${MISSING_FILES[@]}"; do
        echo_color "red" "  - $FILE"
    done
    echo ""
    echo_color "yellow" "Please make sure all required files are in the current directory."
    exit 1
else
    echo_color "green" "✅ All required files found!"
fi

echo ""

# Function to serve the website using Python
serve_with_python() {
    PYTHON_VERSION=$(python --version 2>&1 | cut -d ' ' -f 2 | cut -d '.' -f 1)
    
    if [ "$PYTHON_VERSION" = "3" ]; then
        echo_color "blue" "🚀 Starting Python 3 HTTP server on http://localhost:8000..."
        python -m http.server 8000
    else
        echo_color "blue" "🚀 Starting Python 2 HTTP server on http://localhost:8000..."
        python -m SimpleHTTPServer 8000
    fi
}

# Function to serve the website using Node.js
serve_with_node() {
    if command -v npx &> /dev/null; then
        echo_color "blue" "🚀 Starting Node.js HTTP server on http://localhost:8000..."
        npx serve . --port 8000
    elif command -v http-server &> /dev/null; then
        echo_color "blue" "🚀 Starting Node.js HTTP server on http://localhost:8000..."
        http-server . -p 8000
    else
        return 1
    fi
}

# Function to serve the website using Ruby
serve_with_ruby() {
    if command -v ruby &> /dev/null; then
        echo_color "blue" "🚀 Starting Ruby HTTP server on http://localhost:8000..."
        ruby -run -e httpd . -p 8000
    else
        return 1
    fi
}

# Try to serve the website with available tools
echo_color "yellow" "🚀 Attempting to serve the website locally..."
echo ""

serve_with_python || serve_with_node || serve_with_ruby || {
    echo_color "red" "❌ Error: Could not start a local HTTP server."
    echo ""
    echo_color "yellow" "Please install one of the following to test:"
    echo_color "yellow" "  - Python: Run 'python -m http.server 8000'"
    echo_color "yellow" "  - Node.js: Install http-server with 'npm install -g http-server' then run 'http-server -p 8000'"
    echo_color "yellow" "  - Ruby: Run 'ruby -run -e httpd . -p 8000'"
    echo ""
    echo_color "blue" "After starting the server, open http://localhost:8000/who-we-are.html in your browser"
    echo_color "blue" "and press Ctrl+Shift+T to activate the Quantum RTL Test Interface."
}

# Display testing instructions
echo ""
echo_color "green" "✅ Quantum RTL Implementation Test Instructions:"
echo ""
echo_color "blue" "1. Open http://localhost:8000/who-we-are.html in your browser"
echo_color "blue" "2. Press Ctrl+Shift+T to activate the Quantum RTL Test Interface"
echo_color "blue" "3. Use the test interface to monitor and control transformations"
echo_color "blue" "4. Open the browser console (F12) to see detailed diagnostic information"
echo_color "blue" "5. Check that all elements are properly aligned for RTL reading"
echo_color "blue" "6. Verify that interactive elements work correctly in RTL mode"
echo ""
echo_color "yellow" "💡 Remember: This implementation follows the 'As above, so below' principle -"
echo_color "yellow" "   working at both macro and micro levels to create perfect RTL experiences for Hebrew users."