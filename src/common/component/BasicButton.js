import BasicComponent from './BasicComponent';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class BasicButton extends BasicComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input id={this.id()} type='button' className='btn tn-primary' value={this.value()}
                   onClick={this.handleClick ? this.handleClick : this.props.handleClick}/>
        );
    }

}

export default BasicButton;