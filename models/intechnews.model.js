const mongose =  require('mongoose')

const Schema = mongose.Schema;

const intechnewsSchema = new Schema({
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

const Intechnews = mongose.model('intechnews', intechnewsSchema)

module.exports = Intechnews