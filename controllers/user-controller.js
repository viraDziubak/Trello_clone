let User = require('../models/users');
let controlError=require('../error/controllerError');

let userControllers = {};

userControllers.findOne = async(req, res, next)=>{
  try {
      let id=req.params.id;
      let user= await User.findById(id);
      res.status(200).json(user);
  }
  catch (e){
      next (new controlError(e.message,400));
  }
};

userControllers.findAll = async(req, res, next)=>{
  try{
      res.json(await User.find());
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

userControllers.create = async(req, res, next)=>{
  try {
      let user= await User.create(req.body);
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

userControllers.update = async(req, res, next)=>{
  try{
      let user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

userControllers.delete = async(req, res, next)=>{
  try{
      let user= await User.findByIdAndRemove(req.params.id);
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

module.exports = userControllers;