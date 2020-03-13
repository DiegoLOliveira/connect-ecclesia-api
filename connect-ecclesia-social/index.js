const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('rum connect-ecclesia-social ....');
});

app.listen(3002);