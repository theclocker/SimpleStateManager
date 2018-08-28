import * as React from "react";
import * as ReactDOM from "react-dom";
import {CounterContainer} from "app/containers/CounterContainer";
import './index.scss';

ReactDOM.render(
    <CounterContainer/>,
    document.getElementById("app")
);