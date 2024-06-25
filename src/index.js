require('dotenv').config();
const {Client, IntentsBitField} = require ('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is ready to serve`)
});

client.on('messageCreate', (message) =>{
    if (message.author.bot) {
        return;
    }

    if (message.content === 'Hello')  {
        message.reply('Good Morning/Afternoon/Evening, Young master. How could I serve you today? Maybe a steak on your liking? or maybe you prefer hot baths?');
    }
    
    if (message.content === 'I would like a steak') {
        message.reply('Ah a steak it is, please take a seat while i prepare one for you');
    }

    if (message.content === 'I prefer a bath') {
        message.reply('Give me 20 minutes to prepare that for you, Young master');
    }

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'hey') {
      return interaction.reply('hey!');
    }
  
    if (interaction.commandName === 'ping') {
      return interaction.reply('Pong!');
    }
});

client.login(process.env.TOKEN);

