const mongose =  require('mongoose')

const Schema = mongose.Schema;

const uktechnewsSchema = new Schema({
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

const Uktechnews = mongose.model('uktechnews', uktechnewsSchema)

module.exports = Uktechnews