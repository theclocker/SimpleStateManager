import { store, StoreBox } from './src/SimpleStoreManager';
export { store, StoreBox };
//
// const counter = store('counter');
// counter.set('count', 0);
// counter.subscribe( properties => {
//     console.log(properties);
//     document.querySelector('.count').innerHTML = properties.count;
// });
//
// counter.action( 'add', properties => {
//     counter.set('count', ++properties.count);
// });
//
// document.getElementById('subtract').onclick = () => counter.set('count', counter.get('count') - 1, false);
// document.getElementById('add').onclick = () => counter.do('add');
//
// document.querySelector('.count').innerHTML = counter.get('count');