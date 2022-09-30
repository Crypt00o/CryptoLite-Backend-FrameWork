import { pathsChecker } from "./pathChecker"

export const CryptoLitePropsBuilder=(server:any)=>{
    server.paths=[]
    
    server.middlewares=[]
    

    server.get=function(path:string,handle:Function){
                this.paths[(pathsChecker(this.paths,path))].methods.get=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.get.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.get.middlewares=[]
                }
                
            }
    server.post=function(path:string,handle:Function){
                this.paths[(pathsChecker(this.paths,path))].methods.post=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.post.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.post.middlewares=[]
                }
    }
    server.patch=function(path:string,handle:Function){
                this.paths[(pathsChecker(this.paths,path))].methods.patch=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.patch.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.patch.middlewares=[]
                }
    }
    server.delete=function(path:string,handle:Function){
                this.paths[(pathsChecker(this.paths,path))].methods.delete=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.delete.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.delete.middlewares=[]
                }
    }
    server.put=function(path:string,handle:Function){
                this.paths[(pathsChecker(this.paths,path))].methods.put=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.put.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.put.middlewares=[]
                }
    }
    server.allMethods=function(path:string,handle:Function){
        if(!this.paths[(pathsChecker(this.paths,path))].methods.get){
            this.paths[(pathsChecker(this.paths,path))].methods.get=
            {
                handle:handle
            }
            if(!(this.paths[(pathsChecker(this.paths,path))].methods.get.middlewares)){
                this.paths[(pathsChecker(this.paths,path))].methods.get.middlewares=[]
            }
        }
        if(!this.paths[(pathsChecker(this.paths,path))].methods.post){
            this.paths[(pathsChecker(this.paths,path))].methods.post=
            {
                handle:handle
            }
            if(!(this.paths[(pathsChecker(this.paths,path))].methods.post.middlewares)){
                this.paths[(pathsChecker(this.paths,path))].methods.post.middlewares=[]
            }
        }
        if(!this.paths[(pathsChecker(this.paths,path))].methods.delete){
            this.paths[(pathsChecker(this.paths,path))].methods.delete=
            this.paths[(pathsChecker(this.paths,path))].methods.delete=
                {
                    handle:handle
                }
                if(!(this.paths[(pathsChecker(this.paths,path))].methods.delete.middlewares)){
                    this.paths[(pathsChecker(this.paths,path))].methods.delete.middlewares=[]
                }
        }
        if(!this.paths[(pathsChecker(this.paths,path))].methods.patch){
            this.paths[(pathsChecker(this.paths,path))].methods.patch=
            {
                handle:handle
            }
            if(!(this.paths[(pathsChecker(this.paths,path))].methods.patch.middlewares)){
                this.paths[(pathsChecker(this.paths,path))].methods.patch.middlewares=[]
            }
        }
        if(!this.paths[(pathsChecker(this.paths,path))].methods.put){
            this.paths[(pathsChecker(this.paths,path))].methods.put=
            {
                handle:handle
            }
            if(!(this.paths[(pathsChecker(this.paths,path))].methods.put.middlewares)){
                this.paths[(pathsChecker(this.paths,path))].methods.put.middlewares=[]
            }
        }
    }

    server.middle=(handle:Function)=> {
     server.middlewares.push(handle)   
    }

}