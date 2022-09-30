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
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get =
                {
                    middlewares: handles
                };
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post =
                {
                    middlewares: handles
                };
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
                {
                    middlewares: handles
                };
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch =
                {
                    middlewares: handles
                };
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put =
                {
                    middlewares: handles
                };
        }
    };
    server.middle = (handle) => {
        server.middlewares.push(handle);
    };
};
exports.CryptoLitePropsBuilder = CryptoLitePropsBuilder;
//# sourceMappingURL=CryptoLitePropsBuilder.js.map