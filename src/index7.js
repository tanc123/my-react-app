import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import { timingSafeEqual } from 'crypto';
class Content extends React.Component{
   render(){
    return <div>
        <button onClick={this.props.updateStateProp}>点我</button>
        <h4>{this.props.myDataProp}</h4>
    </div>
   }
}

class HelloMessage  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value:"Hello Runoob" };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value:'菜鸟教程'});
    }

    render() {
        var value=this.state.value;
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
