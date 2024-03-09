require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
  {
    name: 'Made By Denizstar',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/denizinhisleri',
  },
];

// you can change the statuses up to make a custom status 
// more detail in // https://github.com/denizstar/custom-status-v14

eventHandler(client);

client.login(process.env.TOKEN);
