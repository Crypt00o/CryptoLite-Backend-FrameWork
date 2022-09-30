"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteBasicRouter = void 0;
const CryptoLiteErrorLogger_1 = require("./CryptoLiteErrorLogger");
const CryptoLiteMiddleFlow_1 = require("./CryptoLiteMiddleFlow");
const CryptoLiteBasicRouter = (paths, req, res) => {
    for (let i = 0; i < paths.length; i++) {
        if (req.url == paths[i].path) {
            switch (req.method) {
                case "GET":
                    try {
                        (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(paths[i].methods.get.middlewares, req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error GET Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "POST":
                    try {
                        (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(paths[i].methods.post.middlewares, req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error POST Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "DELETE":
                    try {
                        (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(paths[i].methods.delete.middlewares, req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "PUT":
                    try {
                        (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(paths[i].methods.put.middlewares, req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error PUT Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "PATCH":
                    try {
                        (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(paths[i].methods.patch.middlewares, req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
            }
        }
    }
};
exports.CryptoLiteBasicRouter = CryptoLiteBasicRouter;
//# sourceMappingURL=CryptoLiteBasicRouter.js.map