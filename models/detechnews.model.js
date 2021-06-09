const mongose =  require('mongoose')

const Schema = mongose.Schema;

const detechnewsSchema = new Schema({
    top:{
        type:String
    },
    title:{
        type:String
    },
    link:{
        type:String
    },
    img:{
        type:String
    },
    date:{
        type:String
    },

})

const Detechnews = mongose.model('detechnews', detechnewsSchema)

module.exports = Detechnews