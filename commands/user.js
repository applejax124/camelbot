// CamelBot user.js
// Camila Thompson

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('User info.'),
    async execute(interaction) {
        await interaction.reply(`Your nick: ${interaction.user.username}\nYour tag: ${interaction.user.tag}`);
    },
};
