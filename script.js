// UUIDs matching the smartwatch.ino sketch
const SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const CHAR_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';

let bluetoothDevice;
let characteristicFunc;

const connectBtn = document.getElementById('connectBtn');
const syncBtn = document.getElementById('syncBtn');
const statusDiv = document.getElementById('status');

connectBtn.addEventListener('click', async () => {
    if (bluetoothDevice && bluetoothDevice.gatt.connected) {
        bluetoothDevice.gatt.disconnect();
        return;
    }

    try {
        statusDiv.innerText = 'Scanning...';
        
        bluetoothDevice = await navigator.bluetooth.requestDevice({
            filters: [
                { name: 'Y68' },
                { name: 'D20' }
            ],
            optionalServices: [SERVICE_UUID]
        });

        statusDiv.innerText = 'Connecting...';
        const server = await bluetoothDevice.gatt.connect();
        const service = await server.getPrimaryService(SERVICE_UUID);
        characteristicFunc = await service.getCharacteristic(CHAR_UUID);

        statusDiv.innerText = 'Connected!';
        statusDiv.style.color = '#2ecc71';
        connectBtn.innerText = 'Disconnect';
        syncBtn.disabled = false;

        bluetoothDevice.addEventListener('serverdisconnected', onDisconnect);

    } catch (error) {
        console.error('Connection failed:', error);
        statusDiv.innerText = 'Connection Failed';
        statusDiv.style.color = '#e74c3c';
    }
});

syncBtn.addEventListener('click', async () => {
    if (!characteristicFunc) return;
    
    try {
        const encoder = new TextEncoder();
        const message = "Time to sync";
        await characteristicFunc.writeValue(encoder.encode(message));
        alert('Sync command sent to Y68/D20!');
    } catch (error) {
        console.error('Error writing to device:', error);
        alert('Failed to send data.');
    }
});

function onDisconnect() {
    statusDiv.innerText = 'Disconnected';
    statusDiv.style.color = '#e74c3c';
    connectBtn.innerText = 'Connect to Smartwatch';
    syncBtn.disabled = true;
    characteristicFunc = null;
          }
          
