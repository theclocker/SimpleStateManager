import Instance, {Properties} from "./Instance";
import {InstanceMask} from "./InstanceMask";
import {Attachers} from "./Attachers";

export interface StateAttachments {
    react: (setState: (...args: any[]) => any, propertiesToAttach: {[localStateKey: string]: string}) => any
}

export class Factory extends InstanceMask {

    protected static stores: {[name: string] : Instance} = {};

    get properties(): Properties {
        return this.storeInstance.properties;
    }

    get attach(): StateAttachments {
        return {
            react: this.react.bind(this)
        };
    }

    public constructor(name: string) {
        super();
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0,6);
        if (Factory.stores.hasOwnProperty(name)) {
            this.storeInstance = Factory.stores[name];
            return;
        }
        Factory.stores[name] = new Instance();
        this.storeInstance = Factory.stores[name];
    }

    private react(setState: (...args: any[]) => any, propertiesToAttach: {[localStateKey: string]: string}) {
        Attachers.React(setState, propertiesToAttach, this.properties);
        this.subscribe((properties) => {
            Attachers.React(setState, propertiesToAttach, properties);
        })
    }

    public static exists(name: string) {
        return Factory.stores.hasOwnProperty(name);
    }
}
