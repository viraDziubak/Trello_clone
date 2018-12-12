const List = require('../models/lists');

const listControllers = {};

listControllers.findOne = async(req, res, next)=>{
  try {
      let id=req.params.id;
      let list= await List.findById(id);
      res.json(list);
  }
  catch (e){
      next (new controlError(e.message,400));
  }
};

listControllers.findAll = async(req, res, next)=>{
    try{
        res.json(await List.find());
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
};

listControllers.create = async(req, res, next)=>{
  try {
      let list= await List.create(req.body);
      res.json(list);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }
};

listControllers.update = async(req, res, next)=>{
    try{
        let list= await List.findByIdAndUpdate(req.params.body,req.body,{new:true});
        res.json(list);
    }
    catch (e) {
        next(new controlError(e.message,400))
    }

};

listControllers.delete = async(req, res, next)=>{
  try{
      let list= await List.findByIdAndRemove(req.params.body,req.body,{new:true});
      res.json(list);
  }
  catch (e) {
      next(new controlError(e.message,400))
  }

};

module.exports = listControllers;