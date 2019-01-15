let mongoose =require('mongoose');
let Schema=mongoose.Schema;

let DeskSchema=new Schema({
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
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    group: {
        type: Schema.ObjectId,
        ref: 'group'
    }
});


let model=mongoose.model('desk',DeskSchema);
module.exports=model;