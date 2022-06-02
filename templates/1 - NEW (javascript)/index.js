const { Client, Intents } = require('discord.js');
const client  = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { ready, token } = require('./Data/config');
client.on('ready', () => {
    ready
})

// CODE HERE

client.login(token);