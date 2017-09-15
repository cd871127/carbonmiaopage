import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import TextInput from "../../common/component/TextInput";
import LoginButton from "./LoginButton";
import request from '../../common/util/request';
import encode from '../../common/util/encrypt';
import {server_host} from "../../common/util/parameters";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            isUserExist: false
        };

        this.getInput = this.getInput.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    static propTypes = {
        // name: React.PropTypes.string,
        // age: React.PropTypes.string
    };
    static defaultProps = {

        // name: '',
        // age: -1
    };

    render() {
        return (
            <div className="col-md-4 column">
                <div className="view">
                    <form>
                        <div className="form-group">
                            <label htmlFor="userName" placeholder="用户名">用户名:</label>
                            <TextInput handleOnBlur={this.getInput} id="userName"
                                       className="form-control"/>
                            {this.state.isUserExist && <label>用户已存在</label>}
                            <br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passWord" placeholder="密码">密 码:</label>
                            <TextInput handleOnBlur={this.getInput} id="passWord"
                                       className="form-control" type='password'/><br/>
                        </div>
                        <LoginButton value="登录" handleClick={this.login}/>
                        <LoginButton value="注册" handleClick={this.register}/>
                    </form>
                </div>
            </div>
        );
    }

    getInput(event) {
        event.persist();
        if (event.target.id === 'userName' && event.target.value !== '') {
            request(server_host + '/users/' + event.target.value, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }, (res) => {
                // let isUserExist = res.resultData;
                this.setState({
                    userName: event.target.value,
                    isUserExist: res.resultData
                });
            });
        }
        else if (event.target.id === 'passWord') {
            this.setState({
                passWord: event.target.value
            });
        }
    }

    register() {
        let userInfo = {
            userName: this.state.userName,
            passWord: this.state.passWord
        };

        if (userInfo.userName === "" || userInfo.passWord === "") {
            alert('没有输入');
            return;
        }
        if (this.state.isUserExist) {
            alert('用户已存在');
            return;
        }

        request(server_host + '/users', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }, (data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }

    login() {
        let userName = this.state.userName;
        let passWord = this.state.passWord;
        if (userName === "" || passWord === "") {
            alert('没有输入');
            return;
        }
        console.log(passWord);
        request(server_host + '/auth/key/' + userName, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        }, (pubKey) => {
            let encrypted = encode(passWord, pubKey);
            console.log(encrypted);
            request(server_host + '/auth/token/' + userName + '?passWord=' + encrypted, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
            }, (token) => {
                alert(token);
            })
        });
    }

    componentDidMount() {
        // request()
    }

}

export default LoginForm;
