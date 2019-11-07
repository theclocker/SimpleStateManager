export interface Properties {
    [k: string]: any;
}

export interface StoreCallback<T> {
    identifier: string;
    func: ((...args: any[]) => Properties);
    action?: string | T;
}

export default class Instance<T> {

    private _properties: Properties = {};

    protected callbacks: Array<StoreCallback<T>> = [];

    get properties(): Properties {
        return Object.assign({}, this._properties);
    }

    public subscribe(identifier: string, callback: (value: Properties, ...args: any[]) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
        });
    }

    public addAction(identifier: string, name: string | T, callback: (value: Properties, ...args: any[]) => any) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
            action: name
        });
    }

    public wipeCallbacks(identifier: string) {
        this.callbacks = this.callbacks.filter(callback => {
            return !(callback.identifier === identifier);
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

    public setBulk(properties: {[k: string]: any}, quiet: boolean) {
        this._properties = Object.assign(this._properties, properties);
        if (!quiet) {
            this.notifyAll();
        }
    }

    public do(action: string | T, ...args: any[]): void {
        this.notifyActions(action, ...args);
    }

    protected notifyActions(action: string | T, ...args: any[]): void {
        this.callbacks.map((callback: StoreCallback<T>) => {
            if (callback.action === action) {
                callback.func(this.properties, ...args);
                return;
            }
        });
    }

    protected notifyAll() {
        this.callbacks.map((callback: StoreCallback<T>) => {
            if (callback.action === undefined) {
                callback.func(this.properties);
            }
        });
    }
}