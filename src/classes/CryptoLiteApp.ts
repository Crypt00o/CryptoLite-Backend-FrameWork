import { Server } from "http";
import { CryptoLiteIntialHandle } from "../types/CryptoLiteInitialHandle";
import { RouteRules } from "../types/RouteRules";
import { createRuleIfNotExists } from "../utils/pathChecker";

class CryptoLiteApp extends Server{
    #routeRules:RouteRules;
    
    #middlewares:Array<Function>;

    #routers:Array<Function>;
    
    constructor(middlewares:Array<Function>,routers:Array<Function>,routeRules:RouteRules,handle:CryptoLiteIntialHandle){
        super(handle)
        this.#routeRules=routeRules
        this.#middlewares=middlewares
        this.#routers=routers
    }

    get(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path)) as string].methods.get=
       {
        middlewares:handles
       }
    }
    post(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.post=
        {
         middlewares:handles
        }
    }
    patch(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.patch=
       {
        middlewares:handles
       }
    }
    delete(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.delete=
       {
        middlewares:handles
       }
    }
    put(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.put=
       {
        middlewares:handles
       }
    }
    allMethods(path:string,...handles:Array<Function>){
        this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.get=
            {
                middlewares:handles
            }
            this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.post=
            {
                middlewares:handles
            }
            this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.delete=
            {
                middlewares:handles
            }
            this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.patch=
            {
                middlewares:handles
            }
            this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].methods.put=
            {
                middlewares:handles
            }
    }
    
    
    path(url:string){
        let app=this
        return new (class Path {
        #route;
        constructor(url:string){
            this.#route=url
        }
        get(...handles:Array<Function>){
                app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.get=
                {
                 middlewares:handles
                }
            return this
        }
        post(...handles:Array<Function>){
            app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.post=
            {
             middlewares:handles
            }
        return this
    }
        patch(...handles:Array<Function>){
            app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.patch=
            {
             middlewares:handles
            }
        return this
    }
         delete(...handles:Array<Function>){
            app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.delete=
            {
             middlewares:handles
            }
        return this
    }
        put(...handles:Array<Function>){
            app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.put=
            {
             middlewares:handles
            }
        return this
    }
        allMethods(...handles:Array<Function>){

            app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.get=
                {
                    middlewares:handles
                   }

        
                   app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.post=
                {
                    middlewares:handles
                   }
            
            
                   app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.patch=
                {
                    middlewares:handles
                   }
            
            
                   app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.delete=
                {
                    middlewares:handles
                   }

            
                   app.#routeRules[(createRuleIfNotExists(app.#routeRules,this.#route))].methods.put=
                {
                    middlewares:handles
                   }
            
            return this
        }

    })(url)};

    middle(...handles:Array<unknown>){        
        if(typeof handles[0]==="string"){
            const path=handles[0]
            handles=handles.slice(1)
            for(let i =0 ; i< handles.length;i++){
                if(typeof handles[i]==="function" && !handles[i].hasOwnProperty("CryptoLiteRouter")){
                    this.#routeRules[(createRuleIfNotExists(this.#routeRules,path))].middlewares.push(handles[i] as Function)
                }
                if(typeof handles[i]==="function" && handles[i].hasOwnProperty("CryptoLiteRouter")){
                    this.#routers.push(handles[i] as Function)
                }
            }
        }
        else{
            for(let i=0 ; i<handles.length;i++){
                if(typeof handles[i]==="function"){
                    this.#middlewares.push(handles[i] as Function)
                }
                if(typeof handles[i]==="function" && handles[i].hasOwnProperty("CryptoLiteRouter") ){
                    this.#routers.push(handles[i] as Function)
                }
            }
               
        }
    };
    
   }

   export{CryptoLiteApp}