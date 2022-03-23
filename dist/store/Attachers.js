"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachers = void 0;
/**
 * Attachers for other libraries or frameworks
 */
class Attachers {
    /**
     * A state manager attachement for React
     * @param setState
     * @param propertiesToAttach
     * @param storeProperties
     */
    static React(setState, propertiesToAttach, storeProperties) {
        const obj = {};
        for (let localStateKey in propertiesToAttach) {
            obj[localStateKey] = storeProperties[propertiesToAttach[localStateKey]];
        }
        setState(obj);
    }
}
exports.Attachers = Attachers;
//# sourceMappingURL=Attachers.js.map