export interface StoreProperties {
    [k: string]: any;
}

export default class StoreInstance {

    private _properties: StoreProperties = {};
    protected callbacks: (() => StoreProperties)[] = [];

    public get properties(): StoreProperties {
        return JSON.parse(JSON.stringify(this._properties));
    }

    public subscribe(callback: (value: StoreProperties) => any) {
        this.callbacks.push(() => callback(this.properties));
    }

    public set(key: string, value: any) {
        this._properties[key] = value;
        this.notify();
    }

    public get(key: string): any {
        return this._properties[key];
    }

    protected notify() {
        this.callbacks.map(callback => {
            callback();
        })
    }

}