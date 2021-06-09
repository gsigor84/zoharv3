const mongose =  require('mongoose')

const Schema = mongose.Schema;

const usatrendsnewsSchema = new Schema({
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

const Usatrendsnews = mongose.model('usatrendsnews', usatrendsnewsSchema)

module.exports = Usatrendsnews