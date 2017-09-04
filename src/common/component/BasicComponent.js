import React, {Component} from 'react';

class BasicComponent extends Component {
    id() {
        if (typeof(this.props.id) === 'undefined')
            return '';
        else
            return this.props.id;
    }
}

export default BasicComponent;