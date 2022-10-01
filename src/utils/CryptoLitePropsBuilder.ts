import { pathsChecker } from "./pathChecker"

export const CryptoLitePropsBuilder=(server:any)=>{
    server.paths=[]
    
    server.middlewares=[]
    

    server.get=function(path:string,...handles:Array<Function>){
        this.paths[(pathsChecker(this.paths,path))].methods.get=
       {
        middlewares:handles
       }
}
    server.post=function(path:string,...handles:Array<Function>){
                this.paths[(pathsChecker(this.paths,path))].methods.post=
        {
         middlewares:handles
        }
    }
    server.patch=function(path:string,...handles:Array<Function>){
        this.paths[(pathsChecker(this.paths,path))].methods.patch=
       {
        middlewares:handles
       }
}
    server.delete=function(path:string,...handles:Array<Function>){
        this.paths[(pathsChecker(this.paths,path))].methods.delete=
       {
        middlewares:handles
       }
}
    server.put=function(path:string,...handles:Array<Function>){
        this.paths[(pathsChecker(this.paths,path))].methods.put=
       {
        middlewares:handles
       }
}
    server.allMethods=function(path:string,...handles:Array<Function>){
            this.paths[(pathsChecker(this.paths,path))].methods.get=
            {
                middlewares:handles
            }
            this.paths[(pathsChecker(this.paths,path))].methods.post=
            {
                middlewares:handles
            }
            this.paths[(pathsChecker(this.paths,path))].methods.delete=
            {
                middlewares:handles
            }
            this.paths[(pathsChecker(this.paths,path))].methods.patch=
            {
                middlewares:handles
            }
            this.paths[(pathsChecker(this.paths,path))].methods.put=
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
                server.paths[(pathsChecker(server.paths,this.route))].methods.get=
                {
                 middlewares:handles
                }
            return this
        }
        post(...handles:Array<Function>){
            server.paths[(pathsChecker(server.paths,this.route))].methods.post=
            {
             middlewares:handles
            }
        return this
    }
        patch(...handles:Array<Function>){
            server.paths[(pathsChecker(server.paths,this.route))].methods.patch=
            {
             middlewares:handles
            }
        return this
    }
         delete(...handles:Array<Function>){
            server.paths[(pathsChecker(server.paths,this.route))].methods.delete=
            {
             middlewares:handles
            }
        return this
    }
        put(...handles:Array<Function>){
            server.paths[(pathsChecker(server.paths,this.route))].methods.put=
            {
             middlewares:handles
            }
        return this
    }
        allMethods(...handles:Array<Function>){

                server.paths[(pathsChecker(server.paths,this.route))].methods.get=
                {
                    middlewares:handles
                   }

        
                server.paths[(pathsChecker(server.paths,this.route))].methods.post=
                {
                    middlewares:handles
                   }
            
            
                server.paths[(pathsChecker(server.paths,this.route))].methods.patch=
                {
                    middlewares:handles
                   }
            
            if(!server.paths[(pathsChecker(server.paths,this.route))].methods.delete){
                server.paths[(pathsChecker(server.paths,this.route))].methods.delete=
                {
                    middlewares:handles
                   }
            }
            
                server.paths[(pathsChecker(server.paths,this.route))].methods.put=
                {
                    middlewares:handles
                   }
            
            return this
        }

    })(url)};

    server.middle=function(...handles:Array<Function>){
 
        if(typeof handles[0]==="string"){
            server.paths[(pathsChecker(server.paths,handles[0]))].middlewares.push(...handles.slice(1))
        }
        else{
            server.middlewares.push(...handles)   
        }
    }

}