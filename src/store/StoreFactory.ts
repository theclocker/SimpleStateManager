import StoreInstance, {StoreProperties} from "./StoreInstance";
import {StoreInstanceMask} from "./StoreInstanceMask";


export class StoreFactory extends StoreInstanceMask {

    protected static stores: {[name: string] : StoreInstance} = {};

    get properties(): StoreProperties {
        return this.storeInstance.properties;
    }

    public constructor(name: string) {
        super();
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0,6);
        if (StoreFactory.stores.hasOwnProperty(name)) {
            this.storeInstance = StoreFactory.stores[name];
            return;
        }
        StoreFactory.stores[name] = new StoreInstance();
        this.storeInstance = StoreFactory.stores[name];
    }

    public static exists(name: string) {
        return StoreFactory.stores.hasOwnProperty(name);
    }
}
