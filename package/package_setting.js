// package_setting.js - Smartwatch Connection & Profile Manager

const SMARTWATCH_SERVICE_UUID = "0000ffe0-0000-1000-8000-00805f9b34fb";
const SMARTWATCH_CHARACTERISTIC_UUID = "0000ffe1-0000-1000-8000-00805f9b34fb";

let bluetoothDevice = null;
let bluetoothCharacteristic = null;

// Initialize connection UI listeners
document.addEventListener("DOMContentLoaded", () => {
    const connectBtn = document.getElementById("connect-btn");
    if (connectBtn) {
        connectBtn.addEventListener("click", connectSmartwatch);
    }
});

// Connect to the Y68/D20 Smartwatch using Web Bluetooth API
async function connectSmartwatch() {
    try {
        console.log("Requesting Bluetooth Device...");
        
        // Scan only for devices advertising the specific smartwatch service UUID
        bluetoothDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [SMARTWATCH_SERVICE_UUID] }]
        });

        bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);

        console.log("Connecting to GATT Server...");
        const server = await bluetoothDevice.gatt.connect();

        console.log("Getting Primary Service...");
        const service = await server.getPrimaryService(SMARTWATCH_SERVICE_UUID);

        console.log("Getting Characteristic...");
        bluetoothCharacteristic = await service.getCharacteristic(SMARTWATCH_CHARACTERISTIC_UUID);

        alert("Successfully connected to Y68/D20 Smartwatch!");
        updateConnectionUI(true);

    } catch (error) {
        console.error("Connection failed: ", error);
        alert("Connection failed. Make sure the FitPro app is closed and try again.");
        updateConnectionUI(false);
    }
}

// Send commands/data to the watch
async function sendCommand(commandString) {
    if (!bluetoothCharacteristic) {
        alert("Smartwatch is not connected!");
        return;
    }
    try {
        // Convert string command to a byte array (Uint8Array)
        const encoder = new TextEncoder();
        const data = encoder.encode(commandString);
        
        await bluetoothCharacteristic.writeValue(data);
        console.log("Command sent: " + commandString);
    } catch (error) {
        console.error("Error writing to characteristic: ", error);
    }
}

// Handle disconnection events
function onDisconnected(event) {
    console.log("Device disconnected.");
    alert("Smartwatch connection lost.");
    updateConnectionUI(false);
}

// Update UI elements based on connection status
function updateConnectionUI(isConnected) {
    const statusText = document.getElementById("connection-status");
    const connectBtn = document.getElementById("connect-btn");
    
    if (statusText) {
        statusText.innerText = isConnected ? "Status: Connected" : "Status: Disconnected";
        statusText.style.color = isConnected ? "green" : "red";
    }
    
    if (connectBtn) {
        connectBtn.innerText = isConnected ? "Disconnect" : "Connect Watch";
    }
                          }
              
