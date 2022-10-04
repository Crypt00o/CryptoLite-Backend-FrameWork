/// <reference types="node" />
import { Server } from "http";
import { CryptoLiteIntialHandle } from "../types/CryptoLiteInitialHandle";
import { RouteRules } from "../types/RouteRules";
declare class CryptoLiteApp extends Server {
    #private;
    constructor(middlewares: Array<Function>, routers: Array<any>, routeRules: RouteRules, handle: CryptoLiteIntialHandle);
    get(path: string, ...handles: Array<Function>): void;
    post(path: string, ...handles: Array<Function>): void;
    patch(path: string, ...handles: Array<Function>): void;
    delete(path: string, ...handles: Array<Function>): void;
    put(path: string, ...handles: Array<Function>): void;
    allMethods(path: string, ...handles: Array<Function>): void;
    path(url: string): {
        "__#2@#route": string;
        get(...handles: Array<Function>): any;
        post(...handles: Array<Function>): any;
        patch(...handles: Array<Function>): any;
        delete(...handles: Array<Function>): any;
        put(...handles: Array<Function>): any;
        allMethods(...handles: Array<Function>): any;
    };
    middle(...handles: Array<Function>): void;
}
export { CryptoLiteApp };
