import { InstanceMask } from "./store/InstanceMask";
/**
 * A syntactic sugar function for create / calling a store
 * @param name string
 */
export declare function store<T>(name: string): InstanceMask<T>;
export { InstanceMask };
