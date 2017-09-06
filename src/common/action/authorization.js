import {JSEncrypt} from 'jsencrypt';

function encode(publicKey, data) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(data);
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