import { store } from './src/SimpleStoreManager';
export { store };
//
// const counter = store('counter');
// counter.subscribe( properties => {
//     document.querySelector('.count').innerHTML = properties.count;
// });
//
// counter.action( 'add', properties => {
//     counter.set('count', ++properties.count);
// });
//
// document.getElementById('add').onclick = () => counter.do('add');
// document.querySelector('.count').innerHTML = counter.get('count');