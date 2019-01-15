const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const DeskSchema=new Schema({
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
    list:{
        type:[],

    },
    user:{
        type:[]
    }
});


const model=mongoose.model('desk',DeskSchema);
module.exports=model;