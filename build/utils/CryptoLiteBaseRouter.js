"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteBaseRouter = void 0;
const CryptoLiteErrorLogger_1 = require("./CryptoLiteErrorLogger");
const CryptoLiteMiddleFlow_1 = require("./CryptoLiteMiddleFlow");
const CryptoLiteBaseRouter = (routes, req, res) => {
    if (routes[req.url]) {
        if (routes.hasOwnProperty(req.url))
            (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].middlewares, req, res);
        switch (req.method) {
            case "GET":
                try {
                    (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].methods.get.middlewares, req, res);
                }
                catch (err) {
                    (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error GET Didn,t avialable for path : ${req.url}  , Provided`);
                }
                break;
            case "POST":
                try {
                    (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].methods.post.middlewares, req, res);
                }
                catch (err) {
                    (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error POST Didn,t avialable for path : ${req.url}  , Provided`);
                }
                break;
            case "DELETE":
                try {
                    (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].methods.delete.middlewares, req, res);
                }
                catch (err) {
                    (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${req.url}  , Provided`);
                }
                break;
            case "PUT":
                try {
                    (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].methods.put.middlewares, req, res);
                }
                catch (err) {
                    (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error PUT Didn,t avialable for path : ${req.url}  , Provided`);
                }
                break;
            case "PATCH":
                try {
                    (0, CryptoLiteMiddleFlow_1.CryptoLiteMiddleFlow)(routes[req.url].methods.patch.middlewares, req, res);
                }
                catch (err) {
                    (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${req.url}  , Provided`);
                }
        }
    }
};
exports.CryptoLiteBaseRouter = CryptoLiteBaseRouter;
//# sourceMappingURL=CryptoLiteBaseRouter.js.map