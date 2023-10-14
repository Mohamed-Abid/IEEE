const express = require('express')
const app = express()
const port = 3000;
const mongoose= require('mongoose')
mongoose.Promise = global.Promise;

//activities Schema
const activities= require('./routes/activities')
app.use('/activities',activities)

//users Schema
const users=require('./routes/users')
app.use('/users',users)

//Role Schema
const role=require('./routes/role')
app.use('/role',role)

mongoose.set('strictQuery', true)
mongoose
  .connect("mongodb+srv://mohamedabid129:iT68ath1QX4aaLMm@mobileapp.g5zmdit.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
