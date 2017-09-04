import BasicComponent from './BasicComponent';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


class TextInput extends BasicComponent {
    render() {
        return (
            <input id={this.id()} type={this.inputType()}/>
        );
    }

    inputType() {
        if (typeof(this.props.type) === 'undefined')
            return 'text';
        else
            return this.props.type;
    }

}


export default TextInput;