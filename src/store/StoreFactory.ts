import StoreInstance, {StoreProperties} from "./StoreInstance";

export class StoreFactory {

    private identifier: string;

    private storeInstance: StoreInstance;

    protected static stores: {[name: string] : StoreInstance} = {};

    get actions() {
        return this.storeInstance.actions;
    }

    public constructor(name: string) {
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0,6);
        console.log(this.identifier);
        if (StoreFactory.stores.hasOwnProperty(name)) {
            this.storeInstance = StoreFactory.stores[name];
            return;
        }
        StoreFactory.stores[name] = new StoreInstance();
        this.storeInstance = StoreFactory.stores[name];
    }

    public subscribe(callback: (value: StoreProperties) => any) {
        return this.storeInstance.subscribe(this.identifier, callback);
    }

    public unsubscribe() {
        this.storeInstance.wipeCallbacks(this.identifier);
    }

    public set(key: string, value: any) {
        return this.storeInstance.set(key, value);
    }

    public get(key: string): any {
        return this.storeInstance.get(key);
    }

    public action(name: string, callback: (value: StoreProperties) => any) {
        this.storeInstance.addAction(name, callback);
    }

    public do(action: string) {
        this.storeInstance.do(action);
    }

    public getStore(): StoreProperties {
        return this.storeInstance.properties;
    }

}

let store = new StoreFactory('counter');
console.log(store);
store.set('count', 0);
store.subscribe(value => {
    if (store.get('count') < 0) {
        store.set('count', 0);
        return;
    }
    document.querySelector('.count').innerHTML = value.count
});
document.querySelector('.count').innerHTML = store.get('count');
document.getElementById('add').onclick = () => store.do('add');
document.getElementById('subtract').onclick = () => store.set('count', store.get('count') - 1);
