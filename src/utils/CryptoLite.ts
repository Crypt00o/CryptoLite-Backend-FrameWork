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



   class CryptoLiteApp extends Server{
    routeRules:RouteRules;
    
    middlewares:Array<Function>;

    routers:Array<any>;
    
    constructor(middlewares:Array<Function>,routers:Array<any>,routeRules:RouteRules,handle:CryptoLiteIntialHandle){
        super(handle)
        this.routeRules=routeRules
        this.middlewares=middlewares
        this.routers=routers
    }

    get(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path)) as string].methods.get=
       {
        middlewares:handles
       }
    }
    post(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.post=
        {
         middlewares:handles
        }
    }
    patch(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.patch=
       {
        middlewares:handles
       }
    }
    delete(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.delete=
       {
        middlewares:handles
       }
    }
    put(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.put=
       {
        middlewares:handles
       }
    }
    allMethods(path:string,...handles:Array<Function>){
        this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.get=
            {
                middlewares:handles
            }
            this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.post=
            {
                middlewares:handles
            }
            this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.delete=
            {
                middlewares:handles
            }
            this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.patch=
            {
                middlewares:handles
            }
            this.routeRules[(createRuleIfNotExists(this.routeRules,path))].methods.put=
            {
                middlewares:handles
            }
    }
    
    
    path(url:string){
        let app=this
        return new (class Path {
        route;
        constructor(url:string){
            this.route=url
        }
        get(...handles:Array<Function>){
                app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.get=
                {
                 middlewares:handles
                }
            return this
        }
        post(...handles:Array<Function>){
            app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.post=
            {
             middlewares:handles
            }
        return this
    }
        patch(...handles:Array<Function>){
            app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.patch=
            {
             middlewares:handles
            }
        return this
    }
         delete(...handles:Array<Function>){
            app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.delete=
            {
             middlewares:handles
            }
        return this
    }
        put(...handles:Array<Function>){
            app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.put=
            {
             middlewares:handles
            }
        return this
    }
        allMethods(...handles:Array<Function>){

            app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.get=
                {
                    middlewares:handles
                   }

        
                   app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.post=
                {
                    middlewares:handles
                   }
            
            
                   app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.patch=
                {
                    middlewares:handles
                   }
            
            
                   app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.delete=
                {
                    middlewares:handles
                   }

            
                   app.routeRules[(createRuleIfNotExists(app.routeRules,this.route))].methods.put=
                {
                    middlewares:handles
                   }
            
            return this
        }

    })(url)};

    middle(...handles:Array<any>){        
        if(typeof handles[0]==="string"){
            const path=handles[0]
            handles=handles.slice(1)
            for(let i =0 ; i< handles.length;i++){
                if(typeof handles[i]==="function"){
                    this.routeRules[(createRuleIfNotExists(this.routeRules,path))].middlewares.push(handles[i])
                }
                if(typeof handles[i]==="object" && handles[i]!==null && (handles[i] as object).hasOwnProperty("CryptoLiteRouter") ){
                    this.routers.push(handles[i])
                }
            }
        }
        else{
            for(let i=0 ; i<handles.length;i++){
                if(typeof handles[i]==="function"){
                    this.middlewares.push(...handles)
                }
                if(typeof handles[i]==="object" && handles[i]!==null && (handles[i] as object).hasOwnProperty("CryptoLiteRouter")){
                    this.routers.push(handles[i])
                }
            }
               
        }
    };
    
   }


   let middlewares:Array<Function>=[]
   let routeRules:RouteRules={}
   let routers:Array<any>=[]
const handle=(req:Request,res:Response)=>{
    
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
