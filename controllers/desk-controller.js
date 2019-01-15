const Desk = require('../models/Desks');

const deskControllers = {};

deskControllers.findOne = async(req, res, next)=>{
  try {
      let id=req.params.id;
      let desk= await Desk.findById(id);
      res.json(desk);
  }
  catch (e){
      next (new controlError(e.message,500));
  }
};

deskControllers.findAll = async(req, res, next)=>{
  try{
      res.json(await Desk.find());
  }
  catch (e) {
      next(new controlError(e.message,500))
  }
};

deskControllers.create = async(req, res, next)=>{
  try {
      let desk= await Desk.create(req.body);
      res.json(desk);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }
};

deskControllers.update = async(req, res, next)=>{
  try{
      let desk= await Desk.findByIdAndUpdate(req.params.body,req.body,{new:true});
      res.json(desk);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }

};

deskControllers.delete = async(req, res, next)=>{
  try{
      let desk= await Desk.findByIdAndRemove(req.params.body,req.body,{new:true});
      res.json(desk);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }

};

module.exports = deskControllers; 