import { Properties } from "./Instance";

/**
 * Attachers for other libraries or frameworks
 */
export class Attachers {
    /**
     * A state manager attachement for React
     * @param setState 
     * @param propertiesToAttach 
     * @param storeProperties 
     */
    public static React(setState: (...args: any[])=>any, propertiesToAttach: {[localStateKey: string]: string}, storeProperties: Properties) {
        const obj: {[k: string]: any} = {};
        for (let localStateKey in propertiesToAttach) {
            obj[localStateKey] = storeProperties[propertiesToAttach[localStateKey]];
        }
        setState(obj);
    }
}
