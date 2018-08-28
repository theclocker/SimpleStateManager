import * as React from 'react';
import { store } from 'simplestatemanager';

interface State {
    count: number
}

export class Counter extends React.Component<{}, State> {

    private counterStore: any = store('counter');

    public state: State = {
        count: 0
    };

    componentDidMount() {
        this.counterStore.attach.react(this.setState.bind(this), {
            count: 'count'
        });
    }
    
    componentWillUnmount() {
        this.counterStore.unsubscribe();
    }

    render() {
        return this.state.count;
    }
}
