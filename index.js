const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = require('./data');
const ses = require('./ses');

app.use(express.static('public'));
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/data.json', (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.log('error in GET /data.json :', error);
        res.sendStatus(500);
    }
});

app.post('/contact-me', (req, res) => {
    try {
        const recipient = 'david.aurel001@gmail.com';
        const message = `${req.body.name} (${req.body.email}) says: "${req.body.message}"`;
        const subject = req.body.subject;
        console.log(message);
        try {
            ses.sendEmail(recipient, message, subject);
            res.redirect('/');
        } catch (error) {
            console.log('err in sending an email');
            res.sendStatus(500);
        }
    } catch (error) {
        console.log('error in POST /contact-me:', error);
        res.sendStatus(500);
    }
});

app.get('/animation', (req, res) => {
    res.sendFile(__dirname + '/public/animation.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening...');
});
