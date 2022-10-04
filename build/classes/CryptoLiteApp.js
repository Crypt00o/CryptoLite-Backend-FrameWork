"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CryptoLiteApp_routeRules, _CryptoLiteApp_middlewares, _CryptoLiteApp_routers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteApp = void 0;
const http_1 = require("http");
const pathChecker_1 = require("../utils/pathChecker");
class CryptoLiteApp extends http_1.Server {
    constructor(middlewares, routers, routeRules, handle) {
        super(handle);
        _CryptoLiteApp_routeRules.set(this, void 0);
        _CryptoLiteApp_middlewares.set(this, void 0);
        _CryptoLiteApp_routers.set(this, void 0);
        __classPrivateFieldSet(this, _CryptoLiteApp_routeRules, routeRules, "f");
        __classPrivateFieldSet(this, _CryptoLiteApp_middlewares, middlewares, "f");
        __classPrivateFieldSet(this, _CryptoLiteApp_routers, routers, "f");
    }
    get(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.get =
            {
                middlewares: handles
            };
    }
    post(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.post =
            {
                middlewares: handles
            };
    }
    patch(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.patch =
            {
                middlewares: handles
            };
    }
    delete(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.delete =
            {
                middlewares: handles
            };
    }
    put(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.put =
            {
                middlewares: handles
            };
    }
    allMethods(path, ...handles) {
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.get =
            {
                middlewares: handles
            };
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.post =
            {
                middlewares: handles
            };
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.delete =
            {
                middlewares: handles
            };
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.patch =
            {
                middlewares: handles
            };
        __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].methods.put =
            {
                middlewares: handles
            };
    }
    path(url) {
        var _Path_route, _a;
        let app = this;
        return new (_a = class Path {
                constructor(url) {
                    _Path_route.set(this, void 0);
                    __classPrivateFieldSet(this, _Path_route, url, "f");
                }
                get(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.get =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                post(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.post =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                patch(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.patch =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                delete(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.delete =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                put(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.put =
                        {
                            middlewares: handles
                        };
                    return this;
                }
                allMethods(...handles) {
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.get =
                        {
                            middlewares: handles
                        };
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.post =
                        {
                            middlewares: handles
                        };
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.patch =
                        {
                            middlewares: handles
                        };
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.delete =
                        {
                            middlewares: handles
                        };
                    __classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(app, _CryptoLiteApp_routeRules, "f"), __classPrivateFieldGet(this, _Path_route, "f")))].methods.put =
                        {
                            middlewares: handles
                        };
                    return this;
                }
            },
            _Path_route = new WeakMap(),
            _a)(url);
    }
    ;
    middle(...handles) {
        if (typeof handles[0] === "string") {
            const path = handles[0];
            handles = handles.slice(1);
            for (let i = 0; i < handles.length; i++) {
                if (typeof handles[i] === "function" && !handles[i].hasOwnProperty("CryptoLiteRouter")) {
                    __classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f")[((0, pathChecker_1.createRuleIfNotExists)(__classPrivateFieldGet(this, _CryptoLiteApp_routeRules, "f"), path))].middlewares.push(handles[i]);
                }
                if (typeof handles[i] === "function" && handles[i].hasOwnProperty("CryptoLiteRouter")) {
                    __classPrivateFieldGet(this, _CryptoLiteApp_routers, "f").push(handles[i]);
                }
            }
        }
        else {
            for (let i = 0; i < handles.length; i++) {
                if (typeof handles[i] === "function") {
                    __classPrivateFieldGet(this, _CryptoLiteApp_middlewares, "f").push(...handles);
                }
                if (typeof handles[i] === "object" && handles[i] !== null && handles[i].hasOwnProperty("CryptoLiteRouter")) {
                    __classPrivateFieldGet(this, _CryptoLiteApp_routers, "f").push(handles[i]);
                }
            }
        }
    }
    ;
}
exports.CryptoLiteApp = CryptoLiteApp;
_CryptoLiteApp_routeRules = new WeakMap(), _CryptoLiteApp_middlewares = new WeakMap(), _CryptoLiteApp_routers = new WeakMap();
//# sourceMappingURL=CryptoLiteApp.js.map