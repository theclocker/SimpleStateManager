import { StoreFactory } from './store/StoreFactory';

export namespace StoreBox {
    export const storeFactories: {[store: string]: StoreFactory} = {};
}

export function store(name: string): StoreFactory {
    if (!StoreBox.storeFactories.hasOwnProperty(name)) {
        StoreBox.storeFactories[name] = new StoreFactory(name);
    }
    return StoreBox.storeFactories[name];
}
