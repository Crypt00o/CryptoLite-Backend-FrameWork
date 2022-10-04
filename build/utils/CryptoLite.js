"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptolite = void 0;
const http_1 = require("http");
const CryptoLiteMiddleFlow_1 = require("./CryptoLiteMiddleFlow");
const CryptoLiteResponse_1 = require("./CryptoLiteResponse");
const CryptoLiteBaseRouter_1 = require("./CryptoLiteBaseRouter");
const CryptoLiteRequest_1 = require("./CryptoLiteRequest");
const pathChecker_1 = require("./pathChecker");
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
    class CryptoLiteApp extends http_1.Server {
        constructor(middlewares, routers, routeRules, handle) {
            super(handle);
            this.routeRules = routeRules;
            this.middlewares = middlewares;
            this.routers = routers;
        }
        get(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.get =
                {
                    middlewares: handles
                };
        }
        post(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.post =
                {
                    middlewares: handles
                };
        }
        patch(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.patch =
                {
                    middlewares: handles
                };
        }
        delete(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.delete =
                {
                    middlewares: handles
                };
        }
        put(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.put =
                {
                    middlewares: handles
                };
        }
        allMethods(path, ...handles) {
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.get =
                {
                    middlewares: handles
                };
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.post =
                {
                    middlewares: handles
                };
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.delete =
                {
                    middlewares: handles
                };
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.patch =
                {
                    middlewares: handles
                };
            this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].methods.put =
                {
                    middlewares: handles
                };
        }
        path(url) {
            let app = this;
            return new (class Path {
                constructor(url) {
                    this.route = url;
                }
                get(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.get =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                post(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.post =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                patch(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.patch =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                delete(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.delete =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                put(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.put =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                allMethods(...handles) {
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.get =
                        {
                            middlewares: handles
                        };
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.post =
                        {
                            middlewares: handles
                        };
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.patch =
                        {
                            middlewares: handles
                        };
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.delete =
                        {
                            middlewares: handles
                        };
                    app.routeRules[((0, pathChecker_1.createRuleIfNotExists)(app.routeRules, this.route))].methods.put =
                        {
                            middlewares: handles
                        };
                    return this;
                }
            })(url);
        }
        ;
        middle(...handles) {
            if (typeof handles[0] === "string") {
                const path = handles[0];
                handles = handles.slice(1);
                for (let i = 0; i < handles.length; i++) {
                    if (typeof handles[i] === "function") {
                        this.routeRules[((0, pathChecker_1.createRuleIfNotExists)(this.routeRules, path))].middlewares.push(handles[i]);
                    }
                    if (typeof handles[i] === "object" && handles[i] !== null && handles[i].hasOwnProperty("CryptoLiteRouter")) {
                        this.routers.push(handles[i]);
                    }
                }
            }
            else {
                for (let i = 0; i < handles.length; i++) {
                    if (typeof handles[i] === "function") {
                        this.middlewares.push(...handles);
                    }
                    if (typeof handles[i] === "object" && handles[i] !== null && handles[i].hasOwnProperty("CryptoLiteRouter")) {
                        this.routers.push(handles[i]);
                    }
                }
            }
        }
        ;
    }
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
    return new CryptoLiteApp(middlewares, routers, routeRules, handle);
};
exports.cryptolite = cryptolite;
//# sourceMappingURL=CryptoLite.js.map