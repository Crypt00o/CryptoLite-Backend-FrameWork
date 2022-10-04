/// <reference types="node" />
import { IncomingMessage } from "http";
export interface Request extends IncomingMessage {
    body?: any;
    query?: any;
    params?: any;
    path: string;
    originalUrl: string;
    cookies?: any;
    cookiesSigned?: any;
}
