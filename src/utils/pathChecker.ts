import {CryptoLitePath} from "../types/CryptoLitePaths"

export let pathsChecker=(paths:Array<CryptoLitePath>,path:string):number=>{
    for(let i=0;i<paths.length;i++){
        if(paths[i].path===path){
            return i
        }
    }
    paths.push({path:path,methods:{},middlewares:[]})
    return paths.length-1

}