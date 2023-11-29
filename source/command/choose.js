class choose {

   static delimeters = /[,.-;/]/;


   body() {

      return {

         type : 1,
         name : 'choose',
         description : 'have bot decide for you',
         options : [

            {

               type : 3,
               required : true,
               name : 'choices',
               description : `delimeters ${choose.delimeters}`

            }

         ]

      }

   }


   run(input) {

      const options = (input.choices).split(choose.delimeters);
      const index = Math.floor((Math.random() * 100) % options.length);

      return options[index];

   }

}


// export <
module.exports = {choose}

// >