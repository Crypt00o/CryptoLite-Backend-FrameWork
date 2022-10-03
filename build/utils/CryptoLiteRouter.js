"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const CryptoLite_1 = require("../CryptoLite");
function Router() {
    return (({
        middlewares: [],
        routeTable: {},
        routers: [],
        get: Function,
        post: Function,
        patch: Function,
        delete: Function,
        put: Function,
        allMethods: Function,
        path: Function,
        middle: Function,
    } = (0, CryptoLite_1.cryptolite)()).CryptoLiteRouter = true);
}
exports.Router = Router;
//# sourceMappingURL=CryptoLiteRouter.js.map