// CamelBot user.js
// Camila Thompson

const { Command } = require('@sapphire/framework');

class UserCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'user',
            description: 'user info'
        });
    }

    async messageRun(message) {
        const { username } = message.author;
        const msg = await message.channel.send(`Your nick: ${username}`);
        return msg;
    }

}

module.exports = {
    UserCommand
};
