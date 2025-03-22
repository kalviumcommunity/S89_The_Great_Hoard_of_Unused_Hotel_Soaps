const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});


// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Start the server with error handling
app.listen(8080,async()=>{
  try {
    await mongoose.connect("mongodb+srv://papanns19:Papan7890@cluster0.3pp3u.mongodb.net/")
    console.log("server connected sucessfully")
  } catch (error){
    console.log(error)
  }
})

