import { StoreFactory } from './src/store/StoreFactory';
import { StoreProperties } from "./src/store/StoreInstance";

let store = new StoreFactory('counter');
store.subscribe((value: StoreProperties) => {
    if (store.get('count') > 4) {
        store.unsubscribe();
    }
    console.log(value);
    document.querySelector('.count').innerHTML = value.count
});

store.action('add', (value) => {
    store.set('count', store.get('count') + 1);
    console.log(value);
});

document.querySelector('.count').innerHTML = store.get('count');