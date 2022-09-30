"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlParser = void 0;
const queryParser = (url) => {
    let queryString = url.split('?')[1];
    let query = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        let arr = queryString.split('&');
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i].split('=');
            let paramName = a[0];
            let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string')
                paramValue = paramValue.toLowerCase();
            if (paramName.match(/\[(\d+)?\]$/)) {
                let key = paramName.replace(/\[(\d+)?\]/, '');
                if (!query[key])
                    query[key] = [];
                if (paramName.match(/\[\d+\]$/)) {
                    let index = /\[(\d+)\]/.exec(paramName)[1];
                    query[key][index] = paramValue;
                }
                else {
                    query[key].push(paramValue);
                }
            }
            else {
                if (!query[paramName]) {
                    query[paramName] = paramValue;
                }
                else if (query[paramName] && typeof query[paramName] === 'string') {
                    query[paramName] = [query[paramName]];
                    query[paramName].push(paramValue);
                }
                else {
                    query[paramName].push(paramValue);
                }
            }
        }
    }
    return query;
};
const paramsParser = (url) => {
    const results = url.match(/\?(:<query>.*)/);
    if (!results) {
        return {};
    }
    const { groups: { query } } = results;
    const pairs = query.match(/(:<param>\w+)=(?<value>\w+)/g);
    if (!pairs) {
        return {};
    }
    const params = pairs.reduce((acc, curr) => {
        const [key, value] = curr.split(("="));
        acc[key] = value;
        return acc;
    }, {});
    return params;
};
const UrlParser = (req) => {
    const url = decodeURI(req.url);
    req.query = queryParser(url);
    req.params = paramsParser(url);
    console.log(req);
};
exports.UrlParser = UrlParser;
//# sourceMappingURL=CryptoLiteUrlParser.js.map