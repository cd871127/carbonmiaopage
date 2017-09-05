import BasicButton from '../../common/component/BasicButton';
import 'jquery';
// import JSEncrypt from '../../lib/jsencrypt.min';
// let jsEncrypt=require('../../lib/jsencrypt.min');
import {JSEncrypt} from 'jsencrypt';

class LoginButton extends BasicButton {
    handleClick(event) {
        // login();
        // test();
        getPublicKey();
    }
}
//请求公钥,加密后,发送给服务器,服务器用私钥解密
function login() {
    // let postData = {
    //     star: $('#star').val(),
    //     curLevel: $('#curLevel').val(),
    //     curExp: $('#curExp').val(),
    //     fightExp: $('#fightExp').val(),
    // };
    let userInfo = {
        userName: document.getElementById('userName').value,
        passWord: document.getElementById('passWord').value
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
}


function getPublicKey()
{
    fetch('http://localhost:18888/auth/publickey/1', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(postData)
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
        let e=encode(data,"你好");
        send(e);
    }).catch(function (err) {
        alert('跪了');
    });
}

function send(e)
{

    fetch('http://localhost:18888/auth/publickey/1', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/text'
        },
        body: e
        // body: JSON.stringify(e)
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
    }).catch(function (err) {
        alert('跪了');
    });
}



function encode(publicKey,data) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(data);
}


// function decode(e)
// {
//     var decrypt = new JSEncrypt();
//     decrypt.setPrivateKey(private_kkk);
//     return decrypt.decrypt(e);
// }

// function test()
// {
//     let e=encode();
//     alert(e);
//     let c=decode(e);
//     alert(c);
// }

export default LoginButton;