"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteRequest = void 0;
const CryptoLiteUrlParser_1 = require("./CryptoLiteUrlParser");
const CryptoLiteRequest = (req) => {
    req.cookies = {};
    req.params = {};
    req.originalUrl = req.url;
    req.url = decodeURI(req.url);
    if (req.headers['cookie']) {
        let cookieUnparsed = req.headers['cookie'].split("; ");
        for (let i = 0; i < cookieUnparsed.length; i++) {
            req.cookies[cookieUnparsed[i].slice(0, cookieUnparsed[i].indexOf("="))] = cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=") + 1);
        }
    }
    if (req.url.indexOf("?") != -1) {
        req.path = decodeURI((req.url).slice(0, req.url.indexOf("?")));
    }
    else {
        req.path = decodeURI(req.url);
    }
    if (req.path.length > 1 && req.path[req.path.length - 1] === "/") {
        req.path = req.path.slice(0, req.path.length - 1);
    }
    req.query = (0, CryptoLiteUrlParser_1.queryParser)(req.url);
};
exports.CryptoLiteRequest = CryptoLiteRequest;
//# sourceMappingURL=CryptoLiteRequest.js.map