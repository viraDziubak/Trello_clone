let Card= require('../models/Cards');

let cardControllers = {};

cardControllers.findOne = async(req, res, next)=>{
  try {
      let id=req.params.id;
      let card= await Card.findById(id);
      res.json(card);
  }
  catch (e){
      next (new controlError(e.message,500));
  }
};

cardControllers.findAll = async(req, res, next)=>{
  try{
      res.json(await Card.find());
  }
  catch (e) {
      next(new controlError(e.message,500))
  }
};

cardControllers.create = async(req, res, next)=>{
  try {
      let card= await Card.create(req.body);
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }
};

cardControllers.update = async(req, res, next)=>{
  try{
      let card= await Card.findByIdAndUpdate(req.params.body,req.body,{new:true});
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }

};

cardControllers.delete = async(req, res, next)=>{
  try{
      let card= await Card.findByIdAndRemove(req.params.body,req.body,{new:true});
      res.json(card);
  }
  catch (e) {
      next(new controlError(e.message,500))
  }

};

module.exports = cardControllers;