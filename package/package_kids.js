// package_kids.js - Child Profile Configuration & UI Logic

function applyKidsProfile() {
    console.log("Applying Kids Profile settings...");

    // 1. Update UI elements for the Kids dashboard
    const profileTitle = document.getElementById("profile-title");
    if (profileTitle) {
        profileTitle.innerText = "Watchlin - Kids Mode (Safe & Simple)";
    }

    // Apply safe limits
    const stepGoalInput = document.getElementById("step-goal");
    if (stepGoalInput) {
        stepGoalInput.value = 2000; // Lower, kid-friendly step goal
        stepGoalInput.disabled = true;
    }

    // Disable advanced or intrusive sensors for children
    const hrToggle = document.getElementById("hr-monitor-toggle");
    if (hrToggle) {
        hrToggle.checked = false;
        hrToggle.disabled = true;
    }

    // Display child-friendly dashboard message
    const modeInfo = document.getElementById("mode-info");
    if (modeInfo) {
        modeInfo.innerText = "Features restricted: Heart rate monitor disabled, notifications hidden for safety.";
    }
}

// Build the payload commands to send to the Y68/D20 watch over Bluetooth
function getKidsCommandPayload() {
    return JSON.stringify({
        profile: "kids",
        brightness: 30,
        heart_rate_active: false,
        step_goal: 2000,
        notifications: false
    });
}

// Automatically run configuration when this script module loads
document.addEventListener("DOMContentLoaded", () => {
    // Uncomment the line below if you have a button to switch profiles dynamically
    // document.getElementById("kids-profile-btn").addEventListener("click", applyKidsProfile);
});
      
