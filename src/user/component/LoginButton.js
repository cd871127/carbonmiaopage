import BasicButton from '../../common/component/BasicButton';

class LoginButton extends BasicButton {
    handleClick(event) {
        login();
    }
}

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


export default LoginButton;