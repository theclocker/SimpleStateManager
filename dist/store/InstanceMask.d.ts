import Instance, { Properties } from "./Instance";
/**
 * State attachments interface
 * TODO: Merge with Attachers.ts (?)
 */
export interface StateAttachments {
    react: (setState: (...args: any[]) => any, propertiesToAttach: {
        [localStateKey: string]: string;
    }) => any;
}
/**
 * A simpler entry into stores, makes them easier to use
 */
export declare class InstanceMask<T> {
    private _storeInstance;
    protected identifier: string;
    constructor(storeInstance: Instance<T>);
    generateIdentifier(): void;
    get attach(): StateAttachments;
    private react;
    get properties(): Properties;
    subscribe(callback: (value: Properties) => any): void;
    unsubscribe(): void;
    forget(action: string): void;
    set(key: string, value: any, quiet?: boolean): void;
    bulk(properties: {
        [k: string]: any;
    }, quiet?: boolean): void;
    get(key: string): any;
    action(name: string | T, callback: (value?: Properties, ...args: any[]) => any): void;
    do(action: string | T, ...args: any[]): void;
    protected set storeInstance(instance: Instance<T>);
    protected get storeInstance(): Instance<T>;
}
