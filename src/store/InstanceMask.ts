import Instance, {Properties} from "./Instance";
import {Attachers} from "./Attachers";

export interface StateAttachments {
    react: (setState: (...args: any[]) => any, propertiesToAttach: {[localStateKey: string]: string}) => any
}

export class InstanceMask {

    private _storeInstance: Instance;

    protected identifier: string;

    constructor(storeInstance: Instance) {
        this.generateIdentifier();
        this.storeInstance = storeInstance;
    }

    public generateIdentifier() {
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0,6);
    }

    get attach(): StateAttachments {
        return {
            react: this.react.bind(this)
        };
    }

    private react(setState: (...args: any[]) => any, propertiesToAttach: {[localStateKey: string]: string}) {
        Attachers.React(setState, propertiesToAttach, this.properties);
        this.subscribe((properties) => {
            Attachers.React(setState, propertiesToAttach, properties);
        })
    }

    get properties(): Properties {
        return this.storeInstance.properties;
    }

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
        this.storeInstance.set(key, value, quiet);
    }

    public bulk(properties: {[k: string]: any}, quiet: boolean = false) {
        this.storeInstance.setBulk(properties, quiet);
    }

    public get(key: string): any {
        return this.storeInstance.get(key);
    }

    public action(name: string | number, callback: (value?: Properties, ...args: any[]) => any) {
        this.storeInstance.addAction(this.identifier, name, callback);
    }

    public do(action: string | number, ...args: any[]) {
        this.storeInstance.do(action, ...args);
    }
}