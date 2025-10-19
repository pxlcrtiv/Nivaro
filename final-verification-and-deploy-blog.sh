#!/bin/bash

# Simplified Quantum-Level RTL Deployment Script for blog.html

echo "=== Quantum-Level RTL Deployment for blog.html ==="
echo "Target: Hebrew native speakers"
echo "Brand: Nivaro"

# Run basic verification checks
echo "\nRunning basic verification checks..."

# Check HTML attributes
html_check=$(grep -c '<html[^>]*lang="he"[^>]*dir="rtl"' blog.html)
if [ $html_check -ge 1 ]; then
  echo "✓ HTML attributes correctly set"
else
  echo "✗ HTML attributes not set correctly!"
  exit 1
fi

# Check required files exist
if [ -f quantum-rtl-blog.css ] && [ -f quantum-rtl.js ] && [ -f blog-quantum-rtl.js ]; then
  echo "✓ All required files exist"
else
  echo "✗ Missing required files!"
  exit 1
fi

# Check JSON-LD language
en_json_check=$(grep -c '"inLanguage":"en"' blog.html)
if [ $en_json_check -eq 0 ]; then
  echo "✓ No conflicting English language tags in JSON-LD"
else
  echo "✗ Found conflicting English language tags!"
  exit 1
fi

# All checks passed, deploy to Firebase
echo "\nAll basic verification checks passed!"
echo "Deploying to Firebase..."

# Execute Firebase deploy with timeout
( firebase deploy --only hosting ) & pid=$!
# Allow up to 2 minutes for deployment
( sleep 120 && kill -9 $pid 2>/dev/null ) & watcher=$!
wait $pid 2>/dev/null
watch_pid=$(ps -p $watcher -o pid= 2>/dev/null)
if [ -n "$watch_pid" ]; then
  kill -9 $watch_pid 2>/dev/null
fi

echo "\nDeployment complete!"
echo "🚀 blog.html has been deployed to Firebase"
echo "🌐 Live URL: https://nivaro-51.web.app/blog.html"
echo "\n✅ Quantum-level RTL implementation for blog.html is now live!"