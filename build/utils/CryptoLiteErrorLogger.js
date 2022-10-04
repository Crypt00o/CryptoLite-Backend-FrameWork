"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteErrorLogger = void 0;
const CryptoLiteErrorLogger = function (_, res, err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.write(err);
    res.end();
};
exports.CryptoLiteErrorLogger = CryptoLiteErrorLogger;
//# sourceMappingURL=CryptoLiteErrorLogger.js.map