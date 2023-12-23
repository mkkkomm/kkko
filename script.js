function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

// Update the URL in script.js
fetch('/.netlify/functions/send-message', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
});

    // Clear the input field
    messageInput.value = '';
}
