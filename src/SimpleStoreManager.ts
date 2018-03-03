import { SingletonFactory } from './store/SingletonFactory';
import { InstanceMask } from "./store/InstanceMask";

export function store<T>(name: string): InstanceMask<T> {
    return SingletonFactory.makeOrGet<T>(name);
}

export { InstanceMask };
