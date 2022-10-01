"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLitePropsBuilder = void 0;
const pathChecker_1 = require("./pathChecker");
const CryptoLitePropsBuilder = (server) => {
    server.paths = [];
    server.middlewares = [];
    server.get = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get =
            {
                middlewares: handles
            };
    };
    server.post = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post =
            {
                middlewares: handles
            };
    };
    server.patch = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch =
            {
                middlewares: handles
            };
    };
    server.delete = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
            {
                middlewares: handles
            };
    };
    server.put = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put =
            {
                middlewares: handles
            };
    };
    server.allMethods = function (path, ...handles) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get =
            {
                middlewares: handles
            };
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post =
            {
                middlewares: handles
            };
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
            {
                middlewares: handles
            };
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch =
            {
                middlewares: handles
            };
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put =
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
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.get =
                    {
                        middlewares: handles
                    };
                return this;
            }
            post(...handles) {
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.post =
                    {
                        middlewares: handles
                    };
                return this;
            }
            patch(...handles) {
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.patch =
                    {
                        middlewares: handles
                    };
                return this;
            }
            delete(...handles) {
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.delete =
                    {
                        middlewares: handles
                    };
                return this;
            }
            put(...handles) {
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.put =
                    {
                        middlewares: handles
                    };
                return this;
            }
            allMethods(...handles) {
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.get =
                    {
                        middlewares: handles
                    };
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.post =
                    {
                        middlewares: handles
                    };
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.patch =
                    {
                        middlewares: handles
                    };
                if (!server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.delete) {
                    server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.delete =
                        {
                            middlewares: handles
                        };
                }
                server.paths[((0, pathChecker_1.pathsChecker)(server.paths, this.route))].methods.put =
                    {
                        middlewares: handles
                    };
                return this;
            }
        })(url);
    };
    server.middle = function (...handles) {
        if (typeof handles[0] === "string") {
            server.paths[((0, pathChecker_1.pathsChecker)(server.paths, handles[0]))].middlewares.push(...handles.slice(1));
        }
        else {
            server.middlewares.push(...handles);
        }
    };
};
exports.CryptoLitePropsBuilder = CryptoLitePropsBuilder;
//# sourceMappingURL=CryptoLitePropsBuilder.js.map