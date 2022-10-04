import { cryptoLiteCookieSigner } from "./CryptoLiteCookieMiddle"
import { options } from "../types/CryptoLiteCookieOptions"
import { Response } from "../types/CryptoLiteResponse"
import { ServerResponse } from "http"

export const CryptoLiteResponse=(res:Response)=>{
    res.setHeader("x-powered-by","CryptoLite.js")
    res.CryptoLite={}
    res.setCookie=function(CryptoLiteCookieName:string,CryptoLiteCookieValue:string,options?:options){
        if(!this.CryptoLite){
            this.CryptoLite={}
        }
        if(!this.CryptoLite.cookies){
            this.CryptoLite.cookies=[]
        }
        if(!this.CryptoLite.secret){
            this.CryptoLite.secret="CryptoLite"
        }

        let CryptoLiteCookie:string=CryptoLiteCookieName.concat("=",CryptoLiteCookieValue);
        if(options){

            if(options.hasOwnProperty("signed")){
                if(options.signed){
                    CryptoLiteCookie=CryptoLiteCookieName.concat("=",cryptoLiteCookieSigner(CryptoLiteCookieValue,this.CryptoLite.secret as string))        
                }
            }
            if(options.hasOwnProperty("httpOnly")){
                if(options.httpOnly){
                    CryptoLiteCookie=CryptoLiteCookie.concat(";HttpOnly")
                }
            }
            if(options.hasOwnProperty("secure")){
                if(options.secure){
                    CryptoLiteCookie=CryptoLiteCookie.concat(";Secure")
                }
            }
            if(options.hasOwnProperty("expires")){
                CryptoLiteCookie=CryptoLiteCookie.concat(";expires=",new Date((options.expires) as string|number|Date).toUTCString())
            }
            if(options.hasOwnProperty("sameSite")){
                if(options.sameSite){
                CryptoLiteCookie=CryptoLiteCookie.concat(";SameSite=",options.sameSite)
                }
            }
            
            if(options.hasOwnProperty("path")){
                if(options.path){
                CryptoLiteCookie=CryptoLiteCookie.concat(";Path=",options.path)
                }
            }

        }
        this.CryptoLite.cookies.push(CryptoLiteCookie)
        this.setHeader('Set-Cookie',this.CryptoLite.cookies)
        return this
       
    }

    res.deleteCookie=function(CryptoLiteCookieName:string){
        
        this.setCookie(CryptoLiteCookieName,"",{expires:Date.now()-1000})
        return this
        
    }

    res.setStatus =function(code:number){
        if(typeof code==="number" && !isNaN(code) &&code>0 && code<600 ){
            res.statusCode=code
        }
        return this
    }

    res.writeHtml=function(data:string){
        if(!this.statusCode){
            this.setStatus(200)
        }
        this.writeHead(res.statusCode,{"Content-Type":"text/html"})
        this.write(data)
        this.end()
    }
    
    res.writeJson=(data:object)=>{
        if(!res.statusCode){
            res.setStatus(200)
        }
        res.writeHead(res.statusCode,{"Content-Type":"application/json"})
        res.write(JSON.stringify(data))
        res.end()
    }        
}