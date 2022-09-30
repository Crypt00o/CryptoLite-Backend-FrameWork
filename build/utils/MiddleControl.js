"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoLiteMiddleControl = void 0;
const CryptoLiteMiddleControl = (middlewares, req, res) => {
    let i = -1;
    let middleControl = () => {
        i++;
        if (middlewares.length > i) {
            middlewares[i](req, res, middleControl);
        }
    };
    middleControl();
};
exports.CryptoLiteMiddleControl = CryptoLiteMiddleControl;
//# sourceMappingURL=MiddleControl.js.map