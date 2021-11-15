//核心概念 11.组合vs继承
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props){
    return (
        <FancyBorder color="blur">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login:''};
    }
    render(){
        return (
            <Dialog title="Mars Exploration Program" message="How shoule we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sing Me UP</button>
            </Dialog>
        );
    }
    handleChange(e){
        this.setState({login:e.target.value});
    }
    handleSignUp(){
        alert(`Welcome aboard,${this.state.login}!`);
    }
}
ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);