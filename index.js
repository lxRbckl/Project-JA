// < Project JA by Alex & Jordyn > //


// import <
const {client} = require('./source/client.js');

// >


// objects <
const token = {

   openai : (process.env.tokenopenai).toString(),
   discord : (process.env.tokendiscord).toString()

};

// >


(async () => {

   console.log('++++++++++++++')
   console.log('openai', token.openai)
   console.log('discord', token.discord)
   console.log('====================')

   new client(

      openaiToken = token.openai,
      discordToken = token.discord

   ).run();

})();


// export <
module.exports = token;

// >


// < In loving memory of Kyle, our beloved aquatic friend. > //