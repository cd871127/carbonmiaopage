import BasicButton from '../../common/component/BasicButton';
import getPublicKey from '../../common/action/authorization';
import {encode} from '../../common/action/authorization';

class LoginButton extends BasicButton {
    handleClick(event) {
        login();
    }
}
//请求公钥,加密后,发送给服务器,服务器用私钥解密
function login() {
    getPublicKey(function (publicKey) {
        let userInfo = {
            userName: document.getElementById('userName').value,
            passWord: encode(publicKey,document.getElementById('passWord').value)
        };
        if (userInfo.passWord === '' || userInfo.userName === '') {
            alert('error');
            return;
        }
        fetch('http://localhost:18888/users/' + userInfo.userName + '?passWord=' + userInfo.passWord, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(postData)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            alert("ok");
            console.log(data);
        }).catch(function (err) {
            alert('跪了');
        });
    });
}



export default LoginButton;