export declare type RouteRules = {
    [RoutePath: string]: {
        methods: {
            get?: {
                middlewares: Array<Function>;
            };
            post?: {
                middlewares: Array<Function>;
            };
            patch?: {
                middlewares: Array<Function>;
            };
            put?: {
                middlewares: Array<Function>;
            };
            delete?: {
                middlewares: Array<Function>;
            };
        };
        middlewares: Array<Function>;
    };
};
