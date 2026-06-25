const sosBtn = document.getElementById("sosBtn");
const locationBtn = document.getElementById("locationBtn");
const locationDiv = document.getElementById("location");
const alarm = document.getElementById("alarm");

// SOS Button
sosBtn.addEventListener("click", () => {

    alarm.play();

    sosBtn.classList.add("sos-active");

    alert("SOS Alert Activated!");

    // Simulate emergency message
    console.log("Emergency message sent to contacts.");
});

// Get Location
locationBtn.addEventListener("click", () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                locationDiv.innerHTML = `
                    <strong>Latitude:</strong> ${lat}<br>
                    <strong>Longitude:</strong> ${lon}<br>
                    <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">
                        Open in Google Maps
                    </a>
                `;
            },
            () => {
                locationDiv.innerHTML = "Location access denied.";
            }
        );

    } else {
        locationDiv.innerHTML = "Geolocation not supported.";
    }
});
