const functions = require('firebase-functions');

const express = require('express');

const data = require('./data.json');
const ses = require('./ses.js');

const app = express();
// app.engine('hbs', engine.handlebars);
// app.set('views', './views');
// app.set('view engine', 'hbs');

app.get('/about.json', (req, res) => {
    res.send(data['about-me']);
});
// app.get('/', (req, res) => {
//     res.set('Cache-Control', 'public, max-age=43200, s-maxage=86400');
//     res.render('index', { data });
// });

// app.get('/animation', (req, res) => {
//     res.render('animation');
// });

app.post('/contact-me', (req, res) => {
    console.log('contact me route was hit!');

    const recipient = 'david.aurel001@gmail.com';
    const message = `${req.body.name} (${req.body.email}) says: "${req.body.message}"`;
    const subject = req.body.subject;
    ses.sendEmail(recipient, message, subject)
        .then(() => {
            console.log('worked');

            return res.json({ success: true });
        })
        .catch(err => {
            console.log('err in sending an email:', err);
            return res.json({ success: false, err: err });
        });
});

exports.app = functions.https.onRequest(app);
