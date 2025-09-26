/**
 * Quantum Hebrew Translation Activation Script
 * 
 * This script provides manual control over the quantum Hebrew translation system
 * and allows for testing and debugging of the translation functionality.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("🌌 Quantum Hebrew Translation Activator Loaded");
    
    // Create activation interface
    createQuantumActivationInterface();
    
    // Auto-activate translation after a short delay
    setTimeout(() => {
        if (window.quantumHebrewTranslator) {
            console.log("⚛️ Auto-activating quantum Hebrew translation...");
            window.quantumHebrewTranslator.enableQuantumTranslation();
            showQuantumActivationNotification();
        } else {
            console.warn("⚠️ Quantum Hebrew Translator not found - manual activation required");
            showManualActivationButton();
        }
    }, 2000);
});

/**
 * Create quantum activation interface
 */
function createQuantumActivationInterface() {
    // Create floating activation button
    const activationButton = document.createElement('button');
    activationButton.id = 'quantum-hebrew-activator';
    activationButton.innerHTML = '🔬 הפעל תרגום קוונטי';
    activationButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: linear-gradient(45deg, #5d5ad6, #8b5cf6);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(93, 90, 214, 0.3);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    activationButton.addEventListener('mouseenter', () => {
        activationButton.style.transform = 'scale(1.05)';
        activationButton.style.boxShadow = '0 6px 20px rgba(93, 90, 214, 0.4)';
    });
    
    activationButton.addEventListener('mouseleave', () => {
        activationButton.style.transform = 'scale(1)';
        activationButton.style.boxShadow = '0 4px 15px rgba(93, 90, 214, 0.3)';
    });
    
    activationButton.addEventListener('click', () => {
        activateQuantumHebrewTranslation();
    });
    
    document.body.appendChild(activationButton);
}

/**
 * Show quantum activation notification
 */
function showQuantumActivationNotification() {
    const notification = document.createElement('div');
    notification.id = 'quantum-activation-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            background: rgba(34, 197, 94, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            font-weight: bold;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
            animation: quantumSlideIn 0.5s ease-out;
        ">
            ✅ תרגום קוונטי לעברית הופעל בהצלחה!
        </div>
    `;
    
    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes quantumSlideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes quantumSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'quantumSlideOut 0.5s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

/**
 * Show manual activation button
 */
function showManualActivationButton() {
    const button = document.getElementById('quantum-hebrew-activator');
    if (button) {
        button.innerHTML = '⚠️ לחץ להפעלת תרגום קוונטי';
        button.style.background = 'linear-gradient(45deg, #ef4444, #f59e0b)';
    }
}

/**
 * Activate quantum Hebrew translation
 */
function activateQuantumHebrewTranslation() {
    const button = document.getElementById('quantum-hebrew-activator');
    
    if (window.quantumHebrewTranslator) {
        console.log("⚛️ Activating quantum Hebrew translation...");
        
        // Update button state
        button.innerHTML = '⏳ מפעיל תרגום קוונטי...';
        button.disabled = true;
        
        // Enable translation
        const startTime = performance.now();
        const result = window.quantumHebrewTranslator.enableQuantumTranslation();
        const endTime = performance.now();
        
        // Apply translation to document
        const translationResult = window.quantumHebrewTranslator.applyQuantumTranslationToDocument();
        
        // Update button after translation
        button.innerHTML = '✅ תרגום קוונטי הופעל';
        button.style.background = 'linear-gradient(45deg, #10b981, #059669)';
        button.disabled = false;
        
        // Show detailed results
        showTranslationResults(translationResult);
        
        console.log("✅ Quantum Hebrew translation completed successfully!");
        console.log("📊 Translation results:", translationResult);
        
    } else {
        console.error("💥 Quantum Hebrew Translator not available");
        button.innerHTML = '❌ שגיאה בהפעלה';
        button.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
        
        // Show error notification
        showErrorNotification('התרגום הקוונטי לא זמין. אנא רענן את הדף.');
    }
}

/**
 * Show translation results
 */
function showTranslationResults(results) {
    const resultsPanel = document.createElement('div');
    resultsPanel.id = 'quantum-translation-results';
    resultsPanel.innerHTML = `
        <div style="
            position: fixed;
            top: 150px;
            right: 20px;
            z-index: 10001;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 20px;
            border-radius: 15px;
            font-family: 'Arial', sans-serif;
            font-size: 12px;
            backdrop-filter: blur(15px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
            max-width: 300px;
            animation: quantumSlideIn 0.5s ease-out;
        ">
            <h4 style="margin: 0 0 15px 0; color: #5d5ad6; font-size: 16px;">📊 תוצאות תרגום קוונטי</h4>
            <div style="margin-bottom: 10px;">
                <strong>אלמנטים שתורגמו:</strong> ${results.elementsTranslated}
            </div>
            <div style="margin-bottom: 10px;">
                <strong>זמן תרגום:</strong> ${results.translationTime.toFixed(2)}ms
            </div>
            <div style="margin-bottom: 10px;">
                <strong>ביצועים:</strong> ${results.performance.toFixed(2)} אלמנטים/שנייה
            </div>
            <div style="font-size: 10px; color: #888; margin-top: 15px;">
                לחץ כאן כדי לסגור
            </div>
        </div>
    `;
    
    resultsPanel.addEventListener('click', () => {
        resultsPanel.style.animation = 'quantumSlideOut 0.5s ease-in';
        setTimeout(() => {
            resultsPanel.remove();
        }, 500);
    });
    
    document.body.appendChild(resultsPanel);
}

/**
 * Show error notification
 */
function showErrorNotification(message) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            background: rgba(239, 68, 68, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            font-weight: bold;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
            animation: quantumSlideIn 0.5s ease-out;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'quantumSlideOut 0.5s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

/**
 * Add keyboard shortcut for quantum translation
 */
document.addEventListener('keydown', function(event) {
    // Ctrl + Shift + H for Hebrew translation
    if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        activateQuantumHebrewTranslation();
    }
    
    // Ctrl + Shift + R for refresh
    if (event.ctrlKey && event.shiftKey && event.key === 'R') {
        event.preventDefault();
        location.reload();
    }
});

// Add global functions for manual control
window.quantumTranslationControls = {
    enable: () => {
        if (window.quantumHebrewTranslator) {
            window.quantumHebrewTranslator.enableQuantumTranslation();
            showQuantumActivationNotification();
        }
    },
    
    disable: () => {
        if (window.quantumHebrewTranslator) {
            window.quantumHebrewTranslator.disableQuantumTranslation();
            showErrorNotification('התרגום הקוונטי הושבת');
        }
    },
    
    getStats: () => {
        if (window.quantumHebrewTranslator) {
            return window.quantumHebrewTranslator.getTranslationStats();
        }
        return null;
    },
    
    addTranslation: (english, hebrew) => {
        if (window.quantumHebrewTranslator) {
            window.quantumHebrewTranslator.addQuantumTranslation(english, hebrew);
            showQuantumActivationNotification(`תרגום נוסף: ${english} → ${hebrew}`);
        }
    }
};

console.log("🎮 Quantum Translation Controls Available:");
console.log("  - Ctrl + Shift + H: הפעל תרגום קוונטי");
console.log("  - Ctrl + Shift + R: רענן דף");
console.log("  - window.quantumTranslationControls.enable(): הפעל ידני");
console.log("  - window.quantumTranslationControls.disable(): השבת ידני");
console.log("  - window.quantumTranslationControls.getStats(): קבל סטטיסטיקות");
console.log("  - window.quantumTranslationControls.addTranslation(en, he): הוסף תרגום");