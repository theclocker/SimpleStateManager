import { StoreFactory } from './src/store/StoreFactory';
import { StoreProperties } from "./src/store/StoreInstance";

let store = new StoreFactory('counter');
console.log(store.getStore());
store.subscribe((value: StoreProperties) => {
    if (store.get('count') < 0) {
        store.set('count', 0);
        return;
    }
    document.querySelector('.count').innerHTML = value.count
});
document.querySelector('.count').innerHTML = store.get('count');