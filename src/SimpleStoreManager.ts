import { Factory } from './store/Factory';

export namespace StoreBox {
    export const storeFactories: {[store: string]: Factory} = {};
}

export function store(name: string): Factory {
    if (!StoreBox.storeFactories.hasOwnProperty(name)) {
        StoreBox.storeFactories[name] = new Factory(name);
    }
    return StoreBox.storeFactories[name];
}
