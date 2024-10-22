
const apiUrl = ''; 

// Function to fetch real-time data
// async function fetchData() {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Update the DOM with fetched data
//         document.getElementById('temperature').innerText = data.temperature;
//         document.getElementById('humidity').innerText = data.humidity;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         document.getElementById('temperature').innerText = 'Error';
//         document.getElementById('humidity').innerText = 'Error';
//     }
// }


function fetchData() {
    const data = {
        temperature: (Math.random() * 10 + 18).toFixed(2), //  temp between 20-30°C
        humidity: (Math.random() * 20 + 40).toFixed(2) //  humidity between 50-70%
    };

    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;


             // Clear previous warnings
             tempWarning.innerText = '';
             humidityWarning.innerText = '';
             
            const thresholdLow=document.getElementById('thresholdLow').innerText;
            const thresholdHigh=document.getElementById('thresholdHigh').innerText;

            const humidityLow=document.getElementById('humidityLow').innerText;
            const humidityHigh=document.getElementById('humidityHigh').innerText;
             // Check temperature
             if (data.temperature < thresholdLow || data.temperature > thresholdHigh) {
                 tempWarning.innerText = '⚠️ Danger: Temperature out of range!';
                 tempWarning.style.color = 'red';
                 tempWarning.style.fontSize='12px' // Change text color to red for danger
             }
         
             // Check humidity
             if (data.humidity < humidityLow || data.humidity > humidityHigh) { // Assuming 30-60 is the safe range for humidity
                 humidityWarning.innerText = '⚠️ Danger: Humidity out of range!';
                 humidityWarning.style.color = 'red';
                 humidityWarning.style.fontSize='12px' // Change text color to red for danger
             }
    
}

// Function to update threshold based on selected medicine
function updateThreshold() {
    const medicineSelect = document.getElementById('medicineSelect');
    const selectedOption = medicineSelect.options[medicineSelect.selectedIndex];
    const thresholdLow = selectedOption.getAttribute('data-threshold-low');
    const thresholdHigh = selectedOption.getAttribute('data-threshold-high');
    const humidityLow=selectedOption.getAttribute('humidity-threshold-low');
    const humidityHigh=selectedOption.getAttribute('humidity-threshold-high');

    // Update the threshold range display
    document.getElementById('thresholdLow').innerText = thresholdLow;
    document.getElementById('thresholdHigh').innerText = thresholdHigh;

    document.getElementById('humidityLow').innerText = humidityLow;
    document.getElementById('humidityHigh').innerText = humidityHigh;

    const temp=document.getElementById('temperature').textContent;
    const humidity=document.getElementById('humidity').textContent;

}

// Fetch data every 1 second to simulate real-time updates
setInterval(fetchData, 1000);

fetchData();
