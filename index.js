const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.static('public'));
app.use(express.json());

app.get('/data.json', (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.log('error in GET /data.json :', error);
        res.sendStatus(500);
    }
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('listening...');
});
