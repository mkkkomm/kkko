function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    // Use Fetch API to send the message to your server
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    // Clear the input field
    messageInput.value = '';
}
