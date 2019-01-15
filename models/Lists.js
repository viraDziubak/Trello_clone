const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const ListSchema=new Schema({
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
        type:[],

    }
});

const model=mongoose.model('list',ListSchema);
module.exports=model;