import { queryParser } from "./CryptoLiteUrlParser"
import { Request } from "../types/CryptoLiteRequest"
export const CryptoLiteRequest=(req:Request)=>{





req.cookies={}
req.params={}
req.originalUrl=req.url
req.url=decodeURI(req.url)
if(req.headers['cookie']){
   let cookieUnparsed:Array<string>=req.headers['cookie'].split("; ")
   for(let i =0;i<cookieUnparsed.length;i++){
        req.cookies[cookieUnparsed[i].slice(0,cookieUnparsed[i].indexOf("="))]=cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=")+1)
   }
}

if(req.url.indexOf("?")!=-1){
req.path=decodeURI( (req.url).slice(0,req.url.indexOf("?")) )
}
else{
   req.path=decodeURI(req.url)
}

if(req.path.length>1 && req.path[req.path.length-1]==="/"){
   req.path=req.path.slice(0,req.path.length-1)
}
req.query=queryParser(req.url)
}
