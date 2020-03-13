const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('rum connect-ecclesia-financial ....');
});

app.listen(3001);