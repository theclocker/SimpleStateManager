import Instance from "./Instance";
import {InstanceMask} from "./InstanceMask";

export class SingletonFactory<T> {

    protected static stores: {[name: string] : InstanceMask} = {};

    public static makeOrGet(name: string): InstanceMask {
        if (SingletonFactory.stores.hasOwnProperty(name)) {
            const instance = SingletonFactory.stores[name];
            const copy = new (instance.constructor as { new (): InstanceMask })();
            Object.assign(copy, instance);
            copy.generateIdentifier();
            return copy;
        }
        const instance = new Instance();
        SingletonFactory.stores[name] = new InstanceMask(instance);
        return SingletonFactory.stores[name];
    }

    public static exists(name: string) {
        return SingletonFactory.stores.hasOwnProperty(name);
    }
}
