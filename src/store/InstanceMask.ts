import Instance, {Properties} from "./Instance";

export abstract class InstanceMask {

    private _storeInstance: Instance;

    protected identifier: string;

    protected set storeInstance(instance: Instance) {
        this._storeInstance = instance;
    }

    protected get storeInstance(): Instance {
        return this._storeInstance;
    }

    public subscribe(callback: (value: Properties) => any) {
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

    public action(name: string, callback: (value?: Properties, ...args: any[]) => any) {
        this.storeInstance.addAction(this.identifier, name, callback);
    }

    public do(action: string, ...args: any[]) {
        this.storeInstance.do(action, ...args);
    }
}