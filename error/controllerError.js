module.exports=class controllerError extends Error{
    constructor(msg, ststus){
        super(msg);
        this.name="controllerError";
        this.msg=msg;
        this.status=ststus;
        //Error.captureStackTrace(this,this.constructor);
    }
};