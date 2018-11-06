const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://goweek:123ksword@ds155313.mlab.com:55313/goweek-stefano',
    { useNewUrlParser: true }
);

/*
app.get('/', (req, res) => {
    return res.send(':) Helo World');
});
*/

app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
