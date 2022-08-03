const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cookieParser =require('cookie-parser') 
const cors = require('cors');
const { getWord } = require('./controller');

dotenv.config();

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


const DB = process.env.mongo

const db = mongoose.connect(DB , {
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(con => {
  console.log("DB is connection successful");
}).catch(err=>{
  console.log(err)
  server.close(()=>{
    process.exit(1)
  })
});

app.use('/getWord', getWord)


app.listen(8800,() => console.log("running"))