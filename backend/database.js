```javascript
const mongoose = require('mongoose');

// Define schemas
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const ChatSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: Date,
});

const PortfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

// Define models
const User = mongoose.model('User', UserSchema);
const Chat = mongoose.model('Chat', ChatSchema);
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

module.exports = {
  User,
  Chat,
  Portfolio,
};
```