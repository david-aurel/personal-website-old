const functions = require('firebase-functions');

const express = require('express');

const data = require('./data.json');
const ses = require('./ses.js');

const app = express();

app.get('/test', (req, res) => {
    console.log('test hit');
    res.send({ test: 'success' });
});

app.post('/api/contact-me', (req, res) => {
    console.log('contact me route was hit!');

    const recipient = 'david.aurel001@gmail.com';
    const message = `${req.body.name} (${req.body.email}) says: "${req.body.message}"`;
    const subject = req.body.subject;
    ses.sendEmail(recipient, message, subject)
        .then(() => {
            console.log('sending email worked');
            return res.json({ success: true });
        })
        .catch(err => {
            console.log('err in sending an email:', err);
            return res.json({ success: false, err: err });
        });
});

app.get('/portfolio', (req, res) => {
    res.redirect('/');
});
app.get('/blog', (req, res) => {
    res.redirect('/');
});
app.get('/about', (req, res) => {
    res.redirect('/');
});
app.get('/contact', (req, res) => {
    res.redirect('/');
});
exports.app = functions.https.onRequest(app);
