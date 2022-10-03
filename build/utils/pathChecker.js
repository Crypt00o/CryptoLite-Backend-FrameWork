"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRuleIfNotExists = void 0;
let createRuleIfNotExists = (routeTable, path) => {
    if (!routeTable.hasOwnProperty(path)) {
        routeTable[path] = { methods: {}, middlewares: [] };
    }
    return path;
};
exports.createRuleIfNotExists = createRuleIfNotExists;
//# sourceMappingURL=pathChecker.js.map