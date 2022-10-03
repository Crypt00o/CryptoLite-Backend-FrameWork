import { createRuleIfNotExists } from "./pathChecker"

export const CryptoLitePropsBuilder=(server:any)=>{
    
    server.routeTable=new Object()
    
    server.middlewares=new Array()
    

    server.get=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.get=
       {
        middlewares:handles
       }
}
    server.post=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.post=
        {
         middlewares:handles
        }
    }
    server.patch=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.patch=
       {
        middlewares:handles
       }
}
    server.delete=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.delete=
       {
        middlewares:handles
       }
}
    server.put=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.put=
       {
        middlewares:handles
       }
}
    server.allMethods=function(path:string,...handles:Array<Function>){
        this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.get=
            {
                middlewares:handles
            }
            this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.post=
            {
                middlewares:handles
            }
            this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.delete=
            {
                middlewares:handles
            }
            this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.patch=
            {
                middlewares:handles
            }
            this.routeTable[(createRuleIfNotExists(this.routeTable,path))].methods.put=
            {
                middlewares:handles
            }
    }
    
    server.path=(url)=>{return new (class path{
        route;
        constructor(url){
            this.route=url
        }
        get(...handles:Array<Function>){
                server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.get=
                {
                 middlewares:handles
                }
            return this
        }
        post(...handles:Array<Function>){
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.post=
            {
             middlewares:handles
            }
        return this
    }
        patch(...handles:Array<Function>){
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.patch=
            {
             middlewares:handles
            }
        return this
    }
         delete(...handles:Array<Function>){
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.delete=
            {
             middlewares:handles
            }
        return this
    }
        put(...handles:Array<Function>){
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.put=
            {
             middlewares:handles
            }
        return this
    }
        allMethods(...handles:Array<Function>){

            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.get=
                {
                    middlewares:handles
                   }

        
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.post=
                {
                    middlewares:handles
                   }
            
            
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.patch=
                {
                    middlewares:handles
                   }
            
            
                server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.delete=
                {
                    middlewares:handles
                   }

            
            server.routeTable[(createRuleIfNotExists(server.routeTable,this.route))].methods.put=
                {
                    middlewares:handles
                   }
            
            return this
        }

    })(url)};




    server.middle=function(...handles:Array<any>){        
        if(typeof handles[0]==="string"){
            const path=handles[0]
            handles=handles.slice(1)
            for(let i =0 ; i< handles.length;i++){
                if(typeof handles[i]==="function"){
                    this.routeTable[(createRuleIfNotExists(this.routeTable,path))].middlewares.push(handles[i])
                }
            }
        }
        else{
            for(let i=0 ; i<handles.length;i++){
                if(typeof handles[i]==="function"){
                    this.middlewares.push(...handles)
                }
            }
               
        }
 
 
 
 
    }



}