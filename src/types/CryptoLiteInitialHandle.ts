import { IncomingMessage, ServerResponse } from "http";

export type CryptoLiteIntialHandle=(req: IncomingMessage,res: ServerResponse)=>void