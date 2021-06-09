const mongose =  require('mongoose')

const Schema = mongose.Schema;

const usatechnewsSchema = new Schema({
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

const Usatechnews = mongose.model('usatechnews', usatechnewsSchema)

module.exports = Usatechnews