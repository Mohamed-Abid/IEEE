const mongoose = require('mongoose');
const { Schema } = mongoose;


const activitySchema = new Schema({
        
        title: String ,
        date: { type: Date, default: Date.now },
        image : String,
        location:String,
        price :  Number,
        chapter : String,
        contact : Number,
        about : String,
        links : [{type: String}],
        isEvent : Boolean,
        isWorkshop : Boolean,
        isMeet : Boolean,
})

const activity =mongoose.model('activity',activitySchema);

module.exports=activity;
