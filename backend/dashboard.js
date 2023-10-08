```javascript
const express = require('express');
const router = express.Router();
const db = require('./database.js');

// Update portfolio
router.put('/portfolio', (req, res) => {
    const portfolioData = req.body;
    db.PortfolioSchema.findOneAndUpdate({}, portfolioData, { upsert: true }, (err, doc) => {
        if (err) return res.status(500).send({ error: err });
        return res.send('Portfolio updated successfully');
    });
});

// Update CV
router.put('/cv', (req, res) => {
    const cvData = req.body;
    db.UserSchema.findOneAndUpdate({ role: 'admin' }, { cv: cvData }, (err, doc) => {
        if (err) return res.status(500).send({ error: err });
        return res.send('CV updated successfully');
    });
});

// Get visitor stats
router.get('/visitorStats', (req, res) => {
    db.VisitorSchema.find({}, (err, docs) => {
        if (err) return res.status(500).send({ error: err });
        return res.json(docs);
    });
});

// Get chat logs
router.get('/chatLogs', (req, res) => {
    db.ChatSchema.find({}, (err, docs) => {
        if (err) return res.status(500).send({ error: err });
        return res.json(docs);
    });
});

module.exports = router;
```