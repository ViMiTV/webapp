var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/bobo', (req, res) => {
    res.send('hello bobo!');
});