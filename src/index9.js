//核心概念 7. 条件渲染
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GusetGreeting(props) {
    return <h1>Please sing up.</h1>
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GusetGreeting />;
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>login</button>
    )
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
