const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('discord.js');

const app = express();
const port = 3000;

const discordClient = new Client();
const TOKEN = 'YOUR_DISCORD_BOT_TOKEN';
const channelId = '1188108873098350685';

app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
  const { message } = req.body;

  const channel = discordClient.channels.cache.get(channelId);

  if (channel) {
    channel.send(message);
    res.status(200).send('Message sent to Discord!');
  } else {
    res.status(500).send('Error: Discord channel not found.');
  }
});

discordClient.once('ready', () => {
  console.log('Discord bot is ready!');
});

discordClient.login(TOKEN);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
