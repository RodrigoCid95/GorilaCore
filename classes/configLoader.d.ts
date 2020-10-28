export declare class LoaderConfig {
    private profiles;
    constructor(profiles: {
        [x: string]: any;
    });
    getConfig(nameConfig: string): any;
}
