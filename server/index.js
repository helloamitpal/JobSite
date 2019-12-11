import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/index';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    const clientApp = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Something went wrong', err);
            return res.status(500).send('Something went wrong');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${clientApp}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${port}`);
});
