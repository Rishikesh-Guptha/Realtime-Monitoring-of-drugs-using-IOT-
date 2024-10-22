// Sample list of stops with RFID tags
const stops = [
    { location: 'Warehouse A', rfidTag: 'RFID001', checked: false },
    { location: 'Checkpoint 1', rfidTag: 'RFID002', checked: false },
    { location: 'Checkpoint 2', rfidTag: 'RFID003', checked: false },
    { location: 'Delivery Point', rfidTag: 'RFID004', checked: false }
];

// Function to display the checkpoints
function displayCheckpoints() {
    const checkpointList = document.getElementById('checkpoint-list');
    checkpointList.innerHTML = ''; // Clear previous list

    stops.forEach((stop, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${stop.location}</span>
            <span class="${stop.checked ? 'checked' : ''}">${stop.checked ? 'Checked' : 'Pending'}</span>
        `;
        checkpointList.appendChild(li);
    });
}

// Function to simulate RFID tag check
function checkRFIDTag(rfidTag) {
    const stop = stops.find(stop => stop.rfidTag === rfidTag);
    if (stop) {
        stop.checked = true;
        displayCheckpoints(); // Update UI
    }
}

// Simulate RFID checks every 5 seconds
setInterval(() => {
    const uncheckedStops = stops.filter(stop => !stop.checked);
    if (uncheckedStops.length > 0) {
        const nextStop = uncheckedStops[0];
        checkRFIDTag(nextStop.rfidTag);
    }
}, 5000); // Simulating RFID check every 5 seconds

// Initial display of checkpoints
displayCheckpoints();