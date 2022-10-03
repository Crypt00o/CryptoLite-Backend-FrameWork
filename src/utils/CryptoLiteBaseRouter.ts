import { CryptoLiteErrorLogger } from "./CryptoLiteErrorLogger";
import { CryptoLiteMiddleFlow } from "./CryptoLiteMiddleFlow";

export const CryptoLiteBaseRouter=(routes:object,req,res)=>{
    
        if(routes[req.url]){
            if(routes.hasOwnProperty(req.url))
            CryptoLiteMiddleFlow(routes[req.url].middlewares,req,res)
            switch (req.method){
                case "GET":
                    try{
                        CryptoLiteMiddleFlow(routes[req.url].methods.get.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error GET Didn,t avialable for path : ${req.url}  , Provided`)
                    }
                    break;
                case "POST":
                    try{
                        CryptoLiteMiddleFlow(routes[req.url].methods.post.middlewares,req,res)
                    }
                    catch(err){
                      CryptoLiteErrorLogger(req,res,`Error POST Didn,t avialable for path : ${req.url}  , Provided`)  
                    }
                    break;
                case "DELETE":
                    try{
                        CryptoLiteMiddleFlow(routes[req.url].methods.delete.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${req.url}  , Provided`)
                    }
                    break;
                case "PUT":
                    try{
                        CryptoLiteMiddleFlow(routes[req.url].methods.put.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error PUT Didn,t avialable for path : ${req.url}  , Provided`)
                    }
                    break;
                case "PATCH":
                    try{
                        CryptoLiteMiddleFlow(routes[req.url].methods.patch.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${req.url}  , Provided`)
                    }
            }
        }	

    

}