"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteResponse = void 0;
const CryptoLiteResponse = (res) => {
    res.setStatus = (code) => {
        if (typeof code === "number" && !isNaN(code) && code > 0 && code < 600) {
            res.status = code;
        }
        return res;
    };
    res.writeHtml = (data) => {
        if (!res.status) {
            res.setStatus(200);
        }
        res.writeHead(res.status, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    };
    res.writeJson = (data) => {
        if (!res.status) {
            res.setStatus(200);
        }
        res.writeHead(res.status, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
    };
};
exports.CryptoLiteResponse = CryptoLiteResponse;
//# sourceMappingURL=CryptoLiteResponse.js.map