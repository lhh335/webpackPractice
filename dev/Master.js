import React, { Component, PropTypes } from 'react';
import AppNavDrawer from './AppNavDrawer';


class Master extends Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
    }
    componentDidMount() {
        console.log('master');
    }

    callback(location) {
        window.location.hash = '#/' + location;
    }
    render() {
        return (
            <div>
                <AppNavDrawer
                    callback={this.callback}
                    />
            </div>
        )
    }
}

export default Master;