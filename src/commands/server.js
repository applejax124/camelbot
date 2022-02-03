// CamelBot server.js
// Camila Thompson

const { Command } = require('@sapphire/framework');

class ServerCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'server',
            description: 'server info'
        });
    }

    async messageRun(message) {
        const { name, memberCount } = message.guild;
        const msg = await message.channel.send(`Server Name: ${name} \nMember Count: ${memberCount}`);
        return msg;
    }

}

module.exports = {
    ServerCommand
};
