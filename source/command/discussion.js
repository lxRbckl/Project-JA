// import <
const {gpt} = require('lxrbckl');

// >


class discussion {

   constructor(openaiToken) {

      this.gpt = new gpt({token : openaiToken});
      this.query = 'Ask me a very interesting question.';

   }


   async run() {return await this.gpt.message({query : this.query});}

}


// export <
module.exports = {discussion}

// >