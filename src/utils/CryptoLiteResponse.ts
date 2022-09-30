export const CryptoLiteResponse=(res)=>{
    res.setStatus =(code)=>{
        if(typeof code==="number" && !isNaN(code) &&code>0 && code<600 ){
            res.status=code
        }
        return res
    }

    res.writeHtml=(data:string)=>{
        if(!res.status){
            res.setStatus(200)
        }
        res.writeHead(res.status,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    }
    
    res.writeJson=(data:object)=>{
        if(!res.status){
            res.setStatus(200)
        }
        res.writeHead(res.status,{"Content-Type":"application/json"})
        res.write(JSON.stringify(data))
        res.end()

    }        
}