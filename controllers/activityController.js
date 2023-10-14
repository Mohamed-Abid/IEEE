const activity= require('../models/activity')

 
exports.getActivities = (req,res)=>{
    //activity.find({isEvent : true}).then(data => {
    activity.find({}).sort({date:1}).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
 
}

exports.getAll = (req,res)=>{
    var start = new Date()
    var date = new Date(start.getFullYear(),start.getMonth(),start.getDate());
    // activity.find({isEvent : true}).then(data => {
    activity.find({"date"  : {$gt : date}}).sort({date:1}).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
 
}


exports.getbysearch = (req,res)=>{
    var type = req.params.type;

    var meet =false
    var workshop =false
    var event =false

    if (type == 'isevent') {
            event=true;
          } 
          
           else if (type == 'meets') {
            meet=true;
          }
          else if (type == 'workshops') {
            workshop=true;
    }
    
    
    var start = new Date();
    var date = new Date(start.getFullYear(),start.getMonth(),start.getDate());
    //activity.find({isEvent : true}).then(data => {
    activity.find({isEvent : event, isMeet : meet , isWorkshop : workshop , "date"  : {$gt : date}}).select("title image date chapter isEvent isWorkshop isMeet").sort({date: 1}).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
 
}


// exports.getMeets = (req,res)=>{
//     var start = new Date();
//     var date = new Date(start.getFullYear(),start.getMonth(),start.getDate());
//     //activity.find({isEvent : true}).then(data => {
//     activity.find({isMeet : true , "date"  : {$gt : date}}).sort({date:1}).then(data => {
//         res.json(data)    
//     }).catch(err => {
//         console.log("Cannot find activities", err);
//     })
 
// }

// exports.getWorkshops = (req,res)=>{
//     var start = new Date();
//     var date = new Date(start.getFullYear(),start.getMonth(),start.getDate());
//     //activity.find({isEvent : true}).then(data => {
//     activity.find({isWorkshop : true, "date"  : {$gt : date}}).sort({date:1}).then(data => {
//         res.json(data)    
//     }).catch(err => {
//         console.log("Cannot find activities", err);
//     })
 
// }
 
exports.create = (req,res)=>{
    var data =req.body;
 
   let newdata= new activity({...data})
   
     newdata.save().then(result => {
        res.json(result)    
    })
   
}
 
exports.getOne = (req,res)=>{
    // find({_id:req.params.id,})  return  []
    // findOne({_id:req.params.id,})  return  {}
    activity.findById(req.params.id).sort({date:1}).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
}
 
exports.update = (req,res)=>{
    var id = req.params.id;
    var newitem =req.body;
    activity.findByIdAndUpdate(id,newitem,{new: true}).then( data =>{
        res.json(data);
    })
}
 
exports.deleteOne = (req,res)=>{
   
    activity.deleteOne({_id : req.params.id}).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot delete activity", err);
    })
}







