/**
 * DMTCA Digital Branding Case Study Quantum RTL Implementation
 * Optimized for Hebrew language and right-to-left reading patterns
 */

class DMTCAQuantumRTL {
  constructor() {
    this.quantumObserver = null;
    this.rtlZones = [];
    this.initializeQuantumRTL();
  }

  /**
   * Initialize quantum RTL functionality
   */
  initializeQuantumRTL() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.identifyRTLZones();
      this.applyQuantumObservations();
      this.enhanceElementInteractions();
      console.log('Quantum RTL initialized for DMTCA case study page');
    });
  }

  /**
   * Identify and collect all quantum RTL zones on the page
   */
  identifyRTLZones() {
    this.rtlZones = document.querySelectorAll('.quantum-rtl-zone');
    console.log(`Identified ${this.rtlZones.length} quantum RTL zones`);
  }

  /**
   * Apply quantum-level observations to RTL zones
   */
  applyQuantumObservations() {
    // Create Intersection Observer for quantum-level element observation
    this.quantumObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activateQuantumRTLZone(entry.target);
        } else {
          this.deactivateQuantumRTLZone(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all RTL zones
    this.rtlZones.forEach(zone => {
      this.quantumObserver.observe(zone);
    });
  }

  /**
   * Activate quantum RTL properties for a zone when it enters viewport
   */
  activateQuantumRTLZone(zone) {
    zone.style.transition = 'all 0.5s ease';
    zone.style.opacity = '1';
    zone.style.transform = 'translateX(0)';
  }

  /**
   * Deactivate quantum RTL properties for a zone when it leaves viewport
   */
  deactivateQuantumRTLZone(zone) {
    zone.style.transition = 'all 0.3s ease';
    zone.style.opacity = '0.8';
  }

  /**
   * Enhance element interactions for RTL experience
   */
  enhanceElementInteractions() {
    // Enhance links for RTL
    const links = document.querySelectorAll('.quantum-rtl-zone a');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.2s ease';
        link.style.transform = 'translateX(-3px)';
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
      });
    });

    // Adjust navigation for RTL
    this.adjustNavigationForRTL();
  }

  /**
   * Adjust navigation components for RTL layout
   */
  adjustNavigationForRTL() {
    // Ensure menu items open in RTL direction
    const menuButton = document.querySelector('#menuButton');
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        const menuLayer = document.querySelector('.Header_menuLayer__sDzNa');
        if (menuLayer) {
          menuLayer.style.transformOrigin = 'top right';
        }
      });
    }
  }

  /**
   * Clean up quantum RTL resources
   */
  destroy() {
    if (this.quantumObserver) {
      this.quantumObserver.disconnect();
    }
    console.log('Quantum RTL resources cleaned up');
  }
}

// Initialize DMTCA Quantum RTL when the page loads
const dmtcaQuantumRTL = new DMTCAQuantumRTL();

// Expose to window for debugging if needed
window.DMTCAQuantumRTL = dmtcaQuantumRTL;
