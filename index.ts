import { store } from './src/SimpleStoreManager';
export { store };
/*
const counter = store('counter');
const counter2 = store('counter');
counter.set('count', 0);
counter.subscribe( properties => {
    console.log(counter);
    document.querySelector('.count').innerHTML = properties.count;
});

counter2.subscribe(() => {
    console.log(counter2);
});

counter.action( 'add', properties => {
    counter.set('count', ++properties.count);
});

document.getElementById('subtract').onclick = () => counter.set('count', counter.get('count') - 1, false);
document.getElementById('add').onclick = () => counter.do('add');
document.getElementById('unsubscribe').onclick = () => counter2.unsubscribe();

document.querySelector('.count').innerHTML = counter.get('count');*/
