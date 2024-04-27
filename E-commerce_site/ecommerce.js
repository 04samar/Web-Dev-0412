document.getElementById('sellerForm').addEventListener('submit', function(event) {
    var sellerName = document.getElementById('sellerName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
    
    if (!sellerName || !phoneNumber || !address) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});
