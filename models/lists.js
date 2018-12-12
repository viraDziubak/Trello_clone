let mongoose =require('mongoose');
let Schema=mongoose.Schema;

let ListSchema=new Schema({
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
    cards:{
        type: Schema.ObjectId,
        ref: 'card'
    }
});

let model=mongoose.model('list',ListSchema);
module.exports=model;