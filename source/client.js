// import <
const {gpt} = require('lxrbckl');
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
      applicationId = '970221184065081374'

   ) {

      this.guildId = guildId;
      this.openaiToken = openaiToken;
      this.discordToken = discordToken;
      this.applicationId = applicationId;

      // openai <
      // discord <
      // commands <
      this.gpt = new gpt(this.openaiToken);
      this.client = new Client({

         rest : {version : '10'},
         intents : [

             IntentsBitField.Flags.Guilds,
             IntentsBitField.Flags.GuildMembers,
             IntentsBitField.Flags.GuildMessages,
             IntentsBitField.Flags.MessageContent

         ]

      });
      this.conch = new conch();
      this.choose = new choose();
      this.discussion = new discussion();

      // >

   }


   run() {
      
      this.client.applic
      this.client.login(this.discordToken);
      this.client.rest.put(

         Routes.applicationGuildCommands(

            this.applicationId,
            this.guildId

         ),
         {body : [
            
            this.conch.body(),
            this.choose.body(),
            this.discussion.body()
      
         ]}

      );
   
   }


   listen() {

      this.client.on('interactionCreate', async (interaction) => {

         const response = await {

            'conch' : this.conch.run,
            'choose' : this.choose.run,
            'discussion' : this.discussion.run

         }[interaction.commandName]({

            gpt : this.gpt,
            query : interaction.options.getString('query'),
            choices : interaction.options.getString('choices'),
            question : interaction.options.getString('question')

         });

         interaction.reply(response);
         
      });

   }
   
}


// export <
module.exports = {client};

// >