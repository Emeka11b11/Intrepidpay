document.getElementById('openPayment').addEventListener('click', function() {
    const overlay = document.getElementById('paymentOverlay');
    const iframe = document.getElementById('popupFrame');

    // Load the popup content
    iframe.src = 'popup.html';

    // Show the overlay
    overlay.style.display = 'flex';
});

// Close popup when clicking outside
document.getElementById('paymentOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
        document.getElementById('popupFrame').src = 'about:blank';
    }
});