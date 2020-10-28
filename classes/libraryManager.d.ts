import { LoaderConfig } from '.';
export declare class LibraryManager {
    private loaderConfig;
    private libraries;
    private librariesInstances;
    constructor(loaderConfig: LoaderConfig, libraries: Libraries);
    build(): Promise<void>;
    getLibrary(name: any): any;
}
export declare class Library {
    private loaderConfig;
    log: (text: string, useLogger?: boolean) => void;
    profile: any;
    constructor(loaderConfig: LoaderConfig);
}
export interface LibraryConstructable<T> {
    new (loaderConfig: LoaderConfig): T;
}
export declare type Libraries = LibraryConstructable<Library>[];
