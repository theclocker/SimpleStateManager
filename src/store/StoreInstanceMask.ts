import StoreInstance, {StoreProperties} from "./StoreInstance";

export abstract class StoreInstanceMask {

    private _storeInstance: StoreInstance;

    protected identifier: string;

    protected set storeInstance(instance: StoreInstance) {
        this._storeInstance = instance;
    }

    protected get storeInstance(): StoreInstance {
        return this._storeInstance;
    }

    public subscribe(callback: (value: StoreProperties) => any) {
        return this.storeInstance.subscribe(this.identifier, callback);
    }

    public unsubscribe() {
        this.storeInstance.wipeCallbacks(this.identifier);
    }

    public forget(action: string) {
        this.storeInstance.wipeAction(this.identifier, action);
    }

    public set(key: string, value: any, quiet: boolean = false) {
        return this.storeInstance.set(key, value, quiet);
    }

    public get(key: string): any {
        return this.storeInstance.get(key);
    }

    public action(name: string, callback: (value?: StoreProperties, ...args: any[]) => any) {
        this.storeInstance.addAction(this.identifier, name, callback);
    }

    public do(action: string, ...args: any[]) {
        this.storeInstance.do(action, ...args);
    }
}