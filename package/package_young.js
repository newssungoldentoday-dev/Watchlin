// package_young.js - Young Profile Configuration & UI Logic

function applyYoungProfile() {
    console.log("Applying Young Profile settings...");

    // 1. Update UI elements for the Young User dashboard
    const profileTitle = document.getElementById("profile-title");
    if (profileTitle) {
        profileTitle.innerText = "Watchlin - Active Youth Mode";
    }

    // Apply active user limits
    const stepGoalInput = document.getElementById("step-goal");
    if (stepGoalInput) {
        stepGoalInput.value = 5000; // Standard active step goal
        stepGoalInput.disabled = false;
    }

    // Enable heart rate monitoring for fitness tracking
    const hrToggle = document.getElementById("hr-monitor-toggle");
    if (hrToggle) {
        hrToggle.checked = true;
        hrToggle.disabled = false;
    }

    // Display youth dashboard message
    const modeInfo = document.getElementById("mode-info");
    if (modeInfo) {
        modeInfo.innerText = "Active profile loaded. Step goal set to 5,000 with standard notifications enabled.";
    }
}

// Build the payload commands to send to the Y68/D20 watch over Bluetooth
function getYoungCommandPayload() {
    return JSON.stringify({
        profile: "young",
        brightness: 50,
        heart_rate_active: true,
        step_goal: 5000,
        notifications: true
    });
}

// Automatically run configuration when this script module loads
document.addEventListener("DOMContentLoaded", () => {
    // Hook up dynamic profile switching if applicable
});
                          
