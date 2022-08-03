const mongoose = require('mongoose');
const WordModel = new mongoose.Schema(
    {
        index:Number,
        word:String,
    }  );
  const Word = mongoose.model('Word', WordModel);

  module.exports = Word   