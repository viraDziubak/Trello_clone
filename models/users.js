let mongoose =require('mongoose');
let Schema=mongoose.Schema;

let UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,

    },
    login: {
        type:String,

    },
    password:{
        type:String,

    },
    email:{
        type:String,

    },
    desk: {
        type: Schema.ObjectId,
        ref: 'desk'
    }
});

let model=mongoose.model('user',UserSchema);
module.exports=model;