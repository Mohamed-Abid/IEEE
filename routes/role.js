const express = require('express')
const app= express.Router()
const roleController=require('../controllers/roleController')
app.use(express.urlencoded({extended :true }))
app.use(express.json())
 
app.get('/',roleController.getRoles)
app.post('/', roleController.create)



module.exports=app;