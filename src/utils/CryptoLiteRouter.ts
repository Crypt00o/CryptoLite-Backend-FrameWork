import {cryptolite} from "../CryptoLite"
export 
function Router(){
    return (({
        middlewares:[],
        routeTable:{},
        routers:[],
        get:Function,
        post:Function,
        patch:Function,
        delete:Function,
        put:Function,
        allMethods:Function,
        path:Function,
        middle:Function,

    }=cryptolite()).CryptoLiteRouter=true)
    
   }