import Instance from "./Instance";
import {InstanceMask} from "./InstanceMask";

/**
 * Generates a new store instance or fetches a copy with referenced values
 */
export class SingletonFactory {

    /**
     * A holder for the generated stores
     */
    protected static stores: {[name: string] : InstanceMask<any>} = {};

    /**
     * Generate a new store or fetch a pre-existing one
     * @param name {string}
     */
    public static makeOrGet<T>(name: string): InstanceMask<T> {
        if (SingletonFactory.stores.hasOwnProperty(name)) {
            const instance = SingletonFactory.stores[name];
            const copy = new (instance.constructor as { new (): InstanceMask<T> })();
            Object.assign(copy, instance);
            copy.generateIdentifier();
            return copy;
        }
        const instance = new Instance<T>();
        SingletonFactory.stores[name] = new InstanceMask<T>(instance);
        return SingletonFactory.stores[name];
    }

    /**
     * Does a store exist?
     * @param name {string}
     */
    public static exists(name: string) {
        return SingletonFactory.stores.hasOwnProperty(name);
    }
}
