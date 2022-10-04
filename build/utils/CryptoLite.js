"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptolite = void 0;
const CryptoLiteMiddleFlow_1 = require("./CryptoLiteMiddleFlow");
const CryptoLiteResponse_1 = require("./CryptoLiteResponse");
const CryptoLiteBaseRouter_1 = require("./CryptoLiteBaseRouter");
const CryptoLiteRequest_1 = require("./CryptoLiteRequest");
const CryptoLiteApp_1 = require("../classes/CryptoLiteApp");
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
const cryptolite = function () {
    let middlewares = [];
    let routeRules = {};
    let routers = [];
    const handle = (req, res) => {
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
            (0, CryptoLiteRequest_1.CryptoLiteRequest)(req);
            (0, CryptoLiteResponse_1.CryptoLiteResponse)(res);
            (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(middlewares, req, res);
            (0, CryptoLiteBaseRouter_1.CryptoLiteBaseRouter)(routeRules, req, res);
        });
    };
    return new CryptoLiteApp_1.CryptoLiteApp(middlewares, routers, routeRules, handle);
};
exports.cryptolite = cryptolite;
//# sourceMappingURL=CryptoLite.js.map