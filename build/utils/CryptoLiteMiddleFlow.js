"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteMiddleFlow = void 0;
const CryptoLiteMiddleFlow = (middlewares, req, res) => {
    let i = -1;
    let middleFlow = () => {
        i++;
        if (middlewares.length > i) {
            middlewares[i](req, res, middleFlow);
        }
    };
    middleFlow();
};
exports.CryptoLiteMiddleFlow = CryptoLiteMiddleFlow;
//# sourceMappingURL=CryptoLiteMiddleFlow.js.map