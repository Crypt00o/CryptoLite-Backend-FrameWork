"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLitePropsBuilder = void 0;
const pathChecker_1 = require("./pathChecker");
const CryptoLitePropsBuilder = (server) => {
    server.routeTable = new Object();
    server.middlewares = new Array();
    server.get = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.get =
            {
                middlewares: handles
            };
    };
    server.post = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.post =
            {
                middlewares: handles
            };
    };
    server.patch = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.patch =
            {
                middlewares: handles
            };
    };
    server.delete = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.delete =
            {
                middlewares: handles
            };
    };
    server.put = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.put =
            {
                middlewares: handles
            };
    };
    server.allMethods = function (path, ...handles) {
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.get =
            {
                middlewares: handles
            };
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.post =
            {
                middlewares: handles
            };
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.delete =
            {
                middlewares: handles
            };
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.patch =
            {
                middlewares: handles
            };
        this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].methods.put =
            {
                middlewares: handles
            };
    };
    server.path = (url) => {
        return new (class path {
            constructor(url) {
                this.route = url;
            }
            get(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.get =
                    {
                        middlewares: handles
                    };
                return this;
            }
            post(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.post =
                    {
                        middlewares: handles
                    };
                return this;
            }
            patch(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.patch =
                    {
                        middlewares: handles
                    };
                return this;
            }
            delete(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.delete =
                    {
                        middlewares: handles
                    };
                return this;
            }
            put(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.put =
                    {
                        middlewares: handles
                    };
                return this;
            }
            allMethods(...handles) {
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.get =
                    {
                        middlewares: handles
                    };
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.post =
                    {
                        middlewares: handles
                    };
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.patch =
                    {
                        middlewares: handles
                    };
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.delete =
                    {
                        middlewares: handles
                    };
                server.routeTable[((0, pathChecker_1.createRuleIfNotExists)(server.routeTable, this.route))].methods.put =
                    {
                        middlewares: handles
                    };
                return this;
            }
        })(url);
    };
    server.middle = function (...handles) {
        if (typeof handles[0] === "string") {
            const path = handles[0];
            handles = handles.slice(1);
            for (let i = 0; i < handles.length; i++) {
                if (typeof handles[i] === "function") {
                    this.routeTable[((0, pathChecker_1.createRuleIfNotExists)(this.routeTable, path))].middlewares.push(handles[i]);
                }
            }
        }
        else {
            for (let i = 0; i < handles.length; i++) {
                if (typeof handles[i] === "function") {
                    this.middlewares.push(...handles);
                }
            }
        }
    };
};
exports.CryptoLitePropsBuilder = CryptoLitePropsBuilder;
//# sourceMappingURL=CryptoLitePropsBuilder.js.map