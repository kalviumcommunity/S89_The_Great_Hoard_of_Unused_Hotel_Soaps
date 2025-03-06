const express = require("express");
const app = express();

// Define a simple /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "Pong!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
