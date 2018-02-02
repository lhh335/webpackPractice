import React, { PropTypes, Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class AppNavDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathValue: 'page/one'
        }
        this.PropTypes = {
            callback: PropTypes.string.isRequired
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log('AppNavDrawer');
    }


    handleChange(value) {
        this.setState({
            pathValue: value
        })
        this.props.callback(value);
    }

    render() {
        return (
            <Select defaultValue="page/one" value={this.state.pathValue} style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="page/one">页面一</Option>
                <Option value="page/two">页面二</Option>
                <Option value="page/three">页面三</Option>
                <Option value="page/four">页面四</Option>
            </Select>

        )
    }
}

export default AppNavDrawer;