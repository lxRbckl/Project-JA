// < Project JA by Alex & Jordyn > //


// import <
const {client} = require('./source/client.js');

// >


// objects <
const token = {

   openai : 'fish',
   discord : 'tacos'

};

// >


(async () => {

   let obj = new client(

      openaiToken = token.openai,
      discordToken = token.discord

   );

   obj.run();
   obj.listen();
   obj.schedule();

})();


// export <
module.exports = {token};

// >