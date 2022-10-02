export declare const cryptoLiteCookieSigner: (cryptoLiteCookieValue: string, cryptoLiteCookieSecret: string) => string;
export declare const cryptoCookie: (secret?: string) => (req: any, res: any, next: Function) => void;
