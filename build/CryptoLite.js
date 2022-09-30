"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptolite = void 0;
const http_1 = require("http");
const CryptoLiteMiddleFlow_1 = require("./utils/CryptoLiteMiddleFlow");
const CryptoLiteResponse_1 = require("./utils/CryptoLiteResponse");
const CryptoLiteBasicRouter_1 = require("./utils/CryptoLiteBasicRouter");
const CryptoLitePropsBuilder_1 = require("./utils/CryptoLitePropsBuilder");
/****************************************************************
* CryptoLite Backend FrameWork for Lite Projects                *
*    - Not Suppoting  MiddleWares Until Now :(                  *
*                                                               *
*    ✔ There is Basic Routing                                   *
*    ✔ There is Body Parser by Default                          *
*    ✔ Easy in Usage Like Express                               *
*                                                               *
*   Author : Eslam Mohamed Moawed Elabd                         *
*   License : MIT                                               *
*                                                               *
 ****************************************************************/
const cryptolite = () => {
    let server = (0, http_1.createServer)((req, res) => {
        req.body = {};
        let body = '';
        req.on("data", (data) => {
            body += data.toString('utf-8');
        });
        req.on("end", () => {
            if (req.headers["content-type"] === "application/json") {
                req.body = JSON.parse(body);
            }
            if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
                let result = body.split("&");
                result.forEach((value, index, self) => { self[index] = value.split("="); });
                result.forEach((value) => { req.body[value[0]] = value[1]; });
            }
            if (req.url) {
                if (req.url.length > 1 && req.url[req.url.length - 1] === "/") {
                    req.url = req.url.slice(0, req.url.length - 1);
                }
            }
            (0, CryptoLiteResponse_1.CryptoLiteResponse)(res);
            (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(server.middlewares, req, res);
            (0, CryptoLiteBasicRouter_1.CryptoLiteBasicRouter)(server.paths, req, res);
        });
    });
    (0, CryptoLitePropsBuilder_1.CryptoLitePropsBuilder)(server);
    return server;
};
exports.cryptolite = cryptolite;
exports.default = { cryptolite: cryptolite };
//# sourceMappingURL=CryptoLite.js.map