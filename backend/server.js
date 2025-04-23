const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

dotenv.config();

const app = express(); // Initialize app
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

mongoose.connect(process.env.Mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

const crudRoutes = require('./CrudRoutes');
app.use('/api', crudRoutes);

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});