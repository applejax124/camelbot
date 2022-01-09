// CamelBot ready.js
// Camila Thompson

module.exports = {
    name: 'ready',
    once: true, // specifies that the event should only run once
    execute(client) {
        console.log(`Ready to go! Logged in as ${client.user.tag}`);
    },
};
