"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRuleIfNotExists = void 0;
const CryptoLiteUrlParser_1 = require("./CryptoLiteUrlParser");
let createRuleIfNotExists = (routeTable, path) => {
    if (!routeTable.hasOwnProperty((0, CryptoLiteUrlParser_1.cryptoLiteParamsFactory)(path))) {
        routeTable[(0, CryptoLiteUrlParser_1.cryptoLiteParamsFactory)(path)] = { methods: {}, middlewares: [] };
    }
    return (0, CryptoLiteUrlParser_1.cryptoLiteParamsFactory)(path);
};
exports.createRuleIfNotExists = createRuleIfNotExists;
//# sourceMappingURL=pathChecker.js.map