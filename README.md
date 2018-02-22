## Simple State Manager

#### A simple global state manager written with typescript

A "global" state manager is basically a store based event-emitter, where code
subscribes to either a store or an action defined on the store, a simple example goes as follows:

```typescript
const store = new StoreFactory('counter'); // Where counter is the global store's name
store.set('count', 1);
store.subscribe(properties => {
    console.log(++properties.count); //2
});

store.action('add', properties => {
    store.set('count', ++properties.count);
});

store.do('add');
```

In the example above we begin by creating (or fetching) a new `store`, in case a store called
`counter` was already created elsewhere, `StoreFactory` returns the existing store
with all of its `actions` and `subscriptions` intact, meaning you can centralize all
of your actions in a single or multiple files, and then subscribe and call existing
actions on the store object.

Another example might go as follows, in-case you don't need actions but only need a store,
state, and subscriber:

```typescript
// File #1
const store = new StoreFactory('modal');
store.set('visible', false);
```
```typescript
// File #67
const store = new StoreFactory('modal');
function click() {
    store.set('visible', true);
}
```
```typescript
// File 127
const store = new StoreFactory('modal');
store.subscribe(properties => {
    if (properties.visible) {
        makeVisible();
    } else {
        makeInvisible();
    }
});
```