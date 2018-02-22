export interface StoreProperties {
    [k: string]: any;
}

interface StoreCallback {
    identifier: string;
    func: (() => StoreProperties);
    action?: string;
}

interface StoreActionCallback {
    action: string;
    func: ((...args: any[]) => StoreProperties);
}

export default class StoreInstance {

    private _properties: StoreProperties = {};

    protected callbacks: StoreCallback[] = [];

    protected _actions: StoreActionCallback[] = [];

    public get properties(): StoreProperties {
        return JSON.parse(JSON.stringify(this._properties));
    }

    public subscribe(identifier: string, callback: (value: StoreProperties) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: ()=> callback(this.properties),
        });
    }

    public addAction(name: string, callback: (value: StoreProperties) => any) {
        this.actions.push({
            action: name,
            func: () => callback(this.properties)
        });
    }

    public wipeCallbacks(identifier: string) {
        console.log(identifier);
        this.callbacks = this.callbacks.filter(callback => {
            return callback.identifier !== identifier;
        });
        console.log(this.callbacks);
    }

    public set(key: string, value: any) {
        this._properties[key] = value;
        this.notifyAll();
    }

    public get(key: string): any {
        return this._properties[key];
    }

    get actions() {
        return this._actions;
    }

    public do(action: string) {
        this.notifyActions(action);
    }

    protected notifyActions(action: string) {
        this.actions.map((callback: StoreActionCallback) => {
            if (callback.action === action) {
                callback.func();
            }
        });
    }

    protected notifyAll() {
        this.callbacks.map((callback: StoreCallback) => {
            callback.func();
        });
    }
}