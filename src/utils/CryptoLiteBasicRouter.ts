import { CryptoLiteErrorLogger } from "./CryptoLiteErrorLogger";
import { CryptoLiteMiddleFlow } from "./CryptoLiteMiddleFlow";

export const CryptoLiteBasicRouter=(paths,req,res)=>{
    for(let i =0 ; i<paths.length;i++){
        if(req.url==paths[i].path){
            CryptoLiteMiddleFlow(paths[i].middlewares,req,res)
            switch (req.method){
                case "GET":
                    try{
                        CryptoLiteMiddleFlow(paths[i].methods.get.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error GET Didn,t avialable for path : ${paths[i].path}  , Provided`)
                    }
                    break;
                case "POST":
                    try{
                        CryptoLiteMiddleFlow(paths[i].methods.post.middlewares,req,res)
                    }
                    catch(err){
                      CryptoLiteErrorLogger(req,res,`Error POST Didn,t avialable for path : ${paths[i].path}  , Provided`)  
                    }
                    break;
                case "DELETE":
                    try{
                        CryptoLiteMiddleFlow(paths[i].methods.delete.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${paths[i].path}  , Provided`)
                    }
                    break;
                case "PUT":
                    try{
                        CryptoLiteMiddleFlow(paths[i].methods.put.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error PUT Didn,t avialable for path : ${paths[i].path}  , Provided`)
                    }
                    break;
                case "PATCH":
                    try{
                        CryptoLiteMiddleFlow(paths[i].methods.patch.middlewares,req,res)
                    }
                    catch(err){
                        CryptoLiteErrorLogger(req,res,`Error DELETE Didn,t avialable for path : ${paths[i].path}  , Provided`)
                    }
            }
        }	

    }

}