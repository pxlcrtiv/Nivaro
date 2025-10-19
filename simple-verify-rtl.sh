#!/bin/bash

echo "=== Simple RTL Implementation Verification ==="
echo "Target: boost-b2b-linkedin-strategies.html"
echo "==========================================="

# Check HTML attributes
echo "\n1. Checking HTML attributes..."
grep -q '<html[^>]*lang=\"he\"[^>]*dir=\"rtl\"' boost-b2b-linkedin-strategies.html && echo "✓ HTML attributes: lang=\"he\" dir=\"rtl\" ✓" || echo "✗ HTML attributes not set correctly"

# Check for RTL resources
echo "\n2. Checking RTL resources..."
[ -f quantum-rtl-linkedin.css ] && echo "✓ quantum-rtl-linkedin.css exists" || echo "✗ quantum-rtl-linkedin.css not found"
[ -f quantum-rtl.js ] && echo "✓ quantum-rtl.js exists" || echo "✗ quantum-rtl.js not found"
[ -f linkedin-quantum-rtl.js ] && echo "✓ linkedin-quantum-rtl.js exists" || echo "✗ linkedin-quantum-rtl.js not found"

# Check resource references
echo "\n3. Checking HTML resource references..."
grep -q 'quantum-rtl-linkedin.css' boost-b2b-linkedin-strategies.html && echo "✓ CSS reference found" || echo "✗ CSS reference not found"
grep -q 'quantum-rtl.js' boost-b2b-linkedin-strategies.html && echo "✓ quantum-rtl.js reference found" || echo "✗ quantum-rtl.js reference not found"
grep -q 'linkedin-quantum-rtl.js' boost-b2b-linkedin-strategies.html && echo "✓ linkedin-quantum-rtl.js reference found" || echo "✗ linkedin-quantum-rtl.js reference not found"

# Check language tags
echo "\n4. Checking language tags..."
grep -q '\"inLanguage\":\"he\"' boost-b2b-linkedin-strategies.html && echo "✓ JSON-LD language set to Hebrew (he)" || echo "✗ JSON-LD language not set to Hebrew"

# Check backup
echo "\n5. Checking backup files..."
ls -la boost-b2b-linkedin-strategies.html.bak.* 2>/dev/null || echo "No backup files found"

echo "\n=== Verification Complete ==="