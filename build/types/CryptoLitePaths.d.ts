export declare type CryptoLitePath = {
    path: string;
    methods: {
        get?: {
            handle?: Function;
            middlewares?: [];
        };
        post?: {
            handle?: Function;
            middlewares?: [];
        };
        delete?: {
            handle?: Function;
            middlewares?: [];
        };
        put?: {
            handle?: Function;
            middlewares?: [];
        };
        patch?: {
            handle?: Function;
            middlewares?: [];
        };
    };
};
export declare type CryptoLitePathChecker = {
    found: boolean;
    index: number;
};
