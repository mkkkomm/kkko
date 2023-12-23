// netlify/functions/send-message.js

exports.handler = async function (event, context) {
    const { message } = JSON.parse(event.body);

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

    return {
        statusCode: 200,
        body: 'Message sent to Discord!',
    };
};

