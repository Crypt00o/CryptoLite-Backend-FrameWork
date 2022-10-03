export const CryptoLiteMiddleFlow=function(middlewares,req,res){
    let i =-1
    let middleFlow=()=>{
        i++
        if(middlewares.length>i){
         middlewares[i](req,res,middleFlow);
        }
    }

    middleFlow()
}