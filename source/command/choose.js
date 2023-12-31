class choose {

   constructor() {

      this.parameter = 'choices';
      this.delimeters = /[,.-;/]/;

   }


   context() {

      return {

         type : 1,
         name : 'choose',
         description : 'have bot decide for you',
         options : [

            {

               type : 3,
               required : true,
               name : this.parameter,
               description : `delimeters ${this.delimeters}`

            }

         ]

      };

   }


   run(choices) {

      const options = (choices).split(this.delimeters);
      const index = Math.floor((Math.random() * 100) % options.length);

      return options[index];

   }

}


// export <
module.exports = {choose}

// >