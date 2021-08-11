import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import { timingSafeEqual } from 'crypto';

class Content extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>{this.props.myDataProp}</h4>
        </div>;
    }
}
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
            <Content myDataProp={value} updateStateProp={this.handleChange}></Content>
        </div>;
    }
}
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);
serviceWorker.unregister();
