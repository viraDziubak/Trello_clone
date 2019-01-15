const User = require('../models/Users');

const userControllers = {};

userControllers.findOne = async(req, res, next)=>{
  try {
      const id=req.params.id;
      const user= await User.findById(id);
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
      const user= await User.create(req.body);
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

userControllers.update = async(req, res, next)=>{
  try{
      const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

userControllers.delete = async(req, res, next)=>{
  try{
      const user= await User.findByIdAndRemove(req.params.body,req.body,{new:true});
      res.json(user);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

module.exports = userControllers;