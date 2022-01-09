// CamelBot index.js
// Camila Thompson

const fs = require('fs');

// require the discord.js classes
const { Client, Collection, Intents } = require('discord.js');

// require the bot token from config.json
const { prefix, token } = require('./config.json');

// create a new client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// command handling
client.commands = new Collection();
client.prefix = prefix;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// event handling
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// login to the discord server
client.login(token);
