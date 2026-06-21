// package_teen.js - Teen Profile Configuration & UI Logic

function applyTeenProfile() {
    console.log("Applying Teen Profile settings...");

    // 1. Update UI elements for the Teen dashboard
    const profileTitle = document.getElementById("profile-title");
    if (profileTitle) {
        profileTitle.innerText = "Watchlin - Teen Mode";
    }

    // Apply standard user limits
    const stepGoalInput = document.getElementById("step-goal");
    if (stepGoalInput) {
        stepGoalInput.value = 8000; // Moderate, fitness-oriented step goal
        stepGoalInput.disabled = false;
    }

    // Enable heart rate monitoring
    const hrToggle = document.getElementById("hr-monitor-toggle");
    if (hrToggle) {
        hrToggle.checked = true;
        hrToggle.disabled = false;
    }

    // Display teen dashboard message
    const modeInfo = document.getElementById("mode-info");
    if (modeInfo) {
        modeInfo.innerText = "Teen profile loaded. Step goal set to 8,000 with enabled smart notifications.";
    }
}

// Build the payload commands to send to the Y68/D20 watch over Bluetooth
function getTeenCommandPayload() {
    return JSON.stringify({
        profile: "teen",
        brightness: 70,
        heart_rate_active: true,
        step_goal: 8000,
        notifications: true
    });
}

// Automatically run configuration when this script module loads
document.addEventListener("DOMContentLoaded", () => {
    // Hook up dynamic profile switching if applicable
});
