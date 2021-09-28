const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./modules/routes');

const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions));

const url = 'mongodb+srv://user:user@cluster0.ibhda.mongodb.net/Purchases';
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true }).then();

app.use(bodyParser.json());
app.use('/', apiRoutes);

export default app;
