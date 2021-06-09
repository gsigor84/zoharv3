const mongose =  require('mongoose')

const Schema = mongose.Schema;

const intrendsnewsSchema = new Schema({
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

const Intrendsnews = mongose.model('intrendsnews', intrendsnewsSchema)

module.exports = Intrendsnews