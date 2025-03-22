const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});










app.get('/', (req, res) => {
  res.send('DB connected successfully!');
});
// Start the server with error handling
app.listen(8080,async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("server connected sucessfully")
  } catch (error){
    console.log(error)
  }
})

