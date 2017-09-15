function request(url, param, callback) {
    fetch(url, param).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else
            throw new Error(response.statusText);
    }).then(function (res) {
        callback(res);
    }).catch(function (err) {
        alert("请求失败");
    });
}


export default request;