"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instance {
    constructor() {
        this._properties = {};
        this.callbacks = [];
    }
    get properties() {
        return Object.assign({}, this._properties);
    }
    subscribe(identifier, callback) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
        });
    }
    addAction(identifier, name, callback) {
        this.callbacks.push({
            identifier: identifier,
            func: callback,
            action: name
        });
    }
    wipeCallbacks(identifier) {
        this.callbacks = this.callbacks.filter(callback => {
            return !(callback.identifier === identifier);
        });
    }
    wipeAction(identifier, action) {
        this.callbacks = this.callbacks.filter(callback => {
            return !(callback.identifier === identifier && callback.action === action);
        });
    }
    set(key, value, quiet) {
        this._properties[key] = value;
        if (!quiet) {
            this.notifyAll();
        }
    }
    get(key) {
        return this._properties[key];
    }
    setBulk(properties, quiet) {
        this._properties = Object.assign(this._properties, properties);
        if (!quiet) {
            this.notifyAll();
        }
    }
    do(action, ...args) {
        this.notifyActions(action, ...args);
    }
    notifyActions(action, ...args) {
        this.callbacks.map((callback) => {
            if (callback.action === action) {
                callback.func(this.properties, ...args);
                return;
            }
        });
    }
    notifyAll() {
        this.callbacks.map((callback) => {
            if (callback.action === undefined) {
                callback.func(this.properties);
            }
        });
    }
}
exports.default = Instance;
//# sourceMappingURL=Instance.js.map