// CamelBot - bot.js
// Camila Thompson

const { Command } = require('@sapphire/framework');

class RollCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'roll',
            description: 'roll for it'
        });
    }

    async messageRun(message) {
        let text = message.content;

        //TODO: split string into number of dice and type of dice

        //TODO: generate random number in dice range

        //TODO: return all of the generated numbers

    }

}

module.exports = {
    RollCommand
};
