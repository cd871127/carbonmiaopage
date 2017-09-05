import BasicComponent from './BasicComponent';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


class TextInput extends BasicComponent {
    render() {
        return (
            <input id={this.id()} className={this.className()} type={this.type()}/>
        );
    }

}


export default TextInput;