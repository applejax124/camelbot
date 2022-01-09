// CamelBot server.js
// Camila Thompson

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Server info.'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}\nMembers: ${interaction.guild.memberCount}`);
    },
};
