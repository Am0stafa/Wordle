const {readFileSync,fsPromises} = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Word = require('./WordModel')
dotenv.config();


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
async function syncReadFile (filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

    arrObj = []

  arr.forEach((word,index) => {
    arrObj.push( {index:index,word:word})
  })
    await Word.create(arrObj)
     console.log("inserted")
    return arrObj
}

syncReadFile('./sgb-words.txt');
