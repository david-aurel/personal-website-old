const express = require('express');
const app = express();
const portfolio = require('./portfolio.json');

app.use(express.static('public'));
app.use(express.json());

app.get('/portfolio.json', (req, res) => {
    try {
        res.json(portfolio);
    } catch (error) {
        console.log('error in GET /portfolio.json :', error);
        res.sendStatus(500);
    }
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('listening...');
});
