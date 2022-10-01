"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteRequest = void 0;
const CryptoLiteRequest = (req) => {
    req.cookies = {};
    if (req.headers['cookie']) {
        let cookieUnparsed = req.headers['cookie'].split("; ");
        for (let i = 0; i < cookieUnparsed.length; i++) {
            req.cookies[cookieUnparsed[i].slice(0, cookieUnparsed[i].indexOf("="))] = cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=") + 1);
        }
    }
};
exports.CryptoLiteRequest = CryptoLiteRequest;
//# sourceMappingURL=CryptoLiteRequest.js.map