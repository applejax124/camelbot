// CamelBot - index.js
// Camila Thompson

const { SapphireClient } = require('@sapphire/framework');
const { prefix, token } = require('../config.json');

// create a new client
const client = new SapphireClient(
    {
        intents: ['GUILDS', 'GUILD_MESSAGES'],
        defaultPrefix: prefix,
        disableMentionPrefix: true,
        presence: {
            activities: [
                {
                    name: 'Dungeons and Dragons',
                    type: 'PLAYING'
                }
            ]
        }
    }
);

// login to the discord server
client.login(token);
