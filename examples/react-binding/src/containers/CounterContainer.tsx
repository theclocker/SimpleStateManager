import * as React from 'react';
import {Controls} from "components/Controls";
import {Counter} from "components/Counter";

interface CounterContainerState {
    showCounter1: boolean;
    showCounter2: boolean;
}

export class CounterContainer extends React.Component<{}, CounterContainerState> {

    public state = {
        showCounter1: true,
        showCounter2: true
    };

    toggleCounter1() {
        this.setState({
            showCounter1: !this.state.showCounter1
        });
    }

    toggleCounter2() {
        this.setState({
            showCounter2: !this.state.showCounter2
        });
    }

    render() {
        return (
            <>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            {this.state.showCounter1 && <Counter/>}
                            <br/>
                            {this.state.showCounter2 && <Counter/>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Controls/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="mt-3 btn btn-primary mr-2" onClick={this.toggleCounter1.bind(this)}>
                                Toggle counter 1
                            </button>
                            <button className="mt-3 btn btn-primary ml-2" onClick={this.toggleCounter2.bind(this)}>
                                Toggle counter 2
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}