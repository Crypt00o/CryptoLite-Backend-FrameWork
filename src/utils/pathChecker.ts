import { cryptoLiteParamsFactory } from "./CryptoLiteUrlParser"
export let createRuleIfNotExists=(routeTable:object,path:string):string=>{
    if(!routeTable.hasOwnProperty(cryptoLiteParamsFactory(path) )){
        routeTable[cryptoLiteParamsFactory(path)]={methods:{},middlewares:[]}
    }
    return cryptoLiteParamsFactory(path)
}