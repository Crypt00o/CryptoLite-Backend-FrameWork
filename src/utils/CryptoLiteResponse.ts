export const CryptoLiteResponse=(res)=>{
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