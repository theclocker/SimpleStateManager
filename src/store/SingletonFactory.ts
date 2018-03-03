import Instance from "./Instance";
import {InstanceMask} from "./InstanceMask";

export class SingletonFactory<T> {

    protected static stores: {[name: string] : InstanceMask<any>} = {};

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

    public static exists(name: string) {
        return SingletonFactory.stores.hasOwnProperty(name);
    }
}
