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

   let obj = new client(

      openaiToken = token.openai,
      discordToken = token.discord

   ).run();

})();


// export <
module.exports = {token};

// >