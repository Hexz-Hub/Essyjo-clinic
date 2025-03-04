    function submitAppointment() {
            // Collect form data
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let doctor = document.getElementById('doctor').value;
            let date = document.getElementById('date').value;
            let time = document.getElementById('time').value;
            let admittanceNumber = document.getElementById('admittanceNumber').value;

            // Simple form validation
            if (name && email && doctor && date && time && admittanceNumber) {
                alert("Appointment booked successfully for " + name + " with . " + doctor + date + time);
            } else {
                alert("Please fill out all fields before submitting.");
            }
        }
