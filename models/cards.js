let mongoose =require('mongoose');
let Schema=mongoose.Schema;

let CardSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    date: {
        type:String,
    
    },
    cardsMessage:{
        type:String,

    },
    list:{
        type: Schema.ObjectId,
        ref: 'list'
    }
});

let model=mongoose.model('card',CardSchema);
module.exports=model;