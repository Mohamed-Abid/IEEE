const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    name: {
        first: String,
        last: String
      } ,
    mail : String ,
    password : String ,
    role:[{type: Schema.Types.ObjectId,
        ref:"role"}]  ////one to many relation between role and user
       
     
    })
    const user =mongoose.model('user',userSchema)
    module.exports=user
