// // import <
// const {

//    Routes,
//    Client,
//    IntentsBitField

// } = require('discord.js');

// // >


// class client {

//    constructor() {

//       this.client = new Client({

//          rest : {version : '10'},
//          intents : [
     
//              IntentsBitField.Flags.Guilds,
//              IntentsBitField.Flags.GuildMembers,
//              IntentsBitField.Flags.GuildMessages,
//              IntentsBitField.Flags.MessageContent
     
//          ]
     
//      });

//    }


//    async conch() {



//    }


//    async choose() {



//    }


//    async discussion() {



//    }

// }


const {OpenAI} = require('openai');


const token = '';
const openai = new OpenAI({apiKey : token});


(async () => {

   const response = await openai.chat.completions.create({

      model : 'gpt-3.5-turbo',
      messages : [{ 
         
         role: 'user', 
         content: 'how are you' 
      
      }]

   });

   console.log(response.choices[0].message.content); // remove

})();