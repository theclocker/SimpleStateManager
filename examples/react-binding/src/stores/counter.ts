import { store } from 'simplestatemanager';

export enum Actions {
    Add,
    Subtract
}

interface ICounter {
    count: number
}

const counter = store<Actions>('counter');
counter.bulk(<ICounter>{
    count: 0
});

counter.action(Actions.Add, (properties: any, incrementation: number = 1) => {
    counter.set('count', properties.count + incrementation);
});

counter.action(Actions.Subtract, (properties: any) => {
    if (properties.count > 0) {
        counter.set('count', properties.count - 1);
    }
});

export { counter as store };