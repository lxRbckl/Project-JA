// import <
const cron = require('node-cron');
const {

   Routes,
   Client,
   IntentsBitField

} = require('discord.js');

const {conch} = require('./command/conch.js');
const {choose} = require('./command/choose.js');
const {discussion} = require('./command/discussion.js');

// >


class client {

   constructor(

      openaiToken,
      discordToken,

      guildId = process.env.guildId,
      channelId = process.env.channelId,
      applicationId = process.env.applicationId

   ) {

      // setup <
      this.guildId = guildId;
      this.channelId = channelId;
      this.openaiToken = openaiToken;
      this.discordToken = discordToken;
      this.applicationId = applicationId;

      this.discussion = new discussion(this.openaiToken);
      this.client = new Client({

         rest : {version : '10'},
         intents : [

             IntentsBitField.Flags.Guilds,
             IntentsBitField.Flags.GuildMembers,
             IntentsBitField.Flags.GuildMessages,
             IntentsBitField.Flags.MessageContent

         ]

      });

      // >

      // commands <
      this.commands = {

         'conch' : new conch(),
         'choose' : new choose()

      };

      // >

   }


   listen() {

      this.client.on('interactionCreate', async (interaction) => {

         let command = this.commands[interaction.commandName];
         let parameter = interaction.options.getString(command.parameter);

         await interaction.reply({ephemeral : true, content : command.run(parameter)});
         
      });

   }


   schedule() {

      this.client.on('ready', async () => {

         cron.schedule('0 0 * * 1', async () => {

            let response = await this.discussion.run();
            let channel = this.client.channels.cache.get(this.channelId);

            await channel.send(response);

         });

      });
      
   }


   run() {
      
      // register slash commands <
      // activate interactions, schedule <
      this.client.login(this.discordToken);
      this.client.rest.put(

         Routes.applicationGuildCommands(

            this.applicationId,
            this.guildId

         ),
         {body : Object.values(this.commands).map((i) => {return i.context();})}

      );

      this.listen();
      this.schedule();

      // >
   
   }
   
}


// export <
module.exports = {client};

// >