# Sed script to insert quantum RTL scripts before closing head tag
s|</head>|    <!-- Quantum RTL Implementation for UX Design Glossary -->
    <script src="quantum-rtl-config.js"></script>
    <script src="quantum-rtl.js"></script>
    <script src="custom-element-rtl.js"></script>
    <script src="rtl-console-helper.js"></script>
    <script src="rtl-test-demo.js"></script>
    <script src="glossary-quantum-rtl.js"></script>
    <script src="glossary-quantum-rtl-verification.js"></script>
</head>|g