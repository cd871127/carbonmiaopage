import BasicButton from '../../common/conponent/BasicButton';

class LoginButton extends BasicButton
{
    handleClick(event) {
        alert("34333333");
    }

    value()
    {
        return "登陆2";
    }
}

export default LoginButton;