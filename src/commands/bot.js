// CamelBot - bot.js
// Camila Thompson

const { Command } = require('@sapphire/framework');

class BotCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'bot',
            aliases: ['camelbot'],
            description: 'camelbot info'
        });
    }

    async messageRun(message) {
        const msg = await message.channel.send('Name: Camelbot\nSpecies: Robit\nPurpose: Leave this server better than I found it!');
        return msg;
    }

}

module.exports = {
    BotCommand
};
