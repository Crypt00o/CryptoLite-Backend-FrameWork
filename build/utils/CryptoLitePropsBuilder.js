"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLitePropsBuilder = void 0;
const pathChecker_1 = require("./pathChecker");
const CryptoLitePropsBuilder = (server) => {
    server.paths = [];
    server.middlewares = [];
    server.get = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get =
            {
                handle: handle
            };
        if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get.middlewares)) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get.middlewares = [];
        }
    };
    server.post = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post =
            {
                handle: handle
            };
        if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post.middlewares)) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post.middlewares = [];
        }
    };
    server.patch = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch =
            {
                handle: handle
            };
        if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch.middlewares)) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch.middlewares = [];
        }
    };
    server.delete = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
            {
                handle: handle
            };
        if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete.middlewares)) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete.middlewares = [];
        }
    };
    server.put = function (path, handle) {
        this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put =
            {
                handle: handle
            };
        if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put.middlewares)) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put.middlewares = [];
        }
    };
    server.allMethods = function (path, handle) {
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get =
                {
                    handle: handle
                };
            if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get.middlewares)) {
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.get.middlewares = [];
            }
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post =
                {
                    handle: handle
                };
            if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post.middlewares)) {
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.post.middlewares = [];
            }
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete =
                    {
                        handle: handle
                    };
            if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete.middlewares)) {
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.delete.middlewares = [];
            }
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch =
                {
                    handle: handle
                };
            if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch.middlewares)) {
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.patch.middlewares = [];
            }
        }
        if (!this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put) {
            this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put =
                {
                    handle: handle
                };
            if (!(this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put.middlewares)) {
                this.paths[((0, pathChecker_1.pathsChecker)(this.paths, path))].methods.put.middlewares = [];
            }
        }
    };
    server.middle = (handle) => {
        server.middlewares.push(handle);
    };
};
exports.CryptoLitePropsBuilder = CryptoLitePropsBuilder;
//# sourceMappingURL=CryptoLitePropsBuilder.js.map