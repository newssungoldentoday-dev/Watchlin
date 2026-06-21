// package_adult.js - Adult Profile Configuration & UI Logic

function applyAdultProfile() {
    console.log("Applying Adult Profile settings...");

    // 1. Update UI elements for the Adult dashboard
    const profileTitle = document.getElementById("profile-title");
    if (profileTitle) {
        profileTitle.innerText = "Watchlin - Adult Performance Mode";
    }

    // Apply performance settings
    const stepGoalInput = document.getElementById("step-goal");
    if (stepGoalInput) {
        stepGoalInput.value = 10000; // Standard adult daily goal
        stepGoalInput.disabled = false;
    }

    // Enable heart rate monitoring
    const hrToggle = document.getElementById("hr-monitor-toggle");
    if (hrToggle) {
        hrToggle.checked = true;
        hrToggle.disabled = false;
    }

    // Display dashboard message
    const modeInfo = document.getElementById("mode-info");
    if (modeInfo) {
        modeInfo.innerText = "Adult profile loaded. Step goal set to 10,000 with maximum brightness and full feature support.";
    }
}

// Build the payload commands to send to the Y68/D20 watch over Bluetooth
function getAdultCommandPayload() {
    return JSON.stringify({
        profile: "adult",
        brightness: 100,
        heart_rate_active: true,
        step_goal: 10000,
        notifications: true
    });
}

// Automatically run configuration when this script module loads
document.addEventListener("DOMContentLoaded", () => {
    // Hook up dynamic profile switching if applicable
});
