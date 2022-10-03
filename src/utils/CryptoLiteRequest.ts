import { queryParser } from "./CryptoLiteUrlParser"

export const CryptoLiteRequest=(req)=>{
req.cookies={}

if(req.headers['cookie']){
   let cookieUnparsed:Array<string>=req.headers['cookie'].split("; ")
   for(let i =0;i<cookieUnparsed.length;i++){
        req.cookies[cookieUnparsed[i].slice(0,cookieUnparsed[i].indexOf("="))]=cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=")+1)
   }
}

req.query=queryParser(req.url)


}
