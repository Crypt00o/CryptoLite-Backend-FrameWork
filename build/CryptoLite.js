"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptolite = void 0;
const http_1 = require("http");
const pathChecker_1 = require("./utils/pathChecker");
const CryptoLiteErrorLogger_1 = require("./utils/CryptoLiteErrorLogger");
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
            res.setStatus = (code) => {
                if (typeof code === "number" && !isNaN(code) && code > 0 && code < 600) {
                    res.status = code;
                }
                return res;
            };
            res.writeHtml = (data) => {
                if (!res.status) {
                    res.setStatus(200);
                }
                res.writeHead(res.status, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            };
            res.writeJson = (data) => {
                if (!res.status) {
                    res.setStatus(200);
                }
                res.writeHead(res.status, { "Content-Type": "application/json" });
                res.write(JSON.stringify(data));
                res.end();
            };
            for (let i = 0; i < server.paths.length; i++) {
                if (req.url == server.paths[i].path) {
                    switch (req.method) {
                        case "GET":
                            try {
                                server.paths[i].methods.get(req, res);
                            }
                            catch (err) {
                                (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error GET Didn,t avialable for path : ${server.paths[i].path}  , Provided`);
                            }
                            break;
                        case "POST":
                            try {
                                server.paths[i].methods.post(req, res);
                            }
                            catch (err) {
                                (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error POST Didn,t avialable for path : ${server.paths[i].path}  , Provided`);
                            }
                            break;
                        case "DELETE":
                            try {
                                server.paths[i].methods.delete(req, res);
                            }
                            catch (err) {
                                (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${server.paths[i].path}  , Provided`);
                            }
                            break;
                        case "PUT":
                            try {
                                server.paths[i].methods.put(req, res);
                            }
                            catch (err) {
                                (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error PUT Didn,t avialable for path : ${server.paths[i].path}  , Provided`);
                            }
                            break;
                        case "PATCH":
                            try {
                                server.paths[i].methods.patch(req, res);
                            }
                            catch (err) {
                                (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${server.paths[i].path}  , Provided`);
                            }
                    }
                }
            }
        });
    });
    server.paths = [];
    server.get = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.get = handle;
    };
    server.post = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.post = handle;
    };
    server.patch = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.patch = handle;
    };
    server.delete = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.delete = handle;
    };
    server.put = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.put = handle;
    };
    server.allMethods = function (path, handle) {
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.get) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.get = handle;
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.post) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.post = handle;
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.delete) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.delete = handle;
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.patch) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.patch = handle;
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.put) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path)).index].methods.put = handle;
        }
    };
    return server;
};
exports.cryptolite = cryptolite;
exports.default = { cryptolite: cryptolite };
//# sourceMappingURL=CryptoLite.js.map