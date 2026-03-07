import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Brand {
    about: string;
    tagline: string;
    name: string;
}
export interface backendInterface {
    addUpdateBrand(name: string, tagline: string, about: string): Promise<void>;
    getBrand(): Promise<Brand>;
}
