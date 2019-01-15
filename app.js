const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const MainRouter = require('./routers/main-router');

const controlError = require('./error/controllerError');

mongoose.connect('mongodb://localhost/projectDB', {useNewUrlParser: true});

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', MainRouter);


app.use((req, res, next) => {
    next(new controlError('Not found', 404))
});

app.use((err, req, res, next) => {
    res.json({
        message: err.msg,
        status: err.status
    })
});

app.listen(3000, () => console.log('Listening..'));
