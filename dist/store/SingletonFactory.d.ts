import { InstanceMask } from "./InstanceMask";
/**
 * Generates a new store instance or fetches a copy with referenced values
 */
export declare class SingletonFactory {
    /**
     * A holder for the generated stores
     */
    protected static stores: {
        [name: string]: InstanceMask<any>;
    };
    /**
     * Generate a new store or fetch a pre-existing one
     * @param name {string}
     */
    static makeOrGet<T>(name: string): InstanceMask<T>;
    /**
     * Does a store exist?
     * @param name {string}
     */
    static exists(name: string): boolean;
}
