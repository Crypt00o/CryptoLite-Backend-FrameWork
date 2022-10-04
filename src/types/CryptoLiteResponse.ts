import { ServerResponse } from "http";
import {options} from "../types/CryptoLiteCookieOptions"
export interface Response extends ServerResponse{
    CryptoLite:{
        cookies?:Array<string>
        secret?:string
    }
    setCookie(
        cookieName:string,
        cookieValue:string,
        options?:options
    ):Response

    deleteCookie(cookieName:string):Response

    setStatus(code:number):Response

    writeHtml(data:string):void
    
    writeJson(data:object):void
    


    
}
