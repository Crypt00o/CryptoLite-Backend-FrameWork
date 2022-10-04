import {createServer, IncomingMessage, Server, ServerResponse} from "http"
import { CryptoLiteMiddleFlow } from "./CryptoLiteMiddleFlow"
import { CryptoLiteResponse } from "./CryptoLiteResponse"
import { CryptoLiteBaseRouter } from "./CryptoLiteBaseRouter"
import { CryptoLiteRequest } from "./CryptoLiteRequest"
import { createRuleIfNotExists } from "./pathChecker"
import { RouteRules } from "../types/RouteRules"
import {CryptoLiteIntialHandle} from "../types/CryptoLiteInitialHandle"
import { Request} from "../types/CryptoLiteRequest"
import { Response } from "../types/CryptoLiteResponse"
import { CryptoLiteApp } from "../classes/CryptoLiteApp"
/********************************************************************
* CryptoLite Backend FrameWork for Lite Projects                    *
*                                                                   *
*    ✔ There is support for Middlewares                            *
*    ✔ There is Fast Routing support                                *
*    ✔ There is Body Parser by Default                              *
*    ✔ Easy in Usage Like Express                                   *
*                                                                    *
*   Author : Eslam Mohamed Moawed Elabd                              *
*   License : MIT                                                    *
*                                                                    *
 *********************************************************************/


 export const cryptolite=function(){

   let middlewares:Array<Function>=[]
   let routeRules:RouteRules={}
   let routers:Array<any>=[]

   const handle=(req:Request,res:Response):void=>{
    
    req.body={}
    let body:string=''
    
    req.on("data",(data)=>{
        body+=data.toString('utf-8')
    })

    req.on("end",()=>{
    
    if(req.headers["content-type"]==="application/json"){
            req.body=JSON.parse(body)
    }
    
    if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
            let result:Array<any>=body.split("&")
            result.forEach((value,index,self)=>{self[index]=(value as string).split("=")})
            result.forEach((value)=>{req.body[value[0]]=value[1]; })         
    }

    if(req.url){
        if(req.url.length>1 && req.url[req.url.length-1]==="/"){
            req.url=req.url.slice(0,req.url.length-1)
        }
    }
    
CryptoLiteRequest(req);
CryptoLiteResponse(res);
CryptoLiteMiddleFlow(middlewares,req,res);
CryptoLiteBaseRouter(routeRules,req,res);
    })
 
}
   return new CryptoLiteApp(middlewares,routers,routeRules,handle as unknown as CryptoLiteIntialHandle)

} 
