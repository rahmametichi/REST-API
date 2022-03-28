const mongoose=require('mongoose')

const User = new mongoose.Schema(

     {       name : {
                type : String,
                required : true ,
                unique : true
            }  ,
            phone : {
                type : Number , 
                required: true ,
                unique : true ,

            },
            email : {
                type : String ,
                unique : true ,
            }

        })

    module.exports = mongoose.model("user" , User)