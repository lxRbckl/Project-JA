// < Project JA by Alex & Jordyn > //


// import <
const {client} = require('./source/client.js');

// >


// objects <
const token = {

   openai : process.env.tokenopenai,
   discord : process.env.tokendiscord

};

// >


(async () => {

   new client(

      openaiToken = token.openai,
      discordToken = token.discord

   ).run();

})();


// export <
module.exports = {token};

// >


// < In loving memory of Kyle, our beloved aquatic friend. > //