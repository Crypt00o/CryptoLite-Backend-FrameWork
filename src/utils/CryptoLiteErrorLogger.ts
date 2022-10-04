import { Request } from "../types/CryptoLiteRequest"
import { Response } from "../types/CryptoLiteResponse"
export const  CryptoLiteErrorLogger=function(_:Request,res:Response,err:unknown){
    console.log(err)
    res.writeHead(500,{"Content-Type":"text/html"})
    res.write(err)
    res.end()
}