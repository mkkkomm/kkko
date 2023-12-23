const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
    const { message } = req.body;

    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1188112391813206047/iF7W_epbO9ZI79xDq1ohINLHESmWGeVmifie7KX4pfN8FyWwIZ7xdxWOuDQLphBevvTJ';

    await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: message,
        }),
    });

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Add this line to your server.js file
app.use(express.static('public'));

