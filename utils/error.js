export const  createError =(status,message)=>{
    const err= new Error()
    err.status=401
    err.message=message
    return err
};