export interface Properties {
    [k: string]: any;
}

export interface StoreCallback {
    identifier: string;
    func: ((...args: any[]) => Properties);
    action?: string;
}

export default class Instance {

    private _properties: Properties = {};

    protected callbacks: StoreCallback[] = [];

    get properties(): Properties {
        return Object.assign({}, this._properties);
    }

    public subscribe(identifier: string, callback: (value: Properties, ...args: any[]) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
        });
    }

    public addAction(identifier: string, name: string, callback: (value: Properties, ...args: any[]) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
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

    public do(action: string, ...args: any[]) {
        this.notifyActions(action, ...args);
    }

    protected notifyActions(action: string, ...args: any[]) {
        this.callbacks.map((callback: StoreCallback) => {
            if (callback.action === action) {
                callback.func(this.properties, ...args);
                return;
            }
        });
    }

    protected notifyAll() {
        this.callbacks.map((callback: StoreCallback) => {
            if (!callback.action) {
                callback.func(this.properties);
            }
        });
    }
}