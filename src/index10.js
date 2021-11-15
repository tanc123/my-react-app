//核心概念 9. 表单
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberOfGuests:2
        };
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.name==='isGoing'?target.checked:target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
        console.log(this.state.numberOfGuests,this.state.isGoing)
    }
    render(){
        return(
            <form>
                <label>
                    参与：
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数：
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
ReactDOM.render(
    <Reservation/>,
    document.getElementById('root')
);