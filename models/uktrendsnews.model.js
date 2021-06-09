const mongose =  require('mongoose')

const Schema = mongose.Schema;

const uktrendsnewsSchema = new Schema({
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

const Uktrendsnews = mongose.model('Uktrendsnews', uktrendsnewsSchema)

module.exports = Uktrendsnews