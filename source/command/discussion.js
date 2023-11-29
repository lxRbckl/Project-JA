class discussion {

   static query = 'Ask me a very interesting question.'


   body() {

      return {

         type : 1,
         name : 'discussion',
         description : 'engage in weekly conversation',
         options : [

            {

               type : 3,
               name : 'query',
               required : false,
               description : 'query to gpt'

            }

         ]

      }

   }

   
   async run(input) {

      const query = input.query ? input.query : discussion.query;
      const response = await input.gpt.message({content : query});

      return response;

   }

}


// export <
module.exports = {discussion}

// >