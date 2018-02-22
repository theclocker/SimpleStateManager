import StoreInstance, {StoreProperties} from "./StoreInstance";

export class StoreFactory {

    protected static stores: {[name: string] : StoreInstance} = {};

    private storeInstance: StoreInstance;

    private identifier: string;

    public constructor(name: string) {
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0,6);
        if (StoreFactory.stores.hasOwnProperty(name)) {
            this.storeInstance = StoreFactory.stores[name];
            return;
        }
        StoreFactory.stores[name] = new StoreInstance();
        this.storeInstance = StoreFactory.stores[name];
    }

    public subscribe(callback: (value: StoreProperties) => any) {
        return this.storeInstance.subscribe(callback);
    }

    public set(key: string, value: any) {
        return this.storeInstance.set(key, value);
    }

    public get(key: string): any {
        return this.storeInstance.get(key);
    }

    public getStore(): StoreProperties {
        return this.storeInstance.properties;
    }

}

let store = new StoreFactory('counter');
store.set('count', 0);
document.querySelector('.count').innerHTML = store.get('count');

document.getElementById('add').onclick = () => store.set('count', store.get('count') + 1);
document.getElementById('subtract').onclick = () => store.set('count', store.get('count') - 1);
