#!/bin/bash

# Nivaro Hebrew Website - Quantum RTL Test Script for Services Page

# Make sure the script is running from the correct directory
base_dir="$(cd "$(dirname "$0")" && pwd)"
echo "🚀 Starting Quantum RTL Test for Nivaro Services Page..."
echo "Working directory: $base_dir"

# Check if all required quantum RTL files exist
required_files=("quantum-rtl-config.js" "quantum-rtl.js" "custom-element-rtl.js" 
                "rtl-console-helper.js" "rtl-test-demo.js" "quantum-rtl.css" 
                "services-rtl-init.js" "quantum-rtl-test-services.js" 
                "quantum-rtl-verification-services.js" "services.html")

missing_files=()
for file in "${required_files[@]}"; do
    if [ ! -f "$base_dir/$file" ]; then
        missing_files+=($file)
    fi

done

# Report missing files if any
if [ ${#missing_files[@]} -gt 0 ]; then
    echo "❌ ERROR: Missing required Quantum RTL files:" >&2
    for file in "${missing_files[@]}"; do
        echo "  - $file" >&2
    done
    echo "Please ensure all required files are present before testing." >&2
    exit 1
else
    echo "✅ All required Quantum RTL files are present."
fi

# Function to serve the website using Python
serve_with_python() {
    echo "
🔮 Starting local server using Python..."
    python3 -m http.server 8000 --directory "$base_dir" >/dev/null 2>&1 &
    python_pid=$!
    echo "✅ Server started on http://localhost:8000/services.html"
    echo "Python server PID: $python_pid"
    echo "
📋 Testing Instructions for Services Page Quantum RTL:
"
    echo "1. Open your browser and navigate to http://localhost:8000/services.html"
    echo "2. Press Ctrl+Shift+T to activate the Quantum RTL Test Interface"
    echo "3. Observe the statistics and verify that:
   - Document language is set to Hebrew (he)
   - Text direction is RTL
   - Elements are properly transformed for Hebrew reading"
    echo "4. Use the test interface to:
   - Refresh statistics
   - Run diagnostics
   - Toggle RTL transformations
   - Visualize quantum RTL states"
    echo "5. Open browser developer tools (Ctrl+Shift+I or Cmd+Opt+I)"
    echo "6. Check the Console tab for detailed verification results"
    echo "
⚙️ Available Console Commands for Testing:
"
    echo "- window.quantumRTLTest.showStats()       # Show current quantum RTL statistics"
    echo "- window.quantumRTLTest.runDiagnostics()  # Run comprehensive diagnostics"
    echo "- window.quantumRTLTest.toggleTransformations() # Toggle RTL transformations"
    echo "- window.quantumRTLVerification.getResults() # Get verification results"
    echo "- window.servicesRTLControls.reinitialize()  # Reinitialize services-specific RTL"
    echo "
💡 Tips for Testing Quantum RTL:
"
    echo "- Verify that all service cards and features are properly aligned RTL"
    echo "- Check interactive elements like buttons and navigation for proper RTL behavior"
    echo "- Test responsiveness across different screen sizes"
    echo "- Look for any layout issues or text alignment problems"
    echo "
To stop the server, press Ctrl+C or run: kill $python_pid"
    
    # Wait for user input before stopping
    read -p "
Press Enter to stop the server..." 
    
    # Stop the Python server
    if ps -p $python_pid > /dev/null; then
        echo "🛑 Stopping Python server..."
        kill $python_pid
        wait $python_pid 2>/dev/null
        echo "✅ Server stopped."
    fi
}

# Function to serve the website using Node.js (if Python isn't available)
serve_with_node() {
    echo "
🔮 Starting local server using Node.js..."
    if command -v npx &> /dev/null; then
        npx http-server "$base_dir" -p 8000 >/dev/null 2>&1 &
        node_pid=$!
        echo "✅ Server started on http://localhost:8000/services.html"
        echo "Node.js server PID: $node_pid"
        
        read -p "
Press Enter to stop the server..." 
        
        if ps -p $node_pid > /dev/null; then
            echo "🛑 Stopping Node.js server..."
            kill $node_pid
            wait $node_pid 2>/dev/null
            echo "✅ Server stopped."
        fi
    else
        echo "❌ Node.js http-server not found. Please install it with: npm install -g http-server"
        return 1
    fi
}

# Function to serve the website using Ruby (fallback option)
serve_with_ruby() {
    echo "
🔮 Starting local server using Ruby..."
    if command -v ruby &> /dev/null; then
        ruby -run -e httpd "$base_dir" -p 8000 >/dev/null 2>&1 &
        ruby_pid=$!
        echo "✅ Server started on http://localhost:8000/services.html"
        echo "Ruby server PID: $ruby_pid"
        
        read -p "
Press Enter to stop the server..." 
        
        if ps -p $ruby_pid > /dev/null; then
            echo "🛑 Stopping Ruby server..."
            kill $ruby_pid
            wait $ruby_pid 2>/dev/null
            echo "✅ Server stopped."
        fi
    else
        echo "❌ Ruby not found."
        return 1
    fi
}

# Try to serve the website using available methods
if command -v python3 &> /dev/null; then
    serve_with_python
elif command -v npx &> /dev/null; then
    serve_with_node
elif command -v ruby &> /dev/null; then
    serve_with_ruby
else
    echo "❌ ERROR: Could not find a suitable server to host the website." >&2
    echo "Please install Python, Node.js, or Ruby to run the test server." >&2
    echo "
Alternatively, you can manually open the services.html file in your browser."
    echo "
After opening, press Ctrl+Shift+T to activate the Quantum RTL Test Interface."
    exit 1
fi

# Final message
echo "
✅ Quantum RTL Test for Services Page completed."