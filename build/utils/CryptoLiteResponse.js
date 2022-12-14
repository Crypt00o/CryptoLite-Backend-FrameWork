"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteResponse = void 0;
const CryptoLiteCookieMiddle_1 = require("./CryptoLiteCookieMiddle");
const CryptoLiteResponse = (res) => {
    res.setHeader("x-powered-by", "CryptoLite.js");
    res.CryptoLite = {};
    res.setCookie = function (CryptoLiteCookieName, CryptoLiteCookieValue, options) {
        if (!this.CryptoLite) {
            this.CryptoLite = {};
        }
        if (!this.CryptoLite.cookies) {
            this.CryptoLite.cookies = [];
        }
        if (!this.CryptoLite.secret) {
            this.CryptoLite.secret = "CryptoLite";
        }
        let CryptoLiteCookie = CryptoLiteCookieName.concat("=", CryptoLiteCookieValue);
        if (options) {
            if (options.hasOwnProperty("signed")) {
                if (options.signed) {
                    CryptoLiteCookie = CryptoLiteCookieName.concat("=", (0, CryptoLiteCookieMiddle_1.cryptoLiteCookieSigner)(CryptoLiteCookieValue, this.CryptoLite.secret));
                }
            }
            if (options.hasOwnProperty("httpOnly")) {
                if (options.httpOnly) {
                    CryptoLiteCookie = CryptoLiteCookie.concat(";HttpOnly");
                }
            }
            if (options.hasOwnProperty("secure")) {
                if (options.secure) {
                    CryptoLiteCookie = CryptoLiteCookie.concat(";Secure");
                }
            }
            if (options.hasOwnProperty("expires")) {
                CryptoLiteCookie = CryptoLiteCookie.concat(";expires=", new Date((options.expires)).toUTCString());
            }
            if (options.hasOwnProperty("sameSite")) {
                if (options.sameSite) {
                    CryptoLiteCookie = CryptoLiteCookie.concat(";SameSite=", options.sameSite);
                }
            }
            if (options.hasOwnProperty("path")) {
                if (options.path) {
                    CryptoLiteCookie = CryptoLiteCookie.concat(";Path=", options.path);
                }
            }
        }
        this.CryptoLite.cookies.push(CryptoLiteCookie);
        this.setHeader('Set-Cookie', this.CryptoLite.cookies);
        return this;
    };
    res.deleteCookie = function (CryptoLiteCookieName) {
        this.setCookie(CryptoLiteCookieName, "", { expires: Date.now() - 1000 });
        return this;
    };
    res.setStatus = function (code) {
        if (typeof code === "number" && !isNaN(code) && code > 0 && code < 600) {
            res.statusCode = code;
        }
        return this;
    };
    res.writeHtml = function (data) {
        if (!this.statusCode) {
            this.setStatus(200);
        }
        this.writeHead(res.statusCode, { "Content-Type": "text/html" });
        this.write(data);
        this.end();
    };
    res.writeJson = (data) => {
        if (!res.statusCode) {
            res.setStatus(200);
        }
        res.writeHead(res.statusCode, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
    };
};
exports.CryptoLiteResponse = CryptoLiteResponse;
//# sourceMappingURL=CryptoLiteResponse.js.map