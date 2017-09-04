import BasicComponent from './BasicComponent';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


class BasicButton extends BasicComponent {
    render() {
        return (
            <input id={this.id()} type='button' className='btn tn-primary' value={this.buttonText()} onClick={this.handleClick}/>
        );
    }

    handleClick(event) {
        alert("123");
    }

    buttonText() {
        return "no defined";
    }

}


export default BasicButton;