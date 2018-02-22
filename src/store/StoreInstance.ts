export interface StoreProperties {
    [k: string]: any;
}

interface StoreCallback {
    identifier: string;
    func: ((...args: any[]) => StoreProperties);
    action?: string;
}

export default class StoreInstance {

    private _properties: StoreProperties = {};

    protected callbacks: StoreCallback[] = [];

    get properties(): StoreProperties {
        return JSON.parse(JSON.stringify(this._properties));
    }

    public subscribe(identifier: string, callback: (value: StoreProperties) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: ()=> callback(this.properties),
        });
    }

    public addAction(identifier: string, name: string, callback: (value: StoreProperties) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: () => callback(this.properties),
            action: name
        });
    }

    public wipeCallbacks(identifier: string) {
        this.callbacks = this.callbacks.filter(callback => {
            return callback.identifier !== identifier;
        });
    }

    public wipeAction(identifier: string, action: string) {
        this.callbacks = this.callbacks.filter(callback => {
            return !(callback.identifier === identifier && callback.action === action);
        });
    }

    public set(key: string, value: any, quiet: boolean) {
        this._properties[key] = value;
        if (!quiet) {
            this.notifyAll();
        }
    }

    public get(key: string): any {
        return this._properties[key];
    }

    get actions() {
        return this.callbacks.filter(callback => callback.action);
    }

    public do(action: string) {
        this.notifyActions(action);
    }

    protected notifyActions(action: string) {
        this.callbacks.map((callback: StoreCallback) => {
            if (callback.action === action) {
                callback.func();
            }
        });
    }

    protected notifyAll() {
        this.callbacks.map((callback: StoreCallback) => {
            if (!callback.action) {
                callback.func();
            }
        });
    }
}