import { SingletonFactory } from './store/SingletonFactory';
import { InstanceMask } from "./store/InstanceMask";

export function store(name: string): InstanceMask {
    return SingletonFactory.makeOrGet(name);
}
