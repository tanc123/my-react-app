import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import { timingSafeEqual } from 'crypto';


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoing: true, numberOfGuests: 2 };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            }
        )
    }

    render() {
        return (
            <form>
                <label>
                    是否离开：
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    访客数：
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
ReactDOM.render(
    <Reservation />,
    document.getElementById('example')
);
serviceWorker.unregister();
