import { StoreFactory } from './src/store/StoreFactory';
import { StoreProperties } from "./src/store/StoreInstance";

let store = new StoreFactory('counter');
store.subscribe((value: StoreProperties) => {
    document.querySelector('.count').innerHTML = value.count;
});

store.action('add', properties => {
    store.set('count', ++properties.count);
});

document.getElementById('add').onclick = () => store.do('add');
document.querySelector('.count').innerHTML = store.get('count');