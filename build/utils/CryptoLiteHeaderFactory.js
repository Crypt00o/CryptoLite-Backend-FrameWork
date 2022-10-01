const CryptoLiteHeaderFactory = (res) => {
    if (res.CryptoLite.cookies && res.CryptoLite.cookies.length > 0) {
        res.setHeader('Set-Cookie', res.CryptoLite.cookies);
    }
};
//# sourceMappingURL=CryptoLiteHeaderFactory.js.map