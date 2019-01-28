const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Eder',
        likes: [
            'Listen music',
            'Reading',
            'Learning'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page')
});

app.get('/bad',(req, res) => {
    res.send({
        errorMessage: 'This is my error!',
    })
});

app.listen(3000);