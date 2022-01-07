// CamelBot index.js
// Camila Thompson

// require the discord.js classes
const Discord = require('discord.js');

// require the bot token from config.json
const config = require('./config.json');

// create a new client
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

// connect to the discord server
client.once('ready', () => {
  console.log('Ready!');
});

// Listen for commands
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'camelbot'){
      await interaction.reply('Hi! I am CamelBot and I am a good bot. Nice to meet you!');
  } else if (commandName === 'server') {
      await interaction.reply(`Server name: ${interaction.guild.name}\nMembers: ${interaction.guild.memberCount}`);
  } else if (commandName === 'user') {
      await interaction.reply(`Your nick: ${interaction.user.username}\nYour tag: ${interaction.user.tag}`);
  }
});

// login to the discord server
client.login(config.token);
