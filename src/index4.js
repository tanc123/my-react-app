import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import { timingSafeEqual } from 'crypto';

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Hello Runoob!' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <h4>{value}</h4>
        </div>;
    }
}
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);
serviceWorker.unregister();
