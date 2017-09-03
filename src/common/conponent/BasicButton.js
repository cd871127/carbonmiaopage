import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


class BasicButton extends Component {
    render() {
        return (
            <input type='button' className='btn tn-primary' value={this.value} onClick={this.handleClick}/>
        );
    }

    handleClick(event) {
        alert("123");
    }

    value(text) {
        return text;
    }

}


export default BasicButton;