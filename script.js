function generateRandomRoomNumber() {
    // Generate a random room number between 100 and 999
    return Math.floor(Math.random() * 900) + 100;
}

function submitReservation() {
    const name = document.getElementById('name').value;
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    const Email = document.getElementById('email').value;
    const Contact = document.getElementById('Contact').value;
    const numGuests = document.getElementById('guests').value;
    const agreeCheckbox = document.getElementById('agree');

    // Check if any field is empty
    if (name === '' || Email === '' || Contact ==='' || checkInDate === '' || checkOutDate === '' || numGuests === '' || !agreeCheckbox.checked) {
        alert("Please fill out all fields and agree to the terms and conditions before submitting.");
        return;
    }

    // Generate a random room number
    const roomNumber = generateRandomRoomNumber();

    // Create the reservation information
    const reservationInfo = `
        Name: ${name}<br>
        Email: ${Email}<br>
        Contact Number: ${Contact}<br>
        Check-in: ${checkInDate}<br>
        Check-out: ${checkOutDate}<br>
        Guests: ${numGuests}<br>
        Room Number: ${roomNumber}
    `;

    // Update the reservation information and display
    document.getElementById('reservation-info').innerHTML = reservationInfo;
    document.getElementById('reservation-details').style.display = 'block';
}
