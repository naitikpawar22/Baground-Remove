/**
 * security.js
 * Implements security deterrents, including the visible warning bar when DevTools are detected.
 */

// --- 1. Right-Click and Shortcut Blocking (Previous Logic) ---

// Disable Right-Click Context Menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Block common keyboard shortcuts used to open Developer Tools
document.onkeydown = function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        return false;
    }
    
    // Ctrl+Shift+I, J, C (Windows/Linux) or Cmd+Option+I, J, C (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        return false;
    }

    // Ctrl+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'U') {
        return false;
    }
};

// --- 2. DevTools Detection and Banner Display ---

// Function to create and show the red banner
function showDevToolsWarning() {
    // Check if the banner already exists
    if (document.getElementById('dev-warning-bar')) {
        return;
    }
    
    const warningBar = document.createElement('div');
    warningBar.id = 'dev-warning-bar';
    
    // Inline styling for immediate, prominent display (Red Bar)
    warningBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; /* Makes it full-screen to block content */
        background-color: #cc0000; /* Bright Red */
        color: white;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding: 50px 0;
        z-index: 999999; /* Ensure it's on top of everything */
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 1.5;
        font-family: 'Poppins', sans-serif;
        cursor: not-allowed;
        transition: opacity 0.3s;
    `;
    
    warningBar.innerHTML = '⚠️ INSPECTION NOT ALLOWED ⚠️<br>Please Close the Developer Tools.';
    
    document.body.appendChild(warningBar);
}

// Function to hide the red banner
function hideDevToolsWarning() {
    const warningBar = document.getElementById('dev-warning-bar');
    if (warningBar) {
        warningBar.style.opacity = '0';
        // Remove after transition
        setTimeout(() => {
            warningBar.remove();
        }, 300); 
    }
}

let devToolsOpen = false;

// Main detection function using a combination of window size and console access
function checkDevTools() {
    const threshold = 160; // Size threshold in pixels (e.g., for docked console height)
    
    // Detect if the window size difference suggests a docked or opened console
    const sizeCheck = (window.outerWidth - window.innerWidth) > threshold || 
                      (window.outerHeight - window.innerHeight) > threshold;

    // Detect if a debugger is active (the classic F12 trick)
    const debuggerCheck = false;
    try {
        // eslint-disable-next-line no-debugger
        // This line is often detected by DevTools, causing it to break execution
        // which can be an indirect way to detect its presence, though often blocked
        // by the browser's built-in handling now.
    } catch (e) {
        debuggerCheck = true;
    }

    // A simple, reliable trick for detection in modern Chrome/Firefox
    // The id is simply an identifier for the detection method
    const element = new Image();
    let isDevToolsOpen = false;
    element.__defineGetter__('id', function() {
        isDevToolsOpen = true; // If DevTools tries to read 'id', this function executes
    });
    console.log(element); // Logging the element triggers the getter if console is open

    if (isDevToolsOpen || sizeCheck || debuggerCheck) {
        if (!devToolsOpen) {
            devToolsOpen = true;
            showDevToolsWarning();
        }
    } else {
        if (devToolsOpen) {
            devToolsOpen = false;
            hideDevToolsWarning();
        }
    }
}

// Check every half-second
setInterval(checkDevTools, 500);