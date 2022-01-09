// CamelBot interactionCreate.js
// Camila Thompson

async function runCommand(interaction){

    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Could not execute command.', ephemeral: true });
    }

    console.log('Interaction completed.');

}

module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        runCommand(interaction);
    },
};
