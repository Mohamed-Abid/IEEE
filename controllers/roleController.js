const role= require('../models/role')
 
exports.create = (req,res)=>{
    var data =req.body;
 
   let newdata= new role ({...data})
   
     newdata.save().then(result => {
        res.json(result)    
    })
   
}

exports.getRoles = (req,res)=>{
    role.find({}).then(data=> {
        res.json(data);
    })
    .catch(err=> {
        console.log("cannot find users",err);
    })
}