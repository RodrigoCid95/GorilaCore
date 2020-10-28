import { LibraryManager, Model } from "..";
export interface ModelConstructable<T> {
    new (lm: LibraryManager): T;
}
export declare type ModelInstance = ModelConstructable<Model>;
