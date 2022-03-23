import { Properties } from "./Instance";
/**
 * Attachers for other libraries or frameworks
 */
export declare class Attachers {
    /**
     * A state manager attachement for React
     * @param setState
     * @param propertiesToAttach
     * @param storeProperties
     */
    static React(setState: (...args: any[]) => any, propertiesToAttach: {
        [localStateKey: string]: string;
    }, storeProperties: Properties): void;
}
