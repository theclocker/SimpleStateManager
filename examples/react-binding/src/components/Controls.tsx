import * as React from 'react';
import {store as counter, Actions} from "app/stores/counter";

export const Controls = () => (
    <div className='btn-group'>
        <button
            className='btn btn-primary'
            onClick={() => counter.do(Actions.Add)}>
                Add
        </button>
        <button
            className='btn btn-warning'
            onClick={() => counter.do(Actions.Subtract)}>
                Subtract
        </button>
    </div>
);