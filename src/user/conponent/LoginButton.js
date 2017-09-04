import BasicButton from '../../common/component/BasicButton';

class LoginButton extends BasicButton
{
    handleClick(event) {
        login();
    }

    buttonText() {
        return "登录";
    }

}

function login()
{
    // let postData = {
    //     star: $('#star').val(),
    //     curLevel: $('#curLevel').val(),
    //     curExp: $('#curExp').val(),
    //     fightExp: $('#fightExp').val(),
    // };
    fetch('http://localhost:18888/users/'+document.getElementById('userName').value+'?passWord='+document.getElementById('passWord').value, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'passWord': document.getElementById('passWord').value
        },
        // body: JSON.stringify(postData)
    }).then(function(response) {
        return response.json();
    }).then(function (data) {
        alert("ok");
        console.log(data);
    }).catch(function (err) {
        alert('跪了');
    });
}


export default LoginButton;