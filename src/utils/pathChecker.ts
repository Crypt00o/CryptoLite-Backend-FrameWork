export let createRuleIfNotExists=(routeTable:object,path:string):string=>{
    if(!routeTable.hasOwnProperty(path)){
        routeTable[path]={methods:{},middlewares:[]}
    }
    return path
}