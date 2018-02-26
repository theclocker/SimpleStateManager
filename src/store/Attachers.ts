import { Properties } from "./Instance";

export class Attachers {
    public static React(setState: (...args: any[])=>any, propertiesToAttach: {[localStateKey: string]: string}, storeProperties: Properties) {
        const obj: {[k: string]: any} = {};
        for (let localStateKey in propertiesToAttach) {
            obj[localStateKey] = storeProperties[propertiesToAttach[localStateKey]];
        }
        setState(obj);
    }
}