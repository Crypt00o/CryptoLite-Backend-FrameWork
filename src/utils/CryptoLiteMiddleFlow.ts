import { IncomingMessage, ServerResponse } from "http";

export const CryptoLiteMiddleFlow=function(middlewares:Array<Function>,req:IncomingMessage,res:ServerResponse){
    let i =-1
    let middleFlow=()=>{
        i++
        if(middlewares.length>i){
         middlewares[i](req,res,middleFlow);
        }
    }

    middleFlow()
}