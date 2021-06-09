const mongose =  require('mongoose')

const Schema = mongose.Schema;

const detrendsnewsSchema = new Schema({
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

const Detrendsnews = mongose.model('detrendsnews', detrendsnewsSchema)

module.exports = Detrendsnews