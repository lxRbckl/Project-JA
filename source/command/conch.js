class conch {

   static choices = [

      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes -definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."

   ];
   

   body() {

      return {

         type : 1,
         name : 'conch',
         description : 'mystical conch shell',
         options : [

            {

               type : 3,
               required : true,
               name : 'question',
               description : 'what to ask'

            }

         ]

      }

   }


   run(input) {

      const size = (conch.choices).length;
      const index = Math.floor((Math.random() * 100) % size);

      return conch.choices[index];

   }

}


// export <
module.exports = {conch}

// >