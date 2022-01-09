// CamelBot bot.js
// Camila Thompson

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Bot info.'),
    async execute(interaction) {
        await interaction.reply('Name: Camelbot\nSpecies: Robit\nPurpose: Leave this server better than I found it');
    },
};
