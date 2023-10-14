const user = require('../models/user');
const bcrypt = require("bcrypt") ;

exports.create = async (req,res)=>{
    var data = req.body;
    data.password = await bcrypt.hash(data.password , 10);
    let newdata = new user ({...data})
    newdata.save().then(result => {
        res.json(result)    
    })
    .catch(err => {
        console.log("Cannot create user", err);
    }) 
} 

exports.deleteUser = (req,res)=>{
    user.deleteOne ({_id: req.params.id}).then(data => {
        res.json(data);   
    }).catch(err => {
        console.log("Cannot delete user", err);
    })
}
exports.updateUser = (req,res)=>{
    var id = req.params.id;
    var newitem =req.body;
    user.findByIdAndUpdate(id , newitem , {new: true}).then( data =>{
        res.json(data);
    })
    .catch(err => {
        console.log("Cannot update user", err);
    })
}

exports.getUser = async (req,res)=>{
    const users = await user.find();
    res.json(users);

}
exports.getUsers = (req,res)=>{
    user.find({}).populate("role").then(data=> {
        res.json(data);
    })
    .catch(err=> {
        console.log("cannot find users",err);
    })
}