const express = require('express')
const app = express.Router()
const  activityController=require('../controllers/activityController')
app.use(express.urlencoded({extended :true}))
app.use(express.json())





app.get('/',activityController.getActivities)


app.get('/search/:type',activityController.getbysearch)  //http://localhost:3000/activities/search/......


app.get('/all',activityController.getAll)


app.get('/:id',activityController.getOne)




app.post('/',activityController.create)


app.post('/:id',activityController.update)


app.delete('/:id',activityController.deleteOne)


app.get('/all/events',(req,res)=>{
  var events= activities.filter( el => el.isEvent==true);
  res.json(events)
})


app.get('/date/:y-:m-:d',(req,res)=>{
  var date = new Date(req.params.y,req.params.m,req.params.d);
  var list= activities.filter( el => el.date>date);
  res.json(list)
})


app.get('/all',(req,res)=>{
  const start = Date.now();
  var list =activities.filter(el => el.date >= start)
  res.json(list)
})


module.exports=app;