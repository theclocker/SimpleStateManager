"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceMask = exports.store = void 0;
const SingletonFactory_1 = require("./store/SingletonFactory");
const InstanceMask_1 = require("./store/InstanceMask");
Object.defineProperty(exports, "InstanceMask", { enumerable: true, get: function () { return InstanceMask_1.InstanceMask; } });
/**
 * A syntactic sugar function for create / calling a store
 * @param name string
 */
function store(name) {
    return SingletonFactory_1.SingletonFactory.makeOrGet(name);
}
exports.store = store;
//# sourceMappingURL=SimpleStoreManager.js.map