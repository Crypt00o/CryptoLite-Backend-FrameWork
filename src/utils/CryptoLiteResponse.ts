export const CryptoLiteResponse=(res:any)=>{
    res.CryptoLite={}
    res.setCookie=function(CryptoLiteCookieName:string,CryptoLiteCookieValue:string,options?:{path?:string,httpOnly?:boolean,secure?:boolean,sameSite?:"strict"|"lax"|"none",expires?:number}){
        if(!this.CryptoLite){
            this.CryptoLite={}
        }
        if(!this.CryptoLite.cookies){
            this.CryptoLite.cookies=[]
        }
        let CryptoLiteCookie:string=CryptoLiteCookieName.concat("=",CryptoLiteCookieValue);
        if(options){
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
                CryptoLiteCookie=CryptoLiteCookie.concat(";expires=",new Date(options.expires).toUTCString())
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
        
    }

    res.setStatus =(code)=>{
        if(typeof code==="number" && !isNaN(code) &&code>0 && code<600 ){
            res.statusCode=code
        }
        return res
    }

    res.writeHtml=(data:string)=>{
        if(!res.statusCode){
            res.setStatus(200)
        }
        res.writeHead(res.statusCode,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
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