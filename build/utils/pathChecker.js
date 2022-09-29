"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathsChecker = void 0;
let pathsChecker = (paths, path) => {
    for (let i = 0; i < paths.length; i++) {
        if (paths[i].path === path) {
            return { found: true, index: i };
        }
    }
    paths.push({ path: path, methods: {} });
    return { found: true, index: paths.length - 1 };
};
exports.pathsChecker = pathsChecker;
//# sourceMappingURL=pathChecker.js.map