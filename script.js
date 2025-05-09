document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const movie = document.getElementById('movieName').value;
  const seat = document.getElementById('seatSelect').value;
  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;

  if (name && phone.length === 10) {
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('confirmationMessage').textContent = `Ticket booked successfully for ${movie}, Seat: ${seat} for ${name}.`;
  } else {
    alert('Please provide valid details');
  }
});

// Set movie name from URL query string
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const movie = urlParams.get('movie');
  if (movie) {
    document.getElementById('movieName').value = movie;
  }
}
