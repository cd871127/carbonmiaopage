import {JSEncrypt} from 'jsencrypt';

function encode(data,key) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(key);
    return encrypt.encrypt(data);
}

export default encode;