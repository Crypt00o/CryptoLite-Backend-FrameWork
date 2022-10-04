/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { RouteRules } from "../types/RouteRules";
/********************************************************************
* CryptoLite Backend FrameWork for Lite Projects                    *
*                                                                   *
*    ✔ There is support for Middlewares                            *
*    ✔ There is Fast Routing support                                *
*    ✔ There is Body Parser by Default                              *
*    ✔ Easy in Usage Like Express                                   *
*                                                                    *
*   Author : Eslam Mohamed Moawed Elabd                              *
*   License : MIT                                                    *
*                                                                    *
 *********************************************************************/
export declare const cryptolite: () => {
    "__#1@#routeRules": RouteRules;
    "__#1@#middlewares": Array<Function>;
    "__#1@#routers": Array<any>;
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
    setTimeout(msecs?: number, callback?: () => void): any;
    setTimeout(callback: () => void): any;
    maxHeadersCount: number;
    maxRequestsPerSocket: number;
    timeout: number;
    headersTimeout: number;
    keepAliveTimeout: number;
    requestTimeout: number;
    closeAllConnections(): void;
    closeIdleConnections(): void;
    addListener(event: string, listener: (...args: any[]) => void): any;
    addListener(event: "close", listener: () => void): any;
    addListener(event: "connection", listener: (socket: import("net").Socket) => void): any;
    addListener(event: "error", listener: (err: Error) => void): any;
    addListener(event: "listening", listener: () => void): any;
    addListener(event: "checkContinue", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    addListener(event: "checkExpectation", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    addListener(event: "clientError", listener: (err: Error, socket: import("stream").Duplex) => void): any;
    addListener(event: "connect", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    addListener(event: "request", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    addListener(event: "upgrade", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    emit(event: string, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "connection", socket: import("net").Socket): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "listening"): boolean;
    emit(event: "checkContinue", req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
    }): boolean;
    emit(event: "checkExpectation", req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
    }): boolean;
    emit(event: "clientError", err: Error, socket: import("stream").Duplex): boolean;
    emit(event: "connect", req: IncomingMessage, socket: import("stream").Duplex, head: Buffer): boolean;
    emit(event: "request", req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
    }): boolean;
    emit(event: "upgrade", req: IncomingMessage, socket: import("stream").Duplex, head: Buffer): boolean;
    on(event: string, listener: (...args: any[]) => void): any;
    on(event: "close", listener: () => void): any;
    on(event: "connection", listener: (socket: import("net").Socket) => void): any;
    on(event: "error", listener: (err: Error) => void): any;
    on(event: "listening", listener: () => void): any;
    on(event: "checkContinue", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    on(event: "checkExpectation", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    on(event: "clientError", listener: (err: Error, socket: import("stream").Duplex) => void): any;
    on(event: "connect", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    on(event: "request", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    on(event: "upgrade", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    once(event: string, listener: (...args: any[]) => void): any;
    once(event: "close", listener: () => void): any;
    once(event: "connection", listener: (socket: import("net").Socket) => void): any;
    once(event: "error", listener: (err: Error) => void): any;
    once(event: "listening", listener: () => void): any;
    once(event: "checkContinue", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    once(event: "checkExpectation", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    once(event: "clientError", listener: (err: Error, socket: import("stream").Duplex) => void): any;
    once(event: "connect", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    once(event: "request", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    once(event: "upgrade", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    prependListener(event: string, listener: (...args: any[]) => void): any;
    prependListener(event: "close", listener: () => void): any;
    prependListener(event: "connection", listener: (socket: import("net").Socket) => void): any;
    prependListener(event: "error", listener: (err: Error) => void): any;
    prependListener(event: "listening", listener: () => void): any;
    prependListener(event: "checkContinue", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependListener(event: "checkExpectation", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependListener(event: "clientError", listener: (err: Error, socket: import("stream").Duplex) => void): any;
    prependListener(event: "connect", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    prependListener(event: "request", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependListener(event: "upgrade", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    prependOnceListener(event: string, listener: (...args: any[]) => void): any;
    prependOnceListener(event: "close", listener: () => void): any;
    prependOnceListener(event: "connection", listener: (socket: import("net").Socket) => void): any;
    prependOnceListener(event: "error", listener: (err: Error) => void): any;
    prependOnceListener(event: "listening", listener: () => void): any;
    prependOnceListener(event: "checkContinue", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependOnceListener(event: "checkExpectation", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependOnceListener(event: "clientError", listener: (err: Error, socket: import("stream").Duplex) => void): any;
    prependOnceListener(event: "connect", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    prependOnceListener(event: "request", listener: import("http").RequestListener<typeof IncomingMessage, typeof ServerResponse>): any;
    prependOnceListener(event: "upgrade", listener: (req: IncomingMessage, socket: import("stream").Duplex, head: Buffer) => void): any;
    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): any;
    listen(port?: number, hostname?: string, listeningListener?: () => void): any;
    listen(port?: number, backlog?: number, listeningListener?: () => void): any;
    listen(port?: number, listeningListener?: () => void): any;
    listen(path: string, backlog?: number, listeningListener?: () => void): any;
    listen(path: string, listeningListener?: () => void): any;
    listen(options: import("net").ListenOptions, listeningListener?: () => void): any;
    listen(handle: any, backlog?: number, listeningListener?: () => void): any;
    listen(handle: any, listeningListener?: () => void): any;
    close(callback?: (err?: Error) => void): any;
    address(): string | import("net").AddressInfo;
    getConnections(cb: (error: Error, count: number) => void): void;
    ref(): any;
    unref(): any;
    maxConnections: number;
    connections: number;
    listening: boolean;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
    off(eventName: string | symbol, listener: (...args: any[]) => void): any;
    removeAllListeners(event?: string | symbol): any;
    setMaxListeners(n: number): any;
    getMaxListeners(): number;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    listenerCount(eventName: string | symbol): number;
    eventNames(): (string | symbol)[];
};
