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
    list: {
        type: Schema.ObjectId,
        ref: 'list'
    },
    group: {
        type: Schema.ObjectId,
        ref: 'group'
    }
});


let model=mongoose.model('desk',DeskSchema);
module.exports=model;