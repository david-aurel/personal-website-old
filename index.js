import * as functions from 'firebase-functions';
import { https } from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import data from './data';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf-8');

const app = express();

app.get('**', (req, res) => {
    const html = renderToString(<App data={data} />);
    const finalHtml = index.replace('<!-- App -->', html);
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200 ');
    res.send(finalHtml);
});

export let ssrapp = functions.https.onRequest(app);
