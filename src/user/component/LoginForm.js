import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import TextInput from "../../common/component/TextInput";
import LoginButton from "./LoginButton";


class LoginForm extends Component {
    render() {
        return (
            <div className="col-md-4 column">
                <div className="view">
                    <form>
                        <div className="form-group">
                            <label htmlFor="userName" placeholder="用户名">用户名:</label>
                            <TextInput id="userName" className="form-control"/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passWord" placeholder="密码">密 码:</label>
                            <TextInput id="passWord" className="form-control" type='password'/><br/>
                        </div>
                        <LoginButton value="登录"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
