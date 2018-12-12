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

    }
});

let model=mongoose.model('card',CardSchema);
module.exports=model;