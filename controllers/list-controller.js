let List = require('../models/lists');
let controlError=require('../error/controllerError');

let listControllers = {};

listControllers.findByDeskId = async (req, res, next)=>{
    
    try{
        console.log(req.params.id)
        const result = await List.find({
            desk: req.params.deskId
        });
        console.log(result);
  
         res.json(result);
         console.log(result);
    
    }
    catch (e) {
        next(new controlError(e.message,400))
    }
  };
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