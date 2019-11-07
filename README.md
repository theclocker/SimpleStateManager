## Simple State Manager

#### A simple global state manager written with typescript

A "global" state manager is basically a store based event-emitter, where code
subscribes to either a store or an action defined on the store, a simple example goes as follows:

```typescript
const counter = store('counter'); // Where counter is the global store's name
counter.set('count', 1);
counter.subscribe(properties => {
    console.log(properties.count); //6
});

// after the mandatory properties argument you can add as many arguments as needed
counter.action('add', (properties, incrementation) => {
    counter.set('count', properties.count + incrementation);
});

counter.do('add', 5);
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
const modal = store('modal');
modal.set('visible', false);
```
```typescript
// File #67
const modal = store('modal');
function click() {
    modal.set('visible', true);
}
```
```typescript
// File #127
const modal = store('modal');
modal.subscribe(properties => {
    if (properties.visible) {
        makeVisible();
    } else {
        makeInvisible();
    }
});
```

### React binding
```javascript
import { Component } from 'react';

export default class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.counterStore = store('counter');
    }

    componentDidMount() {
        this.counterStore.attach.react(this.setState.bind(this), {
            count: 'count' // Will attach the local count state to the global
        });
    }
    
    componentWillUnmount() {
        this.counterStore.unsubscribe();
    }

    render() {
        return this.state.count;
    }
}
```

## Planned features:
- [x] Simple attachment to React state
- [x] Actions with arguments
- [x] Set bulk with an object
- [x] Unsubscribe from store instance
- [x] Unsubscribe an attachment
- [ ] ?
- [ ] Some more slamming features