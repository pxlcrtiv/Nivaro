// Quantum RTL Status Tester
// This script tests if the quantum RTL implementation is working correctly

(function() {
  'use strict';
  
  console.log('🔍 Testing Quantum RTL status for Power Remote Designers page...');
  
  // Check if HTML is properly configured for RTL
  const htmlLang = document.documentElement.getAttribute('lang');
  const htmlDir = document.documentElement.getAttribute('dir');
  
  console.log(`🌐 HTML language: ${htmlLang}, direction: ${htmlDir}`);
  
  if (htmlLang === 'he' && htmlDir === 'rtl') {
    console.log('✅ HTML is correctly configured for Hebrew RTL');
  } else {
    console.warn('⚠️ HTML not properly configured for Hebrew RTL');
  }
  
  // Check if QuantumRTLObserver exists and is initialized
  setTimeout(() => {
    if (window.quantumRTLObserver) {
      console.log('✅ QuantumRTLObserver is initialized');
      
      // Measure the current state
      const currentState = window.quantumRTLObserver.measureState();
      console.log(`🔬 Current quantum state: ${currentState}`);
      
      // Test if RTL class is applied to body
      if (document.body.classList.contains('quantum-rtl')) {
        console.log('✅ Quantum RTL class is applied to body');
      } else {
        console.warn('⚠️ Quantum RTL class is not applied to body');
      }
      
      // Test if specific page class is applied
      if (document.body.classList.contains('power-remote-designers-rtl')) {
        console.log('✅ Power Remote Designers specific RTL class is applied');
      } else {
        console.warn('⚠️ Power Remote Designers specific RTL class is not applied');
      }
      
      // List quantum RTL files loaded
      const quantumRTLFiles = document.querySelectorAll('link[href*="quantum-rtl.css"], script[src*="quantum-rtl.js"]');
      console.log(`📁 Loaded quantum RTL files count: ${quantumRTLFiles.length}`);
      
      quantumRTLFiles.forEach((file, index) => {
        const fileName = file.getAttribute('href') || file.getAttribute('src');
        console.log(`   ${index + 1}. ${fileName}`);
      });
      
      // Create a quantum test event
      console.log('🚀 Creating quantum test event...');
      const testEvent = new Event('quantumRTLTest');
      document.dispatchEvent(testEvent);
      
      console.log('✅ Quantum RTL status test completed!');
      
    } else {
      console.error('❌ QuantumRTLObserver not found! The quantum RTL implementation may not be working.');
      
      // Try to manually initialize if possible
      if (typeof QuantumRTLObserver !== 'undefined') {
        console.log('🔄 Attempting to manually initialize QuantumRTLObserver...');
        window.quantumRTLObserver = new QuantumRTLObserver();
        console.log('✅ Manual initialization complete. Please refresh the page to see full effects.');
      }
    }
  }, 1500); // Quantum delay for initialization
  
  // Add a global function to reset quantum state if needed
  window.resetQuantumRTL = function() {
    if (window.quantumRTLObserver && typeof window.quantumRTLObserver.resetState === 'function') {
      console.log('🔄 Resetting quantum RTL state...');
      window.quantumRTLObserver.resetState();
      console.log('✅ Quantum RTL state reset complete!');
      return true;
    } else {
      console.error('❌ Cannot reset quantum RTL state: Observer not available.');
      return false;
    }
  };
  
  // Add this script to the global scope for easy access
  window.quantumRTLStatus = {
    test: function() {
      console.log('🔍 Re-running Quantum RTL status test...');
      window.resetQuantumRTL();
      
      setTimeout(() => {
        if (window.quantumRTLObserver) {
          const currentState = window.quantumRTLObserver.measureState();
          console.log(`🔬 New quantum state: ${currentState}`);
          console.log('✅ Re-test completed!');
        }
      }, 1000);
    },
    info: function() {
      console.log('📊 Quantum RTL Information:');
      console.log('   - HTML lang: ' + htmlLang);
      console.log('   - HTML dir: ' + htmlDir);
      console.log('   - Observer initialized: ' + (typeof window.quantumRTLObserver !== 'undefined'));
    }
  };
  
  console.log('💡 Tip: Type "window.quantumRTLStatus.test()" in the console to re-run the test.');
  console.log('💡 Tip: Type "window.resetQuantumRTL()" in the console to reset the quantum state.');
})();