const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open',() =>{
    console.log('MongoDB database connection')
})

const detechnewsRouter = require('./routes/detechnews');

const detrendsnewsRouter = require('./routes/detrendsnews');
const intechnewsRouter = require('./routes/intechnews');
const intrendsnewsRouter = require('./routes/intrendsnews');
const uktechnewsRouter = require('./routes/uktechnews');
const uktrendsnewsRouter = require('./routes/uktrendsnews');
const usatechnewsRouter = require('./routes/usatechnews');
const usatrendsnewsRouter = require('./routes/usatrendsnews');

app.use('/detechnews', detechnewsRouter);

app.use('/detrendsnews', detechnewsRouter);
app.use('/intechnews', detechnewsRouter);
app.use('/intrendsnews', detechnewsRouter);
app.use('/uktechnews', detechnewsRouter);
app.use('/uktrendsnews', detechnewsRouter);
app.use('/usatechnews', detechnewsRouter);
app.use('/usatrendsnews', detechnewsRouter);

app.listen(port,() =>{
    console.log('Server is running')
})