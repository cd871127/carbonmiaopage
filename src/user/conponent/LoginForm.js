import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import TextInput from "../../common/component/TextInput";
import LoginButton from "./LoginButton";


class LoginForm extends Component
{
    render() {
        return (
            <div>
                <TextInput id="userName"/><br/>
                <TextInput id="passWord" type='password'/><br/>
                <LoginButton/>
            </div>
        );
    }
}

export default LoginForm;
