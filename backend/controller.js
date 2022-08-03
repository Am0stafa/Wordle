const Word = require('./WordModel')

exports.getWord = async (req, res, next) => {
    try {
        const yourRandomNumber = Math.floor(Math.random() * 5757)
        const kelma = await Word.find().limit(-1).skip(yourRandomNumber)
        const { index, word, ...otherDetails } = kelma[0]
        res.status(200).json({
            status: 'success',
            index,
            word
        })
    } catch (err) {
        res.status(404).json({status: 'failed',message: err.message});

    }

}