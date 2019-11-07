import { SingletonFactory } from './store/SingletonFactory';
import { InstanceMask } from "./store/InstanceMask";

/**
 * A syntactic sugar function for create / calling a store
 * @param name string
 */
export function store<T>(name: string): InstanceMask<T> {
    return SingletonFactory.makeOrGet<T>(name);
}

export { InstanceMask };
