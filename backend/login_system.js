```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserSchema } = require('./database.js');

const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  const user = await UserSchema.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Username or password is wrong');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

// Register
router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserSchema({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
```