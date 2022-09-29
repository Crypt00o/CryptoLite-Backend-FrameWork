import {CryptoLitePath,CryptoLitePathChecker} from "../types/CryptoLitePaths"

export let pathsChecker=(paths:Array<CryptoLitePath>,path:string):CryptoLitePathChecker=>{
    for(let i=0;i<paths.length;i++){
        if(paths[i].path===path){
            return {found:true,index:i}
        }
    }
    paths.push({path:path,methods:{}})
    return {found:true,index:paths.length-1}

}