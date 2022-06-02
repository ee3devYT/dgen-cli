const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// DISOCRD BOT TOKEN
const token = '';


// Ready Event
const ready = console.log('📝 | Starting your application bot. Please wait');
const P = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 250);
console.log('--------------------------------------------------');
setTimeout(() => {
  clearInterval(loader, console.log('Done'));
}, 5000);
setTimeout(() => {
  clearInterval(
    console.log('--------------------------------------------------'),
    console.log('✅ | Your bot is ready!')
  );
}, 5000);

module.exports = { ready, token };
