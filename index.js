// < Project JA by Alex & Jordyn > //


// import <
const {client} = require('./source/client.js');

// >


(async () => {

   let obj = new client(

      openaiToken = '',
      discordToken = ''

   );

   obj.run();
   obj.listen();

})();