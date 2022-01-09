// CamelBot index.js
// Camila Thompson

const fs = require('fs');

// require the discord.js classes
const { Client, Collection, Intents } = require('discord.js');

// require the bot token from config.json
const { token } = require('./config.json');

// create a new client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //retrieve command names from files in commands dir

// get command names
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// connect to the discord server
client.once('ready', () => {
    console.log('Ready!');
});

// Listen for commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if(!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'ERROR: could not execute command.', ephemeral: true });
    }

});

// login to the discord server
client.login(token);
