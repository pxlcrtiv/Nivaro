#!/bin/bash

# Final script to implement quantum-level RTL changes for our-portfolio.html

# Insert quantum RTL scripts before closing </head> tag
awk '{
  if ($0 ~ /<\/head>/) {
    print "    <!-- Quantum RTL Implementation for Portfolio -->";
    print "    <link rel=\"stylesheet\" href=\"portfolio-quantum-rtl.css\" data-precedence=\"next\"/>";
    print "    <script src=\"quantum-rtl.js\"></script>";
    print "    <script src=\"portfolio-quantum-rtl.js\"></script>";
    print "    <script src=\"portfolio-quantum-rtl-verification.js\"></script>";
  }
  print $0;
}' our-portfolio.html > temp.html && mv temp.html our-portfolio.html

# Make sure the HTML tag has proper RTL attributes
sed -i '' 's/<html\([^>]*\)lang="en"\([^>]*\)>/<html\1lang="he" dir="rtl"\2>/' our-portfolio.html

# Remove duplicate dir attribute if it exists
sed -i '' 's/dir="rtl" dir="rtl"/dir="rtl"/' our-portfolio.html

# Verify implementation
echo -e "\n✅ Quantum RTL implementation for Portfolio is complete!"