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

        const array = message.content.split(" ");

        //error handling
        if (array.length != 2) {
            const msg = await message.channel.send("Sorry, I couldn't parse your command. \nUsage: !roll <number of dice>d<type of dice> \nExample: !roll 2d10");
            return msg;
        }

        //split string into number of dice and type of dice
        let [number,dice] = array[1].split("d");
        //TODO: add error checking 
        number = parseInt(number);
        dice = parseInt(dice);

        //generate random number in dice range
        let dice_array = [];
        for (let i = 0; i < number; i++){
            let random = Math.floor((Math.random() * dice) + 1);
            dice_array.push(random);
        }

        //return all of the generated numbers
        const reducer = (prev_val, curr_val) => prev_val + curr_val;

        let string = dice_array.toString().replace(/,/g , " ");
        let sum = dice_array.reduce(reducer);

        const msg = await message.channel.send(`${string} (sum: ${sum})`);
        return msg;
    }

}

module.exports = {
    RollCommand
};
