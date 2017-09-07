function request(url, param, callback) {
    fetch(url, param).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else
            throw new Error(response.statusText);
    }).then(function (res) {
        console.log(res);
        if (res.resultCode === 'SUCCESS')
            callback(res.resultData);
        else
            throw new Error(res.message);
    }).catch(function (err) {
        console.log(err);
        alert('请求失败');
    });
}

export default request;