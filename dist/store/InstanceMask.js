"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceMask = void 0;
const Attachers_1 = require("./Attachers");
/**
 * A simpler entry into stores, makes them easier to use
 */
class InstanceMask {
    constructor(storeInstance) {
        this.generateIdentifier();
        this.storeInstance = storeInstance;
    }
    generateIdentifier() {
        this.identifier = Math.random().toString(36).replace('0.', '').substr(0, 6);
    }
    get attach() {
        return {
            react: this.react.bind(this)
        };
    }
    react(setState, propertiesToAttach) {
        Attachers_1.Attachers.React(setState, propertiesToAttach, this.properties);
        this.subscribe((properties) => {
            Attachers_1.Attachers.React(setState, propertiesToAttach, properties);
        });
    }
    get properties() {
        return this.storeInstance.properties;
    }
    subscribe(callback) {
        return this.storeInstance.subscribe(this.identifier, callback);
    }
    unsubscribe() {
        this.storeInstance.wipeCallbacks(this.identifier);
    }
    forget(action) {
        this.storeInstance.wipeAction(this.identifier, action);
    }
    set(key, value, quiet = false) {
        this.storeInstance.set(key, value, quiet);
    }
    bulk(properties, quiet = false) {
        this.storeInstance.setBulk(properties, quiet);
    }
    get(key) {
        return this.storeInstance.get(key);
    }
    action(name, callback) {
        this.storeInstance.addAction(this.identifier, name, callback);
    }
    do(action, ...args) {
        this.storeInstance.do(action, ...args);
    }
    set storeInstance(instance) {
        this._storeInstance = instance;
    }
    get storeInstance() {
        return this._storeInstance;
    }
}
exports.InstanceMask = InstanceMask;
//# sourceMappingURL=InstanceMask.js.map