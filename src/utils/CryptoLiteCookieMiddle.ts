import { createHmac,timingSafeEqual } from "crypto"

export const cryptoLiteCookieSigner=function(cryptoLiteCookieValue:string,cryptoLiteCookieSecret:string){
    return cryptoLiteCookieValue
    .concat("#cryptolite#",
    createHmac("sha256",cryptoLiteCookieSecret)
    .update(cryptoLiteCookieValue)
    .digest("base64").
    replace(RegExp("\\=+$"),""))
}

const cryptoLiteCookieVerifier=function(cryptoLiteCookieHashed:string,cryptoLiteCookieSecret:string){
    const cryptoLiteCookieValue=  cryptoLiteCookieHashed.
    slice(0, cryptoLiteCookieHashed.lastIndexOf('#cryptolite#')),
    cryptoLiteExpected=Buffer.from(cryptoLiteCookieSigner(cryptoLiteCookieValue,cryptoLiteCookieSecret)),
    cryptoLiteToExpect=Buffer.from(cryptoLiteCookieHashed)
    if(cryptoLiteExpected.length===cryptoLiteToExpect.length && timingSafeEqual(cryptoLiteExpected,cryptoLiteToExpect)){
        return cryptoLiteCookieValue
    }
    else{
        return false
    }

}

export const cryptoCookie=function(secret?:string){
    if(!secret){
        secret="CryptoLite"
    }
    return function(req:any,res:any,next:Function){
            if(!res.CryptoLite){
                res.CryptoLite={}
            }
            if(!res.CryptoLite.secret){
                res.CryptoLite.secret=secret
            }   
            req.signedCookies={}

    if(req.headers['cookie']){
        let cookieUnparsed:Array<string>=req.headers['cookie'].split("; ")
        for(let i =0;i<cookieUnparsed.length;i++){
            let cryptoLiteCookieValue=cryptoLiteCookieVerifier((cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=")+1)),secret as string)
            if(cryptoLiteCookieValue){
                req.signedCookies[cookieUnparsed[i].slice(0,cookieUnparsed[i].indexOf("="))]=cryptoLiteCookieValue
            }
        }
    }            
        next()
    }
}
