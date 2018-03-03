import { store } from './src/SimpleStoreManager';
export { store };

export enum Actions {
    Add
}

const counter = store<Actions>('counter');
const counter2 = store<Actions>('counter');

counter.set('count', 0);
counter.subscribe( properties => {
    console.log(counter);
    document.querySelector('.count').innerHTML = properties.count;
});

counter2.subscribe(() => {
    console.log(counter2);
});

counter.action(Actions.Add, (properties: any) => {
    counter.set('count', ++properties.count);
});

console.log(counter);

document.getElementById('subtract').onclick = () => counter.set('count', counter.get('count') - 1, false);
document.getElementById('add').onclick = () => counter.do(Actions.Add);
document.getElementById('unsubscribe').onclick = () => counter2.unsubscribe();

document.querySelector('.count').innerHTML = counter.get('count');
