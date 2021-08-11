import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//import { timingSafeEqual } from 'crypto';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 0 };
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!');
    }
    componentDidMount() {
        console.log('Component DID MOUNT!');
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS');
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('example')
)
serviceWorker.unregister();
