import { CryptoLiteErrorLogger } from "./CryptoLiteErrorLogger";
import { CryptoLiteMiddleFlow } from "./CryptoLiteMiddleFlow";

function routeing(req,res,routes,path){
    CryptoLiteMiddleFlow(routes[path].middlewares,req,res)
    switch (req.method){
        case "GET":
            try{
                if(routes[path].methods.hasOwnProperty("get"))
                CryptoLiteMiddleFlow(routes[path].methods.get.middlewares,req,res);
            }
            catch(err){
                CryptoLiteErrorLogger(req,res,`Error GET Didn,t avialable for path : ${path}  , Provided`)
            }
            break;
        case "POST":
            try{
                if(routes[path].methods.hasOwnProperty("post"))
                CryptoLiteMiddleFlow(routes[path].methods.post.middlewares,req,res);
            }
            catch(err){
              CryptoLiteErrorLogger(req,res,`Error POST Didn,t avialable for path : ${path}  , Provided`)  
            }
            break;
        case "DELETE":
            try{
                if(routes[path].methods.hasOwnProperty("delete"))
                CryptoLiteMiddleFlow(routes[path].methods.delete.middlewares,req,res);
            }
            catch(err){
                CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${path}  , Provided`)
            }
            break;
        case "PUT":
            try{
                if(routes[path].methods.hasOwnProperty("put"))
                CryptoLiteMiddleFlow(routes[path].methods.put.middlewares,req,res);
            }
            catch(err){
                CryptoLiteErrorLogger(req,res,`Error PUT Didn,t avialable for path : ${path}  , Provided`)
            }
            break;
        case "PATCH":
            try{
                if(routes[path].methods.hasOwnProperty("patch"))
                CryptoLiteMiddleFlow(routes[path].methods.patch.middlewares,req,res);
            }
            catch(err){
                CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${path}  , Provided`)
            }
    }
}




export const CryptoLiteBaseRouter=(routes:object,req,res)=>{    
        if(routes.hasOwnProperty(req.path)){            
            routeing(req,res,routes,req.path)
        }
        else {
           const path=Object.keys(routes).filter(path=>RegExp(path+"$").test(req.path))
            if(path.length>0){
                req.params=Object.assign({},(req.path.match(path[path.length-1]).groups))
                routeing(req,res,routes,path[path.length-1])
            }
    }

    

}