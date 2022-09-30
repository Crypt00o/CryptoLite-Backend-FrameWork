"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteBasicRouter = void 0;
const CryptoLiteErrorLogger_1 = require("./CryptoLiteErrorLogger");
const CryptoLiteBasicRouter = (paths, req, res) => {
    for (let i = 0; i < paths.length; i++) {
        if (req.url == paths[i].path) {
            switch (req.method) {
                case "GET":
                    try {
                        paths[i].methods.get.handle(req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error GET Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "POST":
                    try {
                        paths[i].methods.post.handle(req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error POST Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "DELETE":
                    try {
                        paths[i].methods.delete.handle(req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error DELETE Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "PUT":
                    try {
                        paths[i].methods.put.handle(req, res);
                    }
                    catch (err) {
                        (0, CryptoLiteErrorLogger_1.CryptoLiteErrorLogger)(req, res, `Error PUT Didn,t avialable for path : ${paths[i].path}  , Provided`);
                    }
                    break;
                case "PATCH":
                    try {
                        paths[i].methods.patch.handle(req, res);
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