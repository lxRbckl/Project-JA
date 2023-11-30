class discussion {

   constructor(gpt) {

      this.gpt = gpt;
      this.query = 'Ask me a very interesting question.';

   }


   async run() {return await this.gpt.message({content : this.query});}

}


// export <
module.exports = {discussion}

// >