import {createServer} from "http"
import { CryptoLiteMiddleFlow } from "./utils/CryptoLiteMiddleFlow"
import { CryptoLiteResponse } from "./utils/CryptoLiteResponse"
import { CryptoLiteBasicRouter } from "./utils/CryptoLiteBasicRouter"
import { CryptoLitePropsBuilder } from "./utils/CryptoLitePropsBuilder"

/****************************************************************
* CryptoLite Backend FrameWork for Lite Projects                *
*    - Not Suppoting  MiddleWares Until Now :(                  *
*                                                               *
*    ✔ There is Basic Routing                                   *
*    ✔ There is Body Parser by Default                          *
*    ✔ Easy in Usage Like Express                               *
*                                                               *
*   Author : Eslam Mohamed Moawed Elabd                         *
*   License : MIT                                               *
*                                                               *
 ****************************************************************/


 const cryptolite=()=>{

   let server:any=createServer((req:any,res:any)=>{
    
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

CryptoLiteResponse(res);
CryptoLiteMiddleFlow(server.middlewares,req,res);
CryptoLiteBasicRouter(server.paths,req,res)

    
        })
 
})

CryptoLitePropsBuilder(server)


return server

} 

export {cryptolite}
export default {cryptolite:cryptolite}