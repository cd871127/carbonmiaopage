import {JSEncrypt} from 'jsencrypt';

function encode(data, userName) {
    let encrypted = '';
    fetch('http://localhost:18888/auth/publickey/' + userName, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    }).then(function (response) {
        return response.json();
    }).then(function (publicKey) {
        // let e = encode(publicKey, "你好");
        let encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey.resultData);
        console.log(publicKey);
        encrypted = encrypt.encrypt(data);
        alert(encrypted);
    }).catch(function (err) {
        console.log(err);
        encrypted = null;
        alert('获取公钥失败');
    });

    // while (encrypted === '')
    //     ;

    return encrypted;
}

function getPublicKey(callBack) {
    fetch('http://localhost:18888/auth/publickey/1', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (publicKey) {
        // let e = encode(publicKey, "你好");
        callBack(publicKey);
    }).catch(function (err) {
        console.log(err);
        alert('获取公钥失败');
    });
}

export default getPublicKey;
export {encode};