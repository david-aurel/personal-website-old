const functions = require('firebase-functions');

const express = require('express');
const engine = require('consolidate');

const data = require('./data.json');
const ses = require('./ses.js');

const app = express();
app.engine('hbs', engine.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=43200, s-maxage=86400');
    res.render('index', { data });
});

app.get('/animation', (req, res) => {
    res.render('animation');
});

app.post('/contact-me', (req, res) => {
    console.log('contact me route was hit!');

    try {
        const recipient = 'david.aurel001@gmail.com';
        const message = `${req.body.name} (${req.body.email}) says: "${req.body.message}"`;
        const subject = req.body.subject;
        try {
            ses.sendEmail(recipient, message, subject);
            res.redirect('/');
        } catch (error) {
            console.log('err in sending an email:', error);
            res.sendStatus(500);
        }
    } catch (error) {
        console.log('error in POST /contact-me:', error);
        res.sendStatus(500);
    }
});

exports.app = functions.https.onRequest(app);
