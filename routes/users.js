const express = require ('express');
const app = express.Router();
const usercontroller = require('../controllers/usercontroller');  //bch na3ml liaison m3a controllers

app.use (express.urlencoded({extended :true}));
app.use (express.json());  //bch n'activi l body satrin ethom


app.get('/', usercontroller.getUsers);  //http://localhost:3000/users/ (get all users)

app.get('/:id',usercontroller.getUser)  // (get only one user)

app.post('/', usercontroller.create);  //http://localhost:3000/users/

app.delete ('/:id' , usercontroller.deleteUser);  //http://localhost:3000/users/123

app.post('/:id', usercontroller.updateUser); //http://localhost:3000/users/123



module.exports = app ;