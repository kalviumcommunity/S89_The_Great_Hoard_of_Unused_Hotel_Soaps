const express = require('express');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const User = require('./user');

const router = express.Router();
const SECRET_KEY = 'your_secret_key'; 
// POST: Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Inline validation
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return res.status(400).json({ message: "Username is required and must be a non-empty string" });
  }
  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ message: "Email is required and must be a valid string" });
  }
  if (!password || typeof password !== 'string' || password.trim() === '') {
    return res.status(400).json({ message: "Password is required and must be a non-empty string" });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST: Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ message: "Email is required and must be a valid string" });
  }
  if (!password || typeof password !== 'string' || password.trim() === '') {
    return res.status(400).json({ message: "Password is required and must be a non-empty string" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;