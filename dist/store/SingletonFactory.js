"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonFactory = void 0;
const Instance_1 = require("./Instance");
const InstanceMask_1 = require("./InstanceMask");
/**
 * Generates a new store instance or fetches a copy with referenced values
 */
class SingletonFactory {
    /**
     * Generate a new store or fetch a pre-existing one
     * @param name {string}
     */
    static makeOrGet(name) {
        if (SingletonFactory.stores.hasOwnProperty(name)) {
            const instance = SingletonFactory.stores[name];
            const copy = new instance.constructor();
            Object.assign(copy, instance);
            copy.generateIdentifier();
            return copy;
        }
        const instance = new Instance_1.default();
        SingletonFactory.stores[name] = new InstanceMask_1.InstanceMask(instance);
        return SingletonFactory.stores[name];
    }
    /**
     * Does a store exist?
     * @param name {string}
     */
    static exists(name) {
        return SingletonFactory.stores.hasOwnProperty(name);
    }
}
exports.SingletonFactory = SingletonFactory;
/**
 * A holder for the generated stores
 */
SingletonFactory.stores = {};
//# sourceMappingURL=SingletonFactory.js.map