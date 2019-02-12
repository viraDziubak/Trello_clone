const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const MainRouter = require('./routers/main-router');
const cors = require('cors');
const controlError = require('./error/controllerError');
const port = 3000;

mongoose.connect('mongodb://localhost/projectDB', { useNewUrlParser: true});

require('./middleware/passport')(passport);

let app=express();
app.use(morgan('dev'));
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',MainRouter);


app.use((req,res,next)=>{
    next(new controlError('Not found', 404))
});

app.use((err,req,res,next)=>{
    res.json({
        message: err.msg,
        status: err.status
    })
});

 app.listen(port, ()=> console.log(`Listening on port ${port}..`));
