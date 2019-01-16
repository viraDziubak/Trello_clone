let Card= require('../models/cards');
let controlError=require('../error/controllerError');

let cardControllers = {};

cardControllers.findOne = async(req, res, next)=>{
  try {
      let id=req.params.id;
      let card= await Card.findById(id);
      res.json(card);
  }
  catch (e){
      next (new controlError(e.message,400));
  }
};

cardControllers.findAll = async(req, res, next)=>{
  try{
      res.json(await Card.find());
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

cardControllers.create = async(req, res, next)=>{
  try {
      let card= await Card.create(req.body);
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

cardControllers.update = async(req, res, next)=>{
  try{
      let card= await Card.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

cardControllers.delete = async(req, res, next)=>{
  try{
      let card= await Card.findByIdAndRemove(req.params.id);
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

module.exports = cardControllers;