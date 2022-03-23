export interface Properties {
    [k: string]: any;
}
export interface StoreCallback<T> {
    identifier: string;
    func: ((...args: any[]) => Properties);
    action?: string | T;
}
export default class Instance<T> {
    private _properties;
    protected callbacks: Array<StoreCallback<T>>;
    get properties(): Properties;
    subscribe(identifier: string, callback: (value: Properties, ...args: any[]) => any): void;
    addAction(identifier: string, name: string | T, callback: (value: Properties, ...args: any[]) => any): void;
    wipeCallbacks(identifier: string): void;
    wipeAction(identifier: string, action: string): void;
    set(key: string, value: any, quiet: boolean): void;
    get(key: string): any;
    setBulk(properties: {
        [k: string]: any;
    }, quiet: boolean): void;
    do(action: string | T, ...args: any[]): void;
    protected notifyActions(action: string | T, ...args: any[]): void;
    protected notifyAll(): void;
}
