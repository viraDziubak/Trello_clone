let Group= require('../models/group');

let groupControllers = {};

groupControllers.findOne = async(req, res, next)=>{
    try {
        let id=req.params.id;
        let group= await Group.findById(id);
        res.json(group);
    }
    catch (e){
        next (new controlError(e.message,400));
    }
};

groupControllers.findAll = async(req, res, next)=>{
    try{
        res.json(await Group.find());
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
};

groupControllers.create = async(req, res, next)=>{
    try {
        let group= await Group.create(req.body);
        res.json(group);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
};

groupControllers.update = async(req, res, next)=>{
    try{
        let group= await Group.findByIdAndUpdate(req.params.body,req.body,{new:true});
        res.json(group);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

};

groupControllers.delete = async(req, res, next)=>{
    try{
        let group= await Group.findByIdAndRemove(req.params.body,req.body,{new:true});
        res.json(group);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

};

module.exports = groupControllers;