"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoCookie = exports.cryptoLiteCookieSigner = void 0;
const crypto_1 = require("crypto");
const cryptoLiteCookieSigner = function (cryptoLiteCookieValue, cryptoLiteCookieSecret) {
    return cryptoLiteCookieValue
        .concat("#cryptolite#", (0, crypto_1.createHmac)("sha256", cryptoLiteCookieSecret)
        .update(cryptoLiteCookieValue)
        .digest("base64").
        replace(RegExp("\\=+$"), ""));
};
exports.cryptoLiteCookieSigner = cryptoLiteCookieSigner;
const cryptoLiteCookieVerifier = function (cryptoLiteCookieHashed, cryptoLiteCookieSecret) {
    const cryptoLiteCookieValue = cryptoLiteCookieHashed.
        slice(0, cryptoLiteCookieHashed.lastIndexOf('#cryptolite#')), cryptoLiteExpected = Buffer.from((0, exports.cryptoLiteCookieSigner)(cryptoLiteCookieValue, cryptoLiteCookieSecret)), cryptoLiteToExpect = Buffer.from(cryptoLiteCookieHashed);
    if (cryptoLiteExpected.length === cryptoLiteToExpect.length && (0, crypto_1.timingSafeEqual)(cryptoLiteExpected, cryptoLiteToExpect)) {
        return cryptoLiteCookieValue;
    }
    else {
        return false;
    }
};
const cryptoCookie = function (secret) {
    if (!secret) {
        secret = "CryptoLite";
    }
    return function (req, res, next) {
        if (!res.CryptoLite) {
            res.CryptoLite = {};
        }
        if (!res.CryptoLite.secret) {
            res.CryptoLite.secret = secret;
        }
        req.signedCookies = {};
        if (req.headers['cookie']) {
            let cookieUnparsed = req.headers['cookie'].split("; ");
            for (let i = 0; i < cookieUnparsed.length; i++) {
                let cryptoLiteCookieValue = cryptoLiteCookieVerifier((cookieUnparsed[i].substring(cookieUnparsed[i].indexOf("=") + 1)), secret);
                if (cryptoLiteCookieValue) {
                    req.signedCookies[cookieUnparsed[i].slice(0, cookieUnparsed[i].indexOf("="))] = cryptoLiteCookieValue;
                }
            }
        }
        next();
    };
};
exports.cryptoCookie = cryptoCookie;
//# sourceMappingURL=CryptoLiteCookieMiddle.js.map