// import <
const {gpt} = require('lxrbckl');
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

      guildId = '974210528958369863',
      channelId = '1061387142082863104',
      applicationId = '970221184065081374'

   ) {

      // variables <
      this.guildId = guildId;
      this.channelId = channelId;
      this.openaiToken = openaiToken;
      this.discordToken = discordToken;
      this.applicationId = applicationId;

      // >

      // objects <
      this.gpt = new gpt(this.openaiToken);
      this.discussion = new discussion({gpt : this.gpt});
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


   run() {
      
      this.client.login(this.discordToken);
      this.client.rest.put(

         Routes.applicationGuildCommands(

            this.applicationId,
            this.guildId

         ),
         {body : Object.values(this.commands).map((i) => {return i.body();})}

      );
   
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

         const channel = this.client.channels.cache.get(this.channelId);

         console.log('channel', channel); // remove
         channel.send('ok');

         // cron.schedule('0 * * * *', async () => {

         //    const response = this.discussion.run();
         //    const channel = this.client.channels.cache.get(this.channelId);

         //    console.log('channel', channel); // remove

         // });

      });
      
   }
   
}


// export <
module.exports = {client};

// >