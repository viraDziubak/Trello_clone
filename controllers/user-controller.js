let controlError=require('../error/controllerError')
let User= require('../models/users');

let controller={}

controller.getById=async(req, res, next)=>{
    try {
        let id=req.params.id;
        let user= await User.findById(id);
        res.status(200).json(user);
    }
    catch (e){
        next (new controlError(e.message,400));

    }
};

controller.findAll=async(req, res, next)=>{
    try{
        res. status(200).json(await User.find({}));
    }
    catch (e) {
        next(new controlError(e.message,400));
        console.log('gds');
    }
};

controller.create=async(req, res, next)=>{
    try {
        let user= await User.create(req.body);
        res. status(200).json(user);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
};

controller.update=async(req, res, next)=>{
    try{
        let user= await User.findByIdAndUpdate(req.params.body,req.body,{new:true});
        res. status(200).json(user);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

};

controller.delete=async(req, res, next)=>{
    try{
        let user= await User.findByIdAndRemove(req.params.body,req.body,{new:true});
        res. status(200).json(user);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

};

module.exports=controller;